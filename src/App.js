import React from 'react'
import { useDoc } from './Hooks';

const App = () => {
  const { updateRecord } = useDoc('a/b')
  const Send = () => {
    updateRecord({
      'test': 'c'
    })
  }
  return (
    <div>
      <button onClick={Send} >
        click me
      </button>
      Test
    </div>
  );
}

export default App;
