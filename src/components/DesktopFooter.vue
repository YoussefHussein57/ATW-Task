<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- First Section: Pages -->
      <div class="footer-section">
        <h5 class="heading-3 title">Pages</h5>
        <ul class="footer-list">
          <li><a href="#" class="link">Home</a></li>
          <li><a href="#" class="link">Product</a></li>
          <li><a href="#" class="link">Pricing</a></li>
          <li><a href="#" class="link">About</a></li>
          <li><a href="#" class="link">Contact</a></li>
        </ul>
      </div>

      <!-- Second Section: Tomothy -->
      <div class="footer-section">
        <h5 class="heading-3 title">Tomothy</h5>
        <ul class="footer-list">
          <li><a href="#" class="link">Eleanor Edwards</a></li>
          <li><a href="#" class="link">Ted Robertson</a></li>
          <li><a href="#" class="link">Annette Russell</a></li>
          <li><a href="#" class="link">Jennie Mckinney</a></li>
          <li><a href="#" class="link">Gloria Richards</a></li>
        </ul>
      </div>

      <!-- Third Section: Jane Black -->
      <div class="footer-section">
        <h5 class="heading-3 title">Jane Black</h5>
        <ul class="footer-list">
          <li><a href="#" class="link">Philip Jones</a></li>
          <li><a href="#" class="link">Product</a></li>
          <li><a href="#" class="link">Colleen Russell</a></li>
          <li><a href="#" class="link">Marvin Hawkins</a></li>
          <li><a href="#" class="link">Bruce Simmons</a></li>
        </ul>
      </div>

      <!-- Fourth Section: Contact Info -->
      <div class="footer-section">
        <!-- Location -->
        <div class="flex">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span class="heading-5">7480 Mockingbird Hill undefined</span>
        </div>
        <!-- Phone -->
        <div class="flex">
          <font-awesome-icon :icon="['fas', 'mobile-screen']" />
          <span class="heading-5">(239) 555-0108</span>
        </div>
        <!-- Social Media Icons -->
        <div class="flex social-icons">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "DesktopFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  /* Footer grid layout with four columns */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-base);
  background-color: var(--color-text);
  color: #ffffff;
  padding: var(--spacing-base-md);

  .footer-container {
    display: contents; /* Allows child sections to follow grid structure */
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
  }

  .footer-section {
    /* Styling for each section in the footer */
    display: flex;
    flex-direction: column;
    gap: var(--spacing-base);
    text-align: center; /* Center-align text by default */
  }

  .footer-list {
    /* Styling for the list of links */
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      .link {
        /* Styling for links */
        color: #ffffff;
        text-decoration: none;
        font-size: 1.4rem;
        transition: color 0.3s ease;

        &:hover {
          /* Add hover effect */
          color: var(--color-primary);
        }
      }
    }
  }

  .flex {
    /* Flexbox layout for icons and contact info */
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;

    svg {
      /* Styling for FontAwesome icons */
      font-size: 2rem;
      color: #ffffff;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-primary); /* Hover effect */
      }
    }

    .social-icons svg {
      margin-right: 1rem; /* Space between social icons */
    }
  }

  .title {
    /* Title styling for each section */
    color: #ffffff;
  }

  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    /* Adjust for tablets */
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    gap: var(--spacing-base);

    .footer-section {
      text-align: center; /* Center-align content */
    }
  }

  @media screen and (max-width: 480px) {
    /* Adjust for mobile */
    grid-template-columns: 1fr; /* Single column */
    text-align: center;

    .footer-section {
      .footer-list li {
        font-size: 1.2rem; /* Smaller font size */
      }

      .flex {
        justify-content: center;

        svg {
          font-size: 1.6rem; /* Smaller icon size */
        }
      }
    }
  }
}
</style>
