import React, { useState } from 'react'
import { useContext } from 'react'
import { TopicContext } from '../context/TopicContext'

export function CounterDrafts({min = 1,max = 5,increment = 1,decrement = 1,}) {
  const [count, setCount] = useState(min)
  const { numDrafts, updateNumDrafts } = useContext(TopicContext)

  function handleClickAdd() {
    if (count < max) {
      setCount(count + increment)
      updateNumDrafts(count + increment)
    }
  }
  function handleClickSubtract() {
    if (count > min) {
      setCount(count - increment)
      updateNumDrafts(count - increment)
    }
  }
  function handleClick(e) {
    setCount(e.target.valueAsNumber)
  }
  return (
    <div className="flex">
      <button onClick={handleClickSubtract} className="rounded p-2 w-[4em] h-12 justify-center items-center ml-2 dark:text-white bg-cyan-200 hover:bg-cyan-400 dark:bg-cyan-900 dark:hover:bg-cyan-600 btn-counter">
      -
      </button>
      <div className='flex align-middle items-center'>
      <label htmlFor="drafts" className='m-2'>Number drafts:</label>
      <input
        className='dark:text-white dark:bg-inherit'
        readOnly="readonly"
        id='drafts'
        type="number"
        min={min}
        max={max}
        value={numDrafts}
        onChange={handleClick}
      />
      </div>
      <button className='rounded p-2 w-[4em] justify-center items-center h-12 ml-2 dark:text-white bg-cyan-200 hover:bg-cyan-400 dark:bg-cyan-900 dark:hover:bg-cyan-600 btn-counter' onClick={handleClickAdd}>
        +
      </button>
    </div>
  )
}