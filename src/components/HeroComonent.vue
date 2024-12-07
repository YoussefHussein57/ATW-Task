<template>
    <div class="hero">
      <slot></slot>
      <div class="hero__content">
        <div class="hero__content-text">
      <h1 class="hero__content-heading">
         The best procuts start with Figma 
      </h1>
  
      <h4 class="hero__content-heading-4"> 
          Most calendars are designed for teams. Slate is designed 
  for     freelancers
      </h4>
    </div>
    <div class="hero__content-btn">
      <custom-button class="hero__btn">Try For Free</custom-button>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  $color-header:#222B32;
  
  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .hero {
    position: relative;
    background-image: linear-gradient(rgba($color-header, 0.5), rgba($color-header, 0.9)),
      url('../assets/Header-image.jfif');
    background-size: cover;
    background-position: center;
    clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
    height: 100vh;
  
    &__content {
      font-family: sans-serif;
      letter-spacing: 0.1rem;
      text-align: center;
      color: #fff;
      margin: 8rem 0;
  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  
      gap: var(--spacing-base-lg);
  
      &-text {
        animation: slideInFromLeft 1s ease-out forwards; /* Apply slide-in animation */
      }
  
      &-btn {
        animation: slideInFromRight 1s ease-out forwards; /* Apply slide-in animation */
      }
  
      &-heading {
        font-weight: 700;
        font-size: 7.4rem;
        line-height: 8.4rem;
  
        max-width: 67.2rem; /* Adjust to prevent overflow */
        margin: 3rem auto; /* Center within the content */
  
        &-4 {
          font-weight: 400;
          font-size: 2.8rem;
          line-height: 4rem;
          max-width: 76.6rem; /* Adjust to prevent overflow */
          margin: 0 auto; /* Center within the content */
        }
      }
    }
  }
  
  
  </style>