import React, { useEffect, useRef } from 'react'
import Icon from '@/public/Icon.png'
import background from '@/public/background-landing.svg'
import NextImage from 'next/image'
import { Router, useRouter } from 'next/router'
import BuyButton from '@/components/BuyButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone'
import VoiceChatTwoToneIcon from '@mui/icons-material/VoiceChatTwoTone'
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone'
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone'
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone'
import BuyButton2 from '@/components/BuyButton2'
import gsap from 'gsap'

export default function Info() {
  const router = useRouter()
  const card1 = useRef(null)
  const card2 = useRef(null)
  const title = useRef(null)

  useEffect(() => {
    // Set initial opacity and y position
    gsap.set(title.current, { opacity: 0, y: 0 });
    gsap.set(card1.current, { opacity: .7, y: 0 });
    gsap.set(card2.current, { opacity: .7, y: 0 });
  
    // Animate elements
    gsap.to(title.current, { opacity: 1, y: 5, duration: 1, ease: 'power2.out' });
    gsap.to(card1.current, { opacity: 1, y: -10, duration: 1, ease: 'power2.out' });
    gsap.to(card2.current, { opacity: 1, y: -10, duration: 1, ease: 'power2.out', delay: 0.5 });
  }, [router]);
  

  return (
    <>
      <div className="relative bg-[#2D878D] pt-[500px] md:pt-36">
        <div
          onClick={() => router.replace('/')}
          className="absolute top-3 left-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm z-50 hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px]"
        >
          <NextImage src={Icon} className="z-50 object-contain w-[40px] h-[40px]" />
        </div>
        <NextImage src={background} className="-z-10 bg-[#2D878D] h-screen object-cover absolute" />
        <div className="absolute top-[2vh] md:top-[5vh] w-10/12 left-1/2 transform -translate-x-1/2">
          <h1 ref={title} className="text-5xl lg:text-8xl shadow-black drop-shadow-lg text-center text-white font-black">
            Planes Disponibles
          </h1>
        </div>
        <div className="absolute w-11/12 lg:w-8/12 flex gap-6 justify-evenly flex-wrap top-[25vh] left-1/2 transform -translate-x-1/2">
          <div ref={card1} className="bg-[#f9f3d39d] backdrop-blur-lg min-w-[350px] p-4 rounded-md">
            <p className="text-center text-4xl md:pb-6 font-black">Plan Standard</p>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <VoiceChatTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Clases en vivo"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SportsEsportsTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Acceso al Juego"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AssessmentTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Reporte de Progreso"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Clases de Refuerzo "
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CalendarMonthTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="3 Horas semanales"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton disabled>
                  <ListItemIcon>
                    <SchoolTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Apoyo Académico"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <div className="my-4 px-4 flex items-end justify-between">
              <p>
                $<span className="text-4xl font-black">60/</span>mes
              </p>
              <p>Todo Incluído</p>
            </div>
            <div className="flex justify-center">
              <BuyButton2 />
            </div>
          </div>
          <div ref={card2} className="bg-[#f9f3d39d] backdrop-blur-lg min-w-[350px] p-4 rounded-md">
            <p className="text-center text-4xl pb-1 md:pb-6 font-black">Plan Intensivo</p>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <VoiceChatTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Clases en vivo"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SportsEsportsTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Acceso al Juego"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AssessmentTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Reporte de Progreso"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsTwoToneIcon sx={{ fontSize: 30 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                    }}
                    primary="Clases de Refuerzo"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CalendarMonthTwoToneIcon sx={{ fontSize: 30, fill: '#0074d4' }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                      // color: '#0074d4',
                    }}
                    primary="6 Horas semanales"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SchoolTwoToneIcon sx={{ fontSize: 30, fill: '#0074d4' }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                      // color: '#0074d4',
                    }}
                    primary="Apoyo Académico"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <div className="my-4 px-4 flex items-end justify-between">
              <p>
                $<span className="text-4xl font-black">99/</span>mes
              </p>
              <p>Todo Incluído</p>
            </div>
            <div className="flex justify-center">
              <BuyButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
