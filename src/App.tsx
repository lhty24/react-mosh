import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "Toronto",
      zipCode: 111111,
    },
  });

  // the spread operator is shallow
  // make sure the new state object is completely independent of the old state object, they don't share anything
  // set address to a new object
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 666666 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
