namespace SnowConeOperations.Api.Models
{
    public class InventoryItem
    {
        public int Id { get; set; }
        public string ItemName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public string UnitMeasured { get; set; } = string.Empty;

        public InventoryItem(int id, string itemName, int quantity, string unitMeasured)
        {
            Id = id;
            ItemName = itemName;
            Quantity = quantity;
            UnitMeasured = unitMeasured;
        }
    }
}
