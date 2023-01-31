import { useContext } from "react"
import { useEffect, useState } from "react"
import { getDraft } from "../api/cohere"
import { TopicContext } from "../context/TopicContext"

export function useDraft(options) {
  const { draft, updateDraft, topic, updateAiprompt } = useContext(TopicContext)
  const [isLoadingDraft, setIsLoadingDraft] = useState(null)


  useEffect(() => {
    if (!topic) return
    setIsLoadingDraft(true)
    let args;
    if (options.detailed) {
      const newPrompt = `generate a very explicative and detailed draft about the topic ${topic}`
      args = [topic, newPrompt]
    } else {
      const userPrompt = `generate a draft about the topic ${topic}`
      args = [userPrompt]
    }

    getDraft(...args).then(draft => {

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
