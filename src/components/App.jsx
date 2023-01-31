import Form from '../components/Form'
import { TopicContextProvider } from '../context/TopicContext'

export default function App(){

  return (
    <TopicContextProvider>
      <Form/>
    </TopicContextProvider>
  )
}

