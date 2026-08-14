namespace SnowConeOperations.Api.Models
{
    public class InventoryItem
    {
        public int Id { get; set; }
        public string ItemName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public string UnitMeasured { get; set; } = string.Empty;
        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset UpdatedAt { get; set; }
    }
}
