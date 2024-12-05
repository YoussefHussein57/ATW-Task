<template>
    <header class="header">
      <div class="header__container">
        <nav class="header__navigation">
          <ul class="header__list">
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
        <div class="header__logo">
          <img src="../assets/logo.png" alt="Logo" class="header__logo-image" />
        </div>
      </div>
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
export default {

}
</script>

<style lang="scss" scoped>

.header {
    height: 6.6rem;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.1rem;
    }
  
    &__navigation {
      font-family: sans-serif;
      font-size: 2rem;
      padding: 1.2rem;
    }
  
    &__list {
      list-style: none;
  
      display: flex;
      gap: 2.1rem;
  
   
      &-link {
        text-decoration: none;
        display: inline-block;
        color: #fff;
        transition: all 0.2s ease-in-out;
      }
  
      &-link:hover {
        color: #d5d5d5;
        transform: translateY(-3px) scale(1.05); /* Smooth translation effect */
      }
    }
  
    &__logo {
      display: flex;
      align-items: center;
  
      &-image {
        height: 3.8rem; // Match font-size of navigation
        max-height: 100%; // Prevent overflow
        object-fit: contain; // Maintain aspect ratio
      }
    }
  
    &__icons {
      font-size: 3.2rem;
      color: #fff;
  
      display: flex;
      gap: 2.2rem;
      cursor: pointer;
  
      & .header__icon {
        display: inline-block;
        transition: all 0.2s ease-in-out;
  
        &:hover {
          color: #d5d5d5;
          transform: translateY(-3px) scale(1.05); /* Smooth hover effect */
        }
      }
    }
  }
  


</style>