import Dropdown from "../components/Dropdown";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <LineChart/>
            <div class="flex justify-center ...">
            <div class="flex flex-row item-center">
                <div class="p-4 ..."> 
                <Dropdown/>
                </div>
                <div class="p-4 ...">
                <Dropdown/>
                </div>

                <div class="p-4 ...">
                    {/* Input Days */}
                </div>


                <div class="p-4 ...">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Button
                    </button>
                </div>
                
                
            </div>
            
            </div>
        </>
    );
};

export default Home;