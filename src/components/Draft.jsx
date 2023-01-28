import { useDraft } from '../hooks/useDraft'
import '../css/Draft.css'

export function Draft({ topic }){
  
  if ( topic === "" ) {
    return (
      <div className='container-loader'>
        <h1>Aun no has generado un draft</h1>
      </div>
    )
  } 
  
  const { isLoadingDraft, draft } = useDraft(topic)
 
  if ( isLoadingDraft ){
    return (
      <div className='container-loader'>
        <h3>Loading draft...</h3>
        <div className='loader'></div>
      </div>
    )
  }

  return (
    <section className='container'>
      <p> {draft} </p>
    </section>
  )

}
