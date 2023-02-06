
export const getDraft = async (prompt, num_gen) => {
  const apikey = import.meta.env.PUBLIC_COHERE_APIKEY

  if (num_gen > 5) return

  const num_generations = num_gen ?? 1

  const data = {
    model: 'command-xlarge-20221108',
    prompt,
    max_tokens: 300,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    num_generations,
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
  const { generations } = await rawGeneration.json()
  return generations
}
