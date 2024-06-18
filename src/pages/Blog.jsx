
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

import Post from '../components/Blog/Post.jsx';
export default function Blog({ theme, setTheme }) {

  return (
    <div id='at' className={`${theme ?? 'dark'}`}>
      <div className='w-screen flex justify-center bg-platinum dark:bg-jet'>
        <div className='dark:text-platinum h-screen  max-w-[1240px] w-[100%] space-y-8 text-jet'>
          
          <Navbar setTheme={setTheme} theme={theme} />

          <div className='flex flex-col justify-center  items-center gap-4'>

            <code className='flex text-[18px] gap-2 group'>
              <h1>&#x0007B;</h1>
              <h1 className='opacity-50 w-7 text-clip transition-all overflow-clip whitespace-nowrap group-hover:w-[25rem]'>basicamente um</h1>
              <h1 class="w-[4.5rem] text-clip transition-all overflow-hidden group-hover:w-[7rem]" style={{ direction: 'rtl', textAlign: 'left' }}>blog</h1>
              <h1>&#x0007D;</h1>
            </code>

          
          </div>



          <Footer></Footer>

        </div>
      </div>
    </div>
  )
}