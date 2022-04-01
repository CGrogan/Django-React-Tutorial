import React from "react";
import { render } from "react-dom";

function App() {
  //   const [filters, setFilters] = useState({});
  //   const [data, setData] = useState({ items: [] });

  //   useEffect(() => {
  //     fetch("http://localhost:3000/items")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData({ items: data });
  //       });
  //   }, []);

  return (
    <div>
      <h1>Test React Code</h1>
    </div>
  );
}
export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
