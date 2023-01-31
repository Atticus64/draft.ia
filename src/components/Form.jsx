import { Button } from "./Button"
import { useState } from "react"
import { Draft } from "./Draft"
import '../css/Form.css' 
import { Modal } from "./Modal"

export default function Form(){

  const [topic, setTopic] = useState("")
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
     
    
    setTopic(input)
    btn.disabled = true
  }

  return (
    <section className="flex justify-center flex-col max-w-sm">
      <Modal/>
      <form className="grid place-content-center ">
        <textarea required style={{"resize": "none"}} autoFocus placeholder="type your topic" className="w-80 h-24 p-4 input" type="text" /> 
        <div className="p-2 m-4 border-gray-300 border w-40">
          <input type="checkbox" name="scales" className="detail" />
          <label htmlFor="scales"> Detailed </label>
        </div>
        <Button onClick={handleClick} className="w-80 send activated">
          Send
        </Button>
      </form>
      <Draft topic={topic} options={options} />
    </section>
  )
}

