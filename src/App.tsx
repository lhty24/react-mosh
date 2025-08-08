import React, { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  // // Side effect: changing state of DOM (something outside of the component)
  // // Makes the component no longer a pure component
  // // Use useEffect hook to resolve this
  // if (ref.current) ref.current.focus();

  // afterRender
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
