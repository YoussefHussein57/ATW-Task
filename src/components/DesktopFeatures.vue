<template>
  <div class="feature">
    <!-- Header Section -->
    <div class="feature__text">
      <!-- Main heading -->
      <h2 class="feature__text-heading-2">Features</h2>
      <!-- Subheading -->
      <h4 class="feature__text-heading-4">
        Most calendars are designed for teams. Slate is designed for freelancers.
      </h4>
    </div>

    <!-- Features Section -->
    <div class="feature__items">
      <!-- Feature Item 1 -->
      <div class="feature__item feature__item-1">
        <font-awesome-icon class="feature__items-icon" :icon="['fas', 'object-group']" />
        <h3 class="feature__items-text">OpenType features Variable fonts</h3>
        <p class="feature__items-para">
          Slate helps you see how many more days you need to work to reach your financial goal.
        </p>
      </div>
      <!-- Feature Item 2 -->
      <div class="feature__item feature__item-2">
        <font-awesome-icon class="feature__items-icon" :icon="['fas', 'pen']" />
        <h3 class="feature__items-text">Design with real data</h3>
        <p class="feature__items-para">
          Slate helps you see how many more days you need to work to reach your financial goal.
        </p>
      </div>
      <!-- Feature Item 3 -->
      <div class="feature__item feature__item-3">
        <font-awesome-icon class="feature__items-icon" :icon="['fas', 'paintbrush']" />
        <h3 class="feature__items-text">Fastest way to take action</h3>
        <p class="feature__items-para">
          Slate helps you see how many more days you need to work to reach your financial goal.
        </p>
      </div>
    </div>

    <!-- Screen Section -->
    <div class="feature__screen">
      <!-- Play Button -->
      <div class="feature__screen-button">
        <font-awesome-icon class="feature__screen-button-icon" :icon="['fas', 'play']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopFeature', // Component name
};
</script>

<style lang="scss" scoped>
.feature {
  /* Overall layout of the component */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  gap: 8rem; /* Space between text and items */

  &__text {
    /* Header section styling */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &-heading-2 {
      /* Main heading styling */
      font-family: sans-serif;
      font-weight: 400;
      font-size: 4.8rem;
      line-height: 5.5rem;
      letter-spacing: 0.2px;
      color: var(--color-text);
      margin: 0;
    }

    &-heading-4 {
      /* Subheading styling */
      font-family: sans-serif;
      font-weight: 400;
      font-size: 2.8rem;
      line-height: 4rem;
      letter-spacing: 0.4px;
      color: var(--color-paragh);
      margin: 0;
      max-width: 70%;
    }
  }

  &__item {
    /* Layout for individual feature items */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem; /* Space between elements */
  }

  &__items {
    /* Grid layout for all feature items */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 2rem; /* Space between items */
    justify-items: center;
    align-items: center;

    &-icon {
      /* Icon styling */
      font-size: 3rem;
      color: #007bff;
      margin-bottom: 1rem;
    }

    &-text {
      /* Text styling for feature titles */
      font-family: sans-serif;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.5rem;
      color: var(--color-text);
      text-align: center;
    }

    &-para {
      /* Text styling for feature descriptions */
      font-family: sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      color: #374754;
      text-align: center;
      max-width: 20rem; /* Restrict width for better readability */
    }
  }

  &__screen {
    /* Styling for the screen section */
    background-image: url("../assets/screen.jfif");
    background-size: cover;
    width: 117.7rem;
    height: 64.8rem;
    border-radius: 4.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    &-button {
      /* Styling for the play button */
      background-color: #2091f9;
      color: #fff;
      width: 18.8rem;
      height: 18.8rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;

      &-icon {
        /* Icon inside the play button */
        width: 4rem;
        height: 4rem;
      }
    }

    &-button:hover {
      /* Hover effect for play button */
      background-color: #1a7eeb;
      transform: scale(1.05);
    }
  }

  /* Responsive Design */
  @media screen and (max-width: 1024px) {
    /* Adjust layout for tablets */
    .feature {
      gap: var(--spacing-base-md);
      margin: 4rem 0;
    }

    .feature__items {
      grid-template-columns: repeat(2, 1fr); /* 2 columns */
      gap: var(--spacing-base);
    }

    .feature__text-heading-2 {
      font-size: 4rem;
      line-height: 5rem;
    }

    .feature__text-heading-4 {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    .feature__screen {
      width: 90%;
      height: 50rem;
    }

    .feature__screen-button {
      width: 14rem;
      height: 14rem;
    }
  }

  @media screen and (max-width: 768px) {
    /* Adjust layout for mobile devices */
    .feature {
      gap: var(--spacing-base-md);
      margin: 3rem 0;
    }

    .feature__items {
      grid-template-columns: 1fr; /* 1 column */
      gap: var(--spacing-base-md);
    }

    .feature__text-heading-2 {
      font-size: 3.6rem;
      line-height: 4.2rem;
    }

    .feature__text-heading-4 {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    .feature__screen {
      width: 100%;
      height: 40rem;
    }

    .feature__screen-button {
      width: 12rem;
      height: 12rem;
    }
  }

  @media screen and (max-width: 480px) {
    /* Adjust layout for small mobile devices */
    .feature {
      gap: var(--spacing-base-sm);
      margin: 2rem 0;
    }

    .feature__text-heading-2 {
      font-size: 3rem;
      line-height: 3.6rem;
    }

    .feature__text-heading-4 {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    .feature__items {
      gap: var(--spacing-base-sm);
    }

    .feature__items-icon {
      font-size: 2.4rem;
    }

    .feature__items-para {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }

    .feature__screen {
      width: 100%;
      height: 30rem;
    }

    .feature__screen-button {
      width: 10rem;
      height: 10rem;

      &-icon {
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
</style>
