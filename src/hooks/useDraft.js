import { useEffect, useState } from "react"
import { getDraft } from "../api/cohere"

export function useDraft(topic, options) {
  const [draft, setDraft] = useState("")
  const [isLoadingDraft, setIsLoadingDraft] = useState(null)

  if (options.detailed) {

    useEffect(() => {
      setIsLoadingDraft(true)
      getDraft(topic, `generate a draft very detailed and explicative about the topic ${topic}`).then(draft => {
        const btn = document.querySelector('.send')
        setDraft(draft)
        setIsLoadingDraft(false)
        btn.disabled = false
        btn.classList.remove('disable')
        btn.classList.add('activated')
        btn.innerText = 'Send'

      })

    }, [options])

    return { draft, isLoadingDraft }
  }

  useEffect(() => {
    setIsLoadingDraft(true)
    getDraft(topic).then(draft => {
      const btn = document.querySelector('.send')
      setDraft(draft)
      setIsLoadingDraft(false)
      btn.disabled = false
      btn.classList.remove('disable')
      btn.classList.add('activated')
      btn.innerText = 'Send'
    })

  }, [options])

  return { draft, isLoadingDraft }
}
