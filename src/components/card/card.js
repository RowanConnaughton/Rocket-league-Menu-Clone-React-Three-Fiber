import React from 'react'


import './card.styles.scss'

const Card = ({title, children}) => {
   
    

    return (
        <div className='card'
        >
        <h1>{title}</h1>

        {children}
        </div>
    )
}

export default Card