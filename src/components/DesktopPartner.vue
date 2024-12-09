<template>
  <section class="partners">
    <!-- Header Section -->
    <div class="partners__header">
      <h2 class="partners__title heading-2">Partners</h2>
      <h5 class="partners__description heading-5">
        Most calendars are designed for teams. Slate is designed for freelancers.
      </h5>
    </div>

    <!-- Grid Section -->
    <div class="partners__grid">
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="partners__card"
      >
        <p class="partners__client-name heading-3">{{ partner.name }}</p>
        <img
          :src="getPartnerLogo(partner.logo)"
          :alt="partner.name"
          class="partners__card-logo"
        />
      </div>
    </div>

    <!-- Call-to-Action Button -->
    <div class="partners__cta">
      <custom-button>Try For Free</custom-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "DesktopPartner",
  data() {
    return {
      partners: [
        { name: "Google", logo: "logos_google.svg" },
        { name: "Amazon", logo: "Amazon-logo.png" },
        { name: "Microsoft", logo: "Microsoft-logo.png" },
        { name: "Uber", logo: "uber-logo.png" },
        { name: "Dropbox", logo: "dropbox-logo.png" },
        { name: "Google", logo: "logos_google.svg" },
        { name: "Uber", logo: "uber-logo.png" },
        { name: "Amazon", logo: "Amazon-logo.png" },
      ],
    };
  },
  methods: {
    getPartnerLogo(fileName) {
      return require(`@/assets/logos/${fileName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.partners {
  text-align: center;
  margin: var(--spacing-base-lg);

  &__header {
    margin-bottom: var(--spacing-base-lg);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0;
    margin: var(--spacing-base-lg) 0;
  }

  &__card {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: var(--spacing-base);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-align: center;

    &-client {
      margin-bottom: var(--spacing-base);
      font-size: 1.4rem;
      font-weight: bold;
    }

    &-logo {
      max-width: 100%;
      height: auto;
    }
  }

  /* Responsive Adjustments */
  @media screen and (max-width: 1024px) {
    .partners__grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: var(--spacing-base);
    }

    .partners__card {
      padding: var(--spacing-base-md);
    }
  }

  @media screen and (max-width: 768px) {
    .partners__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-base-sm);
    }

    .partners__card {
      padding: var(--spacing-base-sm);
    }

    .partners__title {
      font-size: 3.6rem;
    }

    .partners__description {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  @media screen and (max-width: 480px) {
    .partners__grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-base-sm);
    }

    .partners__card {
      padding: var(--spacing-base-sm);
    }

    .partners__title {
      font-size: 3rem;
    }

    .partners__description {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
}
</style>
