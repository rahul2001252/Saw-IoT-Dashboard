import React, {useState,useEffect} from 'react';
import axios from 'axios';
import BarChart from './Barchart';

function BarApp() {
    const [data,setData] = useState([]);
    useEffect(() => {
        const apiurl='http://192.168.141.147:8000/api/bar-graph-data';
        axios.get(apiurl)
         .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{
           console.error('Error fetching data: ',error);
        });

   },[]);
  return (
    <div><BarChart data={data} /></div>
  )
}

export default BarApp