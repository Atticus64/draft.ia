import { Button } from "./Button"
import React from "react"
import { Draft } from "./Draft"
import '../css/Form.css'
import { TopicContext } from "../context/TopicContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'wc-toast'
import { CounterDrafts } from "./CounterDrafts"
import { Edit } from "./icons/Edit"

export default function Form() {

  const { topic, updateTopic, iaPrompt } = useContext(TopicContext)
  const { register, watch } = useForm();
  const data = watch('name')

  const { options, setOptions } = useContext(TopicContext)

  let input;

  function handleClick(event) {
    event.preventDefault()

    input = document.querySelector('.input').value
    if (input === '') {
      const color = document.documentElement.style.getPropertyValue("--bg-color")
      const scheme = color === '#1e293b' ? 'dark' : 'light'
      toast.error('Missing topic to generate draft', {
        theme: {
          type: scheme
        }
      })
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

  return (
    <>
      <section className="grid container">
        <wc-toast></wc-toast>
        <h2 className="font-semibold text-3xl">Draft on the fly!!</h2>
        <form className="grid form place-content-center w-full">
          <label htmlFor="topic" className="mt-2">Topic</label>
          <textarea id="topic" required {...register("name")} style={{ "resize": "none" }} autoFocus placeholder="type your topic, like neovim editor, history of rustlang, alamo usa" className="w-96 h-24 p-4 input appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
          <label htmlFor="prompt" className="mt-2">Prompt</label>
        </form>
        <div className="flex flex-row w-max">
          <blockquote className="p-2 justify-center align-middle prompt-preview border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800" id="prompt" >
            <p className="prompt-user bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">{iaPrompt}{data}</p>
          </blockquote>
        </div>
      </section>
      <div className="flex flex-row items-center justify-around btns-layout" >
        <button className="hint--top flex flex-row justify-center p-2 btn-edit items-center h-12 dark:text-white-500 bg-cyan-200 hover:bg-cyan-400 dark:bg-cyan-900 dark:hover:bg-cyan-600 rounded" onClick={handleEditPrompt} aria-label="Edit prompt">
          <Edit/>
          <div className="m-2">
            Edit
          </div>
        </button>
        <CounterDrafts/>
      </div>
      <div className="flex flex-row w-max">
        <Button onClick={handleClick} className="send activated rounded-md dark:text-black">
          Send
        </Button>
      </div>
      <Draft topic={topic} options={options} />
    </>
  )

}

