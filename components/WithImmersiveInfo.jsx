import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';

const WithImmersiveInfo = (WrappedComponent) => {
  const WithImmersiveInfo = (props) => {
    const [data, setData] = useState([]);
    const [currentLevel, setCurrentLevel] = useState("all");
    const [question, setQuestion] = useState(false);

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Immersive"));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        if (currentLevel === "all") {
          const dataFound = newData.filter(item => item.level !== "");
          setData(dataFound.sort(() => Math.random() - 0.5));
        } else {
          const dataFound = newData.filter(item => item.level === currentLevel);
          setData(dataFound);
        }
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, [currentLevel]);

    return (
      <WrappedComponent
        data={data}
        setData={setData}
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
        question={question}
        setQuestion={setQuestion}
        {...props}
      />
    );
  };

  return WithImmersiveInfo;
};

export default WithImmersiveInfo;
