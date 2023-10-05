import React, {useState,useEffect} from 'react';
import DonutChart from './DonutChart';
import axios from 'axios';

function DonutApp() {
    const [data,setData] = useState([]);
    useEffect(() => {
        const apiurl ='http://127.0.0.1:8000/api/saw-machines';

        axios.get(apiurl)
         .then((response)=>{
            setData(response.data);
         })
         .catch((error)=>{
            console.error('Error fetching data: ',error);
         });

    },[]);
  return (
    <div><DonutChart data ={data} /></div>
  );
}

export default DonutApp