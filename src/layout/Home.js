import { useState } from "react";
import Dropdown from "../components/Dropdown";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import { publicRequest } from "../request-method";
import DatePicker from "../components/DatePicker";
import DropdownForexType from "../components/DropdownForexType";

const Home = () => {

    const default_data = {
        labels: [],
        datasets: [
          {
            label: "Predicted Price",
            data: [],
            fill: false,
            borderColor: "rgba(75,192,192,1)"
          }],
          
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Forex Prediction',
          },
        },
        scales: {
            x: {
              ticks: {
                maxRotation: 90,  // Rotate labels
                minRotation: 90 ,  // Ensure they stay vertical
                maxTicksLimit: 10
              },
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
                title: {
                    display:true,
                    text:'Forex Price'
                }
            }
          },
      };
    

      const [predicted,SetPredicted] = useState(default_data);
      const [startdate,setStartDate] =useState("")
      const [currency,setCurrency] = useState("EURUSD=X")
      const [forex_type,setForexType] = useState("Close")


      const getdatadatepicker = (e)=> {
        const date_id = e.target.id;
        const new_date =e.target.value
        setStartDate(new_date)
        }


    const getcurrency = (e) => {
        const new_currency =e.target.value
        setCurrency(new_currency)
    }

    const getforextype= (e) => {
        const new_forex_type =e.target.value
        setForexType(new_forex_type)
    }

    const getprediction = async () => {
        try 
      {
        const response = await publicRequest.post('/forecastprediction',{'currency':currency,'forex_type':forex_type});
        //console.log(response.data.predicted_price)
        const new_data_predicted =JSON.parse(response.data.predicted)
        const new_label=JSON.parse(response.data.date_label.replace(/'/g, '"'))
        SetPredicted((prevState) => ({
            ...prevState,
            labels:new_label,
            datasets: [
                {
                  ...prevState.datasets[0],
                  data:new_data_predicted, // New random data for first dataset
                },
            ]

          }));
      }
      catch(err)
      {
        console.log(err);
      }
    }



    return (
        <>
        <Navbar/>
        <div class="flex justify-center px-60">
            <LineChart data={predicted} options={options}/>
        </div>
        <div class="flex justify-center ...">
        <div class="flex flex-row item-center">
            <div class="p-4 ..."> 
            <Dropdown data ={getcurrency}/>
            </div>
            {/*<div>
            <DatePicker data ={getdatadatepicker} id ={"start_date"}/>
            </div>*/}
            <div class="p-4 ..."> 
            <DropdownForexType data ={getforextype}/>
            </div>
            <div class="p-4 ...">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={getprediction}>
                Process
                </button>
            </div>
        </div>
        </div>
    </>

    );
};

export default Home;