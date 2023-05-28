import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

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
    <div className='bg-[var(--color3Shadow)] py-8'>
      <h1 className='text-center text-4xl text-white font-semibold py-4'>{firstName} {lastName} </h1>
      <div className='flex justify-around'>
        <p className='bg-[var(--color2)] px-8 py-2 rounded-full font-bold text-[var(--color1)] cursor-pointer hover:text-white transition 1s ease-in'>{role}</p>
        <p className='bg-[var(--color2)] px-8 py-2 rounded-full font-bold text-[var(--color1)] cursor-pointer hover:text-white transition 1s ease-in'>{level}</p>
      </div>
      <div className='mx-8 my-4 space-y-4'>
        <h1 className='text-3xl text-[var(--color3)]'>Información Personal</h1>
        <p className='text-lg text-[var(--color3)]'>Correo Electrónico: <span className='text-white'>{email}</span></p>
        <p className='text-lg text-[var(--color3)]'>País de Residencia: <span className='text-white'>{country}</span></p>
        <p className='text-lg text-[var(--color3)]'>Numero de celular: <span className='text-white'>{phone}</span></p>
        <p className='text-lg text-[var(--color3)]'>Edad: <span className='text-white'>{age}</span></p>
      </div>
      <button onClick={() => {
        logout()
      }} class="Btn">
        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        <div class="text">Logout</div>
      </button>
    </div>
  )
}
