import React, { useState } from "react";

function AddServiceForm({ addService, isEditing, handleUpdate, serviceData }) {
  const [name, setName] = useState(serviceData ? serviceData.name : "");
  const [description, setDescription] = useState(
    serviceData ? serviceData.description : ""
  );
  const [price, setPrice] = useState(serviceData ? serviceData.price : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdate({ name, description, price: parseFloat(price) });
    } else {
      addService({ name, description, price: parseFloat(price) });
    }
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form class="max-w-sm mx-auto my-5 border-2 border-black p-5 rounded bg-gradient-to-tr from-red-200 to-emerald-100" onSubmit={handleSubmit}>
      <div class="mb-5">
        // <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        //   Your email
        // </label>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
         
        />
      </div>
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          
        />
      </div>
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Price
        </label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          
        />
      </div>
      
      <button type="submit"
         class="text-white
        bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
        text-center dark:bg-blue-600 dark:hover:bg-blue-700
        dark:focus:ring-blue-800">{isEditing ? "Update Service" : "Add Task"}
      </button>
    </form>
  );
}

export default AddServiceForm;
