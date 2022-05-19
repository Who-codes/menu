import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <h2>our menu</h2>
        <div className="underline"></div>
      </section>
    </main>
  );
}

export default App;
