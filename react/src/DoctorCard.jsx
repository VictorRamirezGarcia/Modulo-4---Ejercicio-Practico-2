// src/components/DoctorCard.js

import React from 'react';

function DoctorCard({ name, specialty, yearsOfExperience }) {
return (
    <div className="doctor-card">
    <h3>{name}</h3>
    <p>Especialidad: {specialty}</p>
    <p>Años de experiencia: {yearsOfExperience}</p>
    </div>
);
}

export default DoctorCard;
