using System.Diagnostics;
using static MagnumEnterpriseAdminApp.Deployment.Constants;

namespace MagnumEnterpriseAdminApp.Deployment;

public static class GitService
{
    public static void PullLatest()
    {
        Run("reset --hard");
        Run("pull origin main");
    }

    private static void Run(string arguments)
    {
        var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = @"C:\Program Files\Git\cmd\git.exe",
                Arguments = arguments,
                WorkingDirectory = ReactWorkingDirectory,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            }
        };

        process.Start();

        string output = process.StandardOutput.ReadToEnd();
        string error = process.StandardError.ReadToEnd();

        process.WaitForExit();

        if (process.ExitCode != 0)
        {
            throw new Exception($"Git failed.\nCommand: git {arguments}\n\nOutput:\n{output}\n\nError:\n{error}");
        }
    }
}
