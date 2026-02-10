namespace MagnumEnterpriseAdminApp.Deployment;

public static class Constants
{
    public const string AppSettingsFile = "appsettings.json";
    public const string ReactLocalDistDirectory = @"D:\Magnum-Enterprise\ReactApp\magnum-app\dist";
    public const string DeploymentFailedMessage = "FTP deployment failed";
    public const string ReactBuildFailed = "React build failed";
    public const string ReactWorkingDirectory = @"D:\Magnum-Enterprise\ReactApp\magnum-app";

    public static class FTP
    {
        public const string Host = "Ftp:Host";
        public const string Username = "Ftp:Username";
        public const string Password = "Ftp:Password";
        public const string Port = "Ftp:Port";
        public const string RemotePath = "Ftp:RemotePath";
    }

    public static class ProductsJsonDirectory
    {
        public const string AdminJson = @"D:\Magnum-Enterprise\AdminApp\MagnumEnterpriseAdminApp\wwwroot\Products.json";
        public const string ReactJson = @"D:\Magnum-Enterprise\ReactApp\magnum-app\src\data\products.json";
        public const string FileName = "products.json";
    }
}
