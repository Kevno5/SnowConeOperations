using SnowConeOperations.Api.Data;
using SnowConeOperations.Api.Interfaces;
using SnowConeOperations.Api.Models;
using Microsoft.EntityFrameworkCore;
using SnowConeOperations.Api.DTOs;
using Microsoft.AspNetCore.Http.HttpResults;

namespace SnowConeOperations.Api.Services
{
    public class InventoryService : IInventoryService
    {

        private readonly SnowConeOperationsDbContext _context;

        public InventoryService(SnowConeOperationsDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<InventoryItem>> GetAllItemsAsync()
        {
            var allItems = await _context.InventoryItems.ToListAsync();

            return allItems;
        }

        public async Task<InventoryItem?> GetItemByIdAsync(int id)
        {
            var item = await _context.InventoryItems
                .Where(c => c.Id == id)
                .FirstOrDefaultAsync();

            return item;
        }

        public async Task<InventoryItem> CreateItemAsync(CreateInventoryItemDto dto)
        {
            var newItem = new InventoryItem
            {
                ItemName = dto.ItemName,
                Quantity = dto.Quantity,
                UnitMeasured = dto.UnitMeasured,
                CreatedAt = DateTimeOffset.UtcNow
            };

            _context.InventoryItems.Add(newItem);

            await _context.SaveChangesAsync();

            return newItem;
        }

        public async Task<InventoryItem?> UpdateItemAsync(int id, UpdateItemDto dto)
        {
            var existingItem = await _context.InventoryItems.FindAsync(id);

            if (existingItem is null)
            {
                return null;
            }

            existingItem.ItemName = dto.ItemName;
            existingItem.UnitMeasured = dto.UnitMeasured;
            existingItem.Quantity = dto.Quantity;
            existingItem.UpdatedAt = DateTimeOffset.UtcNow;

            await _context.SaveChangesAsync();
            return existingItem;


        }

        public async Task<bool> DeleteItemAsync(int id)
        {
            var deleteItem = await _context.InventoryItems.FindAsync(id);

            if (deleteItem is null)
            {
                return false;
            }

            _context.InventoryItems.Remove(deleteItem);

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
