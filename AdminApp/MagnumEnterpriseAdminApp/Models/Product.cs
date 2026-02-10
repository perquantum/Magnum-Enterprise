using System.ComponentModel.DataAnnotations;

namespace MagnumEnterpriseAdminApp.Models;

public class Product
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Product Name is required")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Formula is required")]
    public string Formula { get; set; } = string.Empty;

    [Required(ErrorMessage = "CAS Number is required")]
    public string CasNumber { get; set; } = string.Empty;

    [Required(ErrorMessage = "Purity is required")]
    public string Purity { get; set; } = string.Empty;

    [Required(ErrorMessage = "Molecular Weight is required")]
    public string MolecularWeight { get; set; } = string.Empty;

    [Required(ErrorMessage = "Density is required")]
    public string Density { get; set; } = string.Empty;

    [Required(ErrorMessage = "Boiling Point is required")]
    public string BoilingPoint { get; set; } = string.Empty;

    [Required(ErrorMessage = "Melting Point is required")]
    public string MeltingPoint { get; set; } = string.Empty;

    [Required(ErrorMessage = "Category is required")]
    public string Category { get; set; } = string.Empty;

    [Required(ErrorMessage = "At least one hazard must be specified")]
    public List<string> Hazards { get; set; } = new();

    [Required(ErrorMessage = "Storage Requirements are required")]
    public string StorageRequirements { get; set; } = string.Empty;

    [Required(ErrorMessage = "Image URL is required")]
    [Url(ErrorMessage = "Please enter a valid URL")]
    public string ImageUrl { get; set; } = string.Empty;

    [Required(ErrorMessage = "Description is required")]
    public string Description { get; set; } = string.Empty;
}