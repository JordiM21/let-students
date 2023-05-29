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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CgPassword } from 'react-icons/cg'

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
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [level, setLevel] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [age, setAge] = useState("")
  const [country, setCountry] = useState("")
  const [email, setEmail] = useState("")
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
        const userMatched = newData.filter(item => item.uid == authUid);
        setFirstName(userMatched[0].firstName);
        setLastName(userMatched[0].lastName);
        setCountry(userMatched[0].country);
        setEmail(userMatched[0].email);
        setLevel(userMatched[0].level);
        setPhone(userMatched[0].phone);
        setRole(userMatched[0].role);
        setAge(userMatched[0].age);
        setId(userMatched[0].uid);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <>
      {
        firstName == "" &&
        (
          <LoadingScreen />
        )
      }
      <Image src={cover} className='w-full h-[100%] object-cover absolute -z-10' />
      <div className='bg-[var(--color3Shadow)] max-w-3xl mx-auto rounded-xl mt-8 pb-8'>
        {
          firstName != "" &&
          (
            <>
              <div className='bg-sky-300 h-32 relative rounded-t-xl'>
                <div className='bg-gray-300 shadow-2xl hover:shadow-none transition ease-in 1s cursor-pointer absolute h-24 rounded-full left-8 flex items-center justify-center w-24 text-4xl font-extrabold border-8 border-[var(--color3Shadow)] -bottom-10 hover:brightness-90'>{firstName[0].toLocaleUpperCase()} {lastName[0].toLocaleUpperCase()} <div className='bg-green-500 h-6 w-6 rounded-full absolute left-14 -bottom-2'></div></div>
              </div>
              <div className='flex justify-center gap-4 items-center pt-8'>
                <h1 className='text-center text-4xl text-white font-semibold py-4'>{firstName} {lastName} </h1>
                <YourFlag country={country} />
              </div>
              <div className='flex items-center justify-center pb-4'>
                <button class="btn-cta"> Continua en tu Nivel</button>
              </div>
              <div className='flex justify-around'>
                <p className='bg-[var(--color2)] px-8 py-2 rounded-full font-bold text-[var(--color1)] cursor-pointer hover:text-white transition 1s ease-in'>{role}</p>
                <p className='bg-[var(--color2)] px-8 py-2 rounded-full font-bold text-[var(--color1)] cursor-pointer hover:text-white transition 1s ease-in'>{level}</p>
              </div>
              <div className='mx-8 my-4 space-y-4'>
                <h1 className='text-3xl text-[var(--color3)]'>Información Personal</h1>
                <p className='text-lg text-[var(--color3)]'>Correo Electrónico: <span className='text-white'>{email}</span></p>
                <p className='text-lg text-[var(--color3)]'>Numero de celular: <span className='text-white'>{phone}</span></p>
                <p className='text-lg text-[var(--color3)]'>Edad: <span className='text-white'>{age}</span></p>
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
                  <button onClick={handleOpen} class="Btn">
                    <div class="sign">
                      <CgPassword />
                    </div>
                    <div class="text">Restablecer Contraseña</div>
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
