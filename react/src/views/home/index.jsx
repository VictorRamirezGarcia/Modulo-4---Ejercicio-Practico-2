// src/views/home.jsx
import React, { useState, useEffect } from 'react';
import ServiceList from '@/components/ServiceList';  // El componente que muestra la lista de servicios
import ServiceModal from '@/components/ServiceModal';  // El modal para mostrar detalles de un servicio

export default function Home() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);  // Estado para el servicio seleccionado

  useEffect(() => {
    setServices(['Consulta general', 'Cirugía', 'Pediatría', 'Cardiología']);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);  // Establecemos el servicio seleccionado cuando se hace clic
  };

  const handleCloseModal = () => {
    setSelectedService(null);  // Cerramos el modal
  };

  return (
    <div className="content">
      <h2>Bienvenidos al Hospital</h2>
      <p>En este hospital, ofrecemos una variedad de servicios médicos.</p>
      <ServiceList services={services} onClickService={handleServiceClick} />  {/* Pasamos la función para abrir el modal */}

      {/* Si hay un servicio seleccionado, mostramos el modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}  // Función para cerrar el modal
        />
      )}
    </div>
  );
}
