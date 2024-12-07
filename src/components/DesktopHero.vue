<template>
    <div class="hero">
  
      <div class="hero__content">
        <div class="hero__text flex-column">
          <h2 class="hero__title heading-2">Fastest way to organize</h2>
          <h4 class="hero__description heading-4"> 
              Most calendars are designed for teams.
              Slate is designed for freelancers
          </h4>
        </div>
        <div class="hero__actions flex-column">
          <custom-button class="hero__button">Try For Free</custom-button>
        </div>
      </div>
  
      <div class="hero__frame">
      
            <img src="../assets/Macbook-Pro.svg" alt="Desktop Screenshot" class="hero__frame-image" />
     
      </div>
  
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .hero {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;

    margin: var(--spacing-base-lg) auto;
  
    &__content {
      display: grid;
      grid-template-rows: 65% 1fr;
      justify-content: center;
 
      gap: 6rem;
    }
  
    &__title {
      margin-bottom: 1rem;
      justify-content: center;
    }

  
   

}
      
  </style>
  