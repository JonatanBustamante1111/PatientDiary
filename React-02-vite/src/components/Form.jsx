import React from 'react'
import { useState, useEffect } from 'react';
import Err from './Err';

const Form = ({patients,setPatients,patient,setPatient}) => {
  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');
  const [err, setErr] = useState(false);
  
  useEffect(() => {
    if(Object.keys(patient).length > 0){
      setPet(patient.pet)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptom(patient.symptom) 
    }

  },[patient]);


  const generatedId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return date+random;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // si algun campo esta vacio 
    if ([pet, owner, email, date, symptom].includes('')) {
      console.log('hay un campo vacio')
      setErr(true)
      return ;  
    }
    setErr(false)
                              
    const objectPatient = {
      pet, 
      owner, 
      email, 
      date, 
      symptom
    }

    if(patient.id){
      // update register
      objectPatient.id = patient.id;
      const aux = patients.map( patientState => patientState.id === patient.id ? objectPatient : patientState)
      setPatients(aux)
      setPatient({})

    }else{
      // new register
      objectPatient.id = generatedId();
      setPatients([...patients,objectPatient]);
    }

    // reseteamos el form una vez almacenados los datos
    setPet('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptom('');
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg p-10 px-5 m-5 mb-10'
      >
        {
          err && <Err />
        }
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'>
            Nombre Mascota
          </label>
          <input
            id='mascota'
            type="text"
            placeholder='nombre de la mascota'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'>
            Nombre Propietario
          </label>
          <input
            id='propietario'
            type="text"
            placeholder='nombre del propietario'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>
            Email
          </label>
          <input
            id='email'
            type="email"
            placeholder='email del propietario'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>
            Alta
          </label>
          <input
            id='alta'
            type="date"
            placeholder='nombre del propietario'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintoma' className='block text-gray-700 font-bold uppercase'>
            Sintomas
          </label>
          <textarea
            id='sintomas'
            placeholder='describe los sintomas'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
            value={symptom}
            onChange={e => setSymptom(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-all'
          value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Form
