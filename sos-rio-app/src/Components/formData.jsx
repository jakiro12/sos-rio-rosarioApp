import '../StylesComponents/formStyles.css'
import { useState } from 'react'
import { emailRegex,nameRegex,adressRegex,passRegex } from '../Validators/validatorForm'
export default function FormValues(){
    const[personalName,setPersonalName]=useState('')
    const[personalLastName,setPersonalLastName]=useState('')
    const[adress,setAdress]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

  
    const dataCharged={
        userName:'',
        userLastName:'',
        userAdress:'',
        userEmail:'',
        userPassword:''
    }

    const allInput=document.querySelector('.name-alert')
  
    function sendPersonalData(e){
        e.preventDefault()
      
        if(personalName.match(nameRegex)){
            dataCharged.userName=personalName
            allInput.style.setProperty('--activation','hidden')

        }else{
            allInput.style.setProperty('--activation','visible')
            console.log(allInput[0])
            return
        }
        if(personalLastName.match(nameRegex)){
            dataCharged.userLastName=personalLastName
        }else{
            alert('apellido incorrecto')
            return
        }
        if(email.match(emailRegex)) {
            dataCharged.userEmail = email
        }else{
            alert('no perros')
            return
        }
        if(adress.match(adressRegex)){
            dataCharged.userAdress=adress
        }else{
            alert('no direccion')
            return
        }
        if(password.match(passRegex)){
            dataCharged.userPassword=password
        }else{
            alert('datos invalidos')
            return
        }
        
        console.log(dataCharged)


    }
    return(
        <form className="container" onSubmit={sendPersonalData}>
            <div className='input-content'>
                <label htmlFor="" className='name-alert'>Nombre</label>
            <input type="text" className='personal-data'   value={personalName} onChange={e=> setPersonalName(e.target.value)} required/>
            </div>
            <div className='input-content'>
            <label htmlFor="">Apellido</label>
            <input type="text" value={personalLastName} onChange={e=>setPersonalLastName(e.target.value)} className='personal-data' required />
            </div>
            
            <div className='input-content'>
            <label htmlFor="">Direccion</label>
            <input value={adress} type="text" onChange={e=>setAdress(e.target.value)} className='personal-data' required />
            </div>
            
            <div className='input-content'>
            <label htmlFor="">Correo electronico</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='personal-data' required />
            </div>
            
            <div className='input-content'>
            <label htmlFor="">Contraseña</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='personal-data' required />
            </div>
            <div className='boat-start'>
                <div className='draw-boat'>logo</div>
                <button className='send-data' type="submit">Enviar</button>
            </div>
        </form>
    )
}