import { useDraft } from '../hooks/useDraft'

export function Draft({ topic }){
  
  if ( topic === "" ) {
    return (
      <h1>No es un draft valido</h1>
    )
  } 
  
  const { isLoadingDraft, draft } = useDraft(topic)
    
 
  if ( isLoadingDraft ){
    return (
      <h3>Loading draft...</h3>
    )
  }

  return (
    <h1>{draft}</h1>
  )

}
