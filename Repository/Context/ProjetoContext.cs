using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Repository.Map;
using System.Diagnostics;

namespace Repository.Context
{
    public class ProjetoContext : DbContext
    {
        public ProjetoContext(DbContextOptions<ProjetoContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
            optionsBuilder.LogTo(message => Debug.WriteLine(message));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //modelBuilder.ApplyConfiguration(new UserMap());
        }
        //entities
        //public DbSet<User> Users { get; set; }
        public DbSet<Menu> Menus { get; set; }

    }
}
