import { useDraft } from '../hooks/useDraft'
import '../css/Draft.css'
export function Draft({ options }){
  
  const { isLoadingDraft, draft, topic } = useDraft( options )

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
        <p className='paragraph'>{phrases[number]}</p>
      </div>
    )
  }

  return (

    <>
      <section className='container p-2 m-4 justify-center dark:bg-slate-800'>
        <h4 className='text-xl font-bold'>Draft generated for {topic} topic</h4>
        <div className='draft m-2'>
          {draft.split('\n').map(
            (d, i) => <p key={i}>{d}</p>
          )}
        </div>
      </section>
    </>
  )

}
