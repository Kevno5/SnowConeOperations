import { useEffect, useState } from "react";

interface InventoryItem {
  id: number;
  itemName: string;
  quantity: number;
  unitMeasured: string;
}


function App() {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetch('https://localhost:7219/api/Inventory')
    .then((response) => {
      if ( !response.ok) throw new Error('Network Response failed');
      return response.json();
    })
    .then((data) =>{
      setInventoryItems(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching inventory items:', error);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading data from backend</p>;

  return (
  <div>
    <h2>Backend Data Stream</h2>
    <ul>
      {inventoryItems.map((item) => (
        <ul key={item.id}>
          <br></br>
          {item.itemName}
          <br></br>
          {item.quantity}
          <br></br>
          {item.unitMeasured}
        </ul>
      ))}
    </ul>
  </div>
);
}

export default App;