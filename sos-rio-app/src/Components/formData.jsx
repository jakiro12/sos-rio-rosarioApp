import '../StylesComponents/formStyles.css'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { emailRegex,nameRegex,adressRegex,passRegex,phoneRegex } from '../Validators/validatorForm';
import { supabase } from '../backend/client';
export default function FormValues(){
    const[personalName,setPersonalName]=useState('')
    const[personalLastName,setPersonalLastName]=useState('')
    const[adress,setAdress]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[phone,setPhone]=useState('')
    const[permission,setPermission]=useState(false)
    const navigate=useNavigate()
    

    const dataCharged={
        userName:'',
        userLastName:'',
        userAdress:'',
        userPhone:'',
        userEmail:'',
        userPassword:''
    }
    useEffect(()=>{
        if(permission === true){ //se envia correctamente
            const insertData=async()=>{  
        const { data, error } = await supabase
          .from('passenger_created')
          .insert([
            { name:personalName,
            last_name:personalLastName,
            adress_user:adress,
            number_phone:phone,
            email_user:email,
            pp_user:password
            }
          ]) 
          console.log(error,data)
            }
            insertData()
           navigate('/')
        }

    },[permission])
    
    const alertInputName=document.querySelector('.name-alert')
    const alertInputLastName=document.querySelector('.lastname-alert')
    const alertInputAdress=document.querySelector('.adress-alert')
    const alertInputPhone=document.querySelector('.phone-alert')
    const alertInputEmail=document.querySelector('.email-alert')
    const alertInputPass=document.querySelector('.pass-alert')

   async function sendPersonalData(e){
        e.preventDefault()
      
        if(personalName.match(nameRegex)){
            dataCharged.userName=personalName
            alertInputName.style.setProperty('--activation','hidden')

        }else{
            alertInputName.style.setProperty('--activation','visible')
            return
        }
        if(personalLastName.match(nameRegex)){
            dataCharged.userLastName=personalLastName
            alertInputLastName.style.setProperty('--activation','hidden')
        }else{
            alertInputLastName.style.setProperty('--activation','visible') 
            return
        }
        if(email.match(emailRegex)) {
            dataCharged.userEmail = email
            alertInputEmail.style.setProperty('--activation','hidden')
        }else{
            alertInputEmail.style.setProperty('--activation','visible')          
            return
        }
        if(adress.match(adressRegex)){
            dataCharged.userAdress=adress
            alertInputAdress.style.setProperty('--activation','hidden')
        }else{
            alertInputAdress.style.setProperty('--activation','visible')
            return
        }
        if(phone.match(phoneRegex)){
            dataCharged.userPhone=phone
            alertInputPhone.style.setProperty('--activation','hidden')
        }else{
            alertInputPhone.style.setProperty('--activation','visible')
            return
        }
        if(password.match(passRegex)){
            dataCharged.userPassword=password
            alertInputPass.style.setProperty('--activation','hidden')
            setPermission(true)
        }else{
            alertInputPass.style.setProperty('--activation','visible')
            return
        }
    }
    return(
        <div className='content-form'>
        <form className="container" onSubmit={sendPersonalData}>
            <div className='input-content'>
                <label htmlFor="" className='name-alert'>Nombre</label>
            <input type="text" className='personal-data'   value={personalName} onChange={e=> setPersonalName(e.target.value)} required/>
            </div>
            <div className='input-content'>
            <label htmlFor="" className='lastname-alert'>Apellido</label>
            <input type="text" value={personalLastName} onChange={e=>setPersonalLastName(e.target.value)} className='personal-data' required />
            </div>
            
            <div className='input-content'>
            <label htmlFor="" className='adress-alert'>Direccion</label>
            <input value={adress} type="text" onChange={e=>setAdress(e.target.value)} className='personal-data' required />
            </div>
            
            <div className='input-content'>
            <label htmlFor="" className='phone-alert'>Telefono</label>
            <input value={phone} type="text" onChange={e=>setPhone(e.target.value)} className='personal-data' required />
            </div>

            <div className='input-content'>
            <label htmlFor="" className='email-alert'>Correo electronico</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='personal-data' required />
            </div>
            
            <div className='input-content'>
            <label htmlFor="" className='pass-alert'>Crear Contraseña</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='personal-data' required />
            </div>
            <div className='boat-start'>
                
                <button className='send-data' type="submit">Registrarse</button>
            </div>
        </form>
        </div>
    )
}