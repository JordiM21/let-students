import { DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function index() {

  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');
  const [res3, setRes3] = useState('');
  const [res4, setRes4] = useState('');
  const [res5, setRes5] = useState('');

  return (
    <div className='mx-6'>
      <p>Pronouns - LESSON 1.1</p>
      <h1>Personal Pronouns</h1>
      <p>(Los pronombres personales)</p>
      <ReactPlayer

        width={"100%"}
        className="max-w-2xl mx-auto"
        url="https://www.youtube.com/watch?v=cVkSndpZtN0"
        controls={false} />
      <p>Dentro de los pronombres personales, la lengua inglesa distingue entre pronombres en función de sujeto (subject pronouns) y pronombres en función de objeto (object pronouns).</p>
      <div>
        <small>Pronombres (En función de sujeto) osea que, ¡reemplazan a el sujeto!</small>
        <p>EJEMPLO</p>
        <div className='space-y-2'>
          <DoubleExample
            english1="I"
            english2="I am Ill."
            spanish1="Yo"
            spanish2="Yo estoy enfermo"
          />
          <DoubleExample
            english1="You"
            spanish1="tú, usted"
            english2="You are tall."
            spanish2="Tú eres alto. / Usted es alto."
          />
          <DoubleExample
            english1="He"
            spanish1="él"
            english2="He is handsome"
            spanish2="él es guapo"
          />
          <DoubleExample
            english1="She"
            spanish1="ella"
            english2="She is pretty"
            spanish2="Ella es bonita"
          />
          <DoubleExample
            english1="It"
            spanish1="eso (cosa)"
            english2="it is an apple"
            spanish2="eso es una manzana"
          />
          <DoubleExample
            english1="we"
            spanish1="nosotros"
            english2="We are tired"
            spanish2="Nosotros estamos cansados"
          />
          <DoubleExample
            english1="You"
            spanish1="Ustedes, vosotros"
            english2="You are angry"
            spanish2="Ustedes están enfadados"
          />
          <DoubleExample
            english1="They"
            spanish1="ellos, ellas"
            english2="They are at the cinema"
            spanish2="Ellos están en el cine"
          />
          <small>Pronombres (En función de objet) osea que, ¡reemplazan a el objeto!</small>
          <p>EJEMPLO</p>
          <DoubleExample
            english1="me"
            spanish1="mi"
            english2="Can you help me?"
            spanish2="¿Puedes ayudarme?"
          />
          <DoubleExample
            english1="you"
            spanish1="a ti, a usted"
            english2="I can help you"
            spanish2="Puedo ayudarte./Puedo ayudarle."
          />
          <DoubleExample
            english1="him"
            spanish1="a él"
            english2="Can you see him?"
            spanish2="¿Puedes ver a él?"
          />
          <DoubleExample
            english1="her"
            spanish1="a ella"
            english2="Give it to her."
            spanish2="Dáselo a ella."
          />
          <DoubleExample
            english1="it"
            spanish1="a eso"
            english2="Give it a kick"
            spanish2="Dale una patada"
          />
          <DoubleExample
            english1="us"
            spanish1="a nosotros"
            english2="Can you see us?"
            spanish2="¿Puedes vernos? (a nosotros)"
          />
          <DoubleExample
            english1="you"
            spanish1="a vosotros, a ustedes"
            english2="I see you"
            spanish2="Os veo. / Les veo."
          />
          <DoubleExample
            english1="them"
            spanish1="a ellos"
            english2="He can help them"
            spanish2="Les puede ayudar"
          />
          {/* <DoubleExample
            english1=""
            spanish1=""
            english2=""
            spanish2=""
          /> */}
          <Nota text="Nota: En inglés no existe la forma “usted” o “ustedes” formal. Por lo tanto los nativos de la lengua ni siquiera lo tienen conceptualizado como una forma aquí llamada “formal”. Se tiene que entender por tanto, que la forma masculina, femenina y neutra son lo mismo, lo único que las diferencia es el género. Además, ten en cuenta que en inglés sólo existe una forma para “tú” y “vosotros”, “you”, excepto en la forma reflexiva que distingue entre el singular (yourself) y plural (yourselves)." />
          <h2>
            Neuter Form
          </h2>
          <small>(Forma neutra)</small>
          <p>Los pronombres en inglés distinguen entre masculino (he), femenino (she) y neutro (it). <br />
            El pronombre personal “it” se utiliza cuando nos referimos a cosas, a animales que no sabemos su sexo o al tiempo (calendario y meteorológico). La forma plural de “it” es “they”.</p>
          <SingleExample
            english="Where is it? [the book]"
            spanish="(¿Dónde está? [el libro])"
          />
          <SingleExample
            english="What time is it? [the book]"
            spanish="(¿Qué hora es?)"
          />
          <SingleExample
            english="It is raining"
            spanish="(Esta lloviendo.)"
          />
          <Nota text="Nota: “It” es una partícula muy importante en inglés de la que los hablantes de lengua española se suelen olvidar." />
        </div>
        <div className='bg-blue-200 space-x-2'>
          <h3>Ejercicios</h3>
          <p>Completa los ejercicios para actualizar tus progresos</p>
          <div className='my-4'>
            <FormLabel id="demo-controlled-radio-buttons-group">Who is Kate? Kate is my friend. ____ is a teacher.</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={res1}
              onChange={(e) => setRes1(e.target.value)}
            >
              <FormControlLabel value="Her" control={<Radio />} label="Her" />
              <FormControlLabel value="It" control={<Radio />} label="It" />
              <FormControlLabel value="She" control={<Radio />} label="She" />
              <FormControlLabel value="His" control={<Radio />} label="His" />
            </RadioGroup>
            <FormLabel id="demo-controlled-radio-buttons-group">Do you know Tom? Yes, I know _____.</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={res2}
              onChange={(e) => setRes2(e.target.value)}
            >
              <FormControlLabel value="She" control={<Radio />} label="She" />
              <FormControlLabel value="He" control={<Radio />} label="He" />
              <FormControlLabel value="Her" control={<Radio />} label="Her" />
              <FormControlLabel value="Him" control={<Radio />} label="Him" />
            </RadioGroup>
            <FormLabel id="demo-controlled-radio-buttons-group">I love this book! Did you read _____?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={res3}
              onChange={(e) => setRes3(e.target.value)}
            >
              <FormControlLabel value="it" control={<Radio />} label="it" />
              <FormControlLabel value="He" control={<Radio />} label="He" />
              <FormControlLabel value="Her" control={<Radio />} label="Her" />
              <FormControlLabel value="They" control={<Radio />} label="They" />
            </RadioGroup>
            <FormLabel id="demo-controlled-radio-buttons-group">Where are Tom and Kate living? _____ live next to my house.</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={res4}
              onChange={(e) => setRes4(e.target.value)}
            >
              <FormControlLabel value="She" control={<Radio />} label="She" />
              <FormControlLabel value="He" control={<Radio />} label="He" />
              <FormControlLabel value="Her" control={<Radio />} label="Her" />
              <FormControlLabel value="They" control={<Radio />} label="They" />
            </RadioGroup>
            <FormLabel id="demo-controlled-radio-buttons-group">Do you want to run with _____?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={res5}
              onChange={(e) => setRes5(e.target.value)}
            >
              <FormControlLabel value="I" control={<Radio />} label="I" />
              <FormControlLabel value="Me" control={<Radio />} label="Me" />
              <FormControlLabel value="Her" control={<Radio />} label="Her" />
              <FormControlLabel value="We" control={<Radio />} label="We" />
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
