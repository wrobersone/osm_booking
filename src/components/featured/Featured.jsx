import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1546519393-754ec8cafd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='featured-img' />
            <div className="featured-title">
                <h1>Houston</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1546519393-754ec8cafd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='featured-img' />
            <div className="featured-title">
                <h1>New York</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featured-item">
            <img src="https://images.unsplash.com/photo-1546519393-754ec8cafd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='featured-img' />
            <div className="featured-title">
                <h1>Los Angeles</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured

