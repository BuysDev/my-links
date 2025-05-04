import Me from './assets/me.jpg'
function App() {

  return (
    <div className="bg-gray-950 h-screen flex items-center justify-center">
      <div className="flex items-center w-100 justify-center flex-col bg-white gap-6 p-6 rounded-md">
        <img src={Me} className='rounded-full h-[300px] w-[300px]' alt="" />
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Guilherme Buys</h1>
          <h2 className='text-xl'>Full Stack Developer</h2>
        </div>
        <div className='w-full h-full flex items-center justify-center flex-col gap-4 font-bold text-white'>
          <a target='_blank' className='pointer w-[96%] rounded-md bg-indigo-500 p-2' href="https://github.com/BuysDev">
            <button className='w-full'>
              GitHub
            </button>
          </a>
          <a target='_blank' className='pointer w-[96%] p-2 rounded-md bg-indigo-500' href="">
            <button className='w-full'>
              LinkedIn
            </button>
          </a>
          <a target='_blank' className='pointer w-[96%] p-2 rounded-md bg-indigo-500' href="https://www.instagram.com/buysdev__/">
            <button className='w-full'>
              Instagram
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
