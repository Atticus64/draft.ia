import { Draft } from "./Draft"
import { Button } from "./Button"
import { useState } from "react"

export default function Form(){
  const [topic, setTopic] = useState("")
  
  function handleClick(event){
    const input = document.querySelector('.input').value  
    event.preventDefault()
    if (input === "") return
    
    setTopic(input)
  }

  return (
    <section className="flex justify-center flex-col mx-1">
      <form>
        <input autoFocus placeholder="type your topic" className="p-4 mx-2 input" type="text" /> 
        {/* <Draft client:load topic={"history of JavaScript"} /> */}
        <Button onClick={handleClick} className="hover:scale-125">
          Send
        </Button>
      </form>
      <Draft topic={topic} />
    </section>
  )
}

