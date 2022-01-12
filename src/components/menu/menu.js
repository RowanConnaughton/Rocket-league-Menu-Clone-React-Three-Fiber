import React from 'react'

import MenuItem from '../menu-item/menu-item'

import './menu.styles.scss'

const Menu = () => {
    return (
        <div className='menu'>
            <MenuItem title={'Garage'} linkUrl={'garage'}/>
            <MenuItem title={'Credits'} linkUrl={'credits'}/>
        </div>
    )
}

export default Menu
