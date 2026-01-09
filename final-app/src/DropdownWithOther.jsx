import React, { useState } from 'react';


function DropdownWithOther({ className }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [otherValue, setOtherValue] = useState('');

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);


        if (selectedValue !== 'other') {
            setOtherValue('');
        }
    };

    const handleOtherInputChange = (event) => {
        setOtherValue(event.target.value);
    };

    return (
        <div>
            <select id="select__field" className={className} value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Please select</option>
                <option value="1">Silver Tier</option>
                <option value="2">Gold Tier</option>
                <option value="3">Platinum Tier</option>
                <option value="other">Other</option>
            </select>

            {selectedOption === 'other' && (
                <div>
                    <label>
                        Please specify:
                        <input type="text" value={otherValue} onChange={handleOtherInputChange} />
                    </label>
                </div>
            )}
        </div>
    );
}

export default DropdownWithOther;
