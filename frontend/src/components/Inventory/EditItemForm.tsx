import { useState } from "react";
import type { InventoryItem } from "../../types/InventoryItem";

export interface EditFormProps {
  item: InventoryItem;
  handleUpdate: (item: InventoryItem) => void;
  handleCancel: () => void;
}

function EditInventoryForm({item, handleUpdate, handleCancel} : EditFormProps){

  const [itemName, setItemName] = useState(item.itemName);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unitMeasured, setUnitMeasured] = useState(item.unitMeasured);

  

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();

    const updatedItem = {
    ...item,
    itemName : itemName,
    quantity : quantity,
    unitMeasured : unitMeasured,
  };

  handleUpdate(updatedItem)

  console.log(updatedItem);
  }

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label>
          Item:
          <input type="text" value={itemName} onChange={(e) => {setItemName(e.target.value)}}></input>
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => {setQuantity(e.target.valueAsNumber)}}></input>
        </label>
        <label>
          Units:
          <input type="text" value={unitMeasured} onChange={(e) => {setUnitMeasured(e.target.value)}}></input>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </>
  )

}

export default EditInventoryForm;