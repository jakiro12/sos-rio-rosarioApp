import '../StylesComponents/navbarStyles.css';
import {useNavigate} from 'react-router-dom';
export default function NavBarOptions(){
  const navigate=useNavigate()
    return(
        <nav>
          <p className='option'>
           Cuando
          </p>
          <p className='option' onClick={()=>navigate('/infoparadores')}>
            Paradores
          </p>
          <p className='option'onClick={()=>navigate('/infoservicie')}>
            Servicios
          </p>
          <p className='option' onClick={()=>navigate('/informacion')}>
            Informacion
          </p>
        </nav>
    )
}