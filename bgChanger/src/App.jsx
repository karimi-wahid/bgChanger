import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200'  style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={() => setColor('#A61B1B')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#A61B1B"}}>Red</button>

          <button onClick={() => setColor('#0C6B58')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#0C6B58"}}>Green</button>

          <button onClick={() => setColor('#0A558C')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#0A558C"}}>Blue</button>

          <button onClick={() => setColor('#0A6C74')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#0A6C74"}}>Cyan</button>

          <button onClick={() => setColor('#9FB3C8')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#9FB3C8"}}>Gray</button>

          <button onClick={() => setColor('#F0B429')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "#F0B429"}}>Yellow</button>

          <button onClick={() => setColor('#A368FC')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "#A368FC"}}>Pink</button>

          <button onClick={() => setColor('white')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}>White</button>

          <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
