import { useState } from "react";
import Dropdown from "../components/Dropdown";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import { publicRequest } from "../request-method";
import DatePicker from "../components/DatePicker";
import DropdownForexType from "../components/DropdownForexType";
import DatePickerMain from "../components/DatePickerMain";


const Main = () => {

    const default_data = {
        labels: [],
        datasets: [         //Default dataset
          {
            label: "Predicted Price", 
            data: [],
            fill: false,
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Actual Price",
            data: [],
            fill: false,
            borderColor: "r#742774"
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
      const [enddate,setEndDate] =useState("")
      const [currency,setCurrency] = useState("EURUSD=X")
      const [forex_type,setForexType] = useState("Close")


      const getdatadatepicker = (e)=> {
        const date_id = e.target.id;
        const new_date =e.target.value
        if (date_id == 'start_date') 
        {
            setStartDate(new_date)
        }
        else{
            setEndDate(new_date)
        }
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
        const response = await publicRequest.post('/mainprediction',{'currency':currency,'start_date':startdate,'end_date':enddate,'forex_type':forex_type});
        //console.log(response.data.predicted_price)
        const new_data_predicted =JSON.parse(response.data.predicted)
        const new_data_actual =JSON.parse(response.data.actual)
        const new_label=JSON.parse(response.data.date_label.replace(/'/g, '"'))
        SetPredicted((prevState) => ({
            ...prevState,
            labels:new_label,
            datasets: [
                {
                  ...prevState.datasets[0],
                  data:new_data_predicted, // Result predicted
                },
                {
                    ...prevState.datasets[1], // Result actual
                    data:new_data_actual,

                }
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
            <div>
            <DatePickerMain data ={getdatadatepicker} id ={"start_date"}/>
            </div>
            <div>
            <DatePickerMain data ={getdatadatepicker} id ={"end_date"}/>
            </div>
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

export default Main;