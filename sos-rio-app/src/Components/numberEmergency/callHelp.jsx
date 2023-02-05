import '../../StylesComponents/menuStyles/callHelpersStyles.css'

export default function CallHelpers(){
   async function copiar(){
      let textToCopy=document.querySelector('.number-link').textContent
     await navigator.clipboard.writeText(textToCopy)
      console.log(textToCopy)
   }
    return(
    <article className='number-container'>
        <main className='number-types'>
        <div className='categorie-phone'>
          <p className='name-phone'>Prefectura</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' >Escribir telefono</a>
           <button className='copy-number' onClick={copiar}>C</button>
           </div>
        </div>
        <div className='categorie-phone'>
          <p className='name-phone'>Prefectura</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' >3424420130</a>
            <button className='copy-number' onClick={copiar}>C</button>
           </div>
        </div>
        <div className='categorie-phone'>
          <p className='name-phone'>Prefectura</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' >3424420130</a>
            <button className='copy-number' onClick={copiar}>C</button>
           </div>
        </div>
        <div className='categorie-phone'>
          <p className='name-phone'>Prefectura</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' >3424420130</a>
            <button className='copy-number' onClick={copiar}>C</button>
           </div>
        </div>
    
        </main>
    </article>
    )
}