using System.Diagnostics;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Deployment;

public static class GitService
{
    public static void PullLatest()
    {
        Run("git reset --hard");
        Run("git pull origin main");
    }

    private static void Run(string command)
    {
        var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = @"C:\Program Files\Git\cmd\git.exe",
                Arguments = $"/c {command}",
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
            throw new Exception("Git command failed: " + command);
        }
    }
}
