import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import AdminDashboard from '@/components/AdminDashboard';
import StudentDashboard from '@/components/StudentDashboard';
import LoadingScreen from '@/components/LoadingScreen';

export default function Dashboard() {
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [level, setLevel] = useState("")
  const [role, setRole] = useState("")
  const [plan, setPlan] = useState("")
  const [progress, setProgress] = useState("")
  const router = useRouter()


  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [allUsers, setAllUsers] = useState([])
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.filter(item => item.uid == authUid);
        const allStudents = newData.filter(item => item.role == "Student")
        setAllUsers(allStudents)
        setFirstName(userMatched[0].firstName);
        setLevel(userMatched[0].level);
        setRole(userMatched[0].role);
        setId(userMatched[0].uid);
        if (level == "Beginner") {
          setProgress(userMatched[0].progressBeginner);
        }
        if (level == "Intermediate") {
          setProgress(userMatched[0].progressIntermediate);
        }
        if (level == "Advanced") {
          setProgress(userMatched[0].progressAdvanced);
        }
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div className='bg-[var(--color3Shadow)]'>
      {
        role != "Admin" && role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      {
        role == "Admin" &&
        (
          <AdminDashboard
            firstName={firstName}
            level={level}
            allUsers={allUsers}
            role={role}
          />
        )
      }
      {
        role == "Student" &&
        (
          <StudentDashboard
            firstName={firstName}
            level={level}
            role={role}
            progress={progress}
          />
        )
      }
    </div>
  )
}
