import '../StylesComponents/spotStyles.css'
import proof from '../svgLogos/boat1.svg'
import food from '../svgLogos/food.svg'
import phone from '../svgLogos/phone-call.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Paradores(){
    const navigate=useNavigate()
    const[spotSelected,setSpotSelected]=useState()
    const imageCard=document.querySelector('.cards')
    const imageUrls=[
        {image:"url('https://i.ibb.co/KV38gbS/los-Marinos.jpg')",nameSpot:'marinos'},{image:"url('https://i.ibb.co/ZKLBZ3P/el-Pimpollal.jpg')",nameSpot:'pimpollal'},
        {image:"url('https://i.ibb.co/3kPqrsR/island-Garden.jpg')",nameSpot:'garden'}
    ]
    function changeSpot(e){
        let res= JSON.parse(e)
        console.log(res.image)
        if(imageCard) imageCard.style.backgroundImage=res.image
        setSpotSelected(res.nameSpot)
      
    }
    return(
        <div className='container-spots'>
            <h2>Paradores</h2>
            <div className='options-selected'>
            <select name="spots"  onChange={(e)=>changeSpot(e.target.value)}>
            <option value={JSON.stringify(imageUrls[2])}  >Garden Island</option>
            <option value={JSON.stringify(imageUrls[1])}  >El Pimpollal</option>
            <option value={JSON.stringify(imageUrls[0])} selected >Los Marinos</option>
            <option value={JSON.stringify(imageUrls[2])} >Costa Alta</option>
            </select>
            </div>
            <a href="#" onClick={()=>navigate('/ticketoption')}  className='cards'>
                
                <div className='advantages'>
                    <span className='time-lapse'>
                <img className='boat-logo' src={proof} alt='bote'/>
                <p>15 min</p>
                </span>
                <span className='time-lapse'>
                <img className='boat-logo' src={food} alt='bote'/>
                <p>Si</p>
                </span>
                <span className='time-lapse'>
                <img className='boat-logo' src={phone} alt='bote'/>
                <p>341......</p>
                </span>
                </div>
                
                
            </a>
        </div>
    )
}