import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function UnitWithTroubleBtn({ unit, level }) {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  const [userMatched, setUserMatched] = useState({})
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)

  const fetchUser = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userFound = newData.find(item => item.uid == authUid);
        setUserMatched(userFound)
      })
  }

  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const user = newData.find((user) => user.id === userMatched.id);
        if (user && user.unitInTrouble.includes(unit)) {
          setClicked(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    checkLikedStatus();
  }, [unit, userMatched]);

  useEffect(() => {
    fetchUser();
  }, [])


  const handleClick = async () => {
    if (!clicked) {
      try {
        const userRef = doc(db, "users", userMatched.id);
        await updateDoc(userRef, {
          unitInTrouble: [...userMatched.unitInTrouble, unit],
        }).then(() => toast.success("Saved succesfully!"))
        setClicked(true);
      } catch (error) {
        console.error('Error updating liked videos:', error);
      }
    }
    else {
      toast.info("This video is already on your list!")
    }
  };
  const [question, setQuestion] = useState(false)

  return (
    <div className='my-4'>
      <p className='text-gray-700 text-xl font-bold text-center'>Hey! ¿No entendiste muy bien todo o necesitas ayuda?</p>
      <button className={`w-11/12 relative mt-4`}>
        <div className={`w-full mt-4 py-4 rounded-full border-4 border-[var(--color3)]  ${clicked ? "bg-[var(--color3)] " : ""}`} onClick={handleClick}>
          <p>{clicked ? 'Listo, lo veremos pronto' : 'Pide ayuda a tu tutor'}</p>
        </div>
        <div onClick={() => setQuestion(!question)} className='absolute -right-8 top-9 hover:bg-slate-300 rounded-full'>
          <BsQuestionCircle className='w-6 h-6 ' />
        </div>
      </button >
      {
        question && (
          <div className='bg-gray-200 backdrop-blur-sm bg-opacity-60 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0'>
            <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
            <p>No te preocupes si no entiendes todo a la primera, es normal!. <br /> Con esta opción tu profesor podrá ver tu solicitud y te lo explicará la proxima clase</p>
          </div>
        )
      }
    </div >
  )
}
