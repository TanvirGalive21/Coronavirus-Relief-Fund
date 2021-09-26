import React from 'react';

const Member = (props) => {

    const {name, img, job, id, age, donation, country} = props.member || {}
    // console.log(props.member)
    return (
        <div className="col-md-4 g-4 my-3 h-25">
            <div className="card">
                <img src={img} className="img-fluid rounded-start" alt="..." style={ {"max-height": "150px"}, {"max-height": "150px"}}/> 
            <div className="card-body p-3">
                <h6 className="card-title text-primary"><small>Name: {name}</small></h6>
                <p className="card-text h6">Job: {job}</p>
                <p className="card-text h6">Age: {age}</p>
                <p className="card-text h6">Country: {country}</p>
                <p className="card-text h6">ID: {id}</p>
                <p className="card-text h6">Donation: $ {donation}</p>
                <button 
                onClick = { () => props.handleAddDonate(props.member)}
                className="btn btn-primary"><i class="fas fa-donate"></i> Donate</button>
                  </div>
            </div>
        </div>
    );
};

export default Member;