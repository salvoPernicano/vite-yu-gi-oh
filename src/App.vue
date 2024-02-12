<script>
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store,
        }
    }, 
    methods: {
        getArchetype(){
            axios.get(store.apiUrlArchetype).then(response =>{
                console.log(response.data);
                store.archetypeArray = response.data
            })
        },
        getCards() {
            axios.get(store.apiUrl).then(response => {
                console.log(response.data.data);
                store.cardArray = response.data.data
            })
            store.loading = false;
        }
    },
    computed: {
        archetypeData(){
            return store.archetypeArray;
        }
    },
    mounted() {
       this.getArchetype();
       this.getCards()
    }
}
</script>

<template>
    <AppHeader />
    <main class="text-center">
        <div v-if="(store.loading)" class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <AppMain />
    </main>
</template>

<style lang="scss"></style>
