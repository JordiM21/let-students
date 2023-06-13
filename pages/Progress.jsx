import ProgressLesson from '@/components/ProgressLesson';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ArcSeries, RadialChart, XYPlot } from 'react-vis';

export default function Progress() {
  const [userMatched, setUserMatched] = useState({})
  const [students, setStudents] = useState([])

  const router = useRouter()

  const { user, logout } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatch = newData.find(item => item.uid == authUid);
        setUserMatched(userMatch)
        const studentsAsigned = newData.filter(item => item.asignedTutor == authUid)
        setStudents(studentsAsigned)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  const myData = [
    { angle0: 16, angle: Math.PI / 4, opacity: 0.2, radius: 2, radius0: 1 },
    { angle0: Math.PI / 4, angle: 2 * Math.PI / 4, radius: 3, radius0: 0 },
    { angle0: 2 * Math.PI / 4, angle: 3 * Math.PI / 4, radius: 2, radius0: 0 },
    { angle0: 3 * Math.PI / 4, angle: 4 * Math.PI / 4, radius: 2, radius0: 0 },
    { angle0: 4 * Math.PI / 4, angle: 5 * Math.PI / 4, radius: 2, radius0: 0 },
    { angle0: 0, angle: 5 * Math.PI / 4, radius: 1.1, radius0: 0.8 }
  ]
  return (
    <>
      {
        !userMatched &&
        (
          <LoadingScreen />
        )
      }
      <div>
        {/* {
          userMatched.level == "Beginner" && (
            <ProgressLesson progress={userMatched.progressBeginner} />
          )
        }
        {
          userMatched.level == "Intermediate" && (
            <ProgressLesson progress={userMatched.progressIntermediate} />
          )
        }
        {
          userMatched.level == "Advanced" && (
            <ProgressLesson progress={userMatched.progressAdvanced} />
          )
        } */}

        {/* <XYPlot
          xDomain={[-5, 5]}
          yDomain={[-5, 5]}
          width={600}
          height={600}>
          <ArcSeries
            animation
            radiusType={'literal'}
            center={{ x: -2, y: 2 }}
            data={myData}
            colorType={'literal'} />
        </XYPlot> */}

      </div>
    </>
  )
}
