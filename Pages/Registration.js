import React from 'react';
import Form from '../Component/Form';

const Registration = () => {

    return(
        <>
            <main>
                <div className="reg">
                    <div className="rHeader">
                        <h4>User Registration</h4>
                    </div>
                    <div className="registration">
                        <Form/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Registration;