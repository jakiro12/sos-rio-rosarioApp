import NavBarOptions from '../Components/navBar'
import '../StylesComponents/navBarComponentsStyles/infoNtfStyles.css'
export default function TerminalInfo(){
    return(
        <div className="container-info-ntf">
            <NavBarOptions/>
            <img className='muestra' src={require('../svgLogos/fondoTerminalApp.jpeg')} alt='foto de la terminal fluvial'/>
            <article className='about-us'>
                <h4>Sobre la Aplicacion</h4>
                <p>Finalidad de la aplicacion</p>
            </article>
        </div>
    )
}