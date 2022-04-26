import React from 'react'
import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-title">Search</h1>
            <div className="list-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (<DateRange 
                onChange={(item) => setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
              />)}
            </div>
            <div className="list-item">
              <label>Options</label>
              <div className="list-options">
                <div className="list-option-item">
                  <span className='list-option-text'>Min Price <small>per night</small></span>
                  <input type="number" className='list-option-input' />
                </div>
                <div className="list-option-item">
                  <span className='list-option-text'>Max Price <small>per night</small></span>
                  <input type="number" className='list-option-input' />
                </div>
                <div className="list-option-item">
                  <span className='list-option-text'>Adult</span>
                  <input type="number" min={1} className='list-option-input' placeholder={options.adult} />
                </div>
                <div className="list-option-item">
                  <span className='list-option-text'>Children</span>
                  <input type="number" min={0} className='list-option-input' placeholder={options.children} />
                </div>
                <div className="list-option-item">
                  <span className='list-option-text'>Rooms</span>
                  <input type="number" min={1} className='list-option-input' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List