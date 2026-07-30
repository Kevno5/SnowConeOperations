using SnowConeOperations.Api.Interfaces;
using SnowConeOperations.Api.Models;

namespace SnowConeOperations.Api.Services
{
    public class InventoryService : IInventoryService
    {

        public IEnumerable<InventoryItem> GetAllItems()
        {
            List<InventoryItem> inventoryItemsList = new List<InventoryItem>();

            inventoryItemsList.Add(new InventoryItem(1, "Cups", 50, "Sleeves"));
            inventoryItemsList.Add(new InventoryItem(2, "sugar base", 20, "Gallons"));
            inventoryItemsList.Add(new InventoryItem(3, "cream", 15, "cases"));
            inventoryItemsList.Add(new InventoryItem(4, "gushers", 4, "Boxes"));

            var items = inventoryItemsList;

            return items;
        }
    }
}
