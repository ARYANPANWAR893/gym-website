import React from 'react';
import ins from '../images/instructor.png';
import dum from '../images/dumbells.png';
import nut from '../images/nutrition.png';
import ass from '../images/assistance.png';
import '../styles/whyus.css'


export const WhyUs = () => {
    return (
        <div className='container-why'>
            <div className='why'>
                <img src={ins} alt="Instructor" />
                <div>
                    <h1>Experienced Instructors</h1>
                </div>
            </div>
            <div className='why'>
                <img src={nut} alt="Nutrition" />
                <div>
                    <h1>Accurate Diet Plans</h1>
                </div>
            </div>
            <div className='why'>
                <img src={dum} alt="Dumbells" />
                <div>
                    <h1>All Types Of Equipments</h1>
                </div>
            </div>
            <div className='why'>
                <img src={ass} alt="Assistance" />
                <div>
                    <h1>24/7 Assitance</h1>
                </div>
            </div>
        </div>
    )
}
