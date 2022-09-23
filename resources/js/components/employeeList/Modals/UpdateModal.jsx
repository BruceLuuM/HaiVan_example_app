import React, { Component } from "react";

class UpdateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeName: null,
            employeeSalary: null,
        };
    }

    // Updating employee name state
    inputEmployeeName = (event) => {
        this.setState({
            employeName: event.target.value,
        });
    };

    // Updating employee salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    };

    updateEmployeeData = () => {};

    render() {
        return (
            <div
                className="modal fade"
                id={"updateModal" + this.props.modalId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Employee Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="employeeName"
                                        value={this.state.employeName ?? ""}
                                        onChange={this.inputEmployeeName}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="employeeSalary"
                                        value={this.state.employeeSalary ?? ""}
                                        onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input
                                className="btn btn-info"
                                type="submit"
                                value="Update"
                                onClick={this.updateEmployeeData}
                            />
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
