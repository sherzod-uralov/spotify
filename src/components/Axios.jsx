import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Axios = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      {
        countries.map(country => (
          <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      </div>
        ))
      }
    </div>
  );
};

export default Axios;