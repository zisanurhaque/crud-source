import React from "react";

const UserDataHeader = () => {
    return(
        <>
            <thead>
                <tr>
                    <th className="id">Id</th>
                    <th className="name">Name</th>
                    <th className="email">Email</th>
                    <th className="location">Location</th>
                    <th className="delete">Delete</th>
                </tr>
            </thead>
        </>
    )
}

export default UserDataHeader;