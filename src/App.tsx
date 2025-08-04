import React, { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
