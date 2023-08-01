import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';

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
      href="/Niveles/Advanced"
    >
      Advanced
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 15
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Delexical Verbs - LESSON 15</p>
        <CustomTitle title={"Delexical Verbs"} titleSpanish={"DELEXICAL VERBS"} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Delexical verbs son verbos comunes como “have”, “take”, “make” o “give” que cuando se usan con sustantivos particulares tienen muy poco significado propio. En estas estructuras la mayor parte del significado se encuentra en el sustantivo, no en el verbo. En la mayoría de casos, hay un verbo que tiene un significado similar o igual a la estructura “delexical”. En muchos casos, hay verbos y estructuras equivalentes en español (ver los ejemplos). Estas estructuras son muy comunes en inglés y una comprensión de ellas enriquecerá la fluidez de la lengua.</small>
            <CustomTitle title={"Have"} titleSpanish={"“Have” indica posesión, pero cuando se utiliza en estructuras “delexical”, el sentido cambia. Podemos usar “have” cuando hablamos de las comidas, las conversaciones, los desacuerdos, el lavado o los descansos."} />
            <SingleExample
              english="We have breakfast every morning at 8 o’clock."
              spanish="Desayunamos cada mañana a las 8."
            />
            <SingleExample
              english="Lets have a drink!"
              spanish="¡Tomemos una copa!"
            />
            <SingleExample
              english="They had an argument last night."
              spanish="Tuvieron una discusión anoche."
            />
            <SingleExample
              english="John had a hot shower after his day out in the cold."
              spanish="John tuvo una ducha caliente después de un día en el frío."
            />
            <SingleExample
              english="I’m not happy. We need to have a conversation."
              spanish="No estoy contenta. Necesitamos tener una conversación."
            />
            <CustomTitle title={"Take"} titleSpanish={"“Take”, como “have”, se usa con lavado o descansos, así como varios otros sustantivos."} />
            <SingleExample
              english="I need to take a long, hot bath."
              spanish="Necesito tomar un baño largo y caliente."
            />
            <SingleExample
              english="Take a break, you look exhausted."
              spanish="Toma un descanso, te veo agotado."
            />
            <SingleExample
              english="Nancy doesn’t like to take risks."
              spanish="A Nancy no le gusta correr riesgos."
            />
            <SingleExample
              english="
Can you take care of my dogs while I am on vacation?"
              spanish="¿Puedes cuidar de mis perros mientras esté de vacaciones?"
            />
            <CustomTitle title={"Make"} titleSpanish={"Utilizamos “make” con planes, viajes y en referencia a hablar."} />
            <SingleExample
              english="Have you made the arrangements for your trip yet?"
              spanish="¿Has hecho los arreglos para tu viaje?"
            />
            <SingleExample
              english="My parents made a quick visit to the British Museum when they were in London."
              spanish="Mis padres hicieron una visita rápida al Museo Británico cuando estaban en Londres."
            />
            <SingleExample
              english="Helen made a very important point in the meeting this morning."
              spanish="Helen hizo una observación muy importante en la reunión esta mañana."
            />
            <CustomTitle title={"Give"} titleSpanish={"“Give” se utiliza con ruidos, expresiones faciales, cariño o en referencia a golpear y hablar."} />
            <SingleExample
              english="Give me a shout when you are ready to go."
              spanish="Dame un toque cuando estés listo para ir."
            />
            <SingleExample
              english="Please give Sally a big hug for me!"
              spanish="Por favor, dale a Sally un gran abrazo de mi parte."
            />
            <SingleExample
              english="My dad always gives me good advice."
              spanish="Mi padre siempre me da buenos consejos."
            />
            <SingleExample
              english="Go ahead, give it a kick!"
              spanish="Venga, dale una patada."
            />
            <CustomTitle title={"Go"} titleSpanish={"“Go” se utiliza en general para las actividades comunes que implican movimiento. Utilizamos la estructura “go for a” cuando el sustantivo no termina en “-ing”."} />
            <SingleExample
              english="Beth goes swimming every day."
              spanish="Beth va a nadar todos los días."
            />
            <SingleExample
              english="Nina doesn’t like to go shopping."
              spanish="A Nina no le gusta ir de compras."
            />
            <SingleExample
              english="It’s a beautiful day, we should go for a walk."
              spanish="Es un día hermoso, deberíamos dar un paseo."
            />
            <CustomTitle title={"Do"} titleSpanish={"“Do” se utiliza a menudo con las actividades relacionadas con trabajo. También utilizamos “do” cuando la acción es evidente."} />
            <SingleExample
              english="Can you please do the washing?"
              spanish="¿Puedes hacer el lavado por favor?"
            />
            <SingleExample
              english="You rest, I’ll do the cooking today."
              spanish="Descansa, haré la comida hoy."
            />
            <SingleExample
              english="Let me help you do your hair."
              spanish="Déjame ayudarte a arreglar tu cabello."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={15} />
          </div>
        </div>
      </div>
    </div>
  )
}
