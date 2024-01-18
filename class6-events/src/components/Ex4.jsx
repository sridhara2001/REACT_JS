import React, { useState} from 'react'

const Ex4 = () => {
      // const [state, handler] = useState(initValue)
      let [num, setNum] = useState(0)
      const [isView, setIsView] = useState(true)
      const [count, setCount] = useState(0);

      const clickHandler = () => {
            setNum(num+1);
            setIsView(isView => !isView);
      }
      return (
      <div className='container'>
            <div className="row">
                  <div className="col-12">
                        <div className="lead my-3 p-3 border rounded">
                              <p><b>4) Update the state inside an onClick event handler</b></p>
                              <button className='btn btn-outline-info' onClick={clickHandler}>Ex4 - Click Handler</button>
                              <p><b>Increment : {num} </b></p>
                              <div>
                                    {
                                          isView ? <h5 className='text-success'>Welcome to React</h5> : <h5 className='text-danger'>Try Next Time </h5>
                                    }
                              </div>

                              <button className='btn btn-outline-success mx-2' onClick={() => setCount(count + 1)}>Increment</button>
                              <button className='btn btn-outline-danger mx-2' onClick={() => setCount(count - 1)}>Decrement</button>
                              <p><b>Result : {count}</b></p>
                        </div>
                  </div>
            </div>
      </div>
      )
}

export default Ex4