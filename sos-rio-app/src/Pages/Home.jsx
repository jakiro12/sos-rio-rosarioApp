import '../StylesComponents/homeStyles.css'
import BoatDraw from '../LogosInCss/boat'
import NavBarOptions from '../Components/navBar'
export default function Home(){
    return(
        <div className='body-entry'>
            <NavBarOptions/>
            <BoatDraw />
        <article className="entry-form">
            <header className='title-entry'> <h3>sos rosario app</h3></header>
            <main className='user-entry'> 
            <form>
                <div className='email-entry'><label htmlFor="">Email</label>
                    <input type="email" name="" id="" />
                </div>
                <div className='pass-entry'><label htmlFor="">Password</label>
                    <input type="password" name="" id="" />
                </div>
                <button type="submit" className='entry'>ingresar</button>
                </form>
            </main>
            <footer>
                <a href='#' className='linked'>Crear cuenta</a>
                <a href='#' className='linked'>Olvidaste la contraseña?</a>
            </footer>
        </article>
        </div>
    )
}