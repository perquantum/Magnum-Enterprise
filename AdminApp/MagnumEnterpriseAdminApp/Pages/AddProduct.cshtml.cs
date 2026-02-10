using System.Text.Json;
using MagnumEnterpriseAdminApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Pages;

public class AddProductModel : PageModel
{
    private readonly IWebHostEnvironment Environment;

    public AddProductModel(IWebHostEnvironment environment)
    {
        Environment = environment;
    }

    [BindProperty]
    public Product Product { get; set; } = new();

    [BindProperty]
    public string HazardsInput { get; set; } = string.Empty;

    public async Task<IActionResult> OnPost()
    {
        if (!ModelState.IsValid)
            return Page();

        Product.Hazards = HazardsInput
            .Split(',', StringSplitOptions.RemoveEmptyEntries)
            .Select(h => h.Trim())
            .ToList();

        var filePath = Path.Combine(Environment.WebRootPath, ProductsJsonDirectory.FileName);

        List<Product> products = new();

        if (System.IO.File.Exists(filePath))
        {
            var json = await System.IO.File.ReadAllTextAsync(filePath);
            var readJsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            products = JsonSerializer.Deserialize<List<Product>>(json, readJsonOptions) ?? new();
        }

        Product.Id = products.Any() ? products.Max(p => p.Id) + 1 : 1;

        products.Add(Product);

        var writeJsonOptions = new JsonSerializerOptions { WriteIndented = true };
        System.IO.File.WriteAllText(filePath, JsonSerializer.Serialize(products, writeJsonOptions));

        return RedirectToPage("/Index");
    }
}
