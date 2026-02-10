using System.Diagnostics;
using System.Text.Json;
using MagnumEnterpriseAdminApp.Models;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Deployment;

public static class Build
{
    public static void SyncProductsJson()
    {
        var adminJson = ProductsJsonDirectory.AdminJson;
        var reactJson = ProductsJsonDirectory.ReactJson;

        var json = File.ReadAllText(adminJson);

        var adminProducts = JsonSerializer.Deserialize<List<Product>>(json) ?? new List<Product>();

        var reactProducts = adminProducts.Select(p => new ProductJson
        {
            id = p.Id,
            name = p.Name,
            formula = p.Formula,
            casNumber = p.CasNumber,
            purity = p.Purity,
            molecularWeight = p.MolecularWeight,
            density = p.Density,
            boilingPoint = p.BoilingPoint,
            meltingPoint = p.MeltingPoint,
            category = p.Category,
            hazards = p.Hazards,
            storageRequirements = p.StorageRequirements,
            imageUrl = p.ImageUrl,
            description = p.Description
        }).ToList();

        var options = new JsonSerializerOptions
        {
            WriteIndented = true
        };

        File.WriteAllText(reactJson, JsonSerializer.Serialize(reactProducts, options));
    }

    public static void BuildReactApp()
    {
        var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "cmd.exe",
                Arguments = "/c npm run build",
                WorkingDirectory = ReactWorkingDirectory,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            }
        };

        process.Start();
        process.WaitForExit();

        if (process.ExitCode != 0)
        {
            throw new Exception(ReactBuildFailed);
        }
    }
}
