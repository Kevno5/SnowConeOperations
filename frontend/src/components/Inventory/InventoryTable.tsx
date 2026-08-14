import type { InventoryItem } from "../../types/InventoryItem";
import InventoryTableRow from "./InventoryTableRow"
import "./InventoryTable.css";


interface InventoryTableProps{
items: InventoryItem[];
}

function InventoryTable({items} : InventoryTableProps) {
    return (
        <div>
            <div className="inventoryToolbar">
                <h2>Inventory Items</h2>
                    <div className="inventoryControls">
                        <input className="inventorySearch" placeholder="Search"></input>
                        <button className="filter-button">Filters</button>
                        <button className="addItem-button">Add Item</button>
                    </div>
            </div>
            <table className="inventoryTable">
                <thead>
                    <tr>
                        <th className="tableHeader">#</th>
                        <th className="tableHeader">Item</th>
                        <th className="tableHeader">Quantity</th>
                        <th className="tableHeader">Units</th>
                        <th className="tableHeader">Created</th>
                        <th className="tableHeader">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <InventoryTableRow key= {item.id} item={item} index={index}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InventoryTable;