<template>
    <div class="container" style="padding-bottom: 100px;">
        <div class="d-flex justify-content-between my-2 border p-1" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img :src="order.img" class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
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
            <router-link to="/OrderPage">
                <div class="d-flex align-items-center justify-content-center">
                    <i class="bi bi-x fs-1 "></i>
                </div>
            </router-link>
        </div>


        <div class="collapse show" id="collapseExample">
            <div class="card card-body">
                <div class="border  p-3">
                    <div class="d-flex justify-content-between">
                        <p class="m-0">Order Qty</p>
                        <input type="text" class="form-control-sm w-50">
                    </div>
                    <p class="m-0">{{ order.date }}</p>
                </div>
                <div class="border  p-3">
                    <div class="d-flex justify-content-between">
                        <p class="m-0">Received</p>
                        <input type="text" class="form-control-sm w-50">
                    </div>
                    <p class="m-0">{{ order.date }}</p>
                </div>
                <div class="border  p-3">
                    <div class="d-flex justify-content-between">
                        <p class="m-0">Balance Qty</p>
                        <input type="text" class="form-control-sm w-50">
                    </div>
                    <p class="m-0">{{ order.date }}</p>
                </div>
            </div>
        </div>

        <div class="mt-2 border p-2">
            <div class="border p-2" data-bs-toggle="collapse" data-bs-target="#collapseExampleNew" aria-expanded="false"
                aria-controls="collapseExampleNew">
                Transaction History
            </div>

            <div class="collapse show" id="collapseExampleNew">
                <div class="d-flex justify-content-between m-2">
                    <img :src="`${publicPath}${order.imgchat}`" style="width: 30px; height: 30px;" class="rounded-circle">
                    <input type="text" class="rounded form-control-sm w-50">
                    <p>08:15pm</p>
                </div>
                <div class="d-flex justify-content-between m-2">
                    <img :src="`${publicPath}${order.imgchat}`" style="width: 30px; height: 30px;" class="rounded-circle">
                    <input type="text" class="rounded form-control-sm w-50">
                    <p>08:15pm</p>
                </div>
                <div class="d-flex justify-content-between m-2">
                    <i class="bi bi-check-all"></i>
                    <p>08:15pm</p>
                    <input type="text" class="rounded form-control-sm w-50" >
                    <img :src="`${publicPath}${order.imgchat}`" style="width: 30px; height: 30px;" class="rounded-circle">
                </div>
                <div class="d-flex justify-content-between m-2">
                    <i class="bi bi-check-all"></i>
                    <p>08:15pm</p>
                    <input type="text" class="rounded form-control-sm w-50" v-model="displayData">
                    <img :src="`${publicPath}${order.imgchat}`" style="width: 30px; height: 30px;" class="rounded-circle">
                </div>
            </div>
        </div>


        <div class="mt-2 border p-2">
            <div class="border p-2" data-bs-toggle="collapse" data-bs-target="#collapseExampleNew1" aria-expanded="false"
                aria-controls="collapseExampleNew1">
                New Action
            </div>

            <div class="collapse show list-group" id="collapseExampleNew1">
                <div v-for="(inputData, index) in inputList" :key="index">
                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <p class="m-0">{{ inputData.title }}</p>
                        <input type="text" v-model="inputData.value" placeholder="Enter a value" class="form-control-sm w-50" required>
                    </div>
                </div>
                <button class="btn btn-dark rounded-0 mt-2" @click="showData">Submit</button>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    name: 'OrderDetails',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            inputData: "",
            inputList: [
                { title: "Balance", value: "" },
                { title: "Ready", value: "" },
                { title: "Send", value: "" },
                { title: "Disptached", value: "" },
                { title: "Recieved", value: "" },
                { title: "Message", value: "" },
            ],
            displayData: ""
        }
    },
    computed: {
        order() {
            let orderId = this.$route.params.orderId;
            return this.$store.getters.getOrder(orderId);
        },
    },
    methods: {
        showData() {
            const values = this.inputList.map(input => input.value);
            this.displayData = values.join(", ");
        }
    }
}
</script>

<style lang="scss" scoped></style>