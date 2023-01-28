import { Button } from "./Button"
import { useState } from "react"
import { Draft } from "./Draft"

export default function Form(){
  const [topic, setTopic] = useState("")
  
  function handleClick(event){
    const input = document.querySelector('.input').value  
    event.preventDefault()
    if (input === "") return
    
    setTopic(input)
  }

  return (
    <section className="flex justify-center flex-col max-w-sm">
      <form className="grid place-content-center ">
        <textarea style={{"resize": "none"}} autoFocus placeholder="type your topic" className="w-80 h-24 p-4 input" type="text" /> 
        <Button onClick={handleClick} className="hover:scale-110 w-80">
          Send
        </Button>
      </form>
      <Draft topic={topic} />
    </section>
  )
}

