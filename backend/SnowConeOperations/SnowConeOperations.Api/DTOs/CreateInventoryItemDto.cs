using SnowConeOperations.Api.Models;

namespace SnowConeOperations.Api.DTOs
{
    public class CreateInventoryItemDto
    {
        public string ItemName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public string UnitMeasured { get; set; } = string.Empty;
    }
}
