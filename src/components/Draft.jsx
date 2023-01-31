import { useDraft } from '../hooks/useDraft'
import '../css/Draft.css'
import { useContext } from 'react'
import { TopicContext } from '../context/TopicContext'
import { Button } from './Button'

export function Draft({ options }){
  
  const { isLoadingDraft, draft, topic } = useDraft( options )
  const { iaPrompt } = useContext(TopicContext)

  if ( !topic ) {
    return (
      <div></div>
    )
  }

  if ( isLoadingDraft ){

    const colors = ["blue", "purple", "green", "orange", "gray", "red"]
    const phrases = [
      "The future of web development is WASM 🦀, is what I would say if I weren't a js developer",
      `Q: What is Hardware?
      A: The part of the computer which you can kick.`,
      "when a robber steal stuff from people they say its like taking candy from a baby. but when they steal from Chuck Norris it's not as easy as they think.",
      `Did you hear about the claustrophobic astronaut?
      He just needed a little space.`,
     `A SQL query walks into a bar, goes up to two tables and says “can I join you?`,
      "Wasn't hard to crack Forrest Gump's password. 1forrest1."
    ]

    const number = Math.floor(Math.random() * 6)

    const color = colors[number]

    return (
      <div className='container-loader'>
        <h3>Generating draft...</h3>
        <div className={`loader ${color}`}></div>
        <h4>{phrases[number]}</h4>
      </div>
    )
  }

 
  
  
  return (

    <section className='container p-2'>
      <h4 className='text-2xl font-bold'>Draft generated for {topic} topic</h4>
      <p className='border to-blue-100 prompt'> {draft} </p>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2v2Z"/></svg>
      </button>
    </section>
  )

}
