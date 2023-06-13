import Image from 'next/image'
import { useRouter } from 'next/router'
import { MdLibraryBooks, MdVideoLibrary, MdHome, MdAnalytics, MdPerson } from 'react-icons/md'
import Icon from "@/public/Icon.png"

export default function index() {

  const router = useRouter()

  return (
    <>
      {/* BIG SCREEN MacOs Design (Sidebar) */}
      <div className='bg-gray-900 bg-opacity-40 px-1 py-4 backdrop-blur-md fixed left-0 h-full max-md:hidden z-50 w-[50px] flex gap-2 flex-col'>
        <div>
          <Image src={Icon} className='w-7 h-7 p-1 mx-auto' />
        </div>
        <div className={`bg-red-500 group p-1 hover:shadow-md hover:shadow-red-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Dashboard" && "scale-110 translate-x-2 border-2"}`}>
          <MdHome onClick={() => router.push("/Dashboard")} fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[78px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Home</p>
        </div>
        <div onClick={() => router.push("/Niveles")} className={`bg-orange-500/95 group p-1 hover:shadow-md hover:shadow-orange-800 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Niveles" && "scale-110 translate-x-2 border-2"}`}>
          <MdLibraryBooks fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[90px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Lessons</p>
        </div>
        <div onClick={() => router.push("/Immersive")} className={`bg-yellow-400/90 group p-1 hover:shadow-md hover:shadow-yellow-700 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Immersive" && "scale-110 translate-x-2 border-2"}`}>
          <MdVideoLibrary fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[111px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Immersive</p>
        </div>
        <div onClick={() => router.push("/Progress")} className={`bg-green-500/90 group p-1 hover:shadow-md hover:shadow-green-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Progress" && "scale-110 translate-x-2 border-2"}`}>
          <MdAnalytics fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[98px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Progress</p>
        </div>
        <div onClick={() => router.push("/Profile")} className={`bg-blue-500 group p-1 hover:shadow-md hover:shadow-blue-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Profile" && "scale-110 translate-x-2 border-2"}`}>
          <MdPerson fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 hidden group-hover:block font-bold -right-[82px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Profile</p>
        </div>
      </div>
      {/* Small screen Iphone Design (bottom bar) */}
      <div className='flex justify-center'>
        <div className='bg-slate-100 z-50 bg-opacity-30 backdrop-blur-xl fixed py-2 px-2 justify-around rounded-lg bottom-3 md:hidden max-md:flex w-10/12'>
          <div onClick={() => router.push("/Dashboard")} className={`bg-red-500 group p-3 hover:shadow-md hover:shadow-red-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Dashboard" && "scale-110 -translate-y-2 border-2 opacity-90"}`}>
            <MdHome fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-300 text-[10px] absolute bottom-1 opacity-0 group-hover:opacity-60 font-bold right-[13px]'>Home</p>
          </div>
          <div onClick={() => router.push("/Niveles")} className={`bg-orange-500/95 group p-3 hover:shadow-md hover:shadow-orange-800 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Niveles" && "scale-110 -translate-y-2 border-2 opacity-90"}`}>
            <MdLibraryBooks fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-200 text-[10px] absolute bottom-[3px] opacity-0 group-hover:opacity-60 font-bold right-[9px]'>Lessons</p>
          </div>
          <div onClick={() => router.push("/Immersive")} className={`bg-yellow-400/90 group p-3 hover:shadow-md hover:shadow-yellow-700 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Immersive" && "scale-110 -translate-y-2 border-2 opacity-90"}`}>
            <MdVideoLibrary fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-100 text-[10px] absolute bottom-[3px] opacity-0 group-hover:opacity-60 font-bold right-[3px]'>Immersive</p>
          </div>
          <div onClick={() => router.push("/Progress")} className={`bg-green-500/90 group p-3 hover:shadow-md hover:shadow-green-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg ${router.pathname == "/Progress" && "scale-110 translate-x-2 border-2"}`}>
            <MdAnalytics fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-100 text-[9px] absolute bottom-[1px] opacity-0 group-hover:opacity-60 font-bold right-[8px]'>Progress</p>
          </div>
          <div onClick={() => router.push("/Profile")} className={`bg-blue-500 group p-3 hover:shadow-md hover:shadow-blue-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg  ${router.pathname == "/Profile" && "scale-110 -translate-y-2 border-2 opacity-90"}`}>
            <MdPerson fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-100 text-[10px] absolute bottom-[0.8px] opacity-0 group-hover:opacity-60 font-bold right-[11px]'>Profile</p>
          </div>

        </div>
      </div >
    </>
  )
}
