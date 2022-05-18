import React, { useState, useEffect } from "react";
import InputField from "./component/InputField";
import MessageBoard from "./component/MessageBoard";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("comments"));
    setData(dataFromLocalStorage);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App flex flex-col items-center justify-center">
      <InputField getData={getData} data={data} />
      <MessageBoard data={data} getData={getData} />
    </div>
  );
}

export default App;
