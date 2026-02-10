namespace MagnumEnterpriseAdminApp.Models;

public class ProductJson
{
    public int id { get; set; }

    public string name { get; set; } = string.Empty;

    public string formula { get; set; } = string.Empty;

    public string casNumber { get; set; } = string.Empty;

    public string purity { get; set; } = string.Empty;

    public string molecularWeight { get; set; } = string.Empty;

    public string density { get; set; } = string.Empty;

    public string boilingPoint { get; set; } = string.Empty;

    public string meltingPoint { get; set; } = string.Empty;

    public string category { get; set; } = string.Empty;

    public List<string> hazards { get; set; } = new();

    public string storageRequirements { get; set; } = string.Empty;

    public string imageUrl { get; set; } = string.Empty;

    public string description { get; set; } = string.Empty;
}