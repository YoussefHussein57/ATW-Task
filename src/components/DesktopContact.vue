<template>
  <section class="features">
    <!-- Header Section -->
    <div class="features__header">
      <!-- Section title -->
      <h1 class="features__title heading-2">Contact Us</h1>
      <!-- Section description -->
      <h4 class="features__description heading-4">
        Most calendars are designed for teams. Slate is designed for freelancers
      </h4>
    </div>

    <!-- Form and Content Section -->
    <div class="features__list">
      <!-- Form Section -->
      <form class="features__list-form">
        <!-- Form heading -->
        <h3 class="heading-3">Get In Touch</h3>
        <!-- Input fields for name, email, and message -->
        <input class="input" type="text" placeholder="Your Name" />
        <input class="input" type="email" placeholder="Your Email" />
        <textarea class="textarea" placeholder="Your Message"></textarea>
        <!-- Submit button -->
        <custom-button class="btn">Send</custom-button>
      </form>

      <!-- Right Section Content -->
      <div class="features__list-right">
        <!-- Contact Information Section -->
        <div class="header__icons">
          <!-- Address -->
          <div class="header__icon header__icon-1 ">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            <h5 class="heading-5">
              6386 Spring St, Anchorage, Georgia 12473 United States
            </h5>
          </div>
          <!-- Phone -->
          <div class="header__icon header__icon-2">
            <font-awesome-icon :icon="['fas', 'mobile-screen']" />
            <h5 class="heading-5">(843) 555-0130</h5>
          </div>
          <!-- Email -->
          <div class="header__icon header__icon-3">
            <font-awesome-icon :icon="['far', 'envelope']" />
            <h5 class="heading-5">willie.jennings@example.com</h5>
          </div>
        </div>

        <!-- Map Image Section -->
        <div class="image__div">
          <img src="../assets/map.png" alt="Location Map" />
        </div>

        <!-- Social Media Icons -->
        <div class="features__icons">
          <div class="features__icon">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </div>
          <div class="features__icon">
            <font-awesome-icon :icon="['fab', 'square-facebook']" />
          </div>
          <div class="features__icon">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DesktopContact',
};
</script>

<style lang="scss" scoped>
.features {
  /* Layout for the overall section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-base-md);
  padding: var(--spacing-base-lg);

  &__header {
    /* Center-align header text */
    text-align: center;
    margin-bottom: var(--spacing-base-lg);
  }

  &__title {
    /* Styling for the main title */
    color: var(--color-text);
    margin-bottom: var(--spacing-base);
  }

  &__description {
    /* Styling for the description text */
    max-width: 53.2rem;
    max-height: 8rem;
    margin: 0 auto;
  }

  &__list {
    /* Layout for the form and right section */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-base-lg);
    width: 72.5rem;
    max-height: 61.3rem;

    &-right {
      /* Layout for the right section (icons, map, social media) */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: var(--spacing-base-md);

      .header__icons {
        /* Layout for contact information icons */
        max-width: 72.5rem;
        max-height: 10.8rem;
        font-size: 2rem;
        display: flex;
        align-items: start;
        gap: var(--spacing-base);

        .header__icon {
          /* Layout for individual contact info */
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center; /* Center-align text under icons */
          width: 100%;
          height: 31.7rem;
          color: #2091F9;

          &-1 {
            width: 25rem;
            max-height: 10.8rem;
          }

          &-2 {
            width: 13.7rem;
            max-height: 8.7rem;
          }

          &-3 {
            width: 24.5rem;
            max-height: 7.5rem;
          }
        }
      }

      .image__div {
        /* Styling for the map image container */
        width: 55%;
        max-width: 51.6rem;
        height: auto;
        margin: 0 auto;
        border-radius: 8px;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          /* Ensure image scales properly */
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
      }

      .features__icons {
        /* Layout for social media icons */
        font-size: 3.2rem;
        color: #2091F9;
        align-self: start;
        display: flex;
        gap: 2.2rem;
        cursor: pointer;

        .features__icon {
          /* Styling for individual social icons */
          display: inline-block;
          transition: all 0.2s ease-in-out;

          &:hover {
            color: #1b79d1;
            transform: translateY(-3px) scale(1.05);
          }
        }
      }
    }
  }

  .btn {
    /* Limit button width */
    max-width: 25%;
  }

  &__list-form {
    /* Layout for the contact form */
    display: flex;
    flex-direction: column;
    gap: var(--spacing-base);
    max-width: 100%;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: var(--spacing-base);

    & > h3 {
      /* Form heading */
      color: var(--color-text);
      margin-bottom: var(--spacing-base-sm);
    }
  }

  .textarea {
    /* Styling for the textarea */
    resize: vertical;
    max-width: 35.3rem;
    min-height: 19.9rem;
    padding: 2.3rem 2rem;
    background-color: #f5f5f5;
    border-radius: 2px;
    border: 1px solid #e8e8e8;

    &:focus {
      /* Highlight border on focus */
      border-color: var(--color-primary);
      outline: none;
    }

    &::placeholder {
      color: #aaa;
    }
  }
}

/* Media Queries for Responsiveness */
/* Adjust layout for tablets and mobile devices */
@media screen and (max-width: 1024px) { /* Tablet view */ 
  .features__list {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-base-md);
    width: 100%;
    max-height: unset; /* Remove max-height for better vertical scrolling */
  }

  .features__list-form {
    max-width: 80%; /* Adjust form width for tablets */
    padding: var(--spacing-base-md);
  }

  .features__list-right {
    align-items: center;
  }

  .header__icons {
    gap: var(--spacing-base);
    align-items: center;
  }

  .image__div {
    width: 100%; /* Ensure image fits within container */
    max-width: 80%;
    padding: var(--spacing-base-md);
  }
}
@media screen and (max-width: 768px) { /* Mobile view */ 

  .features__list {
    flex-direction: column;
    gap: var(--spacing-base);
  }

  .features__list-form {
    max-width: 90%;
    padding: var(--spacing-base-sm);
  }

  .header__icons {
    gap: var(--spacing-base);
    text-align: center;
  }

  .image__div {
    max-width: 100%;
  }

  .features__icons {
    flex: 1 1 100%;
    max-width: 100%;
    font-size: 2.4rem; /* Reduce icon size */
    justify-content: center;
    text-align: center;
  }
}
@media screen and (max-width: 480px) { /* Small screens */ 
  features__header {
    margin-bottom: var(--spacing-base);
  }

  .features__title {
    font-size: 3rem;
    line-height: 3.8rem;
  }

  .features__description {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .features__list {
    flex-direction: column;
    gap: var(--spacing-base-sm);
  }

  .features__list-form {
    max-width: 100%;
    padding: var(--spacing-base);
  }

  .header__icons {
    gap: var(--spacing-base-sm);
  }

  .image__div {
    max-width: 100%;
    img {
      max-height: unset; /* Ensure image scales naturally */
      text-align: center;
    }
  }

  .features__icons {
    font-size: 2rem; /* Further reduce icon size */
    gap: var(--spacing-base-sm);
  }
}


</style>
