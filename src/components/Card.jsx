import React from 'react';


function Card({ children, props }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href="{props.link}" className="btn btn-primary">{props.btnName}</a>
            </div>

        </div>
    );
}

export default Card;