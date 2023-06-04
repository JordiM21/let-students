import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '@/config/firebase';
import { collection, addDoc } from "firebase/firestore";

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

  const register = async (email, password, firstName, lastName, age, country, phone, role, level, plan, asignedTutor) => {

    await createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        try {
          addDoc(collection(db, "users"), {
            uid: cred.user.uid,
            email,
            firstName,
            lastName,
            age,
            country,
            phone,
            role,
            level,
            plan,
            asignedTutor,
            progressBeginner: 0,
            progressIntermediate: 0,
            progressAdvanced: 0,
          })
        } catch (error) {
          console.log("error adding document",)
        }
      })

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