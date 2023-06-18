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
  const [likedVideos, setLikedVideos] = useState("")
  const [progress, setProgress] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()

  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [allUsers, setAllUsers] = useState([])
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.uid == authUid);
        const allStudents = newData.filter(item => item.role == "Student")
        setAllUsers(allStudents)
        setFirstName(userMatched.firstName);
        setLevel(userMatched.level);
        setLikedVideos(userMatched.likedVideos)
        setRole(userMatched.role);
        setId(userMatched.uid);
        setEmail(userMatched.email)
        if (level == "Beginner") {
          setProgress(userMatched.progressBeginner);
        }
        if (level == "Intermediate") {
          setProgress(userMatched.progressIntermediate);
        }
        if (level == "Advanced") {
          setProgress(userMatched.progressAdvanced);
        }
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div className='bg-[var(--bluebg)] pb-16'>
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
            likedVideos={likedVideos}
            email={email}
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
            likedVideos={likedVideos}
            email={email}
          />
        )
      }
    </div>
  )
}
