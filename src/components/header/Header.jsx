import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
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

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/hotels', {state: {destination, date, options}});
  };

  return (
    <div className='header'>
      <div className={type === 'list' ? 'header-container listMode' : 'header-container'}>
        <div className="header-list">
          <div className="header-item active">
            <FontAwesomeIcon icon={faBed} />
            <span> Hotels</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faCar} />
            <span> Car Rentals</span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faPlane} />
            <span> Flights </span>
          </div>
          <div className="header-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span> App Rides</span>
          </div>
        </div>
        { type !== 'list' && (<><h1 className="header-title">
          A lifetime of discounts? It's genius!
        </h1>
        <p className="header-desc">
          Get rewarded for your travels - unlock instant savings up to 10% or more with a free OSM account.
        </p>
        <button className='header-btn'>Register / Sign In</button>
        <div className="header-search">
          <div className="header-search-item">
            <FontAwesomeIcon icon={faBed} className='header-icon' />
            <input 
              type="text" 
              placeholder='Where are you going?' 
              className='search-input'
              onChange={(e)=> setDestination(e.target.value)} 
            />
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faCalendarDays} className='header-icon' />
            <span 
              onClick={() => setOpenDate(!openDate)} 
              className='search-text'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
              minDate={new Date()}
            />}
          </div>
          <div className="header-search-item">
            <FontAwesomeIcon icon={faPerson} className='header-icon' />
            <span 
              onClick={() => setOpenOptions(!openOptions)} 
              className='search-text'>{`${options.adult} adult(s) - ${options.children} children - ${options.room} room(s)`}</span>
            {openOptions && (<div className="options">
              <div className="option-item">
                <span className='option-text'>Adult</span>
                <div className="option-counter">
                  <button 
                    disabled={options.adult <= 1} 
                    className='option-counter-btn' 
                    onClick={() => handleOption('adult', 'd')}
                  >-
                  </button>
                  <span className='option-number'>{options.adult}</span>
                  <button 
                    className='option-counter-btn' 
                    onClick={() => handleOption('adult', 'i')}
                  >+</button>
                </div>
              </div>
              <div className="option-item">
                <span className='option-text'>Children</span>
                <div className="option-counter">
                  <button 
                    disabled={options.children <= 0}  
                    className='option-counter-btn' 
                    onClick={() => handleOption('children', 'd')}
                  >-</button>
                  <span className='option-number'>{options.children}</span>
                  <button 
                    className='option-counter-btn' 
                    onClick={() => handleOption('children', 'i')}>+</button>
                </div>
              </div>
              <div className="option-item">
                <span className='option-text'>Rooms</span>
                <div className="option-counter">
                  <button 
                    disabled={options.room <= 1}  
                    className='option-counter-btn' 
                    onClick={() => handleOption('room', 'd')}>-</button>
                  <span className='option-number'>{options.room}</span>
                  <button 
                    className='option-counter-btn' 
                    onClick={() => handleOption('room', 'i')}>+</button>
                </div>
              </div>
            </div>)}
          </div>
          <div className="header-search-item">
            <button className='header-btn' onClick={handleSearch}>Search</button>
          </div>
        </div></>)}
      </div>
    </div>
  );
};

export default Header