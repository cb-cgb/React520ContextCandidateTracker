using System;
using Microsoft.EntityFrameworkCore;

namespace React520CandidateTrackerContext.data
{
    public class CandidateContext : DbContext
    {
        private string _conn;

        public CandidateContext(string connection)
        {
            _conn = connection;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_conn);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }
}
