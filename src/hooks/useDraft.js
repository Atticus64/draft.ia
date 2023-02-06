import { useContext } from "react"
import { useEffect, useState } from "react"
import { toast } from "wc-toast"
import { getDraft } from "../api/cohere"
import { TopicContext } from "../context/TopicContext"

export function useDraft(options) {
  const { draft, updateDraft, topic, numDrafts } = useContext(TopicContext)
  const [isLoadingDraft, setIsLoadingDraft] = useState(null)

  useEffect(() => {
    if (!topic) return
    setIsLoadingDraft(true)
    let userPrompt;

    userPrompt = document.querySelector('.prompt-user').textContent

    if (numDrafts > 5) {
      toast.error("You cant get drafts more 5")
    }
    getDraft(userPrompt, numDrafts).then(draft => {

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
