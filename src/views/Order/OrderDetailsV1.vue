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
            <div class=" card-body">
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

        <div class="mt-3">
            <div class="d-flex  align-items-center">
                <div class="border p-2 pb-3 bg-secondary rounded text-white w-100" data-bs-toggle="collapse"
                    data-bs-target="#collapseExampleNew" aria-expanded="false" aria-controls="collapseExampleNew">
                    Transaction History
                </div>
                <button type="button" class=" d-flex btn btn-primary rounded-circle ms-2"
                    @click="showActionModal = !showActionModal">
                    <i class="bi bi-plus fs-3"></i>
                </button>
            </div>
            <div class="collapse show" id="collapseExampleNew">
                <ul class="message-list">
                    <li v-for="message in messages" :key="message.id" :class="message.type">
                        <div class="message">
                            <p class=" p-2 m-2 text-end"
                                style="border-radius: 15px 15px 5px 15px; background-color: #e8e8e8; word-wrap: break-word;">
                                <strong>{{ message.title }}</strong>: {{ message.text }}
                            </p>
                            <div class="text-end text-muted " style="font-size: 10px;">{{ message.timestamp }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        

        <div v-if="showActionModal" class="modal fade show d-block" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="false">
            <div class="modal-dialog shadow">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Action</h5>
                        <button type="button" class="btn" aria-label="Close" @click="showActionModal = !showActionModal">
                            <i class="bi bi-x fs-3"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-check" v-for="(action_name, index) in inputList" :key="index">
                            <input class="form-check-input" :ID="'radio' + index" type="radio" :value="action_name" v-model="actionName">
                            <label class="form-check-label" :for="'radio' + index">
                                <span class="text-capitalize">{{ action_name }}</span>
                            </label>
                        </div>
                        
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" placeholder="name@example.com" v-model="actionValue">
                            <label for="floatingInput">Action Value</label>
                        </div>
                        <button @click="sendMessage" class="btn btn-outline-secondary w-100" type="button">Send</button>
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
            inputList: ["balance", "ready", "send", "dispatched", "received", "message"],
            displayData: "",
            messages: [],
        }
    },
    computed: {
        order() {
            let orderId = this.$route.params.orderId;
            return this.$store.getters.getOrder(orderId);
        },
    },
    methods: {
        // showData() {
        //     const values = this.inputList.map(input => input.value);
        //     this.displayData = values.join(", ");
        // },
        sendMessage() {
            if (this.actionValue.trim() !== '') {
                const message = {
                    id: Date.now(),
                    text: this.actionValue,
                    // title: this.actionName [0],
                    title: this.actionName,
                    timestamp: new Date().toLocaleTimeString(),
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

<style scoped></style>