using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Context
{
    public class UserContext : IdentityDbContext<IdentityUser<int>, IdentityRole<int>, int>
    {
        public UserContext(DbContextOptions<UserContext> opt) : base(opt)
        {

        }
    }
}
