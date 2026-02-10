using System.Net;
using FluentFTP;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Deployment;

public class DeploymentService
{
    public async Task DeployAsync()
    {
        var config = new ConfigurationBuilder().AddJsonFile(AppSettingsFile).Build();

        using (var client = new AsyncFtpClient(config[FTP.Host], int.Parse(config[FTP.Port]!))
        {
            Credentials = new NetworkCredential(config[FTP.Username], config[FTP.Password])
        })
        {
            try
            {
                await client.Connect();

                var localDist = ReactLocalDistDirectory;
                var remotePath = config[FTP.RemotePath];

                await client.UploadDirectory(
                    localDist,
                    remotePath,
                    FtpFolderSyncMode.Update,
                    FtpRemoteExists.Overwrite,
                    FtpVerify.None
                );
            }
            catch (Exception ex)
            {
                throw new Exception(DeploymentFailedMessage, ex);
            }
        }
    }
}