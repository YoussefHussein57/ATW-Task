<template>
    <button class="custom-button">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "CustomButton",
  };
  </script>
  
  <style scoped>
  .custom-button {
    background-color: #007bff; /* Button background color */
    color: white; /* Text color */
    font-family: sans-serif; /* Font family */
    font-size: 1.6rem; /* Font size */
    font-weight: 500; /* Font weight */
    padding: 1rem 2.5rem; /* Padding inside the button */
    border: none; /* Remove default border */
    border-radius: 30px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    text-align: center; /* Center align text */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: all 0.3s ease-in-out; /* Smooth hover transition */
  }
  
  /* Hover state */
  .custom-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow */
    transform: translateY(-3px) scale(1.05);
  }
  
  /* Focus state */
  .custom-button:focus {
    outline: none; /* Remove outline */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Focus ring */
  }
  </style>
  