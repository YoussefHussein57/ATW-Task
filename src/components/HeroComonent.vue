<template>
  <div class="hero">
    <slot></slot>
    <div class="hero__content">
      <div class="hero__content-text">
        <h1 class="hero__content-heading">
          The best products start with Figma
        </h1>
        <h4 class="hero__content-heading-4">
          Most calendars are designed for teams. Slate is designed for freelancers
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
  name: "HeroComponent",
};
</script>

<style lang="scss" scoped>
$color-header: #222b32;

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
  height: 85vh;
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

    &-text {
      animation: slideInFromLeft 1s ease-out forwards; /* Apply slide-in animation */
    }

    &-heading {
      font-weight: 700;
      font-size: clamp(3.6rem, 5vw, 7.4rem); /* Dynamically adjust size */
      line-height: clamp(4.5rem, 6vw, 8.4rem); /* Dynamically adjust line height */
      max-width: 67.2rem; /* Adjust to prevent overflow */
      margin: 3rem auto; /* Center within the content */
    }

    &-heading-4 {
      font-weight: 400;
      font-size: clamp(1.6rem, 2.5vw, 2.8rem); /* Dynamically adjust size */
      line-height: clamp(2.4rem, 3.5vw, 4rem); /* Dynamically adjust line height */
      max-width: 76.6rem; /* Adjust to prevent overflow */
      margin: 0 auto; /* Center within the content */
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
  }

  /* Mobile adjustments (below 768px) */
  @media screen and (max-width: 768px) {
    .hero {
      height: 65vh; /* Further reduce height for smaller devices */
    }
  }

  /* Small mobile adjustments (below 480px) */
  @media screen and (max-width: 480px) {
    .hero {
      background-size: cover;
      height: 55vh; /* Further reduce height for mobile */
    }
  }
}
</style>
