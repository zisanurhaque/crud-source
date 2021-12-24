import DeleteIcon from '@material-ui/icons/Delete';
import React, { createContext, useEffect, useState } from "react";
import UserData from './UserData';

//  LocalStorage
const localMemory = () => {
    const localList = localStorage.getItem('lists');
    if(localList){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const Context = createContext();

const Form = () => {

    //Variables For Input Data
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [pass, setPass] = useState('');

    //Array for all data
    const [list, setList] = useState(localMemory()); //List array where all items will store

    //function for insert data to the array
    const handleSubmit = (e) => {
        e.preventDefault();
        let val = {firstName: fname, lastName: lname, email: email, location: location, password: pass};
        
        if(!email){
            alert('Please Fill Email')
        }
        else{
            setList([...list, val]);
            setFname('');
            setLname('');
            setEmail('');
            setLocation('');
            setPass('');
        }
    }

    //function for delete data from array
    const handleRemove = (id) => {
        const updated = list.filter((item, index) => {
            return index !== id;
        })
        setList(updated);
    } 

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(list));
    }, [list]);

    const display = list.map((item, index) => (
        <tr key={index}>
            <td className="id"> {index + 1} </td>
            <td className="name"> {item.firstName + ' ' + item.lastName} </td>
            <td className="email"> {item.email} </td>
            <td className="location"> {item.location} </td>
            <td className="delete">
                <button onClick={() => handleRemove(index)}><DeleteIcon/></button>
            </td>
        </tr>
    ));

    <UserData display={display}/>


    return(
        <>
            <form>
                <div className="cFlex">
                    <input 
                    name="firstName" 
                    value={fname}
                    type="text" placeholder="First Name" 
                    onChange={(e) => setFname(e.target.value)}
                    required
                    />
                    <input 
                    name="lastName" 
                    value={lname}
                    type="text" 
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <input 
                name="email" 
                type="email" 
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input 
                name="location" 
                type="text" 
                value={location}
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
                />
                <div className="cFlex">
                    <input 
                    name="password" 
                    type="password"
                    value={pass} 
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Register</button>
            </form>
        </>
    )
}
export default Form;
export { Context };

