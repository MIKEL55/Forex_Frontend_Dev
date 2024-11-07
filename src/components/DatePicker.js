import React, { useState, useEffect } from 'react';

const DatePicker = (props) => {
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    // Format today's date as yyyy-mm-dd
    const todayFormatted = `${yyyy}-${mm}-${dd}`;
    setMinDate(todayFormatted);

    // Calculatinf the max date (30 days from today)
    const max = new Date();
    max.setDate(today.getDate() + 30);

    const ddMax = String(max.getDate()).padStart(2, '0');
    const mmMax = String(max.getMonth() + 1).padStart(2, '0');
    const yyyyMax = max.getFullYear();
    const maxFormatted = `${yyyyMax}-${mmMax}-${ddMax}`;

    setMaxDate(maxFormatted);
  }, []);

  return (
    <div className="flex flex-col-2 items-center mt-5">
      <label htmlFor="date" className="mb-2 text-lg font-medium text-gray-700 px-2">
        Date:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        className="p-2 border border-4 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        min={minDate}
        max={maxDate}
        onChange={props.data}
      />
    </div>
  );
};

export default DatePicker;