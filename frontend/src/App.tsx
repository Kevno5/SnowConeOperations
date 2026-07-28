import { useEffect, useState } from "react";

type HealthResponse = {
  message: string;
};

function App() {
  const [message, setMessage] = useState("Checking backend...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch(
          "https://localhost:7219/api/health"
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data: HealthResponse = await response.json();
        setMessage(data.message);
      } catch (requestError) {
        console.error(requestError);
        setError("Could not connect to the backend.");
      }
    }

    checkBackend();
  }, []);

  return (
    <main>
      <h1>Snow Cone Operations</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <p>{message}</p>
      )}
    </main>
  );
}

export default App;