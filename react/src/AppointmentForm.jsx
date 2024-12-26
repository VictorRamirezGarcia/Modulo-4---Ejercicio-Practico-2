// src/components/AppointmentForm.js

import React, { useState } from 'react';

function AppointmentForm({ doctors }) {
const [patientName, setPatientName] = useState('');
const [selectedDoctor, setSelectedDoctor] = useState('');
const [appointmentDate, setAppointmentDate] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita agendada para:', patientName);
    console.log('Doctor:', selectedDoctor);
    console.log('Fecha:', appointmentDate);
};

return (
    <form onSubmit={handleSubmit}>
    <h2>Agendar una cita</h2>
    <label>
        Nombre del paciente:
        <input
        type="text"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        />
    </label>
    <br />
    <label>
        Seleccionar doctor:
        <select
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        >
        <option value="">Seleccione un doctor</option>
        {doctors.map((doctor, index) => (
            <option key={index} value={doctor.name}>
            {doctor.name}
            </option>
        ))}
        </select>
    </label>
    <br />
    <label>
        Fecha de la cita:
        <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        />
    </label>
    <br />
    <button type="submit">Agendar cita</button>
    </form>
);
}

export default AppointmentForm;
