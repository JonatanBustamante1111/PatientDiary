const Patients = ({patient,setPatient,patientDeleted}) => {

    const {pet,owner,email,date,symptom,id} = patient;

    return (
        <div className="mx-5 my-10 bg-white shadow-md p-5 py-10 rounded-xl">
            <p className="font-bold uppercase mb-3 text-gray-700">Nombre: {''}
                <span className="font-normal normal-case">{pet}</span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700">Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700">Fecha Alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700">Sintomas: {''}
                <span className="font-normal normal-case">{symptom}</span>
            </p>
                <div className="md:flex flex-col gap-2 ">
                    <button type="button" className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-bold uppercase rounded-lg mx-5" onClick={() => setPatient(patient)} >Editar</button>
                    <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold uppercase rounded-lg mx-5" onClick={() => patientDeleted(id)} >Eliminar</button>
                </div>
        </div>
    )
}
export default Patients;