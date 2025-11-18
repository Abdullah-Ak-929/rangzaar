import Navbar from "./components/Navbar";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [value, setvalue] = useState(0)
  return(
    <>
      <Navbar/>
      <div className="flex justify-between">
        <Card title="Men" image="\images\undefined (18).jpeg"/>
        <Card title="Women" image="https://cdn.pixabay.com/photo/2025/10/19/14/40/africa-9904004_1280.jpg"/>
        <Card title="Kids" image="https://media.istockphoto.com/id/1389848476/photo/cropped-shot-of-a-farmer-holding-soil.jpg?s=1024x1024&w=is&k=20&c=LJlSbhEHW99kmylnQaswGfCayEd63eRuAASH6AGHDs0="/>
        <Card title="Brand" image="https://cdn.pixabay.com/photo/2025/10/24/10/49/vietnam-9913878_1280.png"/>
      </div>
      <div>The count is {value}</div>
      <button onClick={()=>{setvalue (value + 1)}}>Click Me</button>{value}
    </>
  )
}

export default App;
