import '../StylesComponents/homeStyles.css'
export default function Home(){
    return(
        <article className="entry-form">
            <header className='title-entry'> <h3>nueva terminal fluvial</h3></header>
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
            <footer>crear usuario y olvidar pass</footer>
        </article>
    )
}