<template>
    <div>
        <div class="border">
            <FabFilter></FabFilter>
        </div>
        <div class="list container  w-100 justify-content-center align-items-center mt-3" style="padding-bottom: 80px;">
            <div v-for="(list, index) in lists" :key="index" class="">
                <div class="btnlist w-100">
                    <div class="border-none cursor-pointer d-flex justify-content-center w-100 ">
                        
                        <router-link :to="'/CatalogDetails/' + list.id">
                            <img :src="`${publicPath}${list.img}`" alt="">
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
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
}
</style>