using SnowConeOperations.Api.DTOs;
using SnowConeOperations.Api.Models;
using SnowConeOperations.Api.Services;

namespace SnowConeOperations.Api.Interfaces
{
    public interface IInventoryService
    {
        Task<IEnumerable<InventoryItem>> GetAllItemsAsync();

        Task<InventoryItem?> GetItemByIdAsync(int id);

        Task<InventoryItem> CreateItemAsync(CreateInventoryItemDto dto);

        Task<InventoryItem?> UpdateItemAsync(int id, UpdateItemDto dto);
        
        Task<bool> DeleteItemAsync(int id);

    }
}
