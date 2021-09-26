import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';

const Donor = () => {

const [member, setMembers] = useState([]);
const [cart, setCart] = useState([]);

const handleAddDonate=(member)=>{
    const newCart = [...cart, member]
    setCart(newCart)
}

useEffect(() => {
    fetch("donorData.json")
    .then(res => res.json())
    .then(data => setMembers(data))
} ,[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            member.map(member => <Member
                            member={member}
                            handleAddDonate={handleAddDonate}
                            >

                            </Member>)
                        }
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart
                        cart ={cart}
                    >

                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Donor;