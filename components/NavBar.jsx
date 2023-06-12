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
        <div className=' bg-red-500 group p-1 hover:shadow-md hover:shadow-red-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg'>
          <MdHome fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[78px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Home</p>
        </div>
        <div className='bg-orange-500/95 group p-1 hover:shadow-md hover:shadow-orange-800 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg'>
          <MdLibraryBooks fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[90px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Lessons</p>
        </div>
        <div className='bg-yellow-400/90 group p-1 hover:shadow-md hover:shadow-yellow-700 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg'>
          <MdVideoLibrary fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[111px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Immersive</p>
        </div>
        <div className='bg-green-500/90 group p-1 hover:shadow-md hover:shadow-green-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg'>
          <MdAnalytics fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 opacity-0 group-hover:opacity-100 font-bold -right-[98px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Progress</p>
        </div>
        <div className='bg-blue-500 group p-1 hover:shadow-md hover:shadow-blue-900 cursor-pointer transition-all hover:scale-110 duration-150 active:scale-95 active:opacity-80 ease-in rounded-lg'>
          <MdPerson fill='white' className='mx-auto text-2xl' />
          <p className='text-gray-700 text-[16px] absolute bottom-1 hidden group-hover:block font-bold -right-[82px] rounded-lg px-3 bg-slate-300 shadow-md bg-opacity-95 shadow-black'>Profile</p>
        </div>
      </div>
      {/* Small screen Iphone Design (bottom bar) */}
      <div className='flex justify-center'>
        <div className='bg-slate-100 z-50 bg-opacity-20 backdrop-blur-md fixed py-2 px-2 justify-around rounded-lg bottom-3 md:hidden max-md:flex w-10/12'>
          <div className=' bg-red-500 group p-3 hover:shadow-md hover:shadow-red-900 cursor-pointer transition-all hover:scale-125 duration-150 active:scale-110 active:opacity-80 ease-in rounded-lg'>
            <MdHome fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-300 text-[10px] absolute -bottom-0 opacity-0 group-hover:opacity-40 font-bold right-[13px]'>Home</p>
          </div>
          <div className='bg-orange-500/95 group p-3 hover:shadow-md hover:shadow-orange-800 cursor-pointer transition-all hover:scale-125 duration-150 active:scale-110 active:opacity-80 ease-in rounded-lg'>
            <MdLibraryBooks fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-200 text-[10px] absolute bottom-0 opacity-0 group-hover:opacity-60 font-bold right-[9px]'>Lessons</p>
          </div>
          <div className='bg-yellow-400/90 group p-3 hover:shadow-md hover:shadow-yellow-700 cursor-pointer transition-all hover:scale-125 duration-150 active:scale-110 active:opacity-80 ease-in rounded-lg'>
            <MdVideoLibrary fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-100 text-[9px] absolute bottom-[0.8px] opacity-0 group-hover:opacity-60 font-bold right-[4px]'>Immersive</p>
          </div>
          <div className='bg-green-500/90 group p-3 hover:shadow-md hover:shadow-green-900 cursor-pointer transition-all hover:scale-125 duration-150 active:scale-110 active:opacity-80 ease-in rounded-lg'>
            <MdAnalytics fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-100 text-[9px] absolute bottom-[1px] opacity-0 group-hover:opacity-60 font-bold right-[8px]'>Progress</p>
          </div>
          <div className='bg-blue-500 group p-3 hover:shadow-md hover:shadow-blue-900 cursor-pointer transition-all hover:scale-125 duration-150 active:scale-110 active:opacity-80 ease-in rounded-lg'>
            <MdPerson fill='white' className='mx-auto text-3xl' />
            <p className='text-gray-100 text-[10px] absolute bottom-[0.8px] opacity-0 group-hover:opacity-60 font-bold right-[11px]'>Profile</p>
          </div>

        </div>
      </div >
    </>
    // {/* <div className='max-md:flex max-md:justify-center'>
    //   <Disclosure as="nav" className="bg-slate-100 bg-opacity-40 backdrop-blur-md fixed z-50 w-full max-md:bottom-4 max-md:w-11/12 md:top-0 max-md:rounded-lg">
    //     {({ open }) => (
    //       <>
    //         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //           <div className="relative flex h-16 items-center justify-between">
    //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //               {/* Mobile menu button*/}
    //               <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-white bg-[var(--color3Shadow)] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //                 <span className="sr-only">Open main menu</span>
    //                 {open ? (
    //                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //                 ) : (
    //                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //                 )}
    //               </Disclosure.Button>
    //             </div>
    //             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //               <div className="flex flex-shrink-0 items-center">
    //                 <Image src={IconBig} onClick={() => router.push("/")} height={100} width={100} className="block h-8 w-auto lg:hidden cursor-pointer" />
    //                 <Image src={Icon} onClick={() => router.push("/")} height={100} width={100} className="hidden h-8 w-auto lg:block cursor-pointer" />
    //               </div>
    //               <div className="hidden sm:ml-6 sm:block">
    //                 <div className="flex space-x-4">
    //                   <a
    //                     href={"/Dashboard"}
    //                     className={classNames(
    //                       router.pathname === "/Dashboard" ? ' bg-[#2e4052] text-white' : 'text-gray-300 hover:bg-[var(--color3Shadow)] hover:text-white',
    //                       'rounded-lg px-3 py-2 text-sm'
    //                     )}
    //                   >
    //                     Dashboard
    //                   </a>
    //                   <a
    //                     href={"/Niveles"}
    //                     className={classNames(
    //                       router.pathname === "/Niveles" ? ' bg-[#2e4052] text-white' : 'text-gray-300 hover:bg-[var(--color3Shadow)] hover:text-white',
    //                       'rounded-lg px-3 py-2 text-sm'
    //                     )}
    //                   >
    //                     Levels
    //                   </a>
    //                   <a
    //                     href={"/Immersive"}
    //                     className={classNames(
    //                       router.pathname === "/Immersive" ? ' bg-[#2e4052] text-white' : 'text-gray-300 hover:bg-[var(--color3Shadow)] hover:text-white',
    //                       'rounded-lg px-3 py-2 text-sm'
    //                     )}
    //                   >
    //                     Immersive
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div onClick={() => router.push("/Profile")} className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //               <p className='text-white text-sm cursor-pointer p-2 bg-[var(--color3Shadow)] rounded-lg'>
    //                 Mi Perfil
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <Disclosure.Panel className="sm:hidden absolute z-50 bg-slate-100 bg-opacity-20 backdrop-blur-xl w-full">
    //           <div className="space-y-1 px-2 pb-3 pt-2">
    //             <Disclosure.Button
    //               as="a"
    //               href="/Dashboard"
    //               className={classNames(
    //                 router.pathname === "/Dashboard" ? ' bg-[#2e4052] text-white' : 'text-gray-300 hover:bg-[var(--color3Shadow)] hover:text-white',
    //                 'block rounded-lg px-3 py-2 text-base font-medium'
    //               )}
    //             >
    //               Dashboard
    //             </Disclosure.Button>
    //             <Disclosure.Button
    //               as="a"
    //               href="/Niveles"
    //               className={classNames(
    //                 router.pathname === "/Niveles" ? ' bg-[#2e4052] text-white' : 'text-gray-300 hover:bg-[var(--color3Shadow)] hover:text-white',
    //                 'block rounded-lg px-3 py-2 text-base font-medium'
    //               )}
    //             >
    //               Levels
    //             </Disclosure.Button>

    //             <Disclosure.Button
    //               as="a"
    //               href="/Immersive"
    //               className={classNames(
    //                 router.pathname === "/Immersive" ? ' bg-[#2e4052] text-white' : 'text-gray-300 hover:bg-[var(--color3Shadow)] hover:text-white',
    //                 'block rounded-lg px-3 py-2 text-base font-medium'
    //               )}
    //             >
    //               Immersive
    //             </Disclosure.Button>

    //           </div>
    //         </Disclosure.Panel>
    //       </>
    //     )}
    //   </Disclosure>
    // </div> */}
  )
}
