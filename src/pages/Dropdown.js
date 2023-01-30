import React, { useState } from 'react';
import Select from 'react-select';
import india from '../assets/images/india.png'
import india2 from '../assets/images/india2.png'
import india3 from '../assets/images/india3.png'
import india4 from '../assets/images/india4.png'

function Dropdown() {
    const data = [
        {
            value: 1,
            text: 'En',
            icon: <img src={india} alt="" />


        },
        {
            value: 2,
            text: 'Nz',
            icon: <img src={india2} alt="" />
        },
        {
            value: 3,
            text: 'Usa',
            icon: <img src={india3} alt="" />

        },
        {
            value: 4,
            text: 'Ind',
            icon: <img src={india4} alt="" />

        }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    return (
        <div className="App">

            <Select
                placeholder="🏳️‍⚧️ En"
                value={selectedOption}
                options={data}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                )}
            />

        </div>
    );
}

export default Dropdown;
