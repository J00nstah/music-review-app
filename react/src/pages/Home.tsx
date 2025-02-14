import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'



function Home() {

    const [inputState, SetInputState] = useState<string>("");

    const navigate = useNavigate();

    function InputHandler(e: any) {
        SetInputState(e.target.value);
    }

    function HandleSearch() {
        navigate(`/song"?q=${inputState}`);
    }

    return <div className='flex flex-col'>

        <h1>Welcome home!</h1>

        <p>{inputState}</p>
        <input className='border-2 border-white' onChange={InputHandler}></input>

        <button onClick={HandleSearch} className='border-2 border-white p-4 text-white'>Search</button>
    </div>

}

export default Home