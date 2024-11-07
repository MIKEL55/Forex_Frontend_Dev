

const  DropdownForexType = (props) => {
    return (
      <div className="flex flex-col-2 items-center ">
      <label className="mb-2 text-lg font-medium text-gray-700 px-2">
          Type:
      </label>
      <select className="py-3 px-4 pe-9 block w-full border-4 border-black-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      onChange={props.data}>
          <option value="High">HIGH</option>
          <option value="Close">CLOSE</option>
          <option value="Open">OPEN</option>
          <option value="Low">LOW</option>
      </select>
      </div>
    )
  }
  
  export default DropdownForexType;