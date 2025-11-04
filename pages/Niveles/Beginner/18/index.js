import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest'
import { useRouter } from 'next/router'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import VideoPlayer from '@/components/VideoPlayer'

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Inicio
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/Niveles">
      Niveles
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Beginner">
      Beginner
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 18
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Useful Vocabulary - LESSON 18</p>
      <CustomTitle title="Useful Vocabulary" titleSpanish="Vocabulario útil" />
      <VideoPlayer url={'https://www.youtube.com/watch?v=EQsQeBsB6YI'} />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90">
          Veamos este video con conversaciones simples y te iremos explicando debajo cada frase
        </p>
        <div className="space-y-4">
          <SingleExample english="Mess" spanish="desorden / desastre" />
          <SingleExample english="Tidy" spanish="ordenar / ordenado" />

          <SingleExample english="This house is a mess" spanish="Esta casa es un desastre" />
          <SingleExample english="Where are you going?" spanish="¿Donde estás andando?" />
          <SingleExample english="better" spanish="mejor" />
          <SingleExample english="Hairdryer" spanish="Secador de cabello" />
          <SingleExample english="bathroom" spanish="baño" />
          <SingleExample english="stepped" spanish="pisar (step -> paso)" />
          <SingleExample english="stairs" spanish="escaleras" />
          <SingleExample english="come back" spanish="regresar" />
          <SingleExample english="belong" spanish="pertenecer" />
          <SingleExample english="magazines" spanish="revistas" />
          <SingleExample english="clean" spanish="limpiar" />
          <SingleExample english="forget" spanish="olvidar" />
          <SingleExample english="Bank" spanish="Banco" />
          <SingleExample english="Job" spanish="Trabajo" />
          <SingleExample english="Cash" spanish="dinero" />
          <SingleExample english="hard" spanish="dificíl" />
          <SingleExample english="tired" spanish="cansado" />
          <SingleExample english="stressful" spanish="estresante" />
          <SingleExample english="carefully" spanish="cuidadosamente" />
          <SingleExample english="risk" spanish="riesgo" />
          <SingleExample english="line" spanish="fila" />
          <SingleExample english="impatient" spanish="impaciente" />
          <SingleExample english="boring" spanish="aburridor" />
          <SingleExample english="reward" spanish="premio" />
          <SingleExample english="fair" spanish="justo" />
          <SingleExample english="together" spanish="juntos" />
          <SingleExample english="take a shower" spanish="bañarse" />
          <SingleExample english="hurry" spanish="apresurado / apurarse" />
          <SingleExample english="I agree" spanish="Estoy de acuerdo" />
          <SingleExample english="join" spanish="integrarse, entrar" />
          <SingleExample english="injury" spanish="lesión" />
          <SingleExample english="dance" spanish="bailar" />
          <SingleExample english="backyard" spanish="patio trasero" />
          <SingleExample english="till/until" spanish="hasta" />
          <SingleExample english="get up / wake up" spanish="levantarse / alzarse de la cama" />
          <SingleExample english="Usually" spanish="usualmente" />
          <SingleExample english="typical" spanish="típico" />
          <SingleExample english="lunch" spanish="almuerzo" />
          <SingleExample english="healthy" spanish="saludable / sano" />
          <SingleExample english="cook" spanish="cocinar" />
          <p>
            ¿Que tal estuvo? tranquilo, si no entendiste el 100% del vide esta bien! es normal, lo importante es que lo
            hayas visto todo, como ves tampoco están todas las traducciones acá, seguramente los verás en unos días con
            tu Tutor.
          </p>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
