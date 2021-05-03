using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using React520CandidateTrackerContext.data;

namespace React520CandidateTrackerContext.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {

        private string _conn;

        public CandidateController(IConfiguration configuration)
        {
            _conn = configuration.GetConnectionString("ConStr");
        }

        [Route ("get")]
        public List<Candidate> GetCandidates()
        {
            var db = new CandidateRepository(_conn);
            return db.GetCandidates();
        }


        [Route("getone")]
        public Candidate GetCandidate(int Id)
        {
            var db = new CandidateRepository(_conn);
            return db.GetCandidateById(Id);
        }

        [Route("getbystatus")]
        public List<Candidate> GetCandidates(string status)
        {
            var db = new CandidateRepository(_conn);
            return db.GetCandidates(status);
        }


        [Route("add")]
        [HttpPost]
        public void Add(Candidate c)
        {
            var db = new CandidateRepository(_conn);
            db.Add(c);
        }

        [Route("update")]
        [HttpPost]
        public void Update(Candidate c)
        {
            var db = new CandidateRepository(_conn);
            db.UpdateStatus(c);
        }

        [Route("getcounts")]
        public CountsViewModel GetCounts()
        {
            var db = new CandidateRepository(_conn);
            return db.GetCounts();
        }
        

    }


}



