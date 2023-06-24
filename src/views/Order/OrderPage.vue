<template>
    <div>

        <FabFilter></FabFilter>
        <div v-for="(order, index) in orders" :key="index">
            <router-link :to="'/OrderDetails/' + order.id" class="text-decoration-none text-dark">
                <div class="d-flex my-3 mx-2">
                    <img :src="order.img"
                        class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                        style="height:80px; width:80px;object-fit: contain;">

                    <div class="d-flex flex-column  justify-content-center">
                        <div class="d-flex ">
                            <span class="fw-bold mx-2">{{ order.style }}</span>
                            <span>|</span>
                            <span class="mx-2">Qty : {{ order.qty }}</span>
                        </div>
                        <div class="mx-2">
                            {{ order.msg }}
                        </div>
                    </div>
                </div>
            </router-link>

        </div>
    </div>
</template>


<script>
import FabFilter from '../../components/Filter/FabFilter.vue';

export default {
    name: "OrderPage",
    components: { FabFilter },
    computed: {
        orders() {
            return this.$store.getters.getOrders
        }
    }
}
</script>

<style lang="scss" scoped></style>