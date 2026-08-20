import type { InventoryItem } from "../../types/InventoryItem";

interface InventoryTableRowProps{
    item: InventoryItem;
    index: number;
    handleEdit: (item: InventoryItem ) => void;
    handleDelete: (item: InventoryItem) => void;
}

function InventoryTableRow({item, index, handleEdit, handleDelete} : InventoryTableRowProps){

    
    const formattedCreatedAtTime = new Date(item.createdAt).toLocaleString();

    const formattedUpdatedAt = item.updatedAt ? new Date(item.updatedAt).toLocaleString() : "-"

    return (

        <tr>
            <td className="tableRow">{index + 1}</td>
            <td className="tableRow">{item.itemName}</td>
            <td className="tableRow">{item.quantity}</td>
            <td className="tableRow">{item.unitMeasured}</td>
            <td className="tableRow">{formattedCreatedAtTime}</td>
            <td className="tableRow">{formattedUpdatedAt}</td>
            <td className="tableRow">
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Remove</button>
            </td>
        </tr>
    )
}


export default InventoryTableRow;