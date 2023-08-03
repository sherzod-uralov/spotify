import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Axios = () => {
  const [state,setState] = useState() 
  function fetchData() {
    axios.get('https://restcountries.com/v3.1/all').then(e => {
      setState(e)
    }).catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
},[])
state.map(e => {
  console.log(e);
})
  return (
    <div>
      {/* {state?.data?.map(e => {
        <div className='cards'>
          <img src={e.flaags.png} alt="" />
        </div>
      })}       */}
    </div>
  )
}

export default Axios