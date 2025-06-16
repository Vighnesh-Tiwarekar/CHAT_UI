
import './App.css'
import dots from './assets/3dot.svg'
import circle from './assets/circle.png'
import chat from './assets/chat.svg'
import { useState, useRef, useEffect } from 'react'

function App() {

  const [ischat, setischat] = useState(true)

  const [isthemebar, setisthemebar] = useState(false)

  const [istheme, setistheme] = useState('ocean')

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setisthemebar(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(istheme);
  }, [istheme])

  const ThemeBar = () => {

    return (
      <div className='absolute right-[20px] top-[55px] overflow-y-hidden rounded-[10px] themebar'>
        <div className='p-[15px]' onClick={() => setistheme('ocean')}>Ocean Blue</div>
        <div className='p-[15px]' onClick={() => setistheme('defblack')}>Default Black</div>
        <div className='p-[15px]' onClick={() => setistheme('defwhite')}>Default White</div>
      </div>
    )
  }

  const ContactBar = () => {

    return (
      <div className="contactbar w-fit h-full flex-1 flex flex-col relative z-2">

        {isthemebar ? <ThemeBar></ThemeBar> : null}

        <div className="barheader text-[29px] flex p-[18px] font-extrabold items-center justify-between">
          CHATS
          <div className='hover:bg-[#4c4c4c] p-[5px] rounded-[20px]' onClick={() => setisthemebar(previs => !previs)} >
            <img src={dots} className='h-[20px]  ' alt="" />
          </div>
        </div>

        <div className="searchbar p-[10px] ">
          <form action="">
            <input type="text" placeholder='Search Contact' className='w-full  rounded-[5px] p-[5px]' />
          </form>
        </div>

        <div className="contacts h-full overflow-y-scroll">

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Rohan
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Soham
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Vighnesh
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Gaurang
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Goku
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Tony
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Steve
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Naruto
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Bahubali
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Kohli
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Messi
          </div>

          <div className='w-[20vw] text-[20px] flex items-center p-[10px] gap-[10px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Ben
          </div>

        </div>

      </div>
    )

  }

  const MsgBoard = () => {

    return (
      <div className='msgboard flex flex-col flex-4 relative'>

        <div className='contact font-extrabold'>
          <div className='w-[100%] text-[20px] flex items-center p-[15px] gap-[30px]'>
            <img src={circle} alt="" className='h-[50px]' />
            Rohan
          </div>
        </div>


          <div className="msgs overflow-y-scroll relative z-3 ">

            <div className=' msg sender'>
              hello
            </div>

            <div className=' msg own'>
              hi
            </div>

            <div className=' msg own'>
              what you doing
            </div>

            <div className=' msg sender'>
              nothing. i'll call you back
            </div>

            <div className=' msg sender'>
              okay bye
            </div>

            <div className=' msg own'>
              hi
            </div>

            <div className=' msg sender'>
              what you doing
            </div>

            <div className=' msg own'>
              nothing. i'll call you back
            </div>

            <div className=' msg sender'>
              okay bye
            </div>

            <div className=' msg own'>
              hi
            </div>

            <div className=' msg sender'>
              what you doing
            </div>

            <div className=' msg own'>
              nothing. i'll call you back
            </div>

            <div className=' msg sender'>
              okay bye
            </div>

          </div>

          <div className='type m-[10px] relative z-30'>
            <input type="text" placeholder='Message' className='w-full rounded-[30px] p-[10px]' />
          </div>

        {/* </div> */}

      </div>
    )
  }


  return (
    <>
      <div className={`${istheme} h-[100vh] w-[100vw] py-[5vh] px-[3vw] relative`} ref={menuRef}>

        <div className='logo absolute top-2 left-2 text-[20px] font-extrabold'>
          Logo
        </div>

        <div className={`w-[3vw] py-[5px] absolute left-0 top-[122px] ${ischat ? 'chatimg' : ''}`} >
          <img src={chat} className={`w-[2.5vw] mx-auto ${ischat ? 'invert-100' : ''} `} alt="" onClick={() => setischat(previschat => !previschat)} />
        </div>

        <main className='h-[90vh] mx-auto rounded-[20px] flex overflow-y-hidden relative'>

          {ischat ? <ContactBar></ContactBar> : null}

          <MsgBoard></MsgBoard>

        </main>


      </div>
    </>
  )
}

export default App
