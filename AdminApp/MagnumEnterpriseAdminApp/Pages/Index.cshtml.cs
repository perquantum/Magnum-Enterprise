using System.Text.Json;
using MagnumEnterpriseAdminApp.Deployment;
using MagnumEnterpriseAdminApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Pages;

public class IndexModel : PageModel
{
    private readonly IWebHostEnvironment Environment;
    private readonly DeploymentService DeploymentService;
    public List<Product> Products { get; set; } = new();

    public IndexModel(IWebHostEnvironment environment, DeploymentService deploymentService)
    {
        Environment = environment;
        DeploymentService = deploymentService;
    }

    public async Task OnGet()
    {
        await LoadProducts();
    }

    private async Task LoadProducts()
    {
        var filePath = Path.Combine(Environment.WebRootPath, ProductsJsonDirectory.FileName);

        if (System.IO.File.Exists(filePath))
        {
            var json = await System.IO.File.ReadAllTextAsync(filePath);
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            Products = JsonSerializer.Deserialize<List<Product>>(json, options) ?? new();
        }
    }

    public async Task<IActionResult> OnPostDeployAsync()
    {
        try
        {
            GitService.PullLatest();
            Build.SyncProductsJson();
            Build.BuildReactApp();
            await DeploymentService.DeployAsync();

            return new JsonResult(new { success = true });
        }
        catch (Exception ex)
        {
            return new JsonResult(new
            {
                success = false,
                message = ex.Message
            });
        }
    }

    public IActionResult OnPostDelete(int id)
    {
        var filePath = Path.Combine(Environment.WebRootPath, ProductsJsonDirectory.FileName);

        if (!System.IO.File.Exists(filePath))
            return RedirectToPage();

        var json = System.IO.File.ReadAllText(filePath);
        var products = JsonSerializer.Deserialize<List<Product>>(json) ?? new();

        products.RemoveAll(p => p.Id == id);

        for (int i = 0; i < products.Count; i++)
        {
            products[i].Id = i + 1;
        }

        System.IO.File.WriteAllText(
            filePath,
            JsonSerializer.Serialize(products, new JsonSerializerOptions { WriteIndented = true })
        );

        return RedirectToPage();
    }
}