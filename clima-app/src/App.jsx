import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'

function App() {
  const [input, setInput]= useState('')

  return (
    <>
      <div className='w-full h-screen text-white px-8'>
       <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl '>Clima</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2' >
          <img src={search} alt="Buscar" className='w-[1.5rem] h-[1.5rem]'/>
          <input onKeyUp={(e)=>{
            if(e.key === 'Enter'){
              //aqui se va a enviar el formulario
            }
          }} type='text' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
       </nav>
      </div>
      
    </>
  )
}

export default App
