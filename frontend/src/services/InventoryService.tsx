import axios from "axios";
import type { InventoryItem } from "../types/InventoryItem";
import type { InventoryItemUpdate } from "../types/InventoryItem";
import type { InventoryItemCreate } from "../types/InventoryItem";

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

  export async function addItem(data: InventoryItemCreate) :Promise<InventoryItem>  {
    const response = await axios.post<InventoryItem>(
      "https://localhost:7219/api/inventory", data
    );
    return response.data;
  }

  export async function deleteItem(id: number) : Promise<boolean> {
    const response = await axios.delete<boolean>(
      `https://localhost:7219/api/inventory/${id}`
    );
    return response.data
  }

