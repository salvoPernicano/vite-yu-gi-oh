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
                console.log(response.data)
            })
        }
    },
    mounted(){
        this.getCards()
    }
}
</script>

<template>
    <h1>ciao</h1>
</template>

<style lang="scss">

</style>
