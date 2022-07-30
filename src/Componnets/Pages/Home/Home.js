import React from 'react';
import Houses from '../Houses/Houses';
import Banner from './Banner';
import SearchInput from './SearchInput';


const Home = () => {
    return (
        <div>
            <Banner/>
            <SearchInput/>
            <Houses/>
        </div>
    );
};

export default Home;