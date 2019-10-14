import React from 'react';
import Section from '../../components/main-section';
import Hora from './hours-detect';

import './css/classes.css';
import  './css/style.css';



const Main = () => (
    <div id='body' className={Hora()}>
        <div className='area'>
            <p>Hora atual</p>
            <p className='hour'>
                <Section />
            </p><br/>
            <footer>
                <h2>&copy; Mateus Felipe</h2>
            </footer>
        </div>
        
    </div>
);


export default Main;