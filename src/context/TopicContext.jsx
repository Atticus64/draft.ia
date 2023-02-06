import { createContext, useState } from 'react'

export const TopicContext = createContext()

export function TopicContextProvider({children}){

  const [topic, setTopic] = useState("")
  const [iaPrompt, setAiprompt] = useState(`generate a draft about the topic ${topic}`)
  const [draft, setDraft] = useState("")
  const [numDrafts, setNumberDrafts] = useState(1)
  const [options, setOptions] = useState({
    edit: false
  })

  function updateTopic(newTopic) {
    setTopic(newTopic)
  }
  
  const updateAiprompt = (newPrompt) => {
    setAiprompt(newPrompt)
  }
  
  const updateNumDrafts = (newNumber) => {
    setNumberDrafts(newNumber)
  }
  
  const updateDraft = (newDraft) => {
    setDraft(newDraft)
  }


  return (
    <TopicContext.Provider value={{topic, updateTopic, setTopic, draft, updateDraft, iaPrompt, updateAiprompt, options, setOptions, updateNumDrafts, numDrafts}}>
      {children}
    </TopicContext.Provider>
  )


}

