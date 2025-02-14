import '../App.css'

function Landing() {

    return <div className='flex flex-col'>

        <h1 className='text-6xl font-bold'>My <span className='text-green-400'>Spotify</span> List</h1>
        <a href="/home" className='border-2 border-white p-2 font-bold text-white mt-8'>Let's Get Started!</a>

    </div>

}

export default Landing