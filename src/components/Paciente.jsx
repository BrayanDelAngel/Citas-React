
const Paciente = ({ paciente,setPaciente,eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas,id } = paciente;
    const handleEliminar=()=>{
        const respuesta=confirm('Desear eliminar este paciente?');
        if(respuesta){
            eliminarPaciente(id);
        }
    }
    return (
        <div className="m-5 bg-white shadow-lg p-3 rounded-lg">
            <p className="font-bold mb-3 text-gray-600 uppercase">
                Nombre:
                <span className="font-normal normal-case">
                    {nombre}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-600 uppercase">
                Propietario:
                <span className="font-normal normal-case">
                    {propietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-600 uppercase">
                Email:
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-600 uppercase">
                Alta:
                <span className="font-normal normal-case">
                    {fecha}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-600 uppercase">
                Sintomas:
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>
            <div className="flex justify-between mt-2">
                <button type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
                onClick={()=>setPaciente(paciente)}>
                    Editar
                </button>
                <button type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente