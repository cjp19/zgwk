<template>
    <div class="app-banner-box">
        <mt-swipe :auto="4000">
        <mt-swipe-item><img src="http://img.99114.com/group1/M00/8D/4D/wKgGSFwtZCOAHV_jAAGez6f7Hnc674.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="http://img.99114.com/group1/M00/8D/A6/wKgGSFw9QJaAS5JmAAL53ZtYRiY645.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="http://img.99114.com/group1/M00/8D/A7/wKgGSFxFIraAXMVfAAF7QuR-bZg385.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="http://img.99114.com/group1/M00/8D/A4/wKgGSFw1jMaAGjGTAAEnS9YPtUM299.jpg"></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="css" scoped>
    .app-banner-box{
        height:3rem;
    }
    .app-banner-box img{
        width:100%;
        height:3rem;
    }
</style>