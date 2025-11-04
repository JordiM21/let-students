import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function FaqAccordion({ textColor = 'white', bgColor = '#173330' }) {
  return (
    <div className="w-11/12 md:w-6/12 mx-auto pb-20">
      <Accordion sx={{ backgroundColor: bgColor }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p
            className={`${
              textColor === 'white' ? 'text-white' : `text-[${textColor}]`
            } text-2xl md:text-3xl font-extrabold`}
          >
            {' '}
            ¿Mi hijo necesita conocimientos previos?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={`${textColor === 'white' ? 'text-white/50' : 'opacity-70'}`}>
            ¡No! Al entrar en nuestro curso tu hijo tendrá la oportunidad de hacer un test de inglés gratis con el cual
            podremos conocer su nivel actual del idioma y asignarle en el nivel de estudio adecuado. <br /> ⭐ Así que
            si tu hijo no sabe nada de inglés, ¡no te preocupes!, ya que empezará desde el nivel más básico de
            introducción al idioma. Nuestro equipo de profesores experimentados le ayudarán en todo momento para que
            siga aprendiendo y ganando confianza al hablar en inglés.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: bgColor }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p
            className={`${
              textColor === 'white' ? 'text-white' : `text-[${textColor}]`
            } text-2xl md:text-3xl font-extrabold`}
          >
            {' '}
            ¿Es un Curso con clases Pre-Grabadas?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={`${textColor === 'white' ? 'text-white/50' : 'opacity-70'}`}>
            Absolutamente no. Nuestro programa se basa en conexiones reales y cada clase se realiza en vivo, 100%
            personalizada con el tutor y los estudiantes. De esta manera garantizamos el enfoque que tu hijo se merece.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: bgColor }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p
            className={`${
              textColor === 'white' ? 'text-white' : `text-[${textColor}]`
            } text-2xl md:text-3xl font-extrabold`}
          >
            ¿Es un Curso Exclusivo para Niños?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={`${textColor === 'white' ? 'text-white/50' : 'opacity-70'}`}>
            ¡Sí! Nuestro curso está especialmente diseñado para niños. Nos enfocamos en el aprendizaje infantil con
            clases dinámicas, divertidas y adaptadas a su edad. <br /> 👩‍🏫 Además, todos nuestros profesores son
            profesionales en educación y expertos en pedagogía infantil, lo que garantiza una enseñanza efectiva y un
            ambiente seguro donde cada niño aprende con confianza y entusiasmo.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: bgColor }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <p
            className={`${
              textColor === 'white' ? 'text-white' : `text-[${textColor}]`
            } text-2xl md:text-3xl font-extrabold`}
          >
            ¿Cuánto tiempo dura el Programa?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className={`${textColor === 'white' ? 'text-white/50' : 'opacity-70'}`}>
            El programa completo tiene una duración de 20 meses, divididos en 10 niveles de aproximadamente 2 meses cada
            uno. 🗓️ Al finalizar, tu hijo realizará un examen final para evaluar todo lo aprendido y recibirá un
            certificado con validez internacional, reconociendo su progreso y dominio del idioma. 🌎
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
