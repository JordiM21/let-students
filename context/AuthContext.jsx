import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '@/config/firebase';
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const register = async (
    email,
    password,
    firstName,
    lastName,
    age,
    country,
    phone,
    role,
    level,
    asignedTutor,
    startDate,
    parentName,
    matriculation,
    classDojoLink,
    paymentDate,
    paymentFrequency,
    paymentMethod,
    paymentPlatform
  ) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)

      // 1. Load defaults from Firestore
      const defaultsRef = doc(db, 'flashDefaults', 'flashProgress')
      const defaultsSnap = await getDoc(defaultsRef)
      let flashProgressDefaults = {}
      if (defaultsSnap.exists()) {
        flashProgressDefaults = defaultsSnap.data()
      }

      // 2. Save full user profile
      await addDoc(collection(db, 'users'), {
        uid: cred.user.uid,
        email,
        firstName,
        lastName,
        age,
        country,
        phone,
        role,
        level,
        asignedTutor,
        startDate,
        dateVariable: 0,
        parentName,
        matriculation,
        classDojo: classDojoLink,
        payment: {
          date: paymentDate,
          frequency: paymentFrequency,
          method: paymentMethod,
          platform: paymentPlatform,
        },
        progressBeginner: 0,
        progressIntermediate: 0,
        progressAdvanced: 0,
        likedVideos: [],
        exams: [],
        wordsGameProgress: [],
        tutorQuote: "Welcome Student!",
        // Inject defaults here 👇
        FlashProgress: flashProgressDefaults,
      })

      // 2. Save mapping for login lookup
      await setDoc(doc(db, 'phoneToEmail', cred.user.uid), {
        email,
        phone,
      })
    } catch (error) {
      console.error('Error during register:', error)
      throw error
    }
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}