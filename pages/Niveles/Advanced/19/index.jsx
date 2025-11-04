import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest'
import { useRouter } from 'next/router'
import { Breadcrumbs, Link, Typography } from '@mui/material'

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Inicio
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/Niveles">
      Niveles
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Advanced">
      Advanced
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 19
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">PRONOUNS & DETERMINERS - LESSON 19</p>
        <CustomTitle title={'PRONOUNS & DETERMINERS '} titleSpanish={'Pronombres y Determinantes'} />
        <div className="my-4">
          <div className="space-y-2">
            <CustomTitle
              title={'Either vs. Neither'}
              titleSpanish={
                'Podemos utilizar “either” y “neither” como pronombres, determinantes o adverbios. A continuación tienes una explicación de las diferencias entre estas dos palabras.'
              }
            />
            <CustomTitle
              title={'Either'}
              titleSpanish={
                '“Either” implica una elección entre dos posibles opciones. Ten en cuenta que la preposición “or” se utiliza entre estas dos opciones.'
              }
            />
            <SingleExample
              english="We can go to either the beach or the swimming pool."
              spanish="Podemos ir a la playa o la piscina."
            />
            <SingleExample
              english="Either we wait for the rain to stop or we must change our plans."
              spanish="Esperamos que pare de llover o debemos cambiar nuestros planes."
            />
            <CustomTitle
              title={'Neither'}
              titleSpanish={
                '“Neither” indica el acuerdo entre dos ideas negativas. Con “neither”, las dos ideas están separadas por la preposición “nor”.'
              }
            />
            <SingleExample
              english="Neither Henry nor Chris want to go to the beach."
              spanish="Ni Henry ni Chris quieren ir a la playa."
            />
            <SingleExample
              english="Neither the school nor the parents want to take responsibility for the problem."
              spanish="Ni la escuela ni los padres quieren asumir la responsabilidad del problema."
            />
            <CustomTitle
              title={'Both'}
              titleSpanish={'Cuando queremos indicar un acuerdo entre dos ideas afirmativas, utilizamos “both”.'}
            />
            <SingleExample
              english="Both my parents work at the hospital."
              spanish="Mis padres trabajan los dos en el hospital."
            />
            <SingleExample
              english="Both teams are preparing for the championship."
              spanish="Ambos equipos se están preparando para el campeonato."
            />
            <CustomTitle
              title={'Each vs. Every'}
              titleSpanish={
                '“Each” y “every” son dos palabras que con frecuencia confunden los estudiantes de inglés. Ambas se traducen como “cada” y a veces, pueden significar lo mismo. Sin embargo, en otras ocasiones, hay una diferencia sutil en el sentido. Las dos se utilizan como determinantes para especificar cantidad, pero sólo “each” se puede utilizar como pronombre.'
              }
            />
            <CustomTitle
              title={'Each'}
              titleSpanish={
                '“Each” enfatiza cada uno individualmente o por separado, como “uno por uno”. “Each” se puede utilizar delante de un verbo y se usa cuando se refiere a dos cosas o personas.'
              }
            />
            <SingleExample
              english="Each student will receive a different theme for their final project."
              spanish="Cada estudiante recibirá un tema diferente para su proyecto final."
            />
            <SingleExample
              english="We each took turns making dinner while our mother was away."
              spanish="Cada uno de nosotros nos turnamos para hacer la cena, mientras que nuestra madre estaba ausente."
            />
            <SingleExample english="There are holes in each sock." spanish="Hay agujeros en cada calcetín." />
            <small className="text-sm opacity-60">
              “Each” se puede usar con la preposición “of”. En esta construcción, “each of” va seguida por un pronombre
              o un sustantivo con un determinante.
            </small>
            <SingleExample
              english="Each of them is expected to do well on the exam."
              spanish="Cada uno de ellos se espera hacerlo bien en el examen."
            />
            <SingleExample
              english="Each of his sisters received a new car for their graduation, so he expects one too."
              spanish="Cada una de sus hermanas recibió un coche nuevo para su graduación, por lo que él espera uno también."
            />
            <SingleExample
              english="The whole office is playing the lottery this week and each has an equal chance of winning."
              spanish="Toda la oficina juega a la lotería esta semana y cada uno tiene la misma oportunidad de ganar."
            />
            <SingleExample
              english="I like both dresses, but each costs more than I want to spend."
              spanish="Me gustan los dos vestidos, pero cada uno cuesta más de lo que quería gastar."
            />
            <CustomTitle
              title={'Every'}
              titleSpanish={
                'Mediante el uso de “every”, destacamos el grupo y sólo se puede utilizar con grupos de tres o más personas o cosas. “Every” se utiliza para generalizar o para expresar la frecuencia con que algo suceda y siempre va seguida de un sustantivo.'
              }
            />
            <SingleExample
              english="Every student will be given a project to complete by the end of the semester."
              spanish="Cada estudiante recibirá un proyecto para completar al final del semestre."
            />
            <SingleExample
              english="I don’t know, but every summer it just seems to get hotter and hotter."
              spanish="No sé, pero cada verano parece más y más caluroso."
            />
            <SingleExample
              english="We have practice every Monday, Wednesday and Friday during the school year."
              spanish="Tenemos entrenamientos todos los lunes, miércoles y viernes durante el año escolar."
            />
            <SingleExample
              english="They suggest you have your teeth cleaned once every six months."
              spanish="Sugieren que hagas una limpieza de boca una vez cada seis meses."
            />
            <SingleExample
              english="I have every reason to believe that it will happen."
              spanish="Tengo muchas razones para creer que ocurrirá."
            />
            <SingleExample english="Almost every answer was incorrect." spanish="Casi cada respuesta era incorrecta." />
            <SingleExample
              english="We go to California to visit our grandparents nearly every summer."
              spanish="Vamos a California para visitar a nuestros abuelos casi todos los veranos."
            />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={19} />
          </div>
        </div>
      </div>
    </div>
  )
}
