import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';



const getDates = (days) => {
    const dates =[]
    const today = new Date();
    for (let i=0;i<=days;i++)
    {
        const date = new Date(today);
        date.setDate(today.getDate()+i);
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates
  }
  console.log(getDates(5))

const data = {
    labels: getDates(5),
    datasets: [
      {
        label: "First dataset",
        data: [],
        fill: false,
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [],
        fill: false,
        borderColor: "#742774"
      }],
  };


  

const LineChart = (props) => {
    console.log(props.data)
    return (
        <Line data={props.data} options={props.options}/>
    );
  }

  export default LineChart;