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
      Unit 12
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>MODAL VERBS - LESSON 12</p>
      <CustomTitle title="Modal Verbs" titleSpanish="LOS VERBOS MODALES" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=4GMU08J98MQ"
        controls={true} />
      <div className='my-4'>
        <p className='font-bold text-sm opacity-90'>Los verbos modales son verbos auxiliares que no pueden funcionar como un verbo principal, a diferencia de los verbos auxiliares “be”, “do” y “have” que sí pueden funcionar como un verbo principal. Los verbos modales expresan modalidad, habilidad, posibilidad, necesidad u otra condición. Los utilizamos para el futuro y el condicional.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>CAN</p>
          <SingleExample
            english="I Can speak two languages"
            spanish="Puedo hablar cinco idiomas."
          />
          <SingleExample
            english="We can work late tonight if you need us."
            spanish="Podemos trabajar hasta tarde esta noche si nos necesitas."
          />
          <SingleExample
            english="Bill and Tom can’t help you."
            spanish="Bill y Tom no pueden ayudarte."
          />
          <SingleExample
            english="The restaurant can be expensive if you drink a lot of wine."
            spanish="El restaurante puede ser caro si bebes mucho vino."
          />
          <SingleExample
            english="It can be dangerous to drive if you are tired."
            spanish="Conducir puede ser peligroso si estás cansado."
          />
          <Nota text="En frases interrogativas, el uso de “can” puede solicitar permiso o preguntar sobre posibilidades. SI SE INVIERTE CON EL SUJETO (al igual que el [do] que se usa: do you want water? / ¿Quieres agua? )" />
          <SingleExample
            english="Can i go to the bathroom?"
            spanish="¿Puedo ir al baño?"
          />
          <SingleExample
            english="Can you help me?"
            spanish="¿Puedes (tú) ayudarme (a mi)?"
          />
          <SingleExample
            english="Can they work late tonight?"
            spanish="¿Pueden trabajar hasta tarde esta noche?"
          />
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>MAY</p>
          <p>El mismo uso de "can" pero, se utiliza en ocasiones mas formales para pedir permisos y para expresar posibilidades de las cuales no estamos muy seguros en el futuro</p>
          <SingleExample
            english="It may rain later"
            spanish="Puede que llueva mas tarde (No estamos seguros)"
          />
          <SingleExample
            english="You may be on a problem"
            spanish="Podrías estar en un problema (Posibilidad)"
          />
          <p>Uso con permisos o instrucciones:</p>
          <SingleExample
            english="Mom, may i go out?"
            spanish="Madre, ¿puedo salir?"
          />
          <SingleExample
            english="Yo may use your phone now"
            spanish="Pueden usar sus teléfonos ahora"
          />
          <SingleExample
            english="May i have a glass of water?"
            spanish="¿Podría tomar un vaso de agua?"
          />
          <Nota text="En el ejemplo anterior imaginamos que estamos en una casa ajena que no conocemos y queremos ser muy formales al momneto de pedir agua, sin embargo tranquilamente podríamos decir [can i have a glass of water?] pero no sería tan formal" />
          <SingleExample
            english="May i go to the bathroom?"
            spanish="¿Podría ir al baño? (Muy formal)"
          />
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>COULD</p>
          <p>El uso principal de could es el pasado de CAN entonces, si CAN = Puedo / COULD = Podía/Pude</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="Joe could run very fast"
            spanish="Joe podía correr muy rapido (antes, ahora no)"
          />
          <SingleExample
            english="I could not/couldn't sleep last night"
            spanish="Yo no pude dormir anoche"
          />
          <p>Tambien usamos could en frases interrogativas para preguntar posibilidades y solicitar permisos</p>
          <SingleExample
            english="Could you pass the salt please?"
            spanish="¿Podrías pasarme la sal por favor?"
          />
          <SingleExample
            english="Could you help me?"
            spanish="¿Podrías ayudarme?"
          />
          <SingleExample
            english="Could i be wrong?"
            spanish="¿Podría estar equivocado?"
          />
          <SingleExample
            english="Could you teach me math?"
            spanish="¿Podrías enseñarme matemáticas?"
          />
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>MIGHT</p>
          <p>Sinónimo de "may" para indicar posibilidades (Es mucho mas comun en Reino Unido que en Estados unidos) y también es muy formal</p>
          <SingleExample
            english="it might rain later."
            spanish="puede que llueva mas tarde"
          />
          <SingleExample
            english="it might be a good idea"
            spanish="eso puede ser una buena idea"
          />
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>SHOULD</p>
          <p>“Should” indica una obligación o recomendación. Refleja una opinión sobre lo que es correcto. Se traduce como el condicional de “deber” en español.</p>
          <SingleExample
            english="I should call my parents more often."
            spanish="Debería llamar a mis padres más a menudo."
          />
          <SingleExample
            english="You shouldn’t work so hard."
            spanish="No debería trabajar tan duro."
          />
          <SingleExample
            english="They should practice more if they want to win the championship."
            spanish="Deberían practicar más si quieren ganar el campeonato."
          />
          <SingleExample
            english="Should we leave a tip?"
            spanish="¿Deberíamos dejar una propina?"
          />
          <SingleExample
            english="Should I have the steak or the chicken?"
            spanish="¿Debería comer el bistec o el pollo?"
          />
          <SingleExample
            english="Where should they meet you?"
            spanish="¿Dónde deberían encontrarte?"
          />
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>“Must” indica una obligación, prohibición o necesidad. También puede emplearse “have to” (tener que) en frases afirmativas.</p>
          <SingleExample
            english="You must [have to] read this book, it’s fantastic."
            spanish="Tienes que leer este libro, es fantástico."
          />
          <SingleExample
            english="You must [have to] brush your teeth two times a day."
            spanish="Tienes que cepillarte los dientes dos veces al día."
          />
          <SingleExample
            english="We must [have to] leave now or we will be late."
            spanish="Tenemos que irnos ahora o llegaremos tarde."
          />
          <SingleExample
            english="You must not drink and drive."
            spanish="No puedes beber y conducir."
          />
          <SingleExample
            english="When must we meet you?"
            spanish="¿Cuándo debemos quedar? "
          />
          <p>También se puede usar “must” para indicar probabilidad o asumir algo. ¡Al igual que en español!</p>
          <SingleExample
            english="John’s not here. He must be sick because he never misses class."
            spanish="John no esta aquí. Debe estar enfermo porque nunca pierde clases."
          />
          <SingleExample
            english="It must be difficult to learn a new language as an adult."
            spanish="Debe ser difícil aprender un idioma como adulto."
          />
          <p className='text-[var(--blueDarkbg)] text-3xl font-bold'>WOULD</p>
          <p>Se usa “would” para declarar una preferencia y para preguntar por algo educadamente. </p>
          <SingleExample
            english="She would like to go to New York someday."
            spanish="Le gustaría ir a Nueva York algún día."
          />
          <SingleExample
            english="I would like a beer "
            spanish="Me gustaría una cerveza"
          />
          <SingleExample
            english="Would you like some coffee?"
            spanish="¿Le gustaría un cafe?"
          />
          <Nota text="Una forma sencilla de entender el would es así: en español se traduce como el [ía] al final del verbo ejemplo: gustaría = would like, iría = would go, dormiría = would sleep, estudiaría = would study. Entonces sabemos que el would va siempre antes de un verbo y lo convierte in ría. Facilísimo, no?" />
          <SingleExample
            english="Would you help me please?"
            spanish="¿Me ayudarías por favor?"
          />
          <SingleExample
            english="
When would you like to go to the movies?"
            spanish="¿Cuándo te gustaría ir al cine?"
          />

          <UnitWithTroubleBtn unit={12} />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={12} />
          </div>
        </div>
      </div>
    </div>
  )
}
