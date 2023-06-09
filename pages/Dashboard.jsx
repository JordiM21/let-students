import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import AdminDashboard from '@/components/AdminDashboard';
import StudentDashboard from '@/components/StudentDashboard';
import LoadingScreen from '@/components/LoadingScreen';
import { AiFillInfoCircle } from 'react-icons/ai';

export default function Dashboard() {
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [level, setLevel] = useState("")
  const [role, setRole] = useState("")
  const [urlMeet, setUrlMeet] = useState("")
  const [likedVideos, setLikedVideos] = useState("")
  const [progressB, setProgressB] = useState("")
  const [progressI, setProgressI] = useState("")
  const [progressA, setProgressA] = useState("")
  const [schedule, setSchedule] = useState([])
  const [profileImg, setProfileImg] = useState("")
  const [appNotif, setAppNotif] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [activities, setActivities] = useState([])

  const [email, setEmail] = useState("")
  const router = useRouter()
  const [tutor, setTutor] = useState({})

  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [allUsers, setAllUsers] = useState([])
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.uid == authUid);
        const tutorMatched = newData.find(item => item.uid == userMatched.asignedTutor)
        const allStudents = newData.filter(item => item.role == "Student" || item.role == "Admin")
        setProfileImg(userMatched.profileImg)
        setTutor(tutorMatched)
        setAllUsers(allStudents)
        setFirstName(userMatched.firstName);
        setLevel(userMatched.level);
        setLikedVideos(userMatched.likedVideos)
        setRole(userMatched.role);
        setId(userMatched.id);
        setEmail(userMatched.email)
        setProgressB(userMatched.progressBeginner);
        setProgressI(userMatched.progressIntermediate);
        setProgressA(userMatched.progressAdvanced);
        setSchedule(userMatched?.schedule)
        setUrlMeet(userMatched?.urlMeet)
        setAppNotif(userMatched?.appNotif)
        setActivities(userMatched?.activities)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  useEffect(() => {
    const hasPendingActivity = activities?.some(activity => activity.status === "pending");
    if (hasPendingActivity) {
      setIsPending(true)
    } else {
      setIsPending(false)
    }
  }, [activities, router.pathname])

  return (
    <div className='bg-[var(--bluebg)] pb-16'>
      {
        role != "Admin" && role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      {
        role == "Admin" && (
          <div className='flex justify-center'>
            <div onClick={() => router.push("/Activities")} className='bg-black px-8 py-2 cursor-pointer hover:bg-opacity-70 rounded-b-xl'>
              <p className='text-white text-sm'>Asign Activities</p>
            </div>
          </div>
        )
      }
      {
        role == "Student" && (
          <div className='flex justify-center'>
            <div onClick={() => router.push("/Activities")} className='bg-black relative px-8 py-2 cursor-pointer hover:bg-opacity-70 rounded-b-xl'>
              <p className='text-white text-sm'>My Activities</p>
              {
                isPending && (
                  <div className='bg-black absolute -bottom-0 -right-1 rounded-full'>
                    <AiFillInfoCircle className='fill-yellow-400 text-lg' />
                  </div>
                )
              }
            </div>
          </div>
        )
      }
      {
        role == "Admin" &&
        (
          <AdminDashboard
            profileImg={profileImg}
            firstName={firstName}
            level={level}
            allUsers={allUsers}
            role={role}
            likedVideos={likedVideos}
            email={email}
            id={id}
            url={urlMeet}
          />
        )
      }
      {
        role == "Student" &&
        (
          <StudentDashboard
            profileImg={profileImg}
            schedule={schedule}
            firstName={firstName}
            level={level}
            role={role}
            progressB={progressB}
            progressI={progressI}
            progressA={progressA}
            likedVideos={likedVideos}
            email={email}
            tutor={tutor}
            appNotif={appNotif}
            setAppNotif={setAppNotif}
            id={id}
          />
        )
      }
    </div>
  )
}
