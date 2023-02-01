import { createContext, useState } from 'react'

export const TopicContext = createContext()

export function TopicContextProvider({children}){

  const [topic, setTopic] = useState("")
  const [iaPrompt, setAiprompt] = useState(`generate a draft about the topic ${topic}`)
  const [draft, setDraft] = useState("")
  const [options, setOptions] = useState({
    edit: false
  })

  function updateTopic(newTopic) {
    setTopic(newTopic)
  }
  
  const updateAiprompt = (newPrompt) => {
    setAiprompt(newPrompt)
  }
  
  // const updateTags = (newTags) => {
  //   setTags(newTags)
  // }
  
  const updateDraft = (newDraft) => {
    setDraft(newDraft)
  }


  return (
    <TopicContext.Provider value={{topic, updateTopic, setTopic, draft, updateDraft, iaPrompt, updateAiprompt, options, setOptions}}>
      {children}
    </TopicContext.Provider>
  )


}

