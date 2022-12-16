import Patients from "./Patients";

const PatientsList = ({patients,setPatient,patientDeleted}) => {

    
    return (
        <div className="md:w-1/2 lg:w-3/5  px-5 md:h-screen overflow-y-scroll">
            {
                patients && patients.length !== 0
                ?( <>
                    <h2 className="font-black text-center text-3xl ">Listado de pacientes</h2>
                    <p className="text-xl text-center mb-10 mt-5">
                         Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    
                  </>
                 ) 
                :( <p className="font-black text-center text-3xl">No hay pacientes registrados</p>
                 )
            }
            {
                patients.map( patient  => (
                    <Patients key={patient.id} patient={patient} setPatient={setPatient} patientDeleted={patientDeleted}/>
                    )
                )
            }
        </div>
    )
}

export default PatientsList;