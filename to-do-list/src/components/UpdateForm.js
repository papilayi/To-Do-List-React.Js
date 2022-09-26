const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate  }) => {
    return(
      // To update form data
      <>
        <div className='row'>
          <div className='col'>
            <input 
              value={ updateData && updateData.title}
              onChange={ (e) => changeTask(e)}
              className='form-control form-control-lg'>
            </input>
          </div>
          <div className='col-auto'>
            <button 
              onClick={updateTask}
              className='btn btn-lg btn-success mr-20'>
              Update
            </button>
            <button
              onClick={cancelUpdate}
             className='btn btn-lg btn-warning'>
              Cancel
            </button>
          </div>
        </div>
        <br></br>
      </>
  
    )
  }
  
  export default UpdateForm;