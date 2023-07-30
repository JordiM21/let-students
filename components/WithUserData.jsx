import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';

const withUserData = (WrappedComponent) => {
  const WithUserData = (props) => {
    const { user } = useAuth();
    const [authUid, setAuthUid] = useState(user.uid);
    const [userData, setUserData] = useState(null);
    const [tutor, setTutor] = useState({})
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "users"));
          const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          const userMatched = newData.find((item) => item.uid === authUid);
          const tutorMatched = newData.find(item => item.uid == userMatched.asignedTutor)
          const allStudents = newData.filter(item => item.role == "Student")
          const studentsAsigned = allStudents.filter(item => item.asignedTutor == authUid)
          setUserData(userMatched);
          setTutor(tutorMatched)
          setAllUsers(studentsAsigned)
        } catch (error) {
          console.error('Error al obtener los datos del usuario', error);
        }
      };
      fetchUserData();
    }, [authUid]);

    return <WrappedComponent {...props} tutor={tutor} allUsers={allUsers} userData={userData} />;
  };

  return WithUserData;
};

export default withUserData;
