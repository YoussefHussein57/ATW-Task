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
  name:"HeroComponent",

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
    width: 100%;
    position: relative;
    background-image: linear-gradient(rgba($color-header, 0.5), rgba($color-header, 0.9)),
      url('../assets/Header-image.jfif');
    background-size: cover;
    background-position: center;
    clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
    overflow: hidden; /* Prevents content from spilling outside the clipped area */
    height: 100vh;
    margin: 0;
    padding: 0;
  
    &__content {
      font-family: sans-serif;
      letter-spacing: 0.1rem;
      text-align: center;
      color: #fff;
      margin: 0;
      padding: var(--spacing-base);
  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-base-md);
  
      &-heading {
        font-weight: 700;
        font-size: 7.4rem;
        line-height: 8.4rem;
  
        max-width: 67.2rem; /* Adjust to prevent overflow */
        margin: 1rem auto; /* Center within the content */
  
        &-4 {
          font-weight: 400;
          font-size: 2.8rem;
          line-height: 4rem;
          max-width: 76.6rem; /* Adjust to prevent overflow */
          margin: 0 auto; /* Center within the content */
        }
      }
  
      &-btn {
        animation: slideInFromRight 1s ease-out forwards; /* Apply slide-in animation */
      }
    }
  
    /* Tablet adjustments (below 1024px) */
    @media screen and (max-width: 1024px) {
      .hero {
        clip-path: none; /* Simplify shape for tablets */
        height: 75vh; /* Reduce height for tablets */
      }
  
      .hero__content-heading {
        font-size: 6rem; /* Reduce heading size */
        line-height: 7rem;
      }
  
      .hero__content-heading-4 {
        font-size: 2.4rem; /* Adjust subtitle size */
        line-height: 3.2rem;
      }
  
      .hero__btn {
        padding: 1rem 2rem;
        font-size: 1.6rem; /* Adjust button size */
      }
    }
  
    /* Mobile adjustments (below 768px) */
    @media screen and (max-width: 768px) {
      .hero {
        height: 65vh; /* Further reduce height for smaller devices */
      }
  
      .hero__content {
        gap: var(--spacing-base-md);
      }
  
      .hero__content-heading {
        font-size: 4.8rem;
        line-height: 6rem;
      }
  
      .hero__content-heading-4 {
        font-size: 2rem;
        line-height: 2.8rem;
      }
  
      .hero__btn {
        font-size: 1.4rem;
        padding: 0.8rem 1.6rem;
      }
    }
  
    /* Small mobile adjustments (below 480px) */
    @media screen and (max-width: 480px) {
      .hero {
        background-size: cover;
        height: 55vh; /* Further reduce height for mobile */
      }
  
      .hero__content-heading {
        font-size: 3.6rem;
        line-height: 4.5rem;
      }
  
      .hero__content-heading-4 {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
  
      .hero__btn {
        font-size: 1.2rem;
        padding: 0.6rem 1.2rem;
      }
    }
  }
  
  
  
  </style>