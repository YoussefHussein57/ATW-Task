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
      flex-direction: column; /* Stack content vertically */
      height: auto; /* Adjust height dynamically */
      gap: var(--spacing-base-md);
    }

    .header__container {
      flex-direction: column; /* Stack navigation and logo */
      gap: var(--spacing-base-sm); /* Add smaller gaps */
    }

    .header__list {
      flex-wrap: wrap; /* Allow navigation items to wrap */
      justify-content: center; /* Center items horizontally */
      gap: 1rem; /* Adjust gap for wrapping */
    }

    .header__icons {
      font-size: 2.8rem; /* Reduce icon size */
      gap: 1.5rem; /* Adjust icon gap */
    }
  }

  /* Mobile Styles */
  @media screen and (max-width: 768px) {
    .header {
      padding: var(--spacing-base); /* Add padding */
      justify-content: center; /* Center header content */
    }

    .header__list-link {
      font-size: 1.6rem; /* Reduce font size */
    }

    .header__logo-image {
      height: 3rem; /* Reduce logo size */
    }

    .header__icons {
      font-size: 2.4rem; /* Reduce icon size */
      gap: 1rem; /* Adjust icon gap */
    }
  }

  /* Small Mobile Styles */
  @media screen and (max-width: 480px) {
    .header {
      text-align: center; /* Center-align text */
      gap: var(--spacing-base-sm); /* Smaller gaps */
    }

    .header__list {
      flex-direction: column; /* Stack navigation vertically */
      gap: 0.5rem; /* Reduce gap */
    }

    .header__list-link {
      font-size: 1.4rem; /* Further reduce font size */
    }

    .header__logo-image {
      height: 2.5rem; /* Reduce logo size further */
    }

    .header__icons {
      font-size: 2rem; /* Reduce icon size */
    }
  }
}
</style>
