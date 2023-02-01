import { useContext } from "react"
import { useEffect, useState } from "react"
import { getDraft } from "../api/cohere"
import { TopicContext } from "../context/TopicContext"

export function useDraft(options) {
  const { draft, updateDraft, topic } = useContext(TopicContext)
  const [isLoadingDraft, setIsLoadingDraft] = useState(null)

  useEffect(() => {
    if (!topic) return
    setIsLoadingDraft(true)
    let userPrompt;

    // const DEFAULT_PROMPT = "generate a draft about the topic"
    // const customPrompt = document.querySelector('.prompt-user').textContent.split(' ').slice(0, 6).join(' ')
    // if (customPrompt !== DEFAULT_PROMPT) {
    //   const newPrompt = document.querySelector('.prompt-user')

    // } else {
    //   userPrompt = `generate a draft about the topic ${topic}`
    // }
    userPrompt = document.querySelector('.prompt-user').textContent

    getDraft(userPrompt).then(draft => {

      const btn = document.querySelector('.send')
      updateDraft(draft)
      setIsLoadingDraft(false)
      btn.disabled = false
      btn.classList.remove('disable')
      btn.classList.add('activated')
      btn.innerText = 'Send'
    })

  }, [options])

  return { draft, isLoadingDraft, topic }
}
