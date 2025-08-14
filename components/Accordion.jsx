import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqAccordion() {
  return (
    <div className='w-11/12 md:w-6/12 mx-auto pb-20'>
      <Accordion  sx={{ backgroundColor: '#173330'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-white text-2xl md:text-3xl font-extrabold'>¿Cuáles son los Beneficios para Padres?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-white/50'>Tenemos muchos beneficios para los representantes, uno de ellos es el reporte mensual de progreso que recibe cada uno directamente en su WhatsApp, donde específicamos en detalle las mejoras y cosas a trabajar del estudiante.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ backgroundColor: '#173330'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-white text-2xl md:text-3xl font-extrabold'>¿Es un Curso con clases Pre-Grabadas?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-white/50'>Absolutamente No, nuestro programa se basa en conexiones reales y cada clase se realiza en vivo es 100% personalizada con el tutor y el estudiante, de esta manera garantizamos el enfoque que tu hijo se merece.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ backgroundColor: '#173330'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-white  text-2xl md:text-3xl font-extrabold'>¿Cuáles son los horarios de estudio?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-white/50'>Así se organiza la mayoría de estudiantes: Lunes, Miércoles y Viernes. Este es el horario recomendado para todos los estudiantes y normalmente hacemos las clases en las tardes para que no interfiera con sus clases, pero también tenemos turno en la mañana y fines de semana!</p>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ backgroundColor: '#173330'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-white text-2xl md:text-3xl font-extrabold'>¿Cual es la duración de las clases?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-white/50'>Cada clase tiene una duración de 45 Minutos en el Plan Standard y 90 Minutos en el Plan Intensivo</p>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ backgroundColor: '#173330'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-white text-2xl md:text-3xl font-extrabold'>¿Cuanto tiempo dura el Programa?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-white/50'>El Programa completo tiene una duración de 20 Meses ya que está compuesto de 10 Niveles y cada Nivel es de aproximadamente 2 meses. Al final de este periodo harás un exámen final donde evaluaremos tus conocimientos y recibirás un certificado con validez internacional</p>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ backgroundColor: '#173330'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className='text-white text-2xl md:text-3xl font-extrabold'>¿Mi hijo necesita conocimientos previos?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='text-white/50'>De ninguna manera, incluso es mejor si iniciamos desde cero, esto nos permitirá establecer correctamente las bases de la gramática inglesa y evitaremos procesos de aprendizaje erróneos en el pasado.</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
