import React from 'react'

import MenuItem from '../menu-item/menu-item'

import './menu.styles.scss'

const Menu = () => {
    return (
        <div className='menu'>
            <MenuItem title={'Garage'} linkUrl={'garage'}/>
        </div>
    )
}

export default Menu
