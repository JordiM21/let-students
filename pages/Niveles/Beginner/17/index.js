import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import UnitWithTroubleBtn from '@/components/UnitWithTroubleBtn';

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/Niveles"
    >
      Levels
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 17
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Numbers, Dates, Time - LESSON 17</p>
      <CustomTitle title="Numbers, The date and the time" titleSpanish="Numeros, la fecha y el tiempo" />
      <div className='my-4'>
        <p className='font-bold text-sm opacity-90'>En esta lección aprenderemos todo sobre los numeros y como utilizarlos en nuestro día a día, es muy interesante así que te recomiendo poner mucha atención y practicar en tu casa con tus familiares o colegas. ¡Comencemos!</p>
        <div className='space-y-4'>
          <CustomTitle title="Cardinal Numbers" titleSpanish="Los números cardinales" />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS (del 1 al 12):</p>
          <SingleExample
            english="One(1)"
            spanish=""
          />
          <SingleExample
            english="two(2)"
            spanish=""
          />
          <SingleExample
            english="Three(3)"
            spanish=""
          />
          <SingleExample
            english="four(4)"
            spanish=""
          />
          <SingleExample
            english="five(5)"
            spanish=""
          />
          <SingleExample
            english="six(6)"
            spanish=""
          />
          <SingleExample
            english="seven(7)"
            spanish=""
          />
          <SingleExample
            english="eight(8)"
            spanish=""
          />
          <SingleExample
            english="nine(9)"
            spanish=""
          />
          <SingleExample
            english="ten(10)"
            spanish=""
          />
          <SingleExample
            english="eleven(11)"
            spanish=""
          />
          <SingleExample
            english="twelve(12)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS (del 13 al 19):</p>
          <SingleExample
            english="thirteen(13)"
            spanish=""
          />
          <SingleExample
            english="fourteen(14)"
            spanish=""
          />
          <SingleExample
            english="fifteen(15)"
            spanish=""
          />
          <SingleExample
            english="sixteen(16)"
            spanish=""
          />
          <SingleExample
            english="seventeen(17)"
            spanish=""
          />
          <SingleExample
            english="eighteen(18)"
            spanish=""
          />
          <SingleExample
            english="nineteen(19)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>20, 30, 40, 50, 60, 70, 80, 90
            La terminación es “-ty” y suena como “ti” en español.</p>
          <SingleExample
            english="twenty(20)"
            spanish=""
          />
          <SingleExample
            english="thirty(30)"
            spanish=""
          />
          <SingleExample
            english="forty(40)"
            spanish=""
          />
          <SingleExample
            english="fifty(50)"
            spanish=""
          />
          <SingleExample
            english="sixty(60)"
            spanish=""
          />
          <SingleExample
            english="seventy(70)"
            spanish=""
          />
          <SingleExample
            english="eighty(80)"
            spanish=""
          />
          <SingleExample
            english="ninety(90)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>Para formar decenas se añade un guión entre la decenas y el número.</p>
          <SingleExample
            english="twenty-one (21)"
            spanish=""
          />
          <SingleExample
            english="thirty-two(32)"
            spanish=""
          />
          <SingleExample
            english="fory-three(43)"
            spanish=""
          />
          <SingleExample
            english="fifty-four(54)"
            spanish=""
          />
          <SingleExample
            english="sixty-five(65)"
            spanish=""
          />
          <SingleExample
            english="seventy-six(76)"
            spanish=""
          />
          <SingleExample
            english="eighty-seven(87)"
            spanish=""
          />
          <SingleExample
            english="ninety-eight(98)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>Para formar centenas:</p>
          <SingleExample
            english="one hundred(100)"
            spanish=""
          />
          <SingleExample
            english="two hundred(200)"
            spanish=""
          />
          <SingleExample
            english="three hundred(300)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>Para unir las centenas con las decenas se unirán con “and”.</p>
          <SingleExample
            english="two hundred and fifty-eight(258)"
            spanish=""
          />
          <SingleExample
            english="three hundred and seventy-nine(379)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>miles:</p>
          <SingleExample
            english="One thousand(1,000)"
            spanish=""
          /><SingleExample
            english="Two thousand(2,000)"
            spanish=""
          />
          <p className='text-gray-600 font-bold text-xl'>millones:</p>
          <SingleExample
            english="One million(1,000,000)"
            spanish=""
          /><SingleExample
            english="Three million(3,000,000)"
            spanish=""
          />
          <CustomTitle title="Ordinal Numbers" titleSpanish="Los números ordinales" />
          <p>En español serían: primero, segundo, tercero, cuarto, quinto, sexto, séptimo, etc... Tenemos abreviaturas de los numeros ordinales las cuales se utilizan comunmente en fechas, por ejemplo [May 1st], significa [primero de Mayo]</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english=""
            spanish=""
          />
          <SingleExample
            english="1st"
            spanish="first (primero)"
          />
          <SingleExample
            english="2nd"
            spanish="second (segundo)"
          />
          <SingleExample
            english="3rd"
            spanish="third (tercero)"
          />
          <SingleExample
            english="4th"
            spanish="fourth (cuarto)"
          />
          <SingleExample
            english="5th"
            spanish="fifth"
          />
          <SingleExample
            english="6th"
            spanish="sixth"
          />
          <SingleExample
            english="7th"
            spanish="seventh"
          />
          <p className='text-gray-600 font-bold text-xl'>De acá en adelante solo añade th al final y ya es un ordinal: 10th: tenth, 11th: eleventh</p>
          <CustomTitle title="Date" titleSpanish="La fecha" />
          <SingleExample
            english="Day"
            spanish="día"
          />
          <SingleExample
            english="daily"
            spanish="diario"
          />
          <SingleExample
            english="today"
            spanish="hoy"
          />
          <SingleExample
            english="tonight"
            spanish="esta noche (la que esta por venir)"
          />
          <SingleExample
            english="last night"
            spanish="anoche (la noche pasada)"
          />
          <SingleExample
            english="yesterday"
            spanish="ayer"
          />
          <SingleExample
            english="tomorrow"
            spanish="mañana"
          />
          <SingleExample
            english="week"
            spanish="semana"
          />
          <SingleExample
            english="weekly"
            spanish="semanal"
          />
          <SingleExample
            english="weekend"
            spanish="fin de semana"
          />
          <SingleExample
            english="monthly"
            spanish="mensual"
          />
          <SingleExample
            english="year"
            spanish="año"
          />
          <SingleExample
            english="yearly"
            spanish="anual"
          />
          <SingleExample
            english="decade"
            spanish="década"
          />
          <SingleExample
            english="century"
            spanish="siglo"
          />
          <SingleExample
            english="calendar"
            spanish="calendario"
          />
          <SingleExample
            english="schedule"
            spanish="horario"
          />
          <CustomTitle title={"DAYS OF THE WEEK"} titleSpanish={"Los días de la semana"} />
          <SingleExample
            english="Monday"
            spanish="Lunes"
          />
          <SingleExample
            english="Tuesday"
            spanish="martes"
          />
          <SingleExample
            english="Wednesday"
            spanish="Miércoles"
          />
          <SingleExample
            english="Thursday"
            spanish="jueves"
          />
          <SingleExample
            english="Friday"
            spanish="viernes"
          />
          <SingleExample
            english="Saturday"
            spanish="sábado"
          />
          <SingleExample
            english="Sunday"
            spanish="Domingo"
          />
          <CustomTitle title={"MONTHS OF THE YEAR"} titleSpanish={"LOS MESES DEL AÑO"} />
          <SingleExample
            english="January"
            spanish="Enero"
          />
          <SingleExample
            english="February"
            spanish="Febrero"
          />
          <SingleExample
            english="March"
            spanish="Marzo"
          />
          <SingleExample
            english="April"
            spanish="Abril"
          />
          <SingleExample
            english="May"
            spanish="Mayo"
          />
          <SingleExample
            english="June"
            spanish="Junio"
          />
          <SingleExample
            english="July"
            spanish="Julio"
          />
          <SingleExample
            english="August"
            spanish="Agosto"
          />
          <SingleExample
            english="September"
            spanish="septiembre"
          />
          <SingleExample
            english="October"
            spanish="Octubre"
          />
          <SingleExample
            english="November"
            spanish="Noviembre"
          />
          <SingleExample
            english="December"
            spanish="Diciembre"
          />
          <CustomTitle title={"THE SEASONS"} titleSpanish={"LAS ESTACIONES DEL AÑO"} />
          <SingleExample
            english="Winter"
            spanish="Invierno"
          />
          <SingleExample
            english="Spring"
            spanish="Primavera"
          />
          <SingleExample
            english="Summer"
            spanish="Verano"
          />
          <SingleExample
            english="Autumn, fall(US)"
            spanish="otoño"
          />
          <CustomTitle title={"Time"} titleSpanish={"La hora"} />
          <p>En inglés lo más común es decir la hora tal cual con los numeros así:</p>
          <SingleExample
            english="ten twenty"
            spanish="10:20"
          />
          <SingleExample
            english="two fifteen"
            spanish="2:15"
          />
          <p>Para decir las horas en punto o :00 decimos:</p>
          <SingleExample
            english="nine o'clock"
            spanish="nueve en punto(9:00)"
          />
          <SingleExample
            english="twelve o'clock"
            spanish="doce en punto(12:00)"
          />
          <p>Para expresar mañana o tarde simplemente decimos "am" or "pm"</p>
          <SingleExample
            english="7am"
            spanish="it's seven am"
          />
          <SingleExample
            english="2pm"
            spanish="it's two pm"
          />
          <p className='text-gray-600 font-bold text-xl'>Preguntar y decir la hora</p>
          <SingleExample
            english="What time is it?"
            spanish="¿Qué hora es?"
          />
          <SingleExample
            english="What's the time?"
            spanish="¿Qué hora es?"
          />
          <SingleExample
            english="It's seven am"
            spanish="Son las siete am"
          />
          <SingleExample
            english="It's four pm"
            spanish="Son las cuatro de la tarde"
          />
          <p className='text-gray-600 font-bold text-xl'>Practiquemos un poco con este corto video</p>
          <ReactPlayer
            width={"100%"}
            className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
            url="https://www.youtube.com/watch?v=-kuqXcrlOkI"
            controls={true} />
          <UnitWithTroubleBtn unit={17} />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={17} />
          </div>
        </div>
      </div>
    </div>
  )
}
