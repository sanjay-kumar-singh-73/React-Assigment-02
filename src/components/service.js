import React, { useState } from "react";
import "../dist/tailwind.css";
import ServiceList from "./serviceList";
import AddServiceForm from "./AddServiceForm";

// Main ServiceManager Component
function ServiceManager() {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingService, setEditingService] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const editService = (index) => {
    const serviceToEdit = services[index];
    setEditingIndex(index);
    setEditingService(serviceToEdit);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === editingIndex ? updatedService : service
    );
    setServices(updatedServices);
    setEditingIndex(null);
    setEditingService(null);
  };

  return (
    <div className="border-2">
      <h1 className="text-2xl font-bold text-center border-2 p-6 bg-slate-300 rounded-full">
        Healthcare Services
      </h1>
      <AddServiceForm
        addService={addService}
        isEditing={editingIndex !== null}
        handleUpdate={updateService}
        serviceData={editingService}
      />
      <ServiceList
        services={services}
        handleDelete={deleteService}
        handleEdit={editService}
      />
    </div>
  );
}

export default ServiceManager;
