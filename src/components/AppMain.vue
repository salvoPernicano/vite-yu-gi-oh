
<script>
import { store } from '../store'
import AppCards from './AppCards.vue'
export default {
    components : {
        AppCards
    },
    name: 'AppMain',
    data() {
        return{
            store,
        }
    }
}
</script>
<template>
    <div class="container-fluid d-flex justify-content-center align-items-center border border-danger">
        <div class="card-container d-flex justify-content-center align-items-center">
           <AppCards v-for="(element,index) in store.cardArray" 
           :key="index"
           :propsObject="element"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card-container{
    flex-wrap: wrap ;
}
img {
    width: 150px;
    height: 200px;
}

.item {
    flex-basis: calc(100% / 5)
}

h3 {
    height: 50px;
}</style>