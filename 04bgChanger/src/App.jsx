import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          onClick={()=>{setColor('red')}}>RED</button>
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "magenta"}}
          onClick={()=>setColor("magenta")}>Magenta</button>
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          onClick={()=>setColor("green")}>GREEN</button>
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          onClick={()=>setColor("blue")}>BLUE</button>
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "gray"}}
          onClick={()=>setColor("gray")}>GRAY</button>
          <button className="outline-none px-4  py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          onClick={()=>setColor("yellow")}>YELLOW</button>
          <button className="outline-none px-4  py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}
          onClick={()=>setColor("pink")}>PINK</button>
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          onClick={()=>setColor("purple")}>PURPLE</button>
          <button className="outline-none px-4  py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}
          onClick={()=>setColor("lavender")}>Lavender</button>
          <button className="outline-none px-4  py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          onClick={()=>setColor("white")}>White</button>
          <button className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
