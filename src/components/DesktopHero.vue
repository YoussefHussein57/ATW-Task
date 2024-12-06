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
        <div class="hero__frame-border">
          <div class="hero__frame-screen">
            <img src="../assets/Account-Activity.png" alt="Desktop Screenshot" class="hero__frame-image" />
          </div>
          <div class="hero__frame-base"></div>
        </div>
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
  
    &__content {
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 6rem;
    }
  
    &__title {
      margin-bottom: 1rem;
    }
  
    &__frame {
      display: flex;
      justify-content: center;
      align-items: center;
  
      &-border {
        position: relative;
        width: 90%;
        max-width: 600px;
        background: #eaeaea;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
  
      &-screen {
        border-radius: 10px;
        overflow: hidden;
        border: 8px solid #000;
        
  
        &-image {
          width: 100%;
          height: auto;
          display: block;
        }
      }
  
      &-base {
        position: relative;
        margin-top: .5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 90px;
        height: 5px;
        background: #c4c4c4;
        border-radius: 10px;

        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 62.5rem; /* Width of the lines */
          left: 50%;
          transform: translateX(-50%);
          
        }
        
        &::before {
          background-color: #d8d8d8; /* Corrected color for the first line */
          top: 3rem; /* Position of the first line below the base */
          height: 1.3rem;
        }
        
       
      }


    }
}
      
  </style>
  