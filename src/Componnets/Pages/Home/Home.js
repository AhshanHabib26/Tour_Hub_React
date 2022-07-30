import React from 'react';
import Destinations from '../Destinations/Destinations';
import Houses from '../Houses/Houses';
import Banner from './Banner';
import SearchInput from './SearchInput';


const Home = () => {
    return (
        <div>
            <Banner/>
            <SearchInput/>
            <Houses/>
            <Destinations/>
        </div>
    );
};

export default Home;