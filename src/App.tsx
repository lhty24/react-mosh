import { useState } from "react";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // use immer
    // "draft" a proxy object that records the changes we are going to apply to the bugs array
    // image draft is a copy of the bugs array, you are free to mutate or modify just like a regular JS object
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
