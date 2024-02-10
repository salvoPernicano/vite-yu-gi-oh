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
    <div class="card col-3 m-3 py-3 d-flex flex-column align-items-center">
        <figure>
            <img :src="propsObject.card_images[0].image_url" alt="">
        </figure>
            <span class="d-block text-light fw-bold">{{ propsObject.name }}</span>
            <span class="d-block text-light fw-bold">{{ propsObject.race }}</span>

    </div>
</template>


<style lang="scss" scoped>
.card{
    flex-basis: calc(100% / 5);
    background-color: orange;
}
figure{
    width: 200px;
    height: 250px;
    img{
        height: 100%;
        width: 100%;
    }
}
</style>