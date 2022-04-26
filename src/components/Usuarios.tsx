import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResponseListado, Usuario } from '../interfaces/reqRes';
const Usuarios = () => {
    const [users, setUsers] = useState<Usuario[]>([])
    const ref=useRef(1);
    useEffect(() => {
        cargarUsuarios()
    }, []);
    const cargarUsuarios=()=>{
        reqResApi.get<ReqResponseListado>('/users',{
            params:{
                page:ref.current
            }
        })
        .then(res => {
            if (res.data.data.length > 0) {
                setUsers(res.data.data)
                ref.current++
            }else{
                console.log('No hay mas usuarios')
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    const renderItem = (user: Usuario) => {
        return (
            <tr key={user.id.toString()}>
                <td>
                    <img src={user.avatar} alt={user.first_name} width="100" />
                </td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }
    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                          renderItem(user)  
                        ))
                    }
                </tbody>

            </table>
            <button className="btn btn-primary" onClick={()=>cargarUsuarios()}>
                Siguiente
            </button>
        </>
    )
}

export default Usuarios