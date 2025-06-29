import Me from './assets/me.jpg'
interface NavigateProps {
  text: 'LINKEDIN' | 'GITHUB' | 'INSTAGRAM';
}
function App() {

  function navigateTo(text: NavigateProps['text']) {
    if (text === 'LINKEDIN') {
      return window.open('https://linkedin.com/in/buysdev', '_blank');
    }

    if (text === 'GITHUB') {
      return window.open('https://github.com/buysdev', '_blank')
    }

    if (text === 'INSTAGRAM') {
      return window.open('https://instagram.com/buysdev__', '_blank')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
      <div className='rounded-lg bg-white p-10 shadow-lg flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center'>
          <img src={Me} alt="Myself" className="rounded-full w-32 h-32 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">Guilherme Buys</h1>
          <p className="text-gray-600">FullStack Developer</p>
        </div>
        <div className='flex flex-col items-center mt-4 w-full gap-4'>
          <button className='w-full mb-2 bg-blue-500 font-bold text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer' onClick={() => navigateTo('INSTAGRAM')}>
            Instagram
          </button>
          <button className='w-full mb-2 bg-blue-500 font-bold text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer' onClick={() => navigateTo('GITHUB')}>
            GitHub
          </button>
          <button className='w-full mb-2 bg-blue-500 font-bold text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer' onClick={() => navigateTo('LINKEDIN')}>
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
