import { useEffect, useState } from "react"
import { getDraft } from "../api/cohere"

export function useDraft(topic) {
  const [draft, setDraft] = useState("")
  const [isLoadingDraft, setIsLoadingDraft] = useState(true)

  useEffect(() => {
    setIsLoadingDraft(true)
    getDraft(topic).then(draft => {
      setDraft(draft)
      setIsLoadingDraft(false)
    })
  }, [topic])

  return { draft, isLoadingDraft }
}
