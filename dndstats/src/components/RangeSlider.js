import React from 'react';
import "./RangeSlider.css"

function RangeSlider({ value, onChange }) {
  // Function to handle changes in the slider value
  const handleChange = (event) => {
    onChange(event.target.value); // Call the onChange function from props
  };

  return (
    <div>
        <h4 className='slider-title'>Level Select</h4>
        <input className='range-slider'
            type="range"
            min={1}
            max={20}
            value={value}
            onChange={handleChange}
        />
        <p className='slider-val'>Level: {value}</p>
    </div>
  );
}

export default RangeSlider;
