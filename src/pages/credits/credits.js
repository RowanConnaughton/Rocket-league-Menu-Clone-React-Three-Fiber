import React from 'react';

import Card from '../../components/card/card';
import Logo from '../../components/logo/logo';

import "./credits.styles.scss";

export const Credits = () => {
    return (
        <div className='container'>
            <Logo/>
            <Card title={'Credits'}>

            <section className='sections'>
                <h2>Car Models</h2>
                
                <ul className='credit-list'>
                    <li><a href='https://sketchfab.com/3d-models/fennec-rocket-league-car-5b43b50b6eeb4a12a29671df3418f57a' rel='noreferrer' target='_blank'>Fennec Model author: Jako (https://sketchfab.com/fairlight51)</a></li>
                    <li><a href='https://sketchfab.com/3d-models/octane-rocket-league-car-9910f0a5d158425bbc7deb60c7a81f69' rel='noreferrer' target='_blank'>Octane Model author: Jako (https://sketchfab.com/fairlight51)</a></li>
                    <li><a href='https://sketchfab.com/3d-models/dominus-rocket-league-car-f592f249a65f41cd81a0e5aa3d418cb2' rel='noreferrer' target='_blank'>Dominus Model author: Jako (https://sketchfab.com/fairlight51)</a></li>
                </ul>

            </section>

            <section className='sections'>
                <h2>Ball Model</h2>
                
                <ul className='credit-list'>
                    <li><a href='https://sketchfab.com/3d-models/rocket-league-ball-free-3d-model-336e5b643df64b37b2cbec24e1b99243' rel='noreferrer' target='_blank'>Rl Ball Model author: niysi.ambalaj (https://sketchfab.com/niysi.ambalaj)</a></li>
                </ul>

            </section>


            </Card>
        </div>
    )
}
