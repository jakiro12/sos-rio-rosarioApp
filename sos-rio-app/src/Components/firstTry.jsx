import { ChangeUserContext,ChangeToggleContext } from "../Provider/userProvider"
export default function Hijo(){
    const user= ChangeUserContext()
    const cambiarLogin=ChangeToggleContext()
    return(
        <div>
            <h2>Hijo</h2>
            {user && <p>{user.name}</p>            }
            <button onClick={cambiarLogin}>Cambiar</button>
        </div>
    )
}