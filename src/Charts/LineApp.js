import React, {useState,useEffect} from 'react';
import LineChart from './Linechart';
import axios from 'axios';

function LineApp() {
    const [data,setData] = useState([]);
    useEffect(() => {
        const apiurl ='http://127.0.0.1:8000/api/line-graph-data';
        axios.get(apiurl)
         .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{
           console.error('Error fetching data: ',error);
        });

   },[]);
   return(
   <div><LineChart data={data} /></div>
   );
}
export default LineApp;