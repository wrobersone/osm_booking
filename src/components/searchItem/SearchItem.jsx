import React, { useState } from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom'

const SearchItem = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1, 
    });

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('/hotels/:id', {state: {destination, date, options}});
    };

  return (
    <div className='search-item'>
        <img 
            src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt=""
            className="si-img" 
        />
        <div className="si-desc">
            <h1 className="si-title">Tower Street Apartments</h1>
            <span className='si-distance'>500m from center</span>
            <span className='si-taxi'>Free airport shuttle</span>
            <span className='si-subtitle'>
                Studio Apartment with Air Conditioning
            </span>
            <span className='si-features'>
                Entire studio - 1 bathroom - 1 bed
            </span>
            <span className='si-cancel'>Free cancellation</span>
            <span className='si-cancel-subtitle'>Sign up now to get this great price today.</span>
        </div>
        <div className="si-details">
            <div className="si-rating">
                <span>Excellent</span>
                <button>9.3</button>
            </div>
            <div className="si-details-text">
                <span className='si-price'>$123</span>
                <span className='si-subtitle'>taxes and fees included</span>
                <button className='si-check-btn' onClick={handleSearch}>See Availability</button>
            </div>
        </div>
    </div>
  );
};

export default SearchItem