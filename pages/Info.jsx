import React from 'react'
import Icon from '@/public/Icon.png'
import background from '@/public/background-landing.svg'
import NextImage from 'next/image'
import { Router, useRouter } from 'next/router'
import Box from '@mui/material/Box'
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

export default function Info() {
  const router = useRouter()

  return (
    <>
      <div className="relative bg-[#2D878D] pt-[500px] md:pt-36">
        <div
          onClick={() => router.replace('/')}
          className="absolute top-3 left-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px]"
        >
          <NextImage src={Icon} className="z-50 object-contain w-[40px] h-[40px]" />
        </div>
        <NextImage src={background} className="-z-10 bg-[#2D878D] h-screen object-cover absolute" />
        <div className="absolute top-[5vh] w-11/12 left-1/2 transform -translate-x-1/2">
          <h1 className="text-6xl lg:text-8xl shadow-black drop-shadow-lg text-center text-white font-black">
            Planes Disponibles
          </h1>
        </div>
        <div className="absolute w-11/12 lg:w-8/12 flex gap-6 justify-evenly flex-wrap top-[25vh] left-1/2 transform -translate-x-1/2">
          <div className="bg-[#f9f3d39d] backdrop-blur-lg min-w-[350px] p-4 rounded-md">
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
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>
            <stripe-buy-button
              buy-button-id="buy_btn_1PMUJsBjLDLVBoAyn0CYijd4"
              publishable-key="pk_live_51NYA5oBjLDLVBoAyxLUTxwdvl60uIrTsKAeruXWEGSTwyPH7O4xASxGWXqfnSMst1B0Ba2n0nNqlyQlceCTdt9Mf00QbSeCsVd"
            ></stripe-buy-button>
          </div>
          <div className="bg-[#f9f3d39d] backdrop-blur-lg min-w-[350px] p-4 rounded-md">
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
                    <CalendarMonthTwoToneIcon sx={{ fontSize: 30, fill: '#F46F21' }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                      color: '#F46F21',
                    }}
                    primary="6 Horas semanales"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SchoolTwoToneIcon sx={{ fontSize: 30, fill: '#F46F21' }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ my: 0 }}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 0,
                      color: '#F46F21',
                    }}
                    primary="Apoyo Académico"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>

            <stripe-buy-button
              buy-button-id="buy_btn_1PMUJsBjLDLVBoAyn0CYijd4"
              publishable-key="pk_live_51NYA5oBjLDLVBoAyxLUTxwdvl60uIrTsKAeruXWEGSTwyPH7O4xASxGWXqfnSMst1B0Ba2n0nNqlyQlceCTdt9Mf00QbSeCsVd"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
    </>
  )
}
