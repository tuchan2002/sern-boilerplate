import { useEffect, useState } from 'react';
import axiosClient  from './utils/axios';

function App() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const fetchDataTest = async () => {
            const response = await axiosClient.get('api/v1/test');
            setGreeting(response.data.message);
        };
        fetchDataTest();
    }, []);

    return (
        <div>
            <p>
                {greeting}
            </p>
            <p>Copyright by TuChan</p>
        </div>
    );
}

export default App;
