import React from 'react'

const Modal = (props)=>{
    return(
        <>
            <button onClick={()=>{props.callback()}}>Show Modal</button>
            {props.showModal && 
            <div>
                <h3>Modal Content</h3>
                <p>This is the modal content</p>
            </div>}
        </>
    )
}
export default Modal;