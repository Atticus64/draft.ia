import { Draft } from "./Draft"
import { Button } from "./Button"

export default function Form(){

  function handleClick(){
    console.log('click')
  }

  return (
    <>
      <input className="p-4 mx-2" type="text" /> 
      {/* <Draft client:load topic={"history of JavaScript"} /> */}
      <Button onClick={handleClick}>
        Send
      </Button>
    </>
  )
}

