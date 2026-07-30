using SnowConeOperations.Api.Models;
using SnowConeOperations.Api.Services;

namespace SnowConeOperations.Api.Interfaces
{
    public interface IInventoryService
    {
        IEnumerable<InventoryItem> GetAllItems();

    }
}
