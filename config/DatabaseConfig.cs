using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SahaYatrini.Config
{
    public static class DatabaseConfig
    {
        public static void ConfigureDatabase(IServiceCollection services, IConfiguration configuration)
        {
            // Configure EF Core with MySQL
            services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(
                    configuration.GetConnectionString("DefaultConnection"),
                    new MySqlServerVersion(new Version(8, 0, 39))
                // Specify the MySQL version
                )
            );
        }
    }
}