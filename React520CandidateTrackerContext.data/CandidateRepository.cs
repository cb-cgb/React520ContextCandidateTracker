using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace React520CandidateTrackerContext.data
{
    public class CandidateRepository
    {
        private string _conn;

        public CandidateRepository(string connection)
        {
            _conn = connection;
        }

        public List<Candidate> GetCandidates()
        {
            using (var context = new CandidateContext(_conn))
            {
                return context.Candidates.ToList();
            }
        }

        public List<Candidate> GetCandidates(string status)
        {

            using (var context = new CandidateContext(_conn))
            {
                var statusLower = status.ToLower();
                return context.Candidates.Where(c => c.Status.ToLower() == statusLower).ToList();
            }
        }

        public Candidate GetCandidateById(int Id)
        {
            using (var context = new CandidateContext(_conn))
            {
                return context.Candidates.FirstOrDefault(c => c.Id == Id);
            }
        }

        public void Add(Candidate c)
        {
            using (var context = new CandidateContext(_conn))
            {
                context.Candidates.Add(c);
                context.SaveChanges();
            }
        }

        public void UpdateStatus(Candidate c)
        {
            using (var context = new CandidateContext(_conn))
            {
                context.Update(c);
                context.SaveChanges();
            }
        }

        public CountsViewModel GetCounts()
        {
            using (var context = new CandidateContext(_conn))
            {
                var counts = new CountsViewModel();
                counts.pending =  GetCandidates("Pending").Count;
                counts.confirmed = GetCandidates("Confirmed").Count;
                counts.refused = GetCandidates("Refused").Count;

                return counts;
            }
        }
    }
}
