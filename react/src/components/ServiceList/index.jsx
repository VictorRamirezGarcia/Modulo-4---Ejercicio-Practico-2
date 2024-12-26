// src/components/ServiceList.jsx
import React from 'react';

function ServiceList({ services, onClickService }) {
  return (
    <React.Fragment>
      <h2>Servicios Médicos</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} onClick={() => onClickService(service)} style={{ cursor: 'pointer' }}>
            {service}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ServiceList;