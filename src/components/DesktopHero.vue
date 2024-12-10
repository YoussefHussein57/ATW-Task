<template>
  <div class="hero">
    <!-- Hero Content Section -->
    <div class="hero__content">
      <!-- Text Content -->
      <div class="hero__text flex-column">
        <h2 class="hero__title heading-2">Fastest way to organize</h2>
        <h4 class="hero__description heading-4">
          Most calendars are designed for teams.
          Slate is designed for freelancers
        </h4>
      </div>
      <!-- Action Button -->
      <div class="hero__actions flex-column">
        <custom-button class="hero__button">Try For Free</custom-button>
      </div>
    </div>

    <!-- Image Section -->
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
  /* Grid layout for the hero section with two equal columns */
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: var(--spacing-base-lg) auto; /* Add vertical margins */

  &__content {
    /* Grid layout for the content inside the hero */
    display: grid;
    grid-template-rows: 65% 1fr; /* 65% text and 35% actions */
    justify-content: center;
    gap: 6rem; /* Space between text and action sections */
  }

  &__text{
    text-align: left;
  }
  &__title {
    margin-bottom: 1rem; /* Space below the title */
    justify-content: center; /* Center-align the title */
  }

  @media screen and (max-width: 1024px) {
    .hero {
      grid-template-columns: 1fr; /* Stack content vertically */
      gap: var(--spacing-base-md); /* Add spacing between content and image */
    }

    .hero__content {
      grid-template-rows: 1fr; /* Adjust rows for stacked layout */
      justify-items: center; /* Center-align content */
      gap: var(--spacing-base-md); /* Add spacing between sections */
    }

    .hero__title {
      font-size: 4rem; /* Reduce title font size */
      line-height: 5rem; /* Adjust line height for title */
    }

    .hero__description {
      font-size: 2.4rem; /* Adjust description font size */
      line-height: 3.2rem; /* Adjust line height for description */
    }

    .hero__frame-image {
      width: 80%; /* Adjust image size */
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      gap: var(--spacing-base-md); /* Reduce gap between sections */
      padding: var(--spacing-base); /* Add padding for smaller screens */
    }

    .hero__title {
      font-size: 3.6rem; /* Further reduce title font size */
      line-height: 4.2rem; /* Adjust line height for title */
    }

    .hero__description {
      font-size: 2rem; /* Further adjust description font size */
      line-height: 2.8rem; /* Adjust line height for description */
    }

    .hero__frame-image {
      width: 100%; /* Ensure image fills container */
    }
  }

  @media screen and (max-width: 480px) {
    .hero {
      gap: var(--spacing-base-sm); /* Reduce gap further for smaller devices */
      padding: var(--spacing-base-sm); /* Add smaller padding */
    }

    .hero__title {
      font-size: 3rem; /* Scale down title for small screens */
      line-height: 3.6rem; /* Adjust line height */
      text-align: center; /* Center-align text */
    }

    .hero__description {
      font-size: 1.8rem; /* Scale down description for small screens */
      line-height: 2.4rem; /* Adjust line height */
      text-align: center; /* Center-align description */
    }

    .hero__frame-image {
      width: 100%; /* Full width for smaller devices */
      max-height: 30rem; /* Prevent image from being too tall */
    }
  }
}
</style>
