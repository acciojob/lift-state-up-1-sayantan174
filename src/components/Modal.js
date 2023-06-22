import React from 'react'

const Modal = (props)=>{
    return(
        <>
            <button onClick={()=>{props.callback()}}>Show Modal</button>
            {{props.showModal} && 
            <div>
                <h2>Modal Content</h2>
                This is the modal content
            </div>}
        </>
    )
}
export default Modal;