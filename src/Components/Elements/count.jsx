import React, {  useMemo, useRef, useState } from 'react'


function Count() {
    const [count , setCount] = useState(0)
    const Useref = useRef();
    // const [item , setItem] = useState(0)
    // useEffect(()=>{
    //     console.log(Math.random()*100)
    // },[count])

    const countMemo = useMemo(()=>{
        return (
            <div>
                <h1>With UseMEMO : {count}</h1>
            </div>
        )
    },[count])

    const handleRef=()=>{
    Useref.current.value = "World"
    Useref.current.focus()
    }

  return (
    <div>
        <div className="container text-center py-5">
            <div className="row mt-5">
                <div className='py-3'>
                    <h2>UseMemo</h2>
                </div><br />
                <div>
                    {countMemo}
                </div>
                <div>
                    <h2>Count : {count}</h2>
                    
                </div><br />
                <br />
                <div>
                    <button className='btn btn-success' onClick={()=>setCount(count+1)}>Increment</button>
               &nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <button className='btn btn-danger' onClick={()=>setItem(item+-1)}>Decrement</button> */}
                </div>
            </div>
            <div className="row mt-5">
                <div className='py-3'>
                    <h2>UseRef</h2>
                </div><br />
                <div>
                    <input type="text" ref={Useref}/>
               &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-warning' onClick={handleRef}>useRef</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Count