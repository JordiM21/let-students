import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import LoadingScreen from '@/components/LoadingScreen';
import YourFlag from '@/components/YourFlag';
import { CgPassword } from 'react-icons/cg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import YourProfile from '@/components/YourProfile';
import { TbEdit } from 'react-icons/tb'
import { ChevronRightOutlined } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};

export default function Profile() {
  const [userMatched, setUserMatched] = useState({})
  const [students, setStudents] = useState([])

  const router = useRouter()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user, logout } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatch = newData.find(item => item.uid == authUid);
        setUserMatched(userMatch)
        const studentsAsigned = newData.filter(item => item.asignedTutor == authUid)
        setStudents(studentsAsigned)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <>
      {
        !userMatched &&
        (
          <LoadingScreen />
        )
      }
      <div className='bg-gray-200 min-h-screen object-cover absolute -z-10'></div>
      <div className='bg-[var(--bluebg)] shadow-2xl mx-auto mt-0 pb-28 md:pb-0'>
        {
          userMatched != "" &&
          (
            <>
              <div className='bg-gradient-to-r flex justify-center items-center from-cyan-500 to-blue-500 h-64 md:h-80 relative rounded-b-2xl'>
                <div className='cursor-pointer rounded-full hover:opacity-90 relative active:scale-95 active:opacity-100 transition-all 1s ease-in' onClick={() => router.push(`/selectCharacter/${userMatched.id}`)} >
                  <YourProfile char={userMatched.profileImg} />
                  <div className='bg-gray-800 flex absolute rounded-full p-1 right-0 bottom-4'>
                    <TbEdit fill='white' size={40} />
                  </div>
                  <div className='flex absolute rounded-full p-1 left-0 bottom-4'>
                    <YourFlag country={userMatched.country} />
                  </div>

                </div>
              </div>
              <div className='w-11/12 md:w-1/2 mx-auto space-y-3 my-4'>
                <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center rounded-xl justify-between py-2 px-4'>
                  <p className='text-white'>Name</p>
                  <div className='flex items-center justify-center'>
                    <p className='text-gray-400 opacity-80'>{userMatched.firstName} {userMatched.lastName} </p>
                    <ChevronRightOutlined className='stroke-gray-400 opacity-80' />
                  </div>
                </div>
                <div className=''>
                  <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center rounded-t-xl justify-between py-2 px-4'>
                    <p className='text-white'>Level</p>
                    <div className='flex items-center justify-center'>
                      <p className='text-gray-400 opacity-80'>{userMatched.level}</p>
                    </div>
                  </div>
                  <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center justify-between py-2 px-4'>
                    <p className='text-white'>Email</p>
                    <div className='flex items-center justify-center'>
                      <p className='text-gray-400 opacity-80'>{userMatched.email}</p>
                    </div>
                  </div>
                  <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center justify-between py-2 px-4'>
                    <p className='text-white'>Phone</p>
                    <div className='flex items-center justify-center'>
                      <p className='text-gray-400 opacity-80'>{userMatched.phone}</p>
                    </div>
                  </div>
                  <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center rounded-b-xl justify-between py-2 px-4'>
                    <p className='text-white'>Age</p>
                    <div className='flex items-center justify-center'>
                      <p className='text-gray-400 opacity-80'>{userMatched.age}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-around md:w-1/2 md:mx-auto'>
                <div className='w-full'>
                  <button onClick={() => {
                    logout()
                  }} class="Btn">
                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                    <div class="text">Logout</div>
                  </button>
                </div>
                <div className='w-full'>
                  <button onClick={handleOpen} class="Btn-password">
                    <div class="sign">
                      <CgPassword />
                    </div>
                    <div style={{ fontSize: ".9rem" }} class="text">Restablecer Contraseña</div>
                  </button>
                </div>
              </div>

              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfyFF63RLIe1vl0zewGgM9AL5_K1diq56x6Xqsf6Ab19VwCZA/viewform?embedded=true" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>                  </Box>
                </Modal>
              </div>
            </>
          )
        }
      </div >


    </>
  )
}
