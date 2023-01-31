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
      <section className="flex justify-center flex-col max-w-sm">
          <Modal/>
          <form className="grid place-content-center ">
            <label htmlFor="topic">Topic</label>
            <textarea id="topic" required {...register("name")} style={{"resize": "none"}} autoFocus placeholder="type your topic, like neovim editor, history of rustlang, alamo usa history" className="w-80 h-24 p-4 input" type="text" /> 
            <div className="p-2 m-4 border-gray-300 border w-40">
              <label htmlFor="detail"> Detailed </label>
              <input type="checkbox" id="detail" className="detail" />
            </div>
            <label htmlFor="prompt">Prompt</label>
            <div className="p-2 m-4 justify-center align-middle prompt-preview" id="prompt" >
              <h2>{iaPrompt}{data}</h2>
            </div>
            <Button onClick={handleClick} className="w-80 send activated">
              Send
            </Button>
          </form>
        </section>
      <Draft topic={topic} options={options} />
    </>
  )

}

