<template>
   
    <div class="container mt-2">
        <div class="row row-cols-2 g-2">
            <div class="col" v-for="(item, index) in categories" :key="index">
                <div class="">
                    <router-link :to="item.route" class="  text-decoration-none text-dark">
                        <div class="d-flex align-items-center p-2 border ">
                            <img :src="item.img" class="rounded-circle" style=" object-fit: fill; height: 60px; width: 60px;" alt="">
                           <div class="ms-2">
                            <small class="text-uppercase fw-bold">{{ item.name }}</small>
                            <div class="d-flex justify-content-between align-items-end">
                                <span class="text-muted">{{item.qty}}</span>
                                <!-- <i class="bi bi-graph-down-arrow text-danger fs-5"></i> -->
                            </div>
                           </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 
export default {
    name: 'CategoryNew',
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    components: {
         
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },
}
</script>

<style>
.list-group-item.active {
    background-color: pink !important;
    color: black !important;
    border-color: pink !important;
}

.test-scroll::-webkit-scrollbar {
    display: none !important;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>