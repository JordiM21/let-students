import { CustomSubTitle, CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import VideoPlayer from '@/components/VideoPlayer';

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
      Unit 6
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Modal Perfects - LESSON 6</p>
        <CustomTitle title={"Modal Perfects"} titleSpanish={"LOS MODALES PERFECTOS"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=OVV9y9JnZx0"} />
        <p className='font-bold text-gray-700'>Los verbos modales, como vimos en la lección anterior, expresan posibilidad o probabilidad. Cuando se utilizan con la forma infinitiva del perfecto (“have” + participio pasado), los verbos modales indican especulación sobre cosas en el pasado.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomSubTitle title={"Must have"} />
            <small className='text-sm opacity-60'>“Must have” se usa para expresar una conclusión lógica sobre algo que ocurrió en el pasado. No estamos seguros de lo que sucedió exactamente, pero basándonos en las pruebas, podemos llegar a alguna conclusión. A diferencia de “might have” o “may have”, como veremos más tarde, “must have” expresa más certeza.</small>
            <SingleExample
              english="The lights are off. They must have gone out."
              spanish="Las luces están apagadas. Se deben haber ido."
            />
            <SingleExample
              english="I never see John and Claire together anymore. They must have separated."
              spanish="Ya nunca veo a John y Claire juntos. Se deben haber separado."
            />
            <SingleExample
              english="I know you love chocolate. It must have been difficult to say “no” to that piece of cake."
              spanish="Sé que te gusta el chocolate. Debe de ser difícil para ti decir “no” a un pedazo de pastel."
            />
            <SingleExample
              english="John never called you last night? He must have been working late."
              spanish="¿John no te llamó anoche? Debe haber trabajado hasta tarde."
            />
            <SingleExample
              english="
Frank failed the exam. He must not have been paying attention in class."
              spanish="Frank suspendió el examen. No debió haber estado atento en la clase."
            />
            <CustomSubTitle title={"May have / Might have"} />
            <small className='text-sm opacity-60'>“May have” y “might have” se utilizan para expresar posibilidad en el pasado. El uso de estos dos modales también expresa incertidumbre.</small>
            <SingleExample
              english="I think it may have worked, but we gave up too soon."
              spanish="Creo que podría haber funcionado, pero nos rendimos demasiado pronto."
            />
            <SingleExample
              english="They might have won if their star player hadn’t been injured."
              spanish="Ellos podrían haber ganado si su mejor jugador no se hubiera lesionado."
            />
            <SingleExample
              english="I don’t know, it might have been different if you were there."
              spanish="No sé, podría haber sido diferente si tú hubieras estado allí."
            />
            <CustomSubTitle title={"Can’t have"} />
            <small className='text-sm opacity-60'>“Can’t have” se utiliza de una manera similar a “must have”, pero en la forma negativa. Podemos utilizar “can’t have” cuando estamos bastante seguros de que algo no ocurrió o que no fue verdad en el pasado.</small>
            <SingleExample
              english="
I know you love chocolate. It can’t have been easy to say “no” to that piece of cake."
              spanish="Sé que te gusta el chocolate. No debió haber sido fácil para ti decir “no” a ese pedazo de pastel."
            />
            <SingleExample
              english="
Frank failed the exam. He can’t have been paying attention in class."
              spanish="Frank suspendió el examen. No debió haber estado atento en la clase."
            />
            <SingleExample
              english="They had a lot of work to do and little time. They can’t have finished everything."
              spanish="Tenían mucho trabajo que hacer y poco tiempo. No podrían haber terminado todo."
            />
            <CustomSubTitle title={"Could have"} />
            <small className='text-sm opacity-60'>“Couldn’t have” se puede usar en lugar de “can’t have”.</small>
            <SingleExample
              english="I know you love chocolate. It couldn’t have been easy to say “no” to that piece of cake."
              spanish="Sé que te gusta el chocolate. No debió haber sido fácil para ti decir “no” a ese pedazo de pastel."
            />
            <SingleExample
              english="Frank failed the exam. He couldn’t have been paying attention in class."
              spanish="Frank suspendió el examen. No debió haber estado atento en la clase."
            />
            <SingleExample
              english="They had a lot of work to do and little time. They couldn’t have finished everything."
              spanish="Tenían mucho trabajo que hacer y poco tiempo. No podrían haber terminado todo."
            />
            <small className='text-sm opacity-60'>“Could have” también se utiliza para expresar que algo fue posible en el pasado pero en realidad no pasó.</small>
            <SingleExample
              english="If it hadn’t stopped raining, the party could have been a disaster."
              spanish="Si no hubiera parado de llover, la fiesta podría haber sido un desastre."
            />
            <SingleExample
              english="
She could have run faster, but she wanted to save her energy."
              spanish="Ella podría haber corrido más rápido, pero quería ahorrar energía."
            />
            <SingleExample
              english="We could have bought a new car, but we decided to use the money to go on vacation."
              spanish="Podríamos haber comprado un coche nuevo, pero decidimos usar el dinero para ir de vacaciones."
            />
            <CustomSubTitle title={"Should have / Ought to have"} />
            <small className='text-sm opacity-60'>“Should have” y “ought to have” se utiliza cuando algo no ocurrió, pero habría sido mejor si hubiera ocurrido. En la negativa, estos referentes indican que algo sucedió, pero habría sido mejor que no fuese así.</small>
            <SingleExample
              english="I told you, you should have studied more!"
              spanish="Te lo dije, deberías haber estudiado más."
            />
            <SingleExample
              english="Ben ought to have gone to the doctor sooner. Now they say it will be a month before he is fully recovered."
              spanish="Ben debería haber ido al médico antes. Ahora dicen que tardará un mes más en recuperarse por completo."
            />
            <SingleExample
              english="We should have left earlier. Now we are going to be late."
              spanish="Deberíamos haber salido más temprano. Ahora vamos a llegar tarde."
            />
            <SingleExample
              english="I shouldn’t have eaten that last cookie."
              spanish="No debería haber comido la última galleta."
            />
            <SingleExample
              english="She shouldn’t have been angry, it wasn’t your fault."
              spanish="No debería haberse enfadado, no fue culpa tuya."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
