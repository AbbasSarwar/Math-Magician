import { useEffect, useState } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          headers: {
            'X-Api-Key': '9EoCxmipJCj+zR35ZNsY3A==93CN5SnCNPUiktDW',
            'Content-type': 'application/json',
          },
        });
        const data = await res.json();
        if (data.length > 0) {
          setData(data[0].quote);
        } else {
          setData('');
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="Quotes">
        <p>
          Error:
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="Quotes">
      {data ? <p>{data}</p> : <p>Loading....</p>}
    </div>
  );
};

export default Quotes;
