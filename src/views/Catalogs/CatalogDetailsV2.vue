<template>
    <div class="container" style="padding-bottom: 80px;">
        <!-- <div class="d-flex align-items-center justify-content-center">
            <img :src="`${publicPath}${list.img}`" style="width: 50%;"> 
        </div> -->
        <ul class="nav nav-tabs d-flex justify-content-evenly my-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                    role="tab" aria-controls="home" aria-selected="true">Quick</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                    role="tab" aria-controls="profile" aria-selected="false">Regular</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                    role="tab" aria-controls="contact" aria-selected="false">Advance</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="my-3">
                    <p class="m-0 fs-5 text-center">Enter Your Order Quantity</p>
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Quantity">
                        <label for="floatingInput">Quantity</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Expected Date">
                        <label for="floatingPassword">Expected Date</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control as" placeholder="Leave a comment here"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="my-3">
                    <p class="m-0 fs-5 text-center">Enter Your Order Quantity</p>
                    <div class="table-responsive mt-4" id="scroll">
                        <table class="table border border-1" style="background-color: #f8f9fa;">
                            <thead>
                                <tr>
                                    <th scope="col">Qty</th>
                                    <th scope="col" v-for="(size, index) in list.sizes" :key="index">
                                        <div class="fw-bold d-flex flex-column align-items-center" style="">
                                            <p class="m-0">{{ size.name }}</p>
                                            <!-- <p class="m-0">₹{{ size.price }}</p> -->
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="(ordcolor, colorindex) in list.ordcolors" :key="colorindex">
                                    <td class="">
                                    <th style="font-size: 13px;">Mix of {{ list.colors.length }}</th>
                                    </td>

                                    <td v-for="(size, sizeindex) in list.sizes" :key="sizeindex">
                                        <div>
                                            <input type="number" class="form-control text-center" style="width: 3rem;"
                                                placeholder="0" v-model="quantities[colorindex][sizeindex]">
                                        </div>
                                    </td>
                                </tr>
                                <!-- <tr scope="row">
                                    <th>Cost</th>
                                    <td class="text-center" v-for="(size, sizeindex) in list.sizes" :key="sizeindex">
                                        ₹{{ calculateTotal(sizeindex) }}
                                    </td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                    <!-- <div class="d-flex justify-content-between">
                        <h2>Total Cost</h2>
                        <h2>₹{{ calculateGrandTotal }}</h2>
                    </div> -->
                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="my-3">
                    <p class="m-0 fs-5 text-center">Enter Your Order Quantity</p>
                    <div class="table-responsive mt-4" id="scroll">
                        <table class="table border border-1" style="background-color: #f8f9fa;">
                            <thead>
                                <tr>
                                    <th scope="col">Qty</th>
                                    <th scope="col" v-for="(size, index) in list.sizes" :key="index">
                                        <div class="fw-bold d-flex flex-column align-items-center" style="">
                                            <p class="m-0">{{ size.name }}</p>
                                            <!-- <p class="m-0">₹{{ size.price }}</p> -->
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(color, colorindex) in list.colors" :key="colorindex">
                                    <td class="">
                                        <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                            style="width: 30px; height: 30px;" :style="'background-color:' + color.name">
                                        </div>
                                    </td>
                                    <td v-for="(size, sizeindex) in list.sizes" :key="sizeindex">
                                        <div>
                                            <input type="number" class="form-control text-center" style="width: 3rem;"
                                                placeholder="0" v-model="quantities[colorindex][sizeindex]">
                                        </div>
                                    </td>
                                </tr>
                                <!-- <tr scope="row">
                                    <th>Cost</th>
                                    <td class="text-center" v-for="(size, sizeindex) in list.sizes" :key="sizeindex">
                                        ₹{{ calculateTotal(sizeindex) }}
                                    </td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                    <!-- <div class="d-flex justify-content-between">
                        <h2>Total Cost</h2>
                        <h2>₹{{ calculateGrandTotal }}</h2>
                    </div> -->
                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script> 

export default {
    name: "CatalogDetails",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            quantities: [],
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
        },

        total() {
            let totalPrice = 0;
            for (let [index, size] of this.list.sizes.entries()) {
                totalPrice += size.price * this['quantity' + index];
            }

            return totalPrice;
        },
        calculateTotal() {
            return (sizeIndex) => {
                let totalPrice = 0;
                for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex] || 0;
                    const price = this.list.sizes[sizeIndex].price;
                    totalPrice += quantity * price;
                }
                return totalPrice;
            };
        },
        calculateGrandTotal() {
            let grandTotal = 0;
            for (let sizeIndex = 0; sizeIndex < this.list.sizes.length; sizeIndex++) {
                grandTotal += this.calculateTotal(sizeIndex);
            }
            return grandTotal;
        },
    },

    methods: {},
    created() {
        for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
            this.quantities[colorIndex] = [];
            for (let sizeIndex = 0; sizeIndex < this.list.sizes.length; sizeIndex++) {
                this.quantities[colorIndex][sizeIndex] = '';
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.accordion-button:not(.collapsed) {
    color: #fff;
    background-color: none;
    border-left: none;
}


.accordion {
    --bs-accordion-btn-focus-box-shadow: none;
    --bs-accordion-active-color: #ffffff;
    --bs-accordion-btn-icon-width: 1rem;

}

.accordion-button {
    background-color: #606C5D;
}

::-webkit-scrollbar {
    display: none;
}

textarea.form-control {
    min-height: calc(7.5em + 0.75rem + calc(var(--bs-border-width) * 2));
}
// .table th:first-child,
// .table td:first-child {
//   position: sticky;
//   left: 0;
//   background-color: #e8e8e8;
//   color: #373737;
// }

 
</style>