import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

const withLevelAndLessonsData = (WrappedComponent, level) => {
  const WithLevelAndLessonsData = (props) => {
    const [levelData, setLevelData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        await getDocs(collection(db, "units"))
          .then((querySnapshot) => {
            const newData = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));
            setLevelData(newData)
          })
      };
      fetchData();
    }, [level]);

    return <WrappedComponent {...props} levelData={levelData} />;
  };

  return WithLevelAndLessonsData;
};

export default withLevelAndLessonsData;
