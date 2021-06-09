import React, { useState } from "react";

export default function Exercise() {

    const [number, setNumber] = useState('0000 0000 0000 0000')
    const [owner, setOwner] = useState('')
    const [date, setDate] = useState('')
    const [cvc, setCvc] = useState('')


  return (
    <div className="container container-fluid">
    <div className="row">
        <div className="col-6">
            <div className="w-100 p-4 text-white mt-2 rounded shadow" style={{backgroundColor: '#01335F'}}>
                <div className="d-flex justify-content-between">
                    <h2>BBVA</h2>
                    <h2>VISA</h2>
                </div>
                <p className='text-white shadow'>{number}</p>
                <p className='text-white shadow'>{owner}</p>
                <div className="d-flex justify-content-between">
                    <p className='text-white shadow'>{date}</p>
                    <p className='text-white shadow'>{cvc}</p>
                </div>
            </div>
        </div>

        <div className="col-12">
            <form className="bg-light p-4 mt-5">
                <div className="form-group mb-4">
                    <label>Credit Card</label>
                    <input
                        className="form-control"
                        maxLength={16}
                        name='creditCardNumber'
                        type="text"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value)
                        }}
                    />
                </div>

                <div className="form-group mb-4">
                    <label>Owner</label>
                    <input
                        className="form-control"
                        type="text" 
                        value={owner}
                        onChange={(e) =>{
                          setOwner(e.target.value) 
                        }}
                    />
                </div>

                <div className="form-group mb-4">
                    <label>Validate Date</label>
                    <input
                        className="form-control"
                        maxLength={5}
                        type="text"
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value)
                        }}
                    />
                </div>

                <div className="form-group mb-4">
                    <label>CVC</label>
                    <input
                        className="form-control"
                        maxLength={3}
                        type="text" 
                        value={cvc}
                        onChange={(e) => {
                          setCvc(e.target.value)
                        }}
                    />
                </div>
            </form>
        </div>
    </div>
</div>
  );
}