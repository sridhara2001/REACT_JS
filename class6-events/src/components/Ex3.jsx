import React, { useState } from 'react'

// useState = hook -> functional components
// state variable => value
// state handler => method => used change/modify the values of the state

const Ex3 = () => {
      // const [state, handler] = useState(initValue)
      let [count, setCount] = useState(1);

      const sayHello = (paremeter1) => {
            alert(`Hello! ${paremeter1}`)
      }
      return (
      <div className='container'>
            <div className="row">
                  <div className="col">
                        <div className='lead my-3 p-3 border rounded'>
                              <p>
                                    <b>3) Call Multiple functions in an onClick event handler</b>
                              </p>
                              <button
                              className='btn btn-outline-info' 
                              onClick={()=> {
                                    sayHello("React")
                                    setCount(count+1);
                              }}>
                                    Ex3 - Say Hello and Increment
                              </button>
                              <p><b>Increment : {count}</b></p>
                        </div>
                  </div>
            </div>
      </div>
      )
}

export default Ex3