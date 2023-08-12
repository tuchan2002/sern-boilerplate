import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const fetchDataTest = async () => {
            const response = await axios.get('http://localhost:8080');
            setGreeting(response.data.message);
        };
        fetchDataTest();
    }, []);

    return (
        <div>
            <p>
                {greeting}
            </p>
        </div>
    );
}

export default App;
