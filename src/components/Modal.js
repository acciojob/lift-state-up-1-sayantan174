import React from 'react'

const Modal = (props)=>{
    return(
        <>
            <button onClick={()=>{props.callback()}}>Show Modal</button>
            {props.showModal && 
            <div>
                <h3>Modal Content</h3>
                <h3>This is the modal content</h3>
            </div>}
        </>
    )
}
export default Modal;