import { Button } from "./Button"
import { useState, ref } from "react"
import React from "react"
import { Draft } from "./Draft"
import '../css/Form.css' 
import { Modal } from "./Modal"
import { TopicContext } from "../context/TopicContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"

export default function Form(){

  const  { topic, updateTopic, iaPrompt, updateAiprompt } = useContext(TopicContext)
  const { register, watch } = useForm();
  const data = watch('name')

  const [options, setOptions] = useState({
    reload: false,
    detailed: false
  })
  
  let input;
  
  function handleClick(event){
    event.preventDefault()

    const dialog = document.querySelector('.modal')
    input = document.querySelector('.input').value  
    if ( input === ''){
      dialog.showModal()
      return 
    }
    const isDetail = document.querySelector('.detail') 
    const btn = document.querySelector('.send') 

    btn.classList.remove('activated')
    btn.classList.add('disable')
    btn.innerText = 'loading'
    btn.disabled = true
    
    if ( isDetail.checked ){
      setOptions({
        detailed: true
      })
    } else {
      setOptions({
        detailed: false
      })
    }
     
    updateTopic(input)
    btn.disabled = true
  }

  
  return (
    <>
      <section className="grid justify-items-center flex-col max-w-sm">
          <Modal/>
          <h2 className="font-semibold text-3xl">Draft on the fly</h2>
          <form className="grid place-content-center ">
            <label htmlFor="topic">Topic</label>
            <textarea id="topic" required {...register("name")} style={{"resize": "none"}} autoFocus placeholder="type your topic, like neovim editor, history of rustlang, alamo usa history" className="w-80 h-24 p-4 input" type="text" /> 
            <div className="p-2 m-4 border-gray-300 border w-40">
              <label htmlFor="detail"> Detailed </label>
              <input type="checkbox" id="detail" className="detail" />
            </div>
            <label htmlFor="prompt">Prompt</label>
            <div className="m-2 justify-center align-middle prompt-preview" id="prompt" >
              <h5>{iaPrompt}{data}</h5>
            </div>
          </form>
        </section>
        <div className="flex justify-center align-bottom">
          <Button onClick={handleClick} className="w-80 send activated">
            Send
          </Button>
          <button className="btn-copy mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2v2Z"/></svg>
          </button>
        </div>
      <Draft topic={topic} options={options} />
    </>
  )

}

