import React, { useState, useEffect, Profiler} from 'react';
import DoctorCard from '@/components/DoctorCard';

// Componente de la sección de Servicios
export default function Services() {

    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
      // Simulando la carga de datos (esto normalmente vendría de una API)
      setDoctors([
        { name: 'Dr. Pérez', specialty: 'Cardiología', yearsOfExperience: 10 },
        { name: 'Dr. Gómez', specialty: 'Pediatría', yearsOfExperience: 8 },
      ]);
    }, []);
  
    return (
      <div className="content">
        <h2>Bienvenidos al Hospital</h2>
        <p>En este hospital, nos comprometemos con su salud.</p>
        <h3>Listado de Profesionales</h3>
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            yearsOfExperience={doctor.yearsOfExperience}
          />
        ))}
      </div>
  
    )

}
