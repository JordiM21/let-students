import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

const WithWordsGame = (WrappedComponent) => {
  const WithWordsGame = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "wordsGame"));
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

  return WithWordsGame;
};

export default WithWordsGame;
