<script>
import {store} from './store'
import axios from 'axios'
export default {
    data(){
        return {
            store,
        }
    },
    methods : {
        getCards() {
            axios.get(store.apiUrl).then(response =>{
                console.log(response.data.data);
                store.cardArray = response.data.data
            })
        }
    },
    mounted(){
        this.getCards()
    }
}
</script>

<template>
    <div class="container">
        <div class="item" v-for="(element,index) in store.cardArray" :key="index">
        <h3>{{ element.name }}</h3>
    <img :src="element.card_images[0].image_url" alt="lol"></div>
    </div>
</template>

<style lang="scss">

</style>
