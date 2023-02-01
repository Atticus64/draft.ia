import { useDraft } from '../hooks/useDraft'
import '../css/Draft.css'
import { useContext } from 'react'
import { TopicContext } from '../context/TopicContext'

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

    <section className='container p-2 draft'>
      <h4 className='text-2xl font-bold'>Draft generated for {topic} topic</h4>
      <p className='border to-blue-100 draft'> {draft} </p>
    </section>
  )

}
