import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"
// rafce crea automaticamente estructura de componente
function App() {
  
  const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []

  const [patients, setPatients] = useState(patientsLS); 
  const [patient, setPatient] = useState({});


  useEffect ( () => {
    localStorage.setItem('patients', JSON.stringify(patients));
  },[patients])

  const patientDeleted = (id) => {
        const aux =  patients.filter( element => element.id !== id);
        setPatients(aux)
      }
  return (
  <div className="bg-gray-200">
    <Header />
    <div className="mt-12 md:flex">
      <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
      <PatientsList patients={patients} setPatient={setPatient} patientDeleted={patientDeleted}/>
    </div>
  </div>
  )
}

export default App
