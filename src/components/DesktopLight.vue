<template>
    <div class="content">
      <!-- Left Section: Illustration -->
      <div class="content__left">
        <div class="content__left-wrapper">
          <img src="../assets/screen-content.svg" alt="Illustration" />
        </div>
      </div>
  
      <!-- Right Section: Text and Subscription -->
      <div class="content__right">
        <!-- Text Content -->
        <div class="content__right-text">
          <h3 class="heading-3 content__right-text-word">At your fingertips</h3>
          <h2 class="heading-2 content__right-text-title">Lightning fast prototyping</h2>
        </div>
  
        <!-- Subscription Form -->
        <div class="content__right-subscription">
          <h3 class="heading-3 content__right-subscription-word">Subscribe to our Newsletter</h3>
          <p class="content__right-subscription-description">Available exclusively on Figmaland</p>
          <div class="content__right-input">
            <input type="email" placeholder="Your Email" />
            <custom-button>Subscribe</custom-button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DesktopLight",
  };
  </script>
  
  <style lang="scss" scoped>
  .content {
    /* Main grid layout with two columns */
    display: grid;
    grid-template-columns: 1fr 35%; /* 65% left, 35% right */
    justify-content: center;
    align-items: center;
    margin: var(--spacing-base-lg) auto;
  
    &__left {
      img {
        width: 100%; /* Ensure SVG takes up full container width */
        max-width: 100%; /* Prevent overflow */
        height: auto; /* Maintain aspect ratio */
        object-fit: contain; /* Keep image dimensions contained */
      }
  
      .content__left-wrapper {
        width: 100%; /* Wrapper takes full width */
        max-width: 600px; /* Set max width for image */
        margin: 0 auto; /* Center align */
      }
    }
  
    &__right {
      display: grid;
      grid-template-rows: 1fr 1fr; /* Two rows: Text and Subscription */
      gap: var(--spacing-base);
  
      &-subscription {
        width: 47.7rem;
        height: 20rem;
        gap: 1.3rem;
  
        &-description {
          width: 30rem;
          height: 2.5rem;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 2.5rem;
          letter-spacing: 0.2px;
          color: var(--color-paragh);
        }
      }
  
      &-input {
        width: 45.7rem;
        height: 12.6rem;
        display: grid;
        grid-template-columns: 1fr 1fr; /* Input and button side by side */
        justify-content: center;
        align-items: center;
        gap: 1.2rem;
  
        input {
          width: 22rem;
          height: 3.2rem;
          padding: 1.9rem;
          border: 1px solid #e8e8e8;
          border-radius: 2.5rem;
          background-color: #f4f4f4;
  
          &:focus {
            outline: none;
            border: 1px solid var(--color-primary);
          }
        }
  
        button {
          width: 17.3rem;
          height: 6rem;
          padding: 1.9rem 3.8rem;
        }
      }
    }
  
    /* Media Queries for Responsiveness */
    @media screen and (max-width: 1024px) {
      .content {
        grid-template-columns: 1fr; /* Stack sections vertically */
        gap: var(--spacing-base-md);
        padding: var(--spacing-base);
      }
  
      .content__right-subscription {
        width: 100%;
        height: auto; /* Allow natural height */
      }
  
      .content__right-subscription-description {
        width: 100%;
        font-size: 1.6rem; /* Adjust font size */
        line-height: 2.2rem;
      }
  
      .content__right-input {
        width: 100%; /* Full width */
        grid-template-columns: 1fr; /* Stack input and button vertically */
        gap: var(--spacing-base-sm);
  
        input {
          width: 100%; /* Expand input width */
          font-size: 1.4rem; /* Adjust font size */
        }
  
        button {
          width: 100%; /* Expand button width */
          font-size: 1.6rem;
        }
      }
  
      .content__left img {
        max-width: 80%; /* Scale down image */
      }
    }
  
    @media screen and (max-width: 768px) {
      .content {
        gap: var(--spacing-base-sm);
        padding: var(--spacing-base-sm);
      }
  
      .content__right-subscription-description {
        font-size: 1.4rem;
        line-height: 2rem;
      }
  
      .content__right-input {
        input {
          font-size: 1.2rem;
          padding: 1.2rem;
        }
  
        button {
          font-size: 1.4rem;
          padding: 1.5rem;
        }
      }
  
      .content__left img {
        max-width: 60%;
      }
    }
  
    @media screen and (max-width: 480px) {
      .content {
        gap: var(--spacing-base-sm);
        padding: var(--spacing-base-sm);
      }
  
      .content__right-subscription-description {
        font-size: 1.2rem;
        line-height: 1.8rem;
      }
  
      .content__right-input {
        input {
          font-size: 1.2rem;
          padding: 1rem;
        }
  
        button {
          font-size: 1.2rem;
          padding: 1.2rem;
        }
      }
  
      .content__left img {
        max-width: 100%; /* Full width for small screens */
      }
    }
  }
  </style>
  