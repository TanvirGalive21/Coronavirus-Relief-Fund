import React from 'react';

const Cart = (props) => {

    const {cart} = props || {}
    const totalReducer=(prevValue, currentValue) => prevValue + currentValue.donation

    const total = cart.reduce( totalReducer , 0)
    return (
        <div className="text-center position-fixed m2 bg-warning w-25 h-50 my-3">
            <h5><i class="fas fa-user-plus"></i> Members: {cart.length}</h5>
            <h3><i class="fas fa-donate"></i> Total: {total}</h3>
            <ul className="list-group">
                {
                    cart.map(member => <li className="list-group-item">{member.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;