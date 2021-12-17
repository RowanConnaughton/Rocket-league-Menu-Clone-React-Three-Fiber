import React from 'react'
import { useNavigate } from "react-router-dom";

import './menu-item.styles.scss'

const MenuItem = ({title, linkUrl }) => {
   
    let navigate = useNavigate();

    return (
        <div className='menu-item'
        onClick={() => navigate(linkUrl)}>
            {title.toUpperCase()}
        </div>
    )
}

export default MenuItem
