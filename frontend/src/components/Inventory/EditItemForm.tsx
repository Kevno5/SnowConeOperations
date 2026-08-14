import { useState } from "react";
import type { InventoryItem } from "../../types/InventoryItem";

interface EditItemFormProps {
    item: InventoryItem;
    onSave: (item: InventoryItem) => void;
    onCancel: () => void;
}
function EditItemForm({item, onSave, onCancel }: EditItemFormProps) {
  const [itemName, setItemName] = useState(item.itemName);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unitMeasured, setUnitMeasured] = useState(item.unitMeasured);

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();

    const updatedItem = {
        ...item,
        itemName: itemName,
        quantity: quantity,
        unitMeasured: unitMeasured,
    };

    console.log(updatedItem);
    onSave(updatedItem);
  }

  const handleCancel = () => {
    setItemName(item.itemName);
    setQuantity(item.quantity);
    setUnitMeasured(item.unitMeasured);
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      value={itemName}
      onChange={(event) =>
        setItemName(event.target.value)
      }
      />
      <input
        type="number"
        value={quantity}
        onChange={(event) =>
          setQuantity(Number(event.target.value))
        }
      />
      <input
        type="text"
        value={unitMeasured}
        onChange={(event) => 
            setUnitMeasured(event.target.value)
        }
      
      />

      <button type="submit">
        Save
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditItemForm;