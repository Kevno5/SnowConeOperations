using Microsoft.EntityFrameworkCore;
using SnowConeOperations.Api.Models;

namespace SnowConeOperations.Api.Data
{
    public class SnowConeOperationsDbContext : DbContext
    {
        public SnowConeOperationsDbContext(DbContextOptions<SnowConeOperationsDbContext> options)
            : base(options)
        {

        }

        public DbSet<InventoryItem> InventoryItems { get; set; }
    }
}
