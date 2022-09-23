import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    //Delete function for employee data.

    deleteEmployeeData = (employee) => {
        axios.delete("/delete/employee/data/" + employee).then(() => {
            toast.error("Employee Deleted Successfully");

            setTimeout(() => {
                location.reload();
            }, 2500);
        });
    };

    render() {
        return (
            <div
                className="modal fade"
                id={"deleteModal" + this.props.modalId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Are You Sure ?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            You are going to <strong>DELETE</strong> this
                            Employee.
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    this.deleteEmployeeData(this.props.modalId);
                                }}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
