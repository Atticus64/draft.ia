import { toast } from 'wc-toast'
import { useDraft } from '../hooks/useDraft'
import '../css/Draft.css'
import { Clipboard } from '../components/icons/Clipboard'

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
  
  if ( draft !== ""){
    
      function handleCopyDraft(event) {
        const id = event.target.id
        const draftHtml = document.querySelector(`#draftid-${id}`)
        const btn = document.querySelector('.btn-copy')
    
        if (!draftHtml) {
          const color = document.documentElement.style.getPropertyValue("--bg-color")
          const scheme = color === '#1e293b' ? 'dark' : 'light'
          toast.error('No draft to copy', {
            theme: {
              type: scheme
            }
          })
          return
        }
        btn.ariaLabel = "Copied"
        btn.classList.add('hint--success')
    
        const copyContent = draftHtml.textContent
        updateClipboard(copyContent)
      }
      function updateClipboard(newClip) {
        navigator.clipboard.writeText(newClip).then(() => {
          /* clipboard successfully set */
          const color = document.documentElement.style.getPropertyValue("--bg-color")
          const scheme = color === '#1e293b' ? 'dark' : 'light'
          toast.success('copied to clipboard', {
            theme: {
              type: scheme
            }
          })
        }, (err) => {
          toast.success('Error to copy to clipboard')
          throw err
          /* clipboar updateClipboard()d write failed */
        });
      }
    
      return (
    
        <>
          <section className='container p-2 m-4 justify-center dark:bg-slate-800'>
            {draft.map((d, indx) => {
              return ( 
                <div key={indx} className='m-2'>
                  <h4 className='text-xl font-bold'>Draft #{indx+1}  {topic} </h4>
                  <div className={`draft m-2 draftn-${indx+1}`} id={`draftid-${indx+1}`}>
                    {d.text.split('\n').map(
                      (d, i) => <p key={i}>{d}</p>
                      )}
                  </div>
                  <button id={indx+1} className="btn-copy h-12 rounded flex flex-grow p-2 w-[12em] justify-center items-center ml-2 hint--top dark:text-white bg-cyan-200 hover:bg-cyan-400 dark:bg-cyan-900 dark:hover:bg-cyan-600" onClick={handleCopyDraft} aria-label="Copy to clipboard">
                  <Clipboard id={indx+1} />
                   <div className="m-4" id={indx+1}>
                    Copy
                   </div>
                  </button>                    
                </div>
              )
            })}
          </section>
        </>
      )

  }

}
