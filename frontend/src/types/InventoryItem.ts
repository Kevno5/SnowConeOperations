export interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  unitMeasured: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface InventoryItemUpdate{
    itemName: string;
    quantity: number;
    unitMeasured: string;
}

export interface InventoryItemCreate{
  itemName: string;
  quantity: number;
  unitMeasured: string;
}