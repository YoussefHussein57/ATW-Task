<template>
    <section class="testimonials">
      <div class="testimonials__header">
        <h2 class="testimonials__title heading-2">Testimonials</h2>
      </div>
      <div class="testimonials__content">
        <img
          src="../assets/logos/IBM.svg"
          alt="IBM Logo"
          class="testimonials__logo"
        />
        <p class="testimonials__description heading-5">
          Most calendars are designed for teams. Slate is designed for freelancers 
          who want a simple way to plan their schedule.
        </p>
        <div class="testimonials__author">
          <img
            src="../assets/user.png"
            alt="User"
            class="testimonials__author-image"
          />
          <div class="testimonials__author-details">
            <p class="testimonials__author-name heading-5">Organize across</p>
            <p class="testimonials__author-role heading-5">UI Designer</p>
          </div>
        </div>
      </div>
      <div class="testimonials__cta">
        <custom-button>More Testimonials</custom-button>
      </div>
    </section>
  </template>

  <script>
export default {
  name: "DesktopTestimonials",
};
</script>


<style lang="scss" scoped>
.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-base);
  margin: var(--spacing-base-lg) var(--spacing-base);
  background-color: var(--color-background);

  &__header {
    margin-bottom: var(--spacing-base-lg);
  }



  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: var(--spacing-base) 0;
 
    gap: var(--spacing-base);
    max-width: 40%;

    &-description {
     
      max-width: 70%;
      margin: 0 auto;
    }
  }

  &__logo {
    max-width: 150px;
    height: auto;
    margin-bottom: var(--spacing-base);
  }

  &__author {
    display: flex;
    align-items: center;
    gap: var(--spacing-base);
    margin-top: var(--spacing-base);

    &-image {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    &-details {
      text-align: left;

    }
    &-name,
    &-role{
      margin: 0;
    }
  }


  
}

</style>