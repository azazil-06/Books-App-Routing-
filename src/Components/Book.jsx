import React from 'react'
import Navbar from './Navbar'

const Book = () => {
    return (
        <div>
            <Navbar/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Book Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Category</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" />

                            </div>


                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Author</label>
                                    <input type="text" className="form-control" />


                                </div>
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Published Date</label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                                <button className="btn btn-success">Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book
