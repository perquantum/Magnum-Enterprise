using System.Text.Json;
using MagnumEnterpriseAdminApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Pages;

public class EditProductModel : PageModel
{
    private readonly IWebHostEnvironment Environment;

    public EditProductModel(IWebHostEnvironment environment)
    {
        Environment = environment;
    }

    [BindProperty]
    public Product Product { get; set; } = new();

    [BindProperty]
    public string HazardsInput { get; set; } = string.Empty;

    public IActionResult OnGet(int id)
    {
        var products = LoadProducts();

        var product = products.FirstOrDefault(p => p.Id == id);
        if (product == null)
            return RedirectToPage("/Index");

        Product = product;
        HazardsInput = string.Join(", ", product.Hazards);

        return Page();
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
            return Page();

        var products = LoadProducts();

        var index = products.FindIndex(p => p.Id == Product.Id);
        if (index == -1)
            return RedirectToPage("/Index");

        Product.Hazards = HazardsInput
            .Split(',', StringSplitOptions.RemoveEmptyEntries)
            .Select(h => h.Trim())
            .ToList();

        products[index] = Product;

        SaveProducts(products);

        return RedirectToPage("/Index");
    }

    private List<Product> LoadProducts()
    {
        var filePath = Path.Combine(Environment.WebRootPath, ProductsJsonDirectory.FileName);

        if (!System.IO.File.Exists(filePath))
            return new();

        var json = System.IO.File.ReadAllText(filePath);
        return JsonSerializer.Deserialize<List<Product>>(json) ?? new();
    }

    private void SaveProducts(List<Product> products)
    {
        var filePath = Path.Combine(Environment.WebRootPath, ProductsJsonDirectory.FileName);

        System.IO.File.WriteAllText(
            filePath,
            JsonSerializer.Serialize(products, new JsonSerializerOptions { WriteIndented = true })
        );
    }
}
