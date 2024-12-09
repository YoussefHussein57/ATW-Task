<template>
  <section class="testimonials">
    <!-- Header Section -->
    <div class="testimonials__header">
      <!-- Title -->
      <h2 class="testimonials__title heading-2">Testimonials</h2>
    </div>

    <!-- Content Section -->
    <div class="testimonials__content">
      <!-- Company Logo -->
      <img
        src="../assets/logos/IBM.svg"
        alt="IBM Logo"
        class="testimonials__logo"
      />
      <!-- Testimonial Description -->
      <p class="testimonials__description heading-5">
        Most calendars are designed for teams. Slate is designed for freelancers 
        who want a simple way to plan their schedule.
      </p>
      <!-- Author Information -->
      <div class="testimonials__author">
        <!-- Author Image -->
        <img
          src="../assets/user.png"
          alt="User"
          class="testimonials__author-image"
        />
        <div class="testimonials__author-details">
          <!-- Author Name -->
          <p class="testimonials__author-name heading-5">Organize across</p>
          <!-- Author Role -->
          <p class="testimonials__author-role heading-5">UI Designer</p>
        </div>
      </div>
    </div>

    <!-- Call to Action Button -->
    <div class="testimonials__cta">
      <custom-button>More Testimonials</custom-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "DesktopTestimonials", // Component name
};
</script>

<style lang="scss" scoped>
.testimonials {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center-align items */
  text-align: center; /* Center text */
  gap: var(--spacing-base); /* Space between elements */
  margin: var(--spacing-base-lg) var(--spacing-base); /* Add margins */

  &__header {
    margin-bottom: var(--spacing-base-lg); /* Space below the header */
  }

  &__content {
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack content vertically */
    align-items: center; /* Center-align content */
    margin: var(--spacing-base) 0; /* Vertical spacing */
    gap: var(--spacing-base); /* Space between content items */
    max-width: 40%; /* Limit content width */

    &-description {
      max-width: 70%; /* Limit width of the description */
      margin: 0 auto; /* Center the description */
    }
  }

  &__logo {
    max-width: 150px; /* Set maximum width for the logo */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: var(--spacing-base); /* Space below the logo */
  }

  &__author {
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center-align items */
    gap: var(--spacing-base); /* Space between author image and details */
    margin-top: var(--spacing-base); /* Space above the author section */

    &-image {
      width: 5rem; /* Set width for the author image */
      height: 5rem; /* Set height for the author image */
      border-radius: 50%; /* Make the image circular */
    }

    &-details {
      text-align: left; /* Align details to the left */
    }

    &-name,
    &-role {
      margin: 0; /* Remove default margins */
    }
  }


  @media screen and (max-width: 1024px) {
    .testimonials__content {
      max-width: 60%; /* Increase content width for larger screens */
      gap: var(--spacing-base-md); /* Adjust gap for better spacing */
    }
  
    .testimonials__logo {
      max-width: 120px; /* Scale down logo */
    }
  
    .testimonials__author {
      gap: var(--spacing-base-sm); /* Reduce gap between image and details */
    }
  
    .testimonials__author-image {
      width: 4rem; /* Scale down author image */
      height: 4rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    .testimonials {
      margin: var(--spacing-base-md); /* Reduce outer margin */
    }
  
    .testimonials__content {
      max-width: 80%; /* Further increase content width */
      gap: var(--spacing-base-sm); /* Reduce gap between elements */
    }
  
    .testimonials__description {
      font-size: 1.6rem; /* Adjust font size for readability */
      line-height: 2.4rem; /* Adjust line height */
    }
  
    .testimonials__logo {
      max-width: 100px; /* Scale logo for smaller screens */
    }
  
    .testimonials__author {
      flex-direction: column; /* Stack author image and details */
      align-items: center; /* Center align the content */
      gap: var(--spacing-base-sm);
    }
  
    .testimonials__author-image {
      width: 3.5rem; /* Further reduce author image size */
      height: 3.5rem;
    }
  
    .testimonials__author-details {
      text-align: center; /* Center align details */
    }
  }
  
  @media screen and (max-width: 480px) {
    .testimonials {
      margin: var(--spacing-base-sm); /* Further reduce outer margin */
    }
  
    .testimonials__content {
      max-width: 100%; /* Use full width for content */
      gap: var(--spacing-base-sm); /* Compact spacing */
    }
  
    .testimonials__description {
      font-size: 1.4rem; /* Further scale down font size */
      line-height: 2rem; /* Adjust line height for readability */
    }
  
    .testimonials__logo {
      max-width: 80px; /* Scale logo for mobile devices */
    }
  
    .testimonials__author-image {
      width: 3rem; /* Smallest size for author image */
      height: 3rem;
    }
  
    .testimonials__author {
      gap: var(--spacing-base-xs); /* Minimal gap for mobile devices */
    }
  
    .testimonials__author-details {
      text-align: center; /* Maintain center alignment */
      font-size: 1.4rem; /* Adjust font size for small devices */
    }
  }
  
  
}

</style>