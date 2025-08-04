import React, { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Button from "./components/Button/Button";
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
