import '../StylesComponents/homeStyles.css'
import BoatDraw from '../LogosInCss/boat'
import NavBarOptions from '../Components/navBar'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { supabase } from '../backend/client';
export default function Home(){
const navigate=useNavigate()
const[user,setUser]=useState('')
const[userPassword,setUserPassword]=useState('')
const[allUsers,setAllUsers]=useState([])

useEffect(()=>{
    const getAllData=async()=>{
        const { data, error } = await supabase
      .from('passenger_created')
      .select('email_user,pp_user,v_t_user')
      console.log(data,error)
      setAllUsers(data)
      
    }
    getAllData()
},[])
const tokenAuthQuery= localStorage.getItem('userAuthRio')
function travel(e){
        e.preventDefault()
        let findEmail=allUsers.filter((e)=> e.email_user === user)
         if(tokenAuthQuery)  navigate('/options')
        if(findEmail.length === 1 && findEmail[0].pp_user === userPassword){
            localStorage.setItem('userAuthRio',allUsers[0].v_t_user)
         navigate('/options')
        }else{
            console.log('no existe u esta mas de una vez')
        }

    
        
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