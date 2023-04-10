
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h1 className="font-black text-3xl text-center">
                        Listado Pacientes
                    </h1>
                    <p className="text-xl my-5 text-center">
                        Administra tus {' '}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y citas
                        </span>
                    </p>
                    {
                        pacientes.map((paciente) => (
                            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                        ))
                    }
                </>
            ) : (
                <>
                    <h1 className="font-black text-3xl text-center">
                        No hay Pacientes
                    </h1>
                    <p className="text-xl my-5 text-center">
                        Agrega Pacientes {' '}
                        <span className="text-indigo-600 font-bold">
                            y aqui apareceran
                        </span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes