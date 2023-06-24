<template>
    <div>

        <div class="d-flex align-items-center justify-content-center">
            <img :src="`${publicPath}${list.img}`" style="width: 50%;">
            <img :src="`${publicPath}${list.img1}`" style="width: 50%;">
        </div>




        <div class="mt-2">
            <button class="btn btn-dark text-start rounded-0 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                New Order
                <i class="bi bi-plus"></i>
            </button>
        </div>
        <div class="collapse show" id="collapseExample">
            <div class="card card-body rounded-0">
                <div class="border d-flex justify-content-between p-3">
                    <label for="floatingInput1">Quantity</label>
                    <input type="number" class="text-center form-control-sm"
                        style="width: fit-content;border: 0px; border-bottom: 1px solid ; border-radius: 0px;"
                        id="floatingInput1" placeholder="10" required>
                </div>
                <div class="border d-flex justify-content-between p-3">
                    <label for="floatingInput1">Expected Date</label>
                    <input type="number" class="text-center form-control-sm"
                        style="width: fit-content;border: 0px; border-bottom: 1px solid ; border-radius: 0px;"
                        id="floatingInput1" placeholder="10" required>
                </div>
                <div class="border d-flex justify-content-between p-3">
                    <textarea placeholder="Message" id="" cols="40" rows="3"></textarea>
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <button class="btn btn-dark rounded-0" type="submit">Submit</button>
                </div>
            </div>
        </div>




        <!-- <div class="accordion mt-2" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        New Order
                    </div>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="border d-flex justify-content-between p-3">
                            <label for="floatingInput1">Quantity</label>
                            <input type="number" class="text-center form-control-sm"
                                style="width: fit-content;border: 0px; border-bottom: 1px solid ; border-radius: 0px;"
                                id="floatingInput1" placeholder="10" required>
                        </div>
                        <div class="border d-flex justify-content-between p-3">
                            <label for="floatingInput1">Expected Date</label>
                            <input type="number" class="text-center form-control-sm"
                                style="width: fit-content;border: 0px; border-bottom: 1px solid ; border-radius: 0px;"
                                id="floatingInput1" placeholder="10" required>
                        </div>
                        <div class="border d-flex justify-content-between p-3">
                            <textarea placeholder="Message" id="" cols="40" rows="3"></textarea>
                        </div>

                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn btn-dark rounded-0" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->


        <div class="mt-2">
            <button class="btn btn-dark text-start rounded-0 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne">
                Current Orders
                <i class="bi bi-plus"></i>
            </button>
        </div>
        <div class="collapse show" id="collapseOne">
            <div class="rounded-0">
                <div class="d-flex border my-3 p-2" v-for="(currentOrder, index) in currentOrders" :key="index">
                    <img :src="currentOrder.img"
                        class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                        style="height:80px; width:80px;object-fit: contain;">

                    <div class="d-flex flex-column  justify-content-center">
                        <div class="d-flex ">
                            <span class="fw-bold mx-2">{{ currentOrder.style }}</span>
                            <span>|</span>
                            <span class="mx-2">Qty : {{ currentOrder.qty }}</span>
                        </div>
                        <div class="mx-2">
                            {{ currentOrder.msg }}
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="mt-2">
            <button class="btn btn-dark text-start rounded-0 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo">
                Current Orders
                <i class="bi bi-plus"></i>
            </button>
        </div>

        <div class="collapse show" id="collapseTwo">
            <div class=" rounded-0">
                <div class="d-flex border my-3 p-2" v-for="(completedOrder, index) in completedOrders" :key="index">

                    <img :src="completedOrder.img"
                        class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                        style="height:80px; width:80px;object-fit: contain;">

                    <div class="d-flex flex-column  justify-content-center">
                        <div class="d-flex ">
                            <span class="fw-bold mx-2">{{ completedOrder.style }}</span>
                            <span>|</span>
                            <span class="mx-2">Qty : {{ completedOrder.qty }}</span>
                        </div>
                        <div class="mx-2">
                            {{ completedOrder.msg }}
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <!-- <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                        aria-expanded="false" aria-controls="collapseTwo">
                        Current Orders
                    </div>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="d-flex my-3" v-for="(currentOrder, index) in currentOrders" :key="index">
                            <img :src="currentOrder.img"
                                class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                                style="height:80px; width:80px;object-fit: contain;">

                            <div class="d-flex flex-column  justify-content-center">
                                <div class="d-flex ">
                                    <span class="fw-bold mx-2">{{ currentOrder.style }}</span>
                                    <span>|</span>
                                    <span class="mx-2">Qty : {{ currentOrder.qty }}</span>
                                </div>
                                <div class="mx-2">
                                    {{ currentOrder.msg }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                        aria-expanded="false" aria-controls="collapseThree">
                        Completed Order
                    </div>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="d-flex my-3" v-for="(completedOrder, index) in completedOrders" :key="index">

                            <img :src="completedOrder.img"
                                class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                                style="height:80px; width:80px;object-fit: contain;">

                            <div class="d-flex flex-column  justify-content-center">
                                <div class="d-flex ">
                                    <span class="fw-bold mx-2">{{ completedOrder.style }}</span>
                                    <span>|</span>
                                    <span class="mx-2">Qty : {{ completedOrder.qty }}</span>
                                </div>
                                <div class="mx-2">
                                    {{ completedOrder.msg }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> -->

    </div>
</template>

<script>
// import TextInputs from '@/components/InputsType/TextInputs.vue';

export default {
    name: "CatalogDetails",
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        list() {
            let listId = this.$route.params.listId;
            return this.$store.getters.getList(listId);
        },
        currentOrders() {
            return this.$store.getters.getCurrentOrders
        },
        completedOrders() {
            return this.$store.getters.getCompletedOrders
        }
    },
    // components: { TextInputs }
}
</script>

<style lang="scss" scoped></style>