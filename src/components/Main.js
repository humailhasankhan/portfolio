import React, { useState, useEffect } from "react";

const Main = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 8000);
  }, []);

  return (
    <>
      {showComponent && (
        <div>
          <h1>Hello how are you</h1>
        </div>
      )}
    </>
  );
};

export default Main;
