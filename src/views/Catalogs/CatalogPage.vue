<template>
    <div>
        <div class="border">
            <FabFilter></FabFilter>
        </div>
        <!-- <div class="list container  w-100 justify-content-center align-items-center mt-3" style="padding-bottom: 80px;"> -->
            <!-- <div v-for="(list, index) in lists" :key="index" class="">
                <div class="btnlist w-100">
                    <div class="border-none cursor-pointer d-flex justify-content-center w-100 ">

                        <router-link :to="'/CatalogDetails/' + list.id">
                            <router-link :to="'/CatalogDetailsV2/' + list.id">
                            <img :src="`${publicPath}${list.img}`"
                                style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius:2%; border-top-right-radius:2%;"
                                alt="">
                        </router-link> -->

                        <!-- ---------------------------------------- -->
                        <div class="container py-3" style="padding-bottom:80px">
                            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                                <div class="col" v-for="(list, index) in lists" :key="index">
                                    <div class="card border ">
                                        <router-link :to="'/CatalogDetails/' + list.id">
                                            <!-- <router-link :to="'/CatalogDetailsV2/' + list.id"> -->
                                            <img :src="`${publicPath}${list.img}`"
                                                style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius:2%; border-top-right-radius:2%;"
                                                alt="">
                                        </router-link>
                                        <div class="card-footer p-0">
                                            <div class="btn-group w-100 rounded-bottom justify-content-end">
                                                <router-link :to="'/ProductPage/' + list.id" 
                                                    class="text-decoration-none border-end w-50 text-dark">
                                                    <button class="btn w-100 bg-outline-dark rounded-0 my-2 py-0"
                                                        style="font-size: 10px; ">
                                                        <p class="m-0">Detail Page</p>
                                                    </button>
                                                </router-link>
                                                <router-link :to="'/CatalogDetails/' + list.id"  
                                                    class="text-decoration-none w-50 text-dark">
                                                    <button class="btn w-100 border-1 bg-outline-dark rounded-0 my-2 py-0"
                                                        style="font-size: 10px;">
                                                        <p class="m-0">Order Page</p>
                                                    </button>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ---------------------------------------- -->





                    </div>
                <!-- </div> -->
            <!-- </div>
        </div> -->
</template>

<script>
import FabFilter from '@/components/Filter/FabFilter.vue';

export default {
    components: {
        FabFilter
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        lists() {
            return this.$store.getters.getLists;
        },
        // activeCatelog() {
        //     return this.$store.getters.getCatelog;
        // },

    },
    methods: {
        // showCatelog(catelog) {
        //     return this.$store.dispatch('selectCatelog', catelog);
        // },
        // hideCatelog() {
        //     return this.$store.dispatch('hideCatelog');
        // }

    }

}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .btnlist img {
        width: 180px;
        height: 150px;
        object-fit: fill;

        /* overflow: auto; */
    }

    .btnsar {
        margin-top: 10px;
    }
}

@media only screen and (min-width: 601px) {
    .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

.eabtn i:hover {
    color: black;
}</style>