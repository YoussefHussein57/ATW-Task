<template>
  <div class="content">
    <div class="content__left">
        <img src="../assets/screen-content.svg" alt="Illustration">
    </div>

    <div class="content__right">
        <div class="content__right-text">
            <h3 class="heading-3 content__right-text-word"> At your fingertips</h3>
            <h2 class="heading-2 content__right-text-title"> Lightning fast prototyping </h2>

        </div>
        <div class="content__right-subscription">
            <h3 class="heading-3 content__right-subscription-word"> Subscribe to our Newsletter </h3>
            <p class="content__right-subscription-description">Available exclusivery on Figmaland</p>

            <div class="content__right-input">
            <input type="email" placeholder="Your Email">
            <custom-button> Subscribe </custom-button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: "DesktopLight"

}
</script>

<style lang="scss" scoped>

.content{
    display: grid;
    grid-template-columns: 1fr 35%;
    justify-content: center;
    align-items: center;
    margin: var(--spacing-base-lg) auto ;


    &__right{
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: var(--spacing-base);

        &-subscription{
            width: 47.7rem;
            height: 20rem;
            gap: 1.3rem;
            
            &-description{
                width: 30rem;
                height: 2.5rem;

                font-weight: 400;
                font-size: 1.8rem;
                line-height: 2.5rem;
                letter-spacing: 0.2px;

                color: var(--color-paragh);
            }
        }
        &-input{
            width: 45.7rem;
            height: 12.6rem;

            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-items: center;

            gap: 1.2rem;

            input{
                width: 22rem;
                height: 3.2rem;
                padding: 1.9rem ;
                border:  1px solid #e8e8e8;
                border-radius: 2.5rem;

                gap:6.4rem;

                background-color: #f4f4f4;

                &:focus{
                    outline: none;
                    border: 1px solid var(--color-primary);
                }
            }
            button{
                width: 17.3rem;
                height: 6rem;

                padding: 1.9rem 3.8rem;
                gap: 1rem;
            }
        }
    }

    
}

</style>