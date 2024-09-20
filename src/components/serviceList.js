import React from "react";
import "../dist/tailwind.css";
// ServiceList Component
function ServiceList({ services, handleDelete, handleEdit }) {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-gradient-to-tr from-red-200 to-emerald-100">
      {services.length === 0 ? (
        <p className="py-7  text-center text-red-600 font-mono">
          No services available. Please add a service.
        </p>
      ) : (
        services.map((service, index) => (
          <div className="card m-4 gap-4 p-5" >
            <div  key={index} class="p-6  bg-purple-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Description:
                {service.description}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${service.price}</p>
              <div className="flex p-1 border-1 gap-5">
                <button onClick={() => handleEdit(index)} class="text-white
        bg-green-700 hover:bg-sky-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
        text-center dark:bg-green-600 dark:hover:bg-sky-700
        dark:focus:ring-blue-800">Edit</button>
                <button onClick={() => handleDelete(index)} class="text-white
        bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
        text-center dark:bg-red-600 dark:hover:bg-blue-700
        dark:focus:ring-blue-800">Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div></>
  );
}

export default ServiceList;
