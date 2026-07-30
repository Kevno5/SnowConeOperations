using Microsoft.AspNetCore.Mvc;
using SnowConeOperations.Api.Models;
using SnowConeOperations.Api.Interfaces;

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
        public IActionResult Get()
        {
        var list = _inventoryService.GetAllItems();
        return Ok(list);
        }
    }
