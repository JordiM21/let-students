import React from 'react'
import NextImage from 'next/image'
import cefr from '@/public/cefr.webp'
import week from '@/public/week.webp'
import Link from 'next/link'
import BenefitsAccordion from '../Accordion2'
import { useRouter } from 'next/router'

export default function MetodologiaView() {
    const router = useRouter()
  return (
    <div className="bg-[#186f5f]">
      <div id="hero" className="w-full py-24">
        <h1 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-[#F9F1D2] font-black">
          Metodología <br /> Aprendizaje
        </h1>
        <p className="text-md mx-auto max-w-[350px] md:text-xl drop-shadow-lg text-center text-[#F9F1D2]">
          La educación de calidad que tu hijo merece para ser bilingüe
        </p>
      </div>
      <div className="bg-[#F9F1D2] py-10 md:py-28 px-4 justify-center gap-4 md:gap-14 flex flex-wrap">
        <div className="max-w-[400px] md:max-w-[500px]">
          <h2 className="text-5xl text-center font-black text-[#1b725e]">Plan de Estudio</h2>
          <p className="text-center font-bold text-[#081325] my-4 opacity-80">
            Nuestro plan de estudio sigue el Marco Común Europeo de Referencia para las Lenguas (MCER), el estándar
            oficial para el aprendizaje de idiomas. Garantiza que los estudiantes desarrollen las competencias
            necesarias para comunicarse con fluidez y aprobar certificaciones internacionales como TOEFL, IELTS o
            Cambridge.
          </p>
          <Link
            target="_blank"
            href={'https://docs.google.com/document/d/1ClV-NbxxbiohEuE7dJseXm_muVdPxktV6_ZUeX84keI/edit?usp=sharing'}
          >
            <div className="p-3 mx-auto px-5 max-w-[260px] md:px-6 text-center my-12 md:py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95">
              <p className="font-black text-md md:text-lg text-white">Ver Pensum Academico</p>
            </div>
          </Link>
        </div>
        <div>
          <NextImage src={cefr} className="w-[350px] md:w-[450px] lg:w-[560px] rounded-md h-auto mx-auto" />
        </div>
      </div>
      <div className="bg-[#0c3c2e] py-10 md:py-28 px-4 justify-center gap-14 flex flex-wrap-reverse">
        <div>
          <NextImage src={week} className="w-[350px] md:w-[450px] lg:w-[560px] rounded-md h-auto mx-auto" />
        </div>
        <div className="max-w-[400px]">
          <h2 className="text-5xl text-center font-black text-[#F9F1D2]">1 Semana en LET</h2>
          <p className="text-center font-bold text-[#F9F1D2] my-4 opacity-80">
            Así se organiza una semana de estudio como miembro de LET Academy, buscamos dar variedad a las clases para
            que sean super divertidas para los estudiantes y para facilitar su proceso de aprendizaje <br /> <br /> Los
            horarios pueden variar y recomendamos verificar la disponibilidad con un asesor antes de formalizar la
            matrícula
          </p>
        </div>
      </div>
      <div className="bg-[#F9F1D2] pb-32 pt-10 px-4 justify-center gap-4 md:gap-14 flex flex-wrap">
        <div className="max-w-[400px] md:max-w-[1200px]">
          <h2 className="text-5xl text-center font-black text-[#1b725e]">Beneficios Adicionales</h2>
          <BenefitsAccordion />
          <div
            onClick={() => router.push('/Info')}
            className="p-3 mx-auto px-5 max-w-[250px] md:px-6 text-center rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
          >
            <a className="font-black text-md md:text-lg text-white">Solicitar Información</a>
          </div>
        </div>
      </div>
    </div>
  )
}
