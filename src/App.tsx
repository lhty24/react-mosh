import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App = () => {
  useEffect(() => {
    connect();

    // the function passed to the effect hook can optionally return a function for clean up
    // if choose to do so, the clean up function should undo whatever the effect was doing
    return () => disconnect();
  });

  return <div></div>;
};

export default App;
