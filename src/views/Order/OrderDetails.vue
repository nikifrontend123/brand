<template>
    <div class="d-flex justify-content-between mb-2 border p-1" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">

        <div class="d-flex align-items-center">
            <img :src="order.img" class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                style="height:60px; width:60px;object-fit: contain;">
            <div class="">
                <span class="fw-semibold mx-2" style="font-size: 18px;">{{ order.style }}</span>
                <div class="mx-2">
                    <span>Qty : {{ order.qty }}</span>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <i class="bi bi-chevron-down fs-5  mx-2"></i>
            <router-link to="/OrderPage">
                <i class="bi bi-x fs-1 "></i>
            </router-link>
        </div>
    </div>
    <div class="container" style="padding-bottom: 100px;">
        <div class="collapse " id="collapseExample">
            <img :src="order.img" style=" width: 100%;  object-fit: fill;">
            <div class="box mt-2 container">
                <table class="table table-striped table-hover ">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td class="text-muted">{{ order.name }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Sale Price</th>
                            <td class="text-muted">{{ order.sp }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Panna</th>
                            <td class="text-muted">{{ order.panna }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Fc / Piece</th>
                            <td class="text-muted">{{ order.fc }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Search Tags</th>
                            <td class="text-muted">{{ order.stag }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        

        <!-- ------------------------------------------------- -->

        <table class="table table-bordered mt-3">
            <tbody>
                <tr>
                    <th scope="row">
                        <p class="mb-1" style="font-size: 14px">Total Amount :</p>
                    </th>
                    <td>
                        <p class="mb-1" style="font-size: 14px">1234</p>
                    </td>

                </tr>
                <tr>
                    <th scope="row">
                        <p class="mb-1" style="font-size: 14px">Average Rate :</p>
                    </th>
                    <td>
                        <p class="mb-1" style="font-size: 14px">876</p>
                    </td>

                </tr>
                <tr>
                    <th scope="row">
                        <p class="mb-1" style="font-size: 14px">Total Pieces :</p>
                    </th>
                    <td>
                        <p class="mb-1" style="font-size: 14px">7655</p>
                    </td>

                </tr>
            </tbody>
        </table>
        <!-- ------------------------------------------------- -->

        <!-- ------------------------------------------------- -->
        <div class="border p-2 py-3 ps-4  text-white w-100 rounded-top" style="background-color: #F48B29;">
            Order Placed
        </div>
        <div class="overflow-x-scroll bg-white">
            <table class="table table-responsive table-striped table-hover ">
                <thead>
                    <tr style="font-size: 13px;">
                        <th class="py-3 text-center" scope="col">Qty</th>
                        <th class="py-3 text-center" scope="col">XS</th>
                        <th class="py-3 text-center" scope="col">S</th>
                        <th class="py-3 text-center" scope="col">M</th>
                        <th class="py-3 text-center" scope="col">L</th>
                        <th class="py-3 text-center" scope="col">XL</th>
                        <th class="py-3 text-center" scope="col">Free</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(size, index) in sizes" :key="index">
                        <th scope="row" style="font-size:14px">
                            <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                style="width: 30px; height: 30px;" :style="'background-color :' + size.bg">
                            </div>
                        </th>
                        <td class="text-center">
                            <input type="number" class="form-control" style="width: 50px;font-size: 15px !important;"
                                placeholder="10">
                        </td>
                        <td class="text-center">
                            <input type="number" class="form-control" style="width: 50px;font-size: 15px !important;"
                                placeholder="20">
                        </td>
                        <td class="text-center">
                            <input type="number" class="form-control" style="width: 50px;font-size: 15px !important;"
                                placeholder="30">
                        </td>
                        <td class="text-center">
                            <input type="number" class="form-control" style="width: 50px;font-size: 15px !important;"
                                placeholder="40">
                        </td>
                        <td class="text-center">
                            <input type="number" class="form-control" style="width: 50px;font-size: 15px !important;"
                                placeholder="50">
                        </td>
                        <td class="text-center">
                            <input type="number" class="form-control" style="width: 50px;font-size: 15px !important;"
                                placeholder="60">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- ------------------------------------------------- -->

        <div class=" my-3 w-100">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger w-100 py-3 ">Order
                completed</button>
        </div>

        <!-- ------------------------------------------------- -->
        <div>
            <div class="mt-3">
                <div class="d-flex align-items-center">
                    <div class="border p-2 py-3 ps-4 rounded-top  text-white w-100" style="background-color: #F48B29 ;"
                        data-bs-toggle="collapse" data-bs-target="#collapseExampleNew" aria-expanded="false"
                        aria-controls="collapseExampleNew">
                        Transaction
                    </div>
                    <!-- <button type="button" class="d-flex btn btn-primary rounded-circle ms-2"
                                @click="showActionModal = !showActionModal">
                                <i class="bi bi-plus fs-3"></i>
                            </button> -->
                </div>
                <div class="collapse show bg-white p-2" id="collapseExampleNew">
                    <div v-for="message in messages" :key="message.id" :class="message.type">
                        <div class="message mt-3 mb-2 d-flex flex-column"
                            style="width: calc(100% - 40px) !important; margin-left:auto; margin-right: 0;">
                            <div class="d-flex   align-items-center" >
                                <i class="bi bi-person fs-4 border rounded-circle me-2"
                                    style="padding: 5px 10px !important;"></i>
                                <div class="message-content border w-100"
                                    style="background-color: #F48B29;word-wrap: break-word; padding: 10px !important; border-radius: 8px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 0px !important; color: white;">
                                    <p class="m0">
                                        <strong>{{ message.title }}</strong>: {{ message.text }}
                                    </p>
                                </div>
                            </div>
                            <div class="text-end text-muted " style="font-size: 10px;">{{ message.timestamp2 }},
                                {{ message.timestamp }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isVisible" class="border bg-white">
                <!-- <p class="text-center text-white py-2" style="background-color: #606C5D;">Order Management</p> -->
                <div class="container pb-2 ">
                    <div class="form-check border-bottom py-2 " v-for="(action_name, index) in inputList" :key="index">
                        <div class="d-flex align-items-center ">
                            <input class="form-check-input" :ID="'radio' + index" type="radio" :value="action_name"
                                v-model="actionName">
                            <label class="form-check-label w-100" :for="'radio' + index">
                                <span><i :class="action_name.icon" class="fs-4 mx-3"></i></span>
                                <span class="text-capitalize">{{ action_name.title }}</span>
                            </label>
                        </div>
                    </div>

                    <div class=" d-flex bg-light p-2 align-items-center">
                        <input v-model="actionValue" type="text" class="form-control" placeholder="Type your message..." />
                        <div @click="sendMessage" class="ms-2 "><i class="bi bi-telegram fs-1   p-3" style="color: #F48B29;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ------------------------------------------------- -->


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Order Completed</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Are you sure you have received <br> <b>{{ order.qty }} Quantity of this {{ order.style }}
                                Order</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light border" style="width: 30%;"
                            data-bs-dismiss="modal">Close</button>
                        <button @click="hideDiv()" data-bs-dismiss="modal" style="width: 30%;" type="button"
                            class="btn btn-light border">Yes</button>
                    </div>
                </div>
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
            actionName: [],
            actionValue: '',
            showActionModal: false,
            inputList: [
                {
                    title: 'Balance Quantity',
                    icon: 'bi bi-pause-btn'
                },
                {
                    title: 'Ready Quantity',
                    icon: 'bi bi-check2'
                },
                {
                    title: 'Sending Request',
                    icon: 'bi bi-envelope'
                },
                {
                    title: 'Dispatched Quantity',
                    icon: 'bi bi-truck'
                },
                {
                    title: 'Received Quantity',
                    icon: 'bi bi-check2-all'
                },
                {
                    title: 'Chat Message',
                    icon: 'bi bi-chat-dots'
                },

            ],
            displayData: "",
            messages: [],
            isVisible: true
        }
    },
    computed: {
        order() {
            let orderId = this.$route.params.orderId;
            return this.$store.getters.getOrder(orderId);
        },
        sizes() {
            return this.$store.getters.getSize
        }

    },
    methods: {
        hideDiv() {
            this.isVisible = false;
        },
        sendMessage() {
            if (this.actionValue.trim() !== '') {
                const message = {
                    id: Date.now(),
                    text: this.actionValue,
                    // title: this.actionName [0],
                    title: this.actionName.title,
                    timestamp: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
                    timestamp2: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    type: 'outgoing', // Change to 'incoming' for received messages
                };
                this.messages.push(message);
                // Clear the input value for the specific action
                this.actionName = [];
                this.actionValue = '';
                this.showActionModal = false;
            }
        },
    },
}

</script>

<style scoped>
table th:nth-child(1),
.table td:nth-child(1) {
    position: sticky;
    left: 0;
    background-color: #f8f8f7;
    color: #373737;
    z-index: 10;
}
</style>