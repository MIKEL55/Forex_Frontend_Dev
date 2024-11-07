import { useState } from "react";
import Dropdown from "../components/Dropdown";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import { publicRequest } from "../request-method";
import DatePicker from "../components/DatePicker";
import DropdownForexType from "../components/DropdownForexType";
import DatePickerMain from "../components/DatePickerMain";




const PercentagePrediction =() => {

    const [startdate,setStartDate] =useState("")
    const [enddate,setEndDate] =useState("")
    const [currency,setCurrency] = useState("EURUSD=X")

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

        const getprediction = async () => {
           try 
          {
            const response = await publicRequest.post('/percentagegain',{'currency':currency,'start_date':startdate,'end_date':enddate});
            console.log(response)
            //const new_data_predicted =JSON.parse(response.data.predicted)
            //const new_data_actual =JSON.parse(response.data.actual)
            //const new_label=JSON.parse(response.data.date_label.replace(/'/g, '"'))
          }
          catch(err)
          {
            console.log(err);
          }
        }

    const getcurrency = (e) => {
        const new_currency =e.target.value
        setCurrency(new_currency)
    }



    return (
        <>
        <Navbar/>
        <div class="flex justify-center ...">
        <div className="stats shadow p-10">
            <div className="stat place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>
            </div>
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
            <div class="py-6 px-3">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={getprediction}>
                Buy
                </button>
            </div>
            <div class="py-6 px-3">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={getprediction}>
                Sell
                </button>
            </div>

        </div>
        </div>
        </>
    )
}


export default PercentagePrediction