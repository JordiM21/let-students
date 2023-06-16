import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
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

  return (
    <button className={`w-full rounded-full mt-4 hover:bg-opacity-75 border-4 border-[var(--color3)] py-3 ${clicked ? "bg-[var(--color3)] " : ""}`} onClick={handleClick}>
      <p>{clicked ? 'Listo, lo veremos pronto' : 'Pide ayuda a tu tutor'}</p>
    </button>
  )
}
