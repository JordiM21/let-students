import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import AdminDashboard from '@/components/AdminDashboard';
import StudentDashboard from '@/components/StudentDashboard';

export default function Dashboard() {
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [level, setLevel] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [age, setAge] = useState("")
  const [country, setCountry] = useState("")
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
        const userMatched = newData.filter(item => item.uid == authUid);
        setAllUsers(newData)
        setFirstName(userMatched[0].firstName);
        setLastName(userMatched[0].lastName);
        setCountry(userMatched[0].country);
        setEmail(userMatched[0].email);
        setLevel(userMatched[0].level);
        setPhone(userMatched[0].phone);
        setRole(userMatched[0].role);
        setAge(userMatched[0].age);
        setId(userMatched[0].uid);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div>
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
          />
        )
      }
    </div>
  )
}
