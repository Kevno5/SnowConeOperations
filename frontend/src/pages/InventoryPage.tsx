import { useEffect, useState } from "react";
import EditItemForm from "../components/Inventory/EditItemForm";
import type { InventoryItem, InventoryItemCreate } from "../types/InventoryItem";
import { addItem, fetchInventory, updateInventory, deleteItem } from "../services/InventoryService";
import InventoryTable from "../components/Inventory/InventoryTable";
import CreateInventoryItemForm from "../components/Inventory/CreateItemForm";

function InventoryPage() {
  const [inventoryItems, setInventoryItems] =
    useState<InventoryItem[]>([]);
  const [editingItem, setEditingItem] = useState<InventoryItem|null> (null);
  const [isCreating, setIsCreating] = useState(false);
  

  useEffect(() => {
    fetchInventory().then((data) => {
      setInventoryItems(data);
    });
  }, []);

  function handleEdit(item: InventoryItem){
    setEditingItem(item);

    console.log(item);
  }
  

  async function handleUpdate(item: InventoryItem) {

    const updatedItem = {
      itemName : item.itemName,
      quantity : item.quantity,
      unitMeasured : item.unitMeasured
    }

    const savedItem = await updateInventory(item.id, updatedItem)

    setInventoryItems(inventoryItems.map((currentItem) => {
      if(currentItem.id == savedItem.id)
      {
        return savedItem;
      }else{
        return currentItem;
      }
    }))

  }

  async function handleCreate(item: InventoryItemCreate) {
    const CreatedItem = await addItem(item);
    const newInventoryList = [...inventoryItems, CreatedItem];
    setInventoryItems(newInventoryList);

    setIsCreating(false);
  }

  async function handleDelete(item: InventoryItem) {
    await deleteItem(item.id);

    const newInventoryList = inventoryItems.filter(
      (currentItem) => currentItem.id !== item.id
    );

    setInventoryItems(newInventoryList);

  }

  function handleAddItem(){
    setIsCreating(true)
  }

  function handleCancel() {
    setEditingItem(null);
    setIsCreating(false);
  }

  return (
    <div>
      <h1>Inventory</h1>

      <InventoryTable items={inventoryItems} handleEdit={handleEdit} handleAddItem={handleAddItem} handleDelete={handleDelete}/>

      {editingItem && <EditItemForm item={editingItem} handleUpdate={handleUpdate} handleCancel={handleCancel}/> }
      {isCreating && <CreateInventoryItemForm handleCreate={handleCreate} handleCancel={handleCancel}></CreateInventoryItemForm>}
      
    </div>
  );
}

export default InventoryPage;