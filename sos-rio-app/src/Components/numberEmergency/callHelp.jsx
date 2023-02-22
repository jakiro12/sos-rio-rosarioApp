import '../../StylesComponents/menuStyles/callHelpersStyles.css'

export default function CallHelpers(){
  const allBtn=document.querySelectorAll('.copy-number')
   async function copyNumberToCall(){
      let textToCopy=document.querySelector('.number-link').textContent
     await navigator.clipboard.writeText(textToCopy)
    
   }
    return(
    <article className='number-container'>
        <main className='number-types'>
        <div className='categorie-phone'>
          <p className='name-phone'>Prefectura Naval Arg</p>
          <div className='info-number'> 
            <a href='tel:911' className='number-link' >3414720340</a>
           <button className='copy-number' onClick={copyNumberToCall}></button>
           </div>
        </div>
        <div className='categorie-phone'>
          <p className='name-phone'>Auxilio Mecanico</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' >num particular</a>
            <button className='copy-number' onClick={copyNumberToCall}></button>
           </div>
        </div>
        <div className='categorie-phone'>
          <p className='name-phone'>Terminal Fluvial</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' > 3414481206</a>
            <button className='copy-number' onClick={copyNumberToCall}></button>
           </div>
        </div>
        <div className='categorie-phone'>
          <p className='name-phone'>Emergencias</p>
          <div className='info-number'> 
            <a href='tel:3424420130' className='number-link' >911</a>
            <button className='copy-number' onClick={copyNumberToCall}></button>
           </div>
        </div>
    
        </main>
    </article>
    )
}