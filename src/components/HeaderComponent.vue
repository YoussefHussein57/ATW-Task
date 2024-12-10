<template>
  <header class="header">
    <div class="header__container">
      <!-- Navigation Section -->
      <nav class="header__navigation">
        <ul class="header__list">
          <!-- Navigation Links -->
          <li class="header__list-item">
            <a href="#" class="header__list-link">Home</a>
          </li>
          <li class="header__list-item">
            <a href="#" class="header__list-link">Product</a>
          </li>
          <li class="header__list-item">
            <a href="#" class="header__list-link">Pricing</a>
          </li>
          <li class="header__list-item">
            <a href="#" class="header__list-link">About</a>
          </li>
          <li class="header__list-item">
            <a href="#" class="header__list-link">Contact</a>
          </li>
        </ul>
      </nav>

      <!-- Logo Section -->
      <div class="header__logo">
        <img src="../assets/logo.png" alt="Logo" class="header__logo-image" />
      </div>
    </div>

    <!-- Social Media Icons -->
    <div class="header__icons">
      <div class="header__icon">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </div>
      <div class="header__icon">
        <font-awesome-icon :icon="['fab', 'square-facebook']" />
      </div>
      <div class="header__icon">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 6.6rem; /* Set header height */
  display: flex; /* Flex layout */
  justify-content: space-around; /* Space items evenly */
  align-items: center; /* Center items vertically */

  &__container {
    display: flex; /* Flexbox for layout */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center items vertically */
    gap: 2.1rem; /* Space between navigation and logo */
  }

  &__navigation {
    font-family: sans-serif;
    font-size: 2rem; /* Navigation font size */
    padding: 1.2rem;
  }

  &__list {
    list-style: none; /* Remove bullet points */
    display: flex; /* Horizontal layout for items */
    gap: 2.1rem; /* Space between navigation items */

    &-link {
      text-decoration: none; /* Remove underline */
      display: inline-block; /* Inline layout for links */
      color: #fff; /* White text */
      transition: all 0.2s ease-in-out; /* Smooth hover effect */
    }

    &-link:hover {
      color: #d5d5d5; /* Light gray on hover */
      transform: translateY(-3px) scale(1.05); /* Smooth hover effect */
    }
  }

  &__logo {
    display: flex; /* Flexbox for layout */
    align-items: center; /* Center-align logo vertically */

    &-image {
      height: 3.8rem; /* Set logo height */
      max-height: 100%; /* Prevent overflow */
      object-fit: contain; /* Maintain aspect ratio */
    }
  }

  &__icons {
    font-size: 3.2rem; /* Icon size */
    color: #fff; /* Icon color */
    display: flex; /* Horizontal layout for icons */
    gap: 2.2rem; /* Space between icons */
    cursor: pointer;

    & .header__icon {
      display: inline-block; /* Inline layout */
      transition: all 0.2s ease-in-out; /* Smooth hover effect */

      &:hover {
        color: #d5d5d5; /* Change color on hover */
        transform: translateY(-3px) scale(1.05); /* Hover animation */
      }
    }
  }

  /* Tablet Styles */
  @media screen and (max-width: 1024px) {
    .header {
      padding: 0 1.5rem; /* Reduce side padding */
    }
  
    .header__container {
      gap: 1rem; /* Reduce spacing between navigation and logo */
    }
  
    .header__list {
      gap: 1rem; /* Minimize gap between navigation items */
      flex-wrap: wrap; /* Allow items to wrap if needed */
    }
  
    .header__list-link {
      font-size: 1.8rem; /* Reduce font size for navigation links */
    }
  
    .header__logo-image {
      height: 3rem; /* Scale down the logo */
    }
  
    .header__icons {
      font-size: 2.4rem; /* Reduce icon size */
      gap: 1rem; /* Minimize spacing between icons */
    }
  }
  
  @media screen and (max-width: 768px) {
    .header {
      padding: 0 1rem; /* Reduce side padding further */
    }
  
    .header__list {
      gap: 0.8rem; /* Reduce gap between navigation items */
    }
  
    .header__list-link {
      font-size: 1.6rem; /* Further reduce font size for links */
    }
  
    .header__logo-image {
      height: 2.5rem; /* Further scale down the logo */
    }
  
    .header__icons {
      font-size: 2rem; /* Adjust icon size */
    }
  }
  
  @media screen and (max-width: 480px) {
    .header {
      padding: 0 0.5rem; /* Minimal padding for small screens */
    }
  
    .header__list {
      gap: 0.5rem; /* Minimal gap between navigation items */
      flex-wrap: wrap; /* Ensure items wrap properly */
    }
  
    .header__list-link {
      font-size: 1.4rem; /* Scale down font size for links */
    }
  
    .header__logo-image {
      height: 2rem; /* Smallest size for the logo */
    }
  
    .header__icons {
      font-size: 1.8rem; /* Scale down icons */
      gap: 0.5rem; /* Minimal spacing for icons */
    }
  }
}  
</style>
