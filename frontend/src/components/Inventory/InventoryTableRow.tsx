import type { InventoryItem } from "../../types/InventoryItem";

interface InventoryTableRowProps{
    item: InventoryItem;
    index: number;
}

function InventoryTableRow({item, index} : InventoryTableRowProps){

    
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
        </tr>
    )
}


export default InventoryTableRow;