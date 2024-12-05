<template>
    <div class="feature">
      <div class="feature__text">
        <h2 class="feature__text-heading-2">Features</h2>
        <h4 class="feature__text-heading-4">
          Most calendars are designed for teams. Slate is designed for freelancers.
        </h4>
      </div>
      <div class="feature__items">
        <div class="feature__item feature__item-1">
          <font-awesome-icon class="feature__items-icon" :icon="['fas', 'object-group']" />
          <h3 class="feature__items-text">OpenType features Variable fonts</h3>
          <p class="feature__items-para">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
        </div>
        <div class="feature__item feature__item-2">
          <font-awesome-icon class="feature__items-icon" :icon="['fas', 'pen']" />
          <h3 class="feature__items-text">Design with real data</h3>
          <p class="feature__items-para">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
        </div>
        <div class="feature__item feature__item-3">
          <font-awesome-icon class="feature__items-icon" :icon="['fas', 'paintbrush']" />
          <h3 class="feature__items-text">Fastest way to take action</h3>
          <p class="feature__items-para">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
        </div>
      </div>
    </div>
  </template>
  

<script>
export default {
    name: 'DesktopFeature',

}
</script>

<style lang="scss" scoped>
.feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    gap: 8rem; /* Space between text and items */
  
    &__text {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
  
      &-heading-2 {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 5.5rem;
        letter-spacing: 0.2px;
        color: #252b42;
        margin: 0;
      }
  
      &-heading-4 {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 4rem;
        letter-spacing: 0.4px;
        color: #374754;
        margin: 0;
        max-width: 70%;
      }
    }
  
  
    &__item {
        display: flex; /* Make each item a flexbox */
        flex-direction: column; /* Stack child elements vertically */
        justify-content: center; /* Center content vertically */
        align-items: center; /* Center content horizontally */
        text-align: center; /* Ensure all text inside is centered */
        gap: 1rem; /* Space between text and items */
      }
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem; /* Space between columns */
      justify-items: center; /* Center items horizontally */
      align-items: center; /* Center items vertically */
  

      &-icon {
        font-size: 3rem;
        color: #007bff;
        margin-bottom: 1rem;
      }
  
      &-text {
        font-family: sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.5rem;
        color: #252b42;
        text-align: center;
      }
  
      &-para {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2rem;
        color: #374754;
        text-align: center;
        max-width: 20rem; /* Adjust for better readability */
      }
    }
  }
  

</style>