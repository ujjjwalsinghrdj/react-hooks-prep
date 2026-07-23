import React, { useEffect, useState } from "react";

const Learneffects = ({ roomId }) => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.log("effect running");
  }, []); // if there is no dependency array then its gonna runs after every render

  useEffect(() => {
    const id = setInterval(() => {
      console.log(newCount); // ❌ always logs 0!
      setNewCount(newCount + 1); // ❌ always sets to 1
      //   setCount(prev => prev + 1); // always gets the latest value from React itself - another fix
    }, 1000);
    return () => clearInterval(id);
  }, []); //if we add newCount as dependency then its re-runs every time count changes — new interval, old one cleared

  //clean up function
  //   useEffect(() => {
  //     console.log(`connection to room ${roomId}`);
  //     const connection = createConnection(roomId);
  //     connection.connect();

  //     return () => {
  //       console.log(`Disconnecting from room ${roomId}`);
  //       connection.disconnect();
  //     };
  //   }, [roomId]);
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => setCount((c) => c + 1)}
      >
        Show count {count}
      </button>
      {/* <h2>Room : {roomId}</h2> */}
      <p>{newCount}</p>
    </div>
  );
};

export default Learneffects;
