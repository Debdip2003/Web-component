import './App.css'
import MechanicalButton from './custom-components/MechanicalButton/MechanicalButton'
import { AiFillAlert } from "react-icons/ai";

function App() {
  const handleClick =()=>{
    console.log('btn clicked')
  }

  return (
    <div className='w-100vw h-100vh flex items-center justify-center'>
    <MechanicalButton  icon={<AiFillAlert/>} 
    onClick={handleClick}
    />
    </div>
  )
}

export default App
