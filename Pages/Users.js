import React from "react";
import UserData from "../Component/UserData";
import UserDataHeader from "../Component/UserDataHeader";


const Users = () => {
    return(
        <main>
            <table className='table'>
                <div className="tHeader">
                    <h4>Users</h4>
                </div>
                <UserDataHeader/>
                <UserData/> 
            </table>
        </main>
    )
}

export default Users;