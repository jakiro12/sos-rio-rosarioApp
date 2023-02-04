import '../StylesComponents/menuOptionsStyles.css'
import { useNavigate } from 'react-router-dom'
export default function MenuOption(){
    const navigate=useNavigate()
    const openBarWeb=()=>{
        window.open('https://www.instagram.com/elbar.ntf/','_blank')
    }
    return(<article className='short-info'>
        <div className='container-menu'>
            <button className='tickets-m-btn' onClick={()=>navigate('/shipping')}>Viajes y excursiones</button>
            <button className='food-m-btn' onClick={()=>openBarWeb()}>Gastronomia del Puerto</button>
            <button className='emergency-m-btn'onClick={()=>navigate('/atencion')}>Numeros de Emergencia y Auxilio</button>
            <button className='promos-m-btn'>Promociones de temporada</button>

            </div>
            </article>
    )
}