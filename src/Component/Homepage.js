import React, { useEffect, useState } from "react";
import axios from 'axios'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Homepage(){

    let [items , setItems] = useState([]);
    let [filterItems, setFilterItems] = useState(items);

    useEffect(() => {

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response => {
            setItems(response.data);
            setFilterItems(response.data)
        })

    },[])

    const handleChange = (e) =>{
        let item = e.target.value.toLowerCase();
        let result = [];
        result = items.filter((data) => {
            return data.symbol.search(item) !== -1;
        })
        setFilterItems(result)
    }
    

    return(
        <> 
            <main>
                <div className="search">
                    <input type="text" placeholder="Type symbol (eg. BTC)" onChange={handleChange} />
                </div>
                <div className="table">

                    <TableHeader/>
                    <TableBody filterItems={filterItems}/>

                </div>
            </main>
        </>
    )
}
                