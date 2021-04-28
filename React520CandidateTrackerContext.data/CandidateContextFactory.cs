using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Design;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace React520CandidateTrackerContext.data
{
    public class CandidateContextFactory : IDesignTimeDbContextFactory<CandidateContext>
    {
        public CandidateContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}React520CandidateTrackerContext.web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateContext(config.GetConnectionString("ConStr"));
        }
    }
   
}
