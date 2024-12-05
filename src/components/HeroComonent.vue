<template>
  <div class="hero">
    <slot></slot>
    <div class="hero__content">
    <h1 class="hero__content-heading">
       The best procuts start with Figma 
    </h1>

    <h4 class="hero__content-heading-4"> 
        Most calendars are designed for teams. Slate is designed 
for     freelancers
    </h4>
    </div>
    <custom-button>Try For Free</custom-button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
$color-header:#222B32;

.hero{
    position: relative;
    background-image: linear-gradient(rgba($color-header,.5),rgba($color-header,.9)) ,url('../assets/Header-image.jfif') ;
    background-size: cover;
    background-position: center;
    clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
    height: 100vh;



    &__content{
        font-family:sans-serif;
        letter-spacing: .1rem;
        text-align: center;
        color: #fff;
        margin: 8rem 0;

        &-heading{

            
            font-weight: 700;
            font-size: 7.4rem;
            line-height: 8.4rem;
            

            max-width: 67.2rem; /* Adjust to prevent overflow */
            margin: 3rem auto;    /* Center within the content */

            &-4{
                font-weight: 400;
                font-size: 2.8rem;
                line-height: 4rem;
                max-width: 76.6rem; /* Adjust to prevent overflow */
                margin: 0 auto;    /* Center within the content */
    

            }
        }
    }
}

</style>

;