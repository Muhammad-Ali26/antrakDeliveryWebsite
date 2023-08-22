import React, { useState } from 'react';

const Test = () => {
  const [time, setTime] = useState('');

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const getCurrentTime = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTime = `${currentHour.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`;

    return currentTime;
  };

  const getAvailableTimes = () => {
    const currentTime = getCurrentTime();
    const options = [];

    for (let hour = 0; hour <= 23; hour++) {
      for (let minutes = 0; minutes <= 59; minutes += 15) {
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const amPm = hour >= 12 ? 'PM' : 'AM';
        const time = `${hour12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amPm}`;

        if (time > currentTime) {
          options.push(time);
        }
      }
    }

    return options;
  };

  const availableTimes = getAvailableTimes();

  return (
    <div className="col-span-2 md:col-span-1 lg:col-span-2 border rounded border-gray-400">
      <select
        value={time}
        onChange={handleTimeChange}
        className="px-4 py-2 w-full rounded lg:text-xl text-black font-ubuntu"
      >
        <option value="" disabled>Select a time</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Test;