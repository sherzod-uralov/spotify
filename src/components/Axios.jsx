import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Axios = () => {
  const [state,setState] = useState() 
  function fetchData() {
    axios.get('https://restcountries.com/v3.1/all').then(e => {
      setState(e.data)
    }).catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
},[])
console.log(state);
  return (
    <div>
      {
        state.map(e => (
          <div key={e.common.name}>
            <img src={e.flags.png} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default Axios