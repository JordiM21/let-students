import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function BenefitsAccordion() {
  return (
    <div className="w-11/12 md:w-6/12 mx-auto pt-6 pb-12">
      <Accordion sx={{ backgroundColor: '#cac3a5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <p className="text-white text-2xl md:text-3xl font-extrabold">Actividades Fin de Semana</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white/80">
            El tutor asigna a los estudiantes una actividad adicional para el fin de semana, en la cual pondrá en práctica lo aprendido en la semana y evaluará sus habilidades
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#cac3a5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <p className="text-white text-2xl md:text-3xl font-extrabold">Reporte Mensual de Progreso</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white/80">
            Todos los padres reciben un reporte mensual en el que pueden visualizar el progreso de sus pequeños y ver las actividades realizadas a lo largo del mes con su respectiva calificación y comentarios personalizados del tutor
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#cac3a5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <p className="text-white  text-2xl md:text-3xl font-extrabold">Clases grabadas de integración</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white/80">
            Si el estudiante ha faltado a una clase, el profesor hará la grabación y la enviará el mismo día para que se ponga al día lo antes posible. Igualmente, como padre si te gustaría estar al tanto de las clases de tu hijo también puedes solicitar las grabaciones de las clases sin problema
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#cac3a5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <p className="text-white text-2xl md:text-3xl font-extrabold">Tutor Personal Asignado</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white/80">
            Asignaremos un tutor personal a cada estudiante que lo acompañará en su proceso de aprendizaje y se encargará de resolver todas las dudas que pueda tener. El tutor personal también estará disponible fuera de los horarios de clases para asistencia vía WhatsApp
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
