import { useEffect, useState } from 'react'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

const WithFlashGame = (WrappedComponent) => {
  const WithFlashGame = (props) => {
    const [data, setData] = useState([])
    const [defaults, setDefaults] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        // 1. Fetch flashCards collection
        const querySnapshot = await getDocs(collection(db, 'flashCards'))
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        // 2. Fetch flashProgress defaults
        const defaultsRef = doc(db, 'flashDefaults', 'flashProgress')
        const defaultsSnap = await getDoc(defaultsRef)
        const defaultFlash = defaultsSnap.exists() ? defaultsSnap.data() : {}

        // 3. Save both
        setData(newData)
        setDefaults(defaultFlash)
      }

      fetchData()
    }, [])

    return (
      <WrappedComponent
        data={data}
        defaultFlash={defaults} // 👈 pass defaults down
        {...props}
      />
    )
  }

  return WithFlashGame
}

export default WithFlashGame
