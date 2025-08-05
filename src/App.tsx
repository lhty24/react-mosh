import { useState } from "react";

function App() {
  const [bug, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
