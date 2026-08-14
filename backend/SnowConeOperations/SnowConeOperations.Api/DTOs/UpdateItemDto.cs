namespace SnowConeOperations.Api.DTOs
{
    public class UpdateItemDto
    {
        public string ItemName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public string UnitMeasured { get; set; } = string.Empty;
    }
}
