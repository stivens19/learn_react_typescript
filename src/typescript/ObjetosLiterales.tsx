interface IPersona {
    nombre: string;
    edad: number;
    direccion: IDireccion;
}
interface IDireccion {
    pais: string;
    casaNo: number;
}
const ObjetosLiterales = () => {

    const persona:IPersona={
        nombre: 'Juan',
        edad: 30,
        direccion: {
           pais: 'España',
           casaNo: 612
        }
    }
    return (
        <div>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}

export default ObjetosLiterales