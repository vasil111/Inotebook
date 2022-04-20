import React from 'react'

const Noteitem = (props) => {
   const {note} = props;
  return (
    <div className = "col-md-3">

    <div className="card my-3 mx-3">
  <div className="card-body">
  <div className="d-flex align-items-center">
  <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-trash-can mx-3"></i> 
    <i className="fa-solid fa-file-pen mx-3"></i>  
  </div>
    
    <p className="card-text">{note.description} </p>

  </div>
</div>
    
    </div>
  )
}

export default Noteitem