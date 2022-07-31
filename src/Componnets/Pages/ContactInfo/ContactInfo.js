import React from 'react';
import Styles from '../../Styles/ContactInfo.module.css'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaSearchLocation} from 'react-icons/fa'


const ContactInfo = () => {
    return (
        <div className={Styles.ContactContainer}>
            <div className=' py-12 flex-wrap flex items-center justify-evenly flex-col lg:flex-row mx-8'>
                <h1 className=' text-4xl font-extrabold text-secondary'>Contact Info:</h1>
                <div className=' flex items-center my-5 lg:my-0 flex-col lg:flex-row'>
                    <BsTelephoneFill color='#fff' size='25px'/>
                    <h1 className=' text-xl text-secondary font-semibold ml-1'>+880-1646418365</h1>
                </div>
                <div className=' flex items-center  lg:my-0 flex-col lg:flex-row'>
                    <MdEmail color='#fff' size='20px'/>
                    <a className=' text-xl text-secondary font-semibold ml-1' href='mailto:ahshan.habib026@gmail.com'>ahshan.habib026@gmail.com</a>
                </div>
                <div className=' flex items-center my-5 lg:my-0 flex-col lg:flex-row'>
                    <FaSearchLocation color='#fff' size='20px'/>
                    <h1 className=' text-xl text-secondary font-semibold ml-1'>Chandpur, Chittagong, Bangladesh</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;