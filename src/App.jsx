import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className="h-screen border border-sky-500 h-96"
        style={{ backgroundColor: color }}>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 justify-center">
          <button
            onClick={() => setColor("lavender")}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-sky-400 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ backgroundColor: "lavender" }}
          >
            lavender
          </button>
          <button
            onClick={() => setColor("orange")}
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            orange
          </button>
          <button
            onClick={() => setColor("black")}
            type="button"
            className="rounded-md bg-lack-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("green")}
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
        </div>
      </div>

    </>
  )
}

export default App
