import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

function App(props) {
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
      <HomePage />
    </div>
  );
}
export default App;

const appDiv = document.getElementById("app");
render(<App name="Conor" />, appDiv);
