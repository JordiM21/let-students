import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

const WithFlashGame = (WrappedComponent) => {
  const WithFlashGame = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "flashCards"));
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(newData);
      };
      fetchData();
    }, []);

    return (
      <WrappedComponent
        data={data}
        {...props}
      />
    );
  };

  return WithFlashGame
};

export default WithFlashGame
