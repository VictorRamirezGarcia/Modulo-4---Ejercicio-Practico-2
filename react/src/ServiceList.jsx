// src/components/ServiceList.js

import React from 'react';

function ServiceList({ services }) {
return (
    <div className="service-list">
    <h2>Servicios Médicos</h2>
    <ul>
        {services.map((service, index) => (
        <li key={index}>{service}</li>
        ))}
    </ul>
    </div>
);
}

export default ServiceList;
