<template>
    <section class="pricing">
      <!-- Header Section -->
      <div class="pricing__header">
        <h2 class="pricing__title heading-2">Pricing</h2>
        <p class="pricing__description heading-5">
          Most calendars are designed for teams. Slate is designed for freelancers.
        </p>
      </div>
  
      <!-- Pricing Cards Grid -->
      <div class="pricing__cards">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="pricing__card"
          @mouseover="handleHover(index)"
          @mouseleave="resetHover"
          :class="{ 'is-hovered': hoveredCard === index }"
        >
          <h3
            class="pricing__card-title heading-4"
            :style="{ color: hoveredCard === index ? '#fff' : '#252b42' }"
          >
            {{ plan.title }}
          </h3>
          <p
            class="pricing__card-subtitle heading-5"
            :style="{ color: hoveredCard === index ? '#fff' : '#374754' }"
          >
            {{ plan.subtitle }}
          </p>
          <p class="pricing__card-price">
            <span
              class="pricing__card-price-value"
              :style="{ color: hoveredCard === index ? '#fff' : '#252b42' }"
            >
              {{ plan.price }}
            </span>
            <span
              class="pricing__card-price-unit"
              :style="{ color: hoveredCard === index ? '#fff' : '#252b42' }"
            >
              $
            </span>
            <span
              class="pricing__card-price-period"
              :style="{ color: hoveredCard === index ? '#fff' : '#374754' }"
            >
              Per Month
            </span>
          </p>
          <ul class="pricing__features">
            <li
              v-for="(feature, featureIndex) in plan.features"
              :key="featureIndex"
              class="pricing__feature"
              :style="{ color: hoveredCard === index ? '#fff' : '#374754' }"
            >
              {{ feature }}
            </li>
          </ul>
          <!-- Custom button -->
          <custom-button
            class="btn"
            :style="{
              backgroundColor: hoveredCard === index ? '#fff' : '#2091f9',
              color: hoveredCard === index ? '#2091f9' : '#fff',
            }"
          >
            Order Now
          </custom-button>
        </div>
      </div>
    </section>
  </template>
  

  <script>
export default {
  name: "DesktopPricing",
  data() {
    return {
      pricingPlans: [
        {
          title: "FREE",
          subtitle: "Organize across all apps by hand",
          price: "0",
          features: ["Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature"],
        },
        {
          title: "STANDARD",
          subtitle: "Organize across all apps by hand",
          price: "10",
          features: ["Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature"],
        },
        {
          title: "BUSINESS",
          subtitle: "Organize across all apps by hand",
          price: "99",
          features: ["Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature"],
        },
      ],
      hoveredCard: null, // Track which card is hovered
    };
  },
  methods: {
    handleHover(index) {
      this.hoveredCard = index; // Set the hovered card index
    },
    resetHover() {
      this.hoveredCard = null; // Reset the hovered card
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing {
    text-align: center;
    padding: var(--spacing-base-lg) var(--spacing-base);
    background-color: #1e2330;
  
    &__header {
      margin-bottom: var(--spacing-base-lg);
    }
  
    &__title {
      color: #fff;
    }
  
    &__description {
      color: #fff;
    }
  
    &__cards {
      display: flex;
      justify-content: center;
      gap: var(--spacing-base);
      margin-top: var(--spacing-base-lg);
    }
  
    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
      background: #fff;
      border-radius: 12px;
      border: 1px solid #dedede;
      padding: var(--spacing-base);
      width: 33.5rem;
      max-height: 60rem;
      text-align: center;
      transition: all 0.3s ease-in-out;
  
      &:hover {
        transform: scale(1.1); /* Highlight hovered card */
        z-index: 10; /* Bring to front */
        background-color: #2091f9;
        color: #fff; /* Change all text to white */
        border-color: transparent;
  
        /* Ensure all text elements change color */
        .pricing__card-title,
        .pricing__card-subtitle,
        .pricing__card-price,
        .pricing__feature {
          color: #fff;
        }
  
        /* Update button on hover */
        custom-button {
          background-color: #fff; /* Button background turns white */
          color: #2091f9; /* Button text matches hover color */
        }
      }
  
      &-title {
        margin-bottom: var(--spacing-base);
        color: var(--color-text);
      }
  
      &-price {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 0.5rem;
        font-size: 4.8rem;
        font-weight: 700;
        color: var(--color-text);
  
        &-value {
          font-size: 5rem;
        }
  
        &-unit {
          font-size: 2rem;
        }
  
        &-period {
          font-size: 1.4rem;
          color: var(--color-paragh);
        }
      }
  
      
      
    }
    &__features {
        list-style: none;
        padding: 0;
        margin: var(--spacing-base) 0;
        width: 25.5rem;
        max-height: 24rem;
        overflow: hidden; /* Prevent overflow */
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;

        font-size: 1.6rem;
          transition: color 0.3s ease-in-out;
  
      
    }
  }
  </style>