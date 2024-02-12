<template>
<div class="bg-dark text-light fw-bold p-2">{{'Viewing : '+store.cardArray.length+' cards' }}</div>
</template>

<script>
import { store } from '../store'
export default {
    name : 'AppCounter',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
</style>