<script>
export default {
    name: 'AppCards',
    props: [
    'propsObject'
    ],
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="card m-2 py-2 d-flex flex-column align-items-center">
        <figure>
            <img :src="propsObject.card_images[0].image_url" alt="">
        </figure>
        <div class="cardInfo">
            <span class="d-block text-light fw-bold">{{ propsObject.name }}</span>
            <span class="d-block text-light fw-bold">{{ propsObject.race }}</span>

        </div>

    </div>
</template>


<style lang="scss" scoped>
.card{
    margin-block: 10px;
    min-width: 250px;
    flex-basis: calc(100% / 6);
    background-color: orange;
}
.cardInfo{
    height: 60px;
}
figure{
    // width: 200px;
    height: 250px;
    img{
        height: 100%;
        width: 100%;
    }
}
</style>