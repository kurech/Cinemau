using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace cinemau.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string Subscribe { get; set; }
        public int CardNum { get; set; }
        public int AccNum { get; set; }
        public int Balance { get; set; }
    }
}
