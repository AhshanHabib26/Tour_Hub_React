import { useEffect, useState } from 'react';

const useData = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
      fetch("Data.json")
        .then((res) => res.json())
        .then((data) => setHouses(data));
    }, []);

    return [houses]
};

export default useData;