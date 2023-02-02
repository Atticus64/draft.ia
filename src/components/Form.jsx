import { Button } from "./Button"
import React from "react"
import { Draft } from "./Draft"
import '../css/Form.css' 
import { Modal } from "./Modal"
import { TopicContext } from "../context/TopicContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { toast } from 'wc-toast'

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(() => {
    /* clipboard successfully set */
    toast.success('copied to clipboard')
  }, (err) => {
    toast.success('Error to copy to clipboard')
    throw err
    /* clipboar updateClipboard()d write failed */
  });
}

export default function Form(){

  const  { topic, updateTopic, iaPrompt, setTopic } = useContext(TopicContext)
  const { register, watch } = useForm();
  const data = watch('name')

  const {options, setOptions} = useContext(TopicContext)
  
  let input;
  
  const handleCopyDraft = () => {
    const draftHtml = document.querySelector('.draft')
    const btn = document.querySelector('.btn-copy')
    
    if ( !draftHtml ){
      toast.error('No draft to copy')
      return
    }
    btn.ariaLabel = "Copied"
    btn.classList.add('hint--success')
    
    const copyContent = draftHtml.textContent.trim()
    updateClipboard(copyContent)
  }  

  function handleClick(event){
    event.preventDefault()

    input = document.querySelector('.input').value  
    if ( input === '' ){
      toast.error('Missing topic to generate draft')
      return 
    }
    const btn = document.querySelector('.send') 

    setOptions({
      edit: false
    })

    btn.classList.remove('activated')
    btn.classList.add('disable')
    btn.innerText = 'loading'
    btn.disabled = true
     
    updateTopic(input)
    btn.disabled = true
  }

  const handleEditPrompt = (event) => {
    event.preventDefault()
    const customPrompt = document.querySelector('.prompt-user')
    
    customPrompt.contentEditable = true
    customPrompt.focus()
  }


  useEffect(() => {
    const btn = document.querySelector('.btn-copy')
    
    const handleLeave = (event) => {
      btn.ariaLabel = "Copy to clipboard"
      btn.classList.remove('hint--success')
    }

    btn.addEventListener('mouseleave', handleLeave)

    return () => {
      btn.removeEventListener('mouseleave', handleLeave)  
    }
  })

  
  return (
    <>
      <section className="grid max-w-sm">
          <wc-toast></wc-toast>
          <h2 className="font-semibold text-3xl">Draft on the fly!!</h2>
          <form className="grid place-content-center ">
            <label htmlFor="topic" className="mt-2">Topic</label>
            <textarea id="topic" required {...register("name")} style={{"resize": "none"}} autoFocus placeholder="type your topic, like neovim editor, history of rustlang, alamo usa" className="w-80 h-24 p-4 input" type="text" /> 
            <label htmlFor="prompt" className="mt-2">Prompt</label>
          </form>
          <div className="flex flex-row">
            <blockquote className="p-2 justify-center align-middle prompt-preview border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800" id="prompt" >
              <p className="prompt-user bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">{iaPrompt}{data}</p>
            </blockquote>
            <button className="p-4 hint--right" onClick={handleEditPrompt} aria-label="Edit prompt">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="m229.7 58.3l-32-32a8.1 8.1 0 0 0-11.4 0l-96 96A8.1 8.1 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8.1 8.1 0 0 0 5.7-2.3l96-96a8.1 8.1 0 0 0 0-11.4Zm-105 93.7H104v-20.7l64-64L188.7 88ZM200 76.7L179.3 56L192 43.3L212.7 64Zm24 43.3v88a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h88a8 8 0 0 1 0 16H48v160h160v-88a8 8 0 0 1 16 0Z"/></svg>
            </button>
          </div>
        </section>
        <div className="flex align-bottom">
          <Button onClick={handleClick} className="w-80 send activated">
            Send
          </Button>
          <button className="btn-copy mt-4 hint--top" onClick={handleCopyDraft} aria-label="Copy to clipboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2v2Z"/></svg>
          </button>
        </div>
      <Draft topic={topic} options={options} />
    </>
  )

}

