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
      Unit 4
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>REFLEXIVE - LESSON 4</p>
      <CustomTitle title="Reflexive Pronouns" titleSpanish="LOS PRONOMBRES REFLEXIVOS" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=ZBxF4wlXR0c"
        controls={true} />
      <p className='font-bold text-gray-700'>Los pronombres reflexivos se usan cuando el sujeto y el complemento del verbo son lo mismo. El sujeto hace la acción a sí mismo. En inglés no se utilizan los verbos reflexivos tanto como en español. En vez de verbos reflexivos, utilizamos uno de los siguientes pronombres reflexivos.</p>
      <div className='my-4'>
        <p className='text-[var(--color2)] font-bold text-lg opacity-75'>EXAMPLES:</p>
        <div className='space-y-4'>
          <Nota text="Esto puede ser un poco confuso para ti al inicio debido a que en español no existe esta estructura porque sería redondante, es decir: en español aunque es correcto, suena redondante decir = [¡No te quemes a ti mismo!], en cambio se usa solamente [No te quemes] en cambio en inglés debemos usar el [yourself] para indicar que es algo que te estás haciendo a ti mismo [tu solo]" />
          <DoubleExample
            english1="myself"
            spanish1="yo mismo, a mí"
            english2="I saw it myself"
            spanish2="Yo mismo lo vi"
          />
          <DoubleExample
            english1="yourself"
            spanish1="tú mismo (a tí), usted mismo (a usted)"
            english2="Don't burn yourself!"
            spanish2="No te quemes / No se queme [a usted mismo]"
          />
          <DoubleExample
            english1="himself"
            spanish1="él mismo, a sí mismo"
            english2="He hurt himself."
            spanish2="Se hizo daño."
          />
          <DoubleExample
            english1="herself"
            spanish1="ella misma, a sí misma"
            english2="She did it herself"
            spanish2="Lo hizo ella misma."
          />
          <DoubleExample
            english1="itself"
            spanish1="él mismo, a sí mismo"
            english2="The cat scratched itself."
            spanish2="El gato se rascó."
          />
          <DoubleExample
            english1="ourselves"
            spanish1="nosotros mismos"
            english2="We made it ourselves."
            spanish2="Lo hemos hecho nosotros mismos."
          />
          <DoubleExample
            english1="yourselves"
            spanish1="vosotros mismos, ustedes mismos"
            english2="Did you paint the house yourselves?"
            spanish2="¿Pintasteis la casa vosotros mismos? / ¿Pintaron la casa ustedes mismos?"
          />
          <DoubleExample
            english1="themselves"
            spanish1="ellos mismos"
            english2="They were speaking to themselves."
            spanish2="Ellos hablaban consigo mismos."
          />
          <p className='font-bold opacity-75 text-sm'>Usamos “by” + el pronombre reflexivo para indicar “solo”. A menudo cuando queremos enfatizar que una acción la realizamos sin ninguna persona o ayuda.</p>
          <SingleExample english="
          I often prefer to be by myself." spanish="A menudo prefiero estar solo." />
          <SingleExample english="
          She learned to read all by herself." spanish="Ella aprendió a leer por sí misma." />
          <SingleExample english="I built my house by myself" spanish="Yo construí mi casa solo [yo mismo]" />
          <SingleExample english="I found my dog by myself" spanish="Conseguí mi perro por mi cuenta [yo solo]" />
          <SingleExample english="How did he hurt himself?" spanish="¿Como se cortó? [el mismo]" />
          <p className='text-[var(--color2)] font-bold text-lg opacity-75'>MORE EXAMPLES:</p>
          <SingleExample english="I blame myself." spanish="Me culpo [a mi mismo]" />
          <SingleExample english="We painted the house ourselves." spanish="Pintamos la casa nosotros mismos." />
          <SingleExample english="What a great party! Did you prepare everything yourself?" spanish="¡Qué gran fiesta! ¿Lo preparaste todo tú mismo?" />
          <SingleExample english="I cooked all of this by myself" spanish="Yo preparé todo esto yo solo [por mi cuenta]" />
        </div>
        <UnitWithTroubleBtn unit={4} />
        <div className='my-8 rounded-md p-4 bg-blue-200 '>
          <UnitTest level={"Beginner"} unit={4} />
        </div>
      </div>
    </div>
  )
}
