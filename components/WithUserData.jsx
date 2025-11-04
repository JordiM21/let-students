import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';

const withUserData = (WrappedComponent) => {
  const WithUserData = (props) => {
    const { user } = useAuth();
    const [authUid, setAuthUid] = useState(user.uid);
    const [userData, setUserData] = useState(null);
    const [tutor, setTutor] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);
    const [activityPendingInfo, setActivityPendingInfo] = useState({ hasPending: false, count: 0 }); // Nuevo estado
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "users"));
          const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          const userMatched = newData.find((item) => item.uid === authUid);
          const tutorMatched = newData.find(item => item.uid === userMatched?.asignedTutor);
          const allStudents = newData.filter(item => item.role === "Student");
          const studentsAsigned = allStudents.filter(item => item?.asignedTutor === authUid);
          const adminsFound = newData.filter(item => item.role === "Admin");
          setAdmins(adminsFound);
          setUserData(userMatched);
          setTutor(tutorMatched);
          setAllUsers(studentsAsigned);
          setLikedVideos(userMatched?.likedVideos?.reverse());
          const pendingActivities = userMatched?.activities?.filter(activity => activity.status === "pending");
          const pendingCount = pendingActivities?.length;
          const hasPending = pendingCount > 0;
          setActivityPendingInfo({ hasPending, count: pendingCount });
        } catch (error) {
          console.error('Error al obtener los datos del usuario', error);
        }
      };
      fetchUserData();
    }, [authUid, submit]);

    return (
      <WrappedComponent
        {...props}
        tutor={tutor}
        likedVideos={likedVideos}
        admins={admins}
        allUsers={allUsers}
        userData={userData}
        isPending={activityPendingInfo}
        setSubmit={setSubmit}
        submit={submit}
      />
    );
  };

  return WithUserData;
};

export default withUserData;
