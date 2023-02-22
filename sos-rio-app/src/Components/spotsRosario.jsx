import '../StylesComponents/spotStyles.css'
import proof from '../svgLogos/boat1.svg'
import food from '../svgLogos/food.svg'
import phone from '../svgLogos/phone-call.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Paradores(){
    const navigate=useNavigate()
    const[spotSelected,setSpotSelected]=useState()
    const[numberSpot,setNumberSpot]=useState('no hay')
    const imageCard=document.querySelector('.cards')
    const imageUrls=[
        {image:"url('https://i.ibb.co/KV38gbS/los-Marinos.jpg')",nameSpot:'marinos',number:342},{image:"url('https://i.ibb.co/ZKLBZ3P/el-Pimpollal.jpg')",nameSpot:'pimpollal',number:3415494777},
        {image:"url('https://i.ibb.co/3kPqrsR/island-Garden.jpg')",nameSpot:'garden',number:342}
    ]
    function changeSpot(e){
        let res= JSON.parse(e)
        if(imageCard) imageCard.style.backgroundImage=res.image
        setSpotSelected(res.nameSpot)
        setNumberSpot(res.number)
    }
    return(
        <div className='container-spots'>
            <h2>Paradores</h2>
            <div className='options-selected'>
            <select name="spots"  onChange={(e)=>changeSpot(e.target.value)}>
            <option value={JSON.stringify(imageUrls[2])}  >Garden Island</option>
            <option value={JSON.stringify(imageUrls[1])}  >El Pimpollal</option>
            <option value={JSON.stringify(imageUrls[0])}  >Los Marinos</option>
            </select>
            </div>
            <article onClick={()=>navigate('/ticketoption')}  className='cards'>
                
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
                <p>{numberSpot}</p>
                </span>
                </div>
                
                
            </article>
        </div>
    )
}