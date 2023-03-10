import '../StylesComponents/homeStyles.css'
import BoatDraw from '../LogosInCss/boat'
import NavBarOptions from '../Components/navBar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function Home(){
const navigate=useNavigate()
const[user,setUser]=useState('')
const[userPassword,setUserPassword]=useState('')



function travel(e){
        e.preventDefault()
         navigate('/options')
    
        
    }
    return(
        <div className='body-entry'>
            <NavBarOptions/>
            <BoatDraw />
        <article className="entry-form">
            <header className='title-entry'> <h3>sos rosario app</h3></header>
            <main className='user-entry'> 
            <form onSubmit={travel}>
                <div className='email-entry'><label htmlFor="">Email</label>
                    <input type="email" name="" value={user} onChange={e=>setUser(e.target.value)}  required/>
                </div>
                <div className='pass-entry'><label htmlFor="">Password</label>
                    <input type="password" name="" value={userPassword} onChange={e=>setUserPassword(e.target.value)} required/>
                </div>
                <button type="submit" className='entry'>ingresar</button>
                </form>
            </main>
            <footer>
                <button onClick={()=>navigate("/formdata")} className='linked'>Crear cuenta</button>
                <button className='linked'>Recuperar contraseña</button>
            </footer>
        </article>
        </div>
    )
}