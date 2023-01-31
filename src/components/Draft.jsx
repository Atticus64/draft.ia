import { useDraft } from '../hooks/useDraft'
import '../css/Draft.css'

export function Draft({ topic, options }){

  const { isLoadingDraft, draft } = useDraft(topic, options)
  
  if ( topic === "" ) {
    return (
      <div >
      </div>
    )
  } 

  
 
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
