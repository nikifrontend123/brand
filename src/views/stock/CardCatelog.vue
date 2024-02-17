<template>
    <FabFilter></FabFilter>
    <div class="container" style=" padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card show-on-hover rounded-0">
                    <router-link :to="'/ProductPage/' + product.id" class="text-decoration-none text-dark">
                        <div :id="'productImages' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.images"
                                    :key="imgIndex">
                                    <img :src="`${publicPath}${image}`" class="card-img-top rounded-0" alt=""
                                        style="height:180px; object-fit: fill;">
                                </div>
                            </div>
                            <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded-circle p-0 border me-1"
                                    :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                    <img :src="`${publicPath}${image}`" class="rounded-circle" alt=""
                                        style="width: 35px; height: 35px; object-fit: fill;">
                                </button>
                            </div>
                        </div>
                    </router-link>
                    <div class="card-body" style="padding:3px">
                        <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                            <p class="m-0 fw-bold" style="font-size:13px;">{{ product.total }} mtr</p>
                            <p class="m-0 fw-bold" style="font-size:13px;">{{ product.styleid }} </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>


import router from '../../router';
import FabFilter from '@/components/Filter/FabFilter.vue';

export default {
    name: "CardCatelog",
    components: {FabFilter},
    data() {
        return {
            publicPath: process.env.BASE_URL,
            selectedImage: {},
        }
    },
    computed: {
        products() {
            return this.$store.getters.getProducts
        },

    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch('selectProduct', product).then(
                () => {
                    router.push('/ProductPage/' + product.id)
                }
            )
        },
        saveProduct(product) {
            this.$store.dispatch('saveProduct', product)
        },
        selectImage(image) {
            this.selectedImage = image;
        },

    },



}
</script>
<style>
.show-on-hover .soh-div {

    opacity: .75;
}

.show-on-hover:hover .soh-div {

    opacity: 1;
}

.test {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #505050;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.bi-cart-plus::before {
    content: "\f23f";
    margin-bottom: 2px;
}
</style>

 