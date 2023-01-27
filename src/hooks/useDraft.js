const COHERE_API_KEY = 'qmzKWceiz1Kq72PIw7eGqjQwxBhbcvknvCWS3dV7'
import { useEffect, useState } from "react"
import { getDraft } from "../api/cohere"

export function useDraft(topic) {
  const [draft, setDraft] = useState("")
  const [isLoadingDraft, setIsLoadingDraft] = useState(true)

  // useEffect(() => {
  //   getDraft(topic).then(draft => {
  //     setDraft(draft)
  //     setIsLoadingDraft(false)
  //   })
  // }, [])

  return { draft, isLoadingDraft }
}