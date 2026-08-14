export interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  unitMeasured: string;
  createdAt: string;
  updatedAt: string | null;
}