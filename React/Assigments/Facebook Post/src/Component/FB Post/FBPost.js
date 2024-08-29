import React from 'react'
import './style.css'

export default function index(props) {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="d-flex justify-content-between p-2 px-3">
                                <div className="d-flex flex-row align-items-center"> <img src={props.img} width="50" className="rounded-circle" alt='...' />
                                    <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">{props.name}</span> <small className="text-primary">SMIT</small> </div>
                                </div>
                                <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h"></i> </div>
                            </div> <img src={props.postimg} className="img-fluid" alt='...' />
                            <div className="p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart"></i> <i className="fa fa-smile-o ml-2"></i> </div>
                                    <div className="d-flex flex-row muted-color"> <span>2 comments</span> <span className="ml-2">Share</span> </div>
                                </div>
                                <hr />
                                <div className="comment-input">
                                    <div className="fonts"> <i className="fa fa-camera"></i> </div>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
