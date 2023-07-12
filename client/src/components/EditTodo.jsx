import React from 'react'

const EditTodo = () => {
    return (
        <React.Fragment>
            {/* Button to Open the Modal  */}
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
                Edit
            </button>

            {/* The Modal  */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* Modal Header  */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* Modal body  */}
                        <div className="modal-body">
                            <input type="text" className='form-control' />
                        </div>

                        {/* Modal footer  */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditTodo;
