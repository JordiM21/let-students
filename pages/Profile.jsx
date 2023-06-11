import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LoadingScreen from '@/components/LoadingScreen';
import cover from '@/public/cover-dark.png'
import Image from 'next/image';
import YourFlag from '@/components/YourFlag';
import { CgPassword } from 'react-icons/cg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import letPet from '@/public/letPet.png'
import ProgressLesson from '@/components/ProgressLesson';
import ListOfUsers from '@/components/ListOfUsers';

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
        const userMatch = newData.filter(item => item.uid == authUid);
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
      <div className='bg-gray-200 w-full h-full object-cover absolute -z-10'></div>
      <div className='bg-[var(--color3Shadow)] shadow-2xl max-w-3xl mx-auto rounded-xl mt-8 pb-8'>
        {
          userMatched != "" &&
          (
            <>
              <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-32 relative rounded-t-xl'>
                {
                  userMatched[0]?.role == "Student" && (
                    <div onClick={() => router.push(`/Niveles/${userMatched[0]?.level}`)} className='absolute right-4 top-8 pb-4'>
                      <button class="btn-cta"> Continua en tu Nivel</button>
                    </div>
                  )
                }
                <div className='bg-transparent shadow-2xl hover:shadow-none transition ease-in 1s cursor-pointer absolute h-24 rounded-full left-8 flex items-center justify-center w-24 text-4xl font-extrabold border-8 border-[var(--color3Shadow)] -bottom-10 hover:brightness-90 z-20'><Image src={letPet} className='w-20 h-20 object-cover rounded-full' /><div className='bg-green-500 h-6 w-6 rounded-full absolute left-14 -bottom-2'></div></div>
              </div>
              <div className='flex justify-center gap-4 items-center pt-8'>
                <h1 className='text-center text-2xl md:text-4xl text-white font-semibold py-4'>{userMatched[0]?.firstName} {userMatched[0]?.lastName} </h1>
                <YourFlag country={userMatched[0]?.country} />
              </div>
              <div className='mx-8 my-4 space-y-4'>
                <p className='text-lg text-[var(--color3)]'>Nivel Actual: <span className='text-white'>{userMatched[0]?.level}</span></p>
                <p className='text-lg text-[var(--color3)]'>Correo Electrónico: <span className='text-white'>{userMatched[0]?.email}</span></p>
                <p className='text-lg text-[var(--color3)]'>Numero de celular: <span className='text-white'>{userMatched[0]?.phone}</span></p>
                <p className='text-lg text-[var(--color3)]'>Edad: <span className='text-white'>{userMatched[0]?.age}</span></p>
                {
                  user.role == "Student" && (
                    <p className='text-lg text-[var(--color3)]'>Tutor asignado: <span className='text-white'>{userMatched[0]?.asignedTutor}</span></p>
                  )
                }
                <p className='text-2xl text-[var(--color3)] text-center'>Progreso de Nivel <span className='text-[var(--color2)] font-bold'>{userMatched[0]?.level}</span></p>
                {
                  userMatched[0]?.level == "Beginner" && (
                    <ProgressLesson progress={userMatched[0]?.progressBeginner} />
                  )
                }
                {
                  userMatched[0]?.level == "Intermediate" && (
                    <ProgressLesson progress={userMatched[0]?.progressIntermediate} />
                  )
                }
                {
                  userMatched[0]?.level == "Advanced" && (
                    <ProgressLesson progress={userMatched[0]?.progressAdvanced} />
                  )
                }
              </div>
              <div className='flex justify-around'>
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
        {
          userMatched[0].role == "Admin" && (
            <div className='mx-14'>
              <h1 className='text-3xl text-white font-bold text-center'>Your students</h1>
              {
                students.map((student) => (
                  <div onClick={() => router.push(`/adminCreate/studentDetails/${student.id}`)} className='p-2 flex justify-end pr-16 gap-4 items-center  bg-gray-300 rounded-md my-2 max-w-md mx-auto hover:scale-110 hover:opacity-60 transition-all 1s ease-in cursor-pointer'>
                    <p className='text-center font-bold text-xl py-1 cursor-pointer'>{student.firstName}</p>
                    <YourFlag country={student.country} />
                  </div>
                ))
              }
            </div>
          )
        }
      </div >


    </>
  )
}
