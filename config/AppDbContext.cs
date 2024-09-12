// maps your models to the database tables.

using Microsoft.EntityFrameworkCore;
using SahaYatrini.Models;

namespace SahaYatrini.Config
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; } 
    }
}