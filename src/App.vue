<script>
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/Appheader.vue'
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
        getCards() {
            axios.get(store.apiUrl).then(response => {
                console.log(response.data.data);
                store.cardArray = response.data.data
            })
            store.loading = false;
        }
    },
    mounted() {
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
