import { useEffect, useState } from "react";
import EditItemForm from "../components/Inventory/EditItemForm";
import type { InventoryItem } from "../types/InventoryItem";
import { fetchInventory, updateInventory } from "../services/InventoryService";
import InventoryTable from "../components/Inventory/InventoryTable";

function InventoryPage() {
  const [inventoryItems, setInventoryItems] =
    useState<InventoryItem[]>([]);

  const [editingItem, setEditingItem] =
    useState<InventoryItem | null>(null);

  useEffect(() => {
    fetchInventory().then((data) => {
      setInventoryItems(data);
    });
  }, []);

  async function handleUpdate(item: InventoryItem) {
    const updateData = {
      itemName: item.itemName,
      quantity: item.quantity,
      unitMeasured: item.unitMeasured
    }
    await updateInventory(item.id, updateData);

    const updatedData = await fetchInventory();

    setInventoryItems(updatedData);

    setEditingItem(null);
  }

  return (
    <div>
      <h1>Inventory</h1>

      <InventoryTable items={inventoryItems}/>

      {/* {inventoryItems.map((item) => (
        <div key={item.id}>
          <h3>{item.itemName}</h3>

          <p>
            Quantity: {item.quantity}
            Units Measured: {item.unitMeasured}
            Created At: {item.createdAt}
            Updated At: {item.updatedAt}
          </p>

          <button onClick={() => setEditingItem(item)}>
            Edit
          </button>
        </div>
      ))} */}

      {editingItem && (
        <EditItemForm
          item={editingItem}
          onSave={handleUpdate}
          onCancel={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}

export default InventoryPage;