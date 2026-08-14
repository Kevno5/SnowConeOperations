import axios from "axios";
import type { InventoryItem } from "../types/InventoryItem";
import type { InventoryItemUpdate } from "../types/inventoryItemUpdate";

export async function fetchInventory() : Promise<InventoryItem[]>  {
    const response = await axios.get<InventoryItem[]>(
      "https://localhost:7219/api/inventory"
    );
    return response.data
  }

  export async function updateInventory(id: number, data: InventoryItemUpdate) : Promise<InventoryItem> {
    const response = await axios.put<InventoryItem>(
      `https://localhost:7219/api/inventory/${id}`, data
    );

    return response.data;
  }
