import NavBarOptions from '../Components/navBar'
import '../StylesComponents/navBarComponentsStyles/infoNtfStyles.css'
export default function TerminalInfo(){
    return(
        <div className="container-info-ntf">
            <NavBarOptions/>
           <div className='content-img'> <img className='muestra' src={require('../svgLogos/fondoTerminalApp.jpeg')} alt='foto de la terminal fluvial'/>
           </div>
            <article className='about-us'>
                <h2>SOS Rio App Web</h2>
                <p>La aplicacion web permite a los viajeros planificar,
                     reservar viajes y excursiones en bote desde el puerto de Rosario, Santa Fe. 
                     Con una interfaz intuitiva y fácil de usar, los usuarios pueden explorar distintas opciones
                      de itinerarios, comparar precios y características de los barcos disponibles, y realizar una
                       reserva en tiempo real. La aplicación también ofrece información detallada sobre los destinos, 
                       incluyendo descripciones de los lugares de interés, fotografías y recomendaciones. Con esta 
                       aplicación, los viajeros pueden planificar su aventura en el río Paraná de manera fácil y eficiente.
                </p>
            </article>
        </div>
    )
}