
<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <nav class="navbar bg-body-tertiary px-5 py-0"> 
        <div class="container-fluid ">
            <div class="d-flex justify-content-between align-items-center">
                <img src="../assets/img/download.png" alt="">
                <span class="text-dark fw-bold fs-2">Yu -Gi-Oh Api</span>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav{
    height: 100px;
}
    img {
        height: 100px;
        width: 200px;
        object-fit: contain;
    }

</style>