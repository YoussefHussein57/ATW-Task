<template>
  <div id="app">
    <!-- Hero Component wrapping the Header Component -->
    <hero-comonent>
      <header-component></header-component>
    </hero-comonent>

    <!-- Dynamically render components and apply scroll animations -->
    <div
      v-for="(component, index) in components" 
      :key="index" 
      class="scroll-section" 
      :class="{ 'is-visible': isVisible[index] }" 
      ref="sections"
    >
      <component :is="component"></component>
    </div>
  </div>
</template>

<script>
/* Import Vue 3 utilities */
import { onMounted, reactive, ref } from "vue";

/* Import child components */
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComonent from "./components/HeroComonent.vue";
import DesktopFeatures from "./components/DesktopFeatures.vue";
import DesktopHero from "./components/DesktopHero.vue";
import DesktopLight from "./components/DesktopLight.vue";
import DesktopPartner from "./components/DesktopPartner.vue";
import DesktopTestimonials from "./components/DesktopTestimonials.vue";
import DesktopPricing from "./components/DesktopPricing.vue";
import DesktopContact from "./components/DesktopContact.vue";
import DesktopFooter from "./components/DesktopFooter.vue";

export default {
  name: "App",
  components: {
    /* Register components */
    HeaderComponent,
    HeroComonent,
    DesktopFeatures,
    DesktopHero,
    DesktopLight,
    DesktopPartner,
    DesktopTestimonials,
    DesktopPricing,
    DesktopContact,
    DesktopFooter,
  },
  setup() {
    /* List of components to dynamically render */
    const components = [
      "DesktopFeatures",
      "DesktopHero",
      "DesktopLight",
      "DesktopPartner",
      "DesktopTestimonials",
      "DesktopPricing",
      "DesktopContact",
      "DesktopFooter",
    ];

    /* Reactive array to track which sections are visible */
    const isVisible = reactive([]);
    /* Reference to DOM sections */
    const sections = ref([]);
    /* Track previous scroll position to determine scroll direction */
    let previousScrollY = window.scrollY;

    /* Handle intersection (when elements come into view) */
    const handleIntersect = (entries) => {
      /* Get the current scroll position */
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > previousScrollY; // Determine scroll direction

      /* Loop through observed entries */
      entries.forEach((entry) => {
        const index = sections.value.indexOf(entry.target); // Get the index of the target section

        if (entry.isIntersecting) {
          /* If scrolling down and section is in view, fade it in */
          if (scrollingDown && index !== -1) {
            isVisible[index] = true;
          }
        } else {
          /* If scrolling up and section is out of view, fade it out */
          if (!scrollingDown && index !== -1) {
            isVisible[index] = false;
          }
        }
      });

      /* Update previous scroll position */
      previousScrollY = currentScrollY;
    };

    /* Initialize the Intersection Observer */
    const initObserver = () => {
      const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the section is visible
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      /* Observe each section */
      sections.value.forEach((section) => {
        observer.observe(section);
      });
    };

    /* Hook that runs after the component is mounted */
    onMounted(() => {
      /* Collect all sections with the "scroll-section" class */
      sections.value = Array.from(document.querySelectorAll(".scroll-section"));
      /* Initialize the observer */
      initObserver();
    });

    return {
      /* Return data and methods for use in the template */
      components,
      isVisible,
      sections,
    };
  },
};
</script>

<style lang="scss" scoped>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%; /* Base font size: 1rem = 10px */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f4f4f4;
}

/* Scroll Section Animation */
.scroll-section {
  opacity: 0; /* Initially hidden */
  transform: translateY(20px); /* Offset for animation */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-section.is-visible {
  opacity: 1; /* Fully visible */
  transform: translateY(0); /* Reset position */
}

.scroll-section:not(.is-visible) {
  opacity: 0; /* Fade out */
  transform: translateY(20px); /* Offset back */
}

/* Media Queries */
@media screen and (max-width: 1024px) {
 

  header-component,
  footer-component {
    padding: var(--spacing-base);
  }
}

@media screen and (max-width: 768px) {
  #app {
    text-align: center;
  }

  header-component {
    flex-direction: column; /* Stack header items vertically */
  }

  .hero-component {
    padding: var(--spacing-base-md);
  }

  .desktop-footer {
    gap: var(--spacing-base-md); /* Reduce gap between footer sections */
  }
}

@media screen and (max-width: 480px) {
  #app {
    font-size: 1.4rem; /* Scale down text for smaller devices */
  }

  header-component {
    padding: var(--spacing-base);
  }

  .hero-component,
  .desktop-footer {
    text-align: center; /* Center-align content for smaller devices */
  }
}
</style>
