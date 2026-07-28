using Microsoft.AspNetCore.Mvc;
using SnowConeOperations.Api.Models;

[ApiController]
[Route("api/GetAll")]


    public class InventoryItemController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            List<InventoryItem> inventoryItemsList = new List<InventoryItem>();

            inventoryItemsList.Add(new InventoryItem(1, "Cups", 50, "Sleeves"));
            inventoryItemsList.Add(new InventoryItem(2, "sugar base", 20, "Gallons"));
            inventoryItemsList.Add(new InventoryItem(3, "cream", 15, "cases"));
            inventoryItemsList.Add(new InventoryItem(4, "gushers", 4, "Boxes"));


            return Ok(inventoryItemsList);
        }
    }
