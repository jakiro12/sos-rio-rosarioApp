import NavBarOptions from "../Components/navBar";
import '../StylesComponents/navBarComponentsStyles/infoActivitiesStyles.css'
export default function ServiceOfPort(){
    return (
        <div className="activities-container">
            <NavBarOptions/>
            <div className="img-act-content">
                <img src={require('../svgLogos/viajes.png')} alt="gente zarpando"/>
            </div>
            <article className="service-description">
                <h2>Viajes y Excursiones</h2>
                <p>
                Ofrecemos una experiencia única y emocionante para los visitantes y locales. 
                La ciudad de Rosario se encuentra en la costa del río Paraná, por lo que hay una amplia variedad de opciones para los viajes en bote. 
                Desde paseos en barcos pequeños para ver la vida silvestre y los paisajes naturales hasta excursiones en barcos más grandes con comodidades como comidas y bebidas, hay algo para todos los gustos.
                </p>
                <ul className="option-boats">
                <li>Banquito San Andrés <a className="info-boats" href="https://enapro.com.ar/#!/-informacion-ntf/" rel="noreferrer" target="_blank">(mas info)</a></li>
                <li>Tracker Garden I</li>
                <li>Gomon Max II</li>
                </ul>
            </article>
        </div>
    )
}