// src/components/DoctorCard.jsx
import React, { useState } from 'react';
import withDoctorDetails from '@/HOC/withDoctorDetails';

const DoctorCard = ({ name, doctorDetails, fetchDoctorDetails }) => {
const [showDetails, setShowDetails] = useState(false);

const handleClick = () => {
    fetchDoctorDetails(name);  // Llamamos a la función para cargar los detalles del doctor
    setShowDetails(!showDetails);  // Alternamos la visibilidad de los detalles
};

return (
    <div className="doctor-card">
    <h3>{name}</h3>
    <button onClick={handleClick}>
        {showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}
    </button>

    {showDetails && doctorDetails && (
        <div className="doctor-details">
        <p>Especialidad: {doctorDetails.specialty}</p>
        <p>Años de experiencia: {doctorDetails.experience}</p>
        </div>
    )}
    </div>
);
};

// Envolvemos DoctorCard con el HOC
export default withDoctorDetails(DoctorCard);
