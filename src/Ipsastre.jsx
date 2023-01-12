import React from 'react'

import {
  Chart as ChartJS,

  BarElement,

} from 'chart.js/auto';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  BarElement,
);

const Ipsastre=()=> {
    const [response, setResponse] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
    const CallApi = () => {
        fetch("http://localhost:9000/result", {
          method: "post",
         
          headers: { "Content-type": "application/json" },
        }).then(async (response) => {
          setResponse(await response.json());
          setLoading(false);
        });
      };
      React.useEffect(() => {
        CallApi();
      console.log(response)
      }, []);
      const JSONstring=JSON.stringify(response);
      const obj=JSON.parse(JSONstring);
      console.log(obj)

      const hor= ()=>{
        return (
<>
{obj.map((item,index) => (
          <ul>
            {Object.keys(item).map((key) => {
      return (
        <li key={key + index}>{key}:{item[key]}</li>
      )
    })}
          </ul>
       
      ))}
</>
        )
      } 
    
     
 
      var data = {
       
        labels: [65, 59, 80, 81, 56, 55, 40],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };
    
      var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }
      console.log(data)

      return (
        <div className="App">
           
         
        {obj.map((item,index) => (
          <ul>
            {Object.keys(item).map((key) => {
      return (
        <li key={index}>{key}:{item[key]}</li>
      )
    })}
          </ul>
       
      ))}
      
        </div>
      );
    
}

export default Ipsastre;