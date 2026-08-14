using Microsoft.AspNetCore.Mvc;
using SnowConeOperations.Api.Models;
using SnowConeOperations.Api.Interfaces;
using SnowConeOperations.Api.DTOs;

[Route("api/Inventory")]
[ApiController]


public class InventoryItemController : ControllerBase
    {

    public readonly IInventoryService _inventoryService;

    public InventoryItemController(IInventoryService inventoryService)
    {
        _inventoryService = inventoryService;
    }


        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var list = await _inventoryService.GetAllItemsAsync();
            return Ok(list);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var item = await _inventoryService.GetItemByIdAsync(id);
            if (item == null)
                {
                    return NotFound();
                }
            return Ok(item);
        }

        [HttpPost]
        public async Task<ActionResult> CreateItem(CreateInventoryItemDto item)
        {
            var createdItem = await _inventoryService.CreateItemAsync(item);
            return Ok(createdItem);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItem(int id, UpdateItemDto item)
        {
        var existingItem = await _inventoryService.UpdateItemAsync(id, item);

        if (existingItem is null)
            return NotFound();

        return Ok(existingItem);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
        var deleteItem = await _inventoryService.DeleteItemAsync(id);

        if(deleteItem is false)
        {
            return NotFound();
        }

        return Ok(deleteItem);
        }

    }

