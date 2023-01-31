
export const getDraft = async (topic, prompt_alternative) => {
  const apikey = import.meta.env.PUBLIC_COHERE_APIKEY

  if (topic === '') return

  const prompt = prompt_alternative ?? `generate a draft about the topic ${topic}`

  const data = {
    model: 'command-xlarge-20221108',
    prompt,
    max_tokens: 300,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  }

  const rawGeneration = await fetch("https://api.cohere.ai/generate", {
    method: 'POST',
    headers: {
      Authorization: `BAERER ${apikey}`,
      "Content-Type": "application/json",
      "Cohere-Version": '2022-12-06'
    },
    body: JSON.stringify(data)
  })
  const g = await rawGeneration.json()
  const { generations } = g
  const draft = generations[0].text
  return draft
}
