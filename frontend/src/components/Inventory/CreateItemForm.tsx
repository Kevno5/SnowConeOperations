import {  useState } from "react";
import type { InventoryItemCreate } from "../../types/InventoryItem";
export interface CreateFormProps {
handleCreate : (item: InventoryItemCreate) => void;
handleCancel : () => void;
}

function CreateInventoryItemForm({handleCreate, handleCancel} : CreateFormProps) {

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [unitMeasured, setUnitMeasured] = useState("");

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();

    const createItem = {
    itemName : itemName,
    quantity : quantity,
    unitMeasured : unitMeasured
  }

  console.log(createItem);
  handleCreate(createItem)

  }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter Item Name:
                <input type="text" placeholder="Item Name..." onChange={(e) => {setItemName(e.target.value)}}></input>
            </label>
            <label>
                Enter Item Quantity:
                <input type="number" placeholder="Item Quantity..." onChange={(e) => {setQuantity(e.target.valueAsNumber)}}></input>
            </label>
            <label>
                Enter Unit Measuered:
                <input type="text" placeholder="Unit Measured..." onChange={(e) => {setUnitMeasured(e.target.value)}}></input>
            </label>
            <button type="submit">Add Item</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
        </>
    )
}

export default CreateInventoryItemForm;