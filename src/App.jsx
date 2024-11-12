import "./App.css";
import Btn from "./components/Btn";
import Count from "./components/Count";
import { useEffect, useState } from "react";
import ProfileList from "./ProfileList";
import Navbar from "./components/Navbar";

function App() {
  // const [value, setValue] = useState(0);
  // const [toggle, setToogle] = useState(false);
  // let color1 = "orange";
  // let color2 = "yellow";

  // const sayHello = () => {
  //   console.log("hello");
  // };
  // sayHello();

  // useEffect(() => {
  //   console.log("useEffect calling");
  // }, [toggle]);

  return (
    <main className="flex flex-col gap-6 items-center mt-8 mx-auto w-11/12 bg-white py-8 px-12 md:w-3/5 md:mt-32">
      {/* <div className="flex gap-4 text-6xl font-semibold text-slate-950">
       <p>Value: </p>
       <Count value={value} />
     </div>
     <Btn setValue={setValue} value={value} />
     <button onClick={() => setToogle(!toggle)}>
       {(toggle)? color1: color2}
     </button> */}
      <Navbar />
      <ProfileList />
    </main>
  );
}

export default App;
