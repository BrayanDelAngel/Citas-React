import { useEffect, useState } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes,paciente,setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
 
  useEffect(() => {
     if( Object.keys(paciente).length>0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas)
     }
  }, [paciente])
  
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del formulario 
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Rellena todos los campos');
      setError(true);
      return;
    }
    setError(false);
    //Creando arreglo para pasarlo
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    if(paciente.id){
      //Editando registro
      objetoPaciente.id=paciente.id;
      const pacientesActualizados= pacientes.map(pacienteState=>pacienteState.id===paciente.id 
        ? objetoPaciente :pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})
    }else{
      //Nuevo registro
      //Pasando al componente padre los pacientes
      objetoPaciente.id= generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }
    //Reiniciando el form
    setNombre('');
    setEmail('');
    setFecha('');
    setPropietario('');
    setSintomas('');
  }
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='text-3xl font-black text-center'>
        Seguimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>
          Administrarlos
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-lg rounded-lg py-10 px-5 mb-5'>
        {error && <Error>  Todos los campos son requeridos </Error>}
        <div className='mb-2'>
          <label className='block text-gray-600 uppercase font-bold' htmlFor='mascota'>Nombre de mascota</label>
          <input id='mascota' type="text" className='block border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-lg'
            placeholder='Nombre de la Mascota' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label className='block text-gray-600 uppercase font-bold' htmlFor='propietario'>Nombre del Propietario</label>
          <input id='propietario' type="text" className='block border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-lg'
            placeholder='Nombre del Propietario' value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label className='block text-gray-600 uppercase font-bold' htmlFor='email'>Email</label>
          <input id='email' type="email" className='block border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-lg'
            placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label className='block text-gray-600 uppercase font-bold' htmlFor='alta'>Fecha de alta</label>
          <input id='alta' type="date"
            className='block border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-lg'
            value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label className='block text-gray-600 uppercase font-bold' htmlFor='sintomas'>Sintomas</label>
          <textarea id='sintomas'
            className='block border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-lg'
            placeholder='Sintomas de la mascota' value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        </div>
        <button type='submit' className='p-2 bg-indigo-600 rounded-lg w-full text-white uppercase font-bold hover:bg-indigo-800 transition-all'
        >{paciente.id ? 'Editar' : 'Agregar'} Paciente</button>
      </form>
    </div>
  )
}

export default Formulario