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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis impedit, labore dolore beatae ratione sint quos sed sapiente dolores optio eligendi accusantium est iusto, officia odio. Aut, quisquam rerum.
                    
                </p>
            </article>
        </div>
    )
}