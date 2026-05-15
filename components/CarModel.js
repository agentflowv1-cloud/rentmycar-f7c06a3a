import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarModel = () => {
  const [carModels, setCarModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarModels = async () => {
      try {
        const response = await axios.get('/api/car-models');
        setCarModels(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCarModels();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {carModels.map((carModel) => (
        <div key={carModel.id}>
          <h2>{carModel.name}</h2>
          <p>Details: {carModel.details}</p>
        </div>
      ))}
    </div>
  );
};

export default CarModel;