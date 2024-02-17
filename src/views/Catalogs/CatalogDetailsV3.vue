<template>
    <div class="container" style="padding-bottom: 80px;">
        <ul class="nav nav-tabs d-flex justify-content-evenly my-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                    role="tab" aria-controls="home" aria-selected="true">Quick</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="smart-tab" data-bs-toggle="tab" data-bs-target="#smart" type="button"
                    role="tab" aria-controls="smart" aria-selected="true">Smart</button>
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
                        <input type="number" class="form-control" id="floatingInput" placeholder="Quantity" v-model="quick">
                        <label for="floatingInput">Quantity</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="floatingPassword" placeholder="Expected Date"
                            v-model="expected">
                        <label for="floatingPassword">Expected Date</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control as" placeholder="Leave a comment here" v-model="comment"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="smart" role="tabpanel" aria-labelledby="smart-tab">
                <div class="my-3">
                    <h3>Color Selector</h3>
                    <div class="d-flex gap-2">
                        <div v-for="(color, index) in list.colors" :key="index" class="color-selector"
                            @click="toggleColor(color)">
                            <img :src="color.name" class="rounded-circle me-2 p-1"
                                :style="{ border: color.isSelected ? '2px solid black' : 'none' }"
                                style="width: 45px; height: 45px; object-fit: cover;" alt="">
                        </div>
                    </div>

                    <h3 class="mt-3">Size Selector</h3>
                    <div class="d-flex justify-content-center flex-wrap">
                        <div v-for="(size, index) in list.sizes " :key="index" class="btn-group col" role="group"
                            aria-label="Basic checkbox toggle button group">
                            <div @click="toggleSize(size)" class="bg-primary text-center rounded p-2 fw-bold m-1 text-white"
                                style="width: 50px;" :style="{ border: size.isSelected ? '2px solid black' : 'none' }"
                                :for="'size' + index">{{ size.name }}</div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingPassword" placeholder="Expected Date"
                                v-model="expected">
                            <label for="floatingPassword">Expected Date</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="quantity">
                            <label for="floatingInput">Order Quantity</label>
                        </div>
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
                                <tr style="line-height: 45px;">
                                    <th class="text-center" scope="col">Qty</th>
                                    <th scope="col" v-for="(headSize, headSizeIndex) in list.sizes"
                                        :key="'head-size-' + headSizeIndex">
                                        <div class="fw-bold d-flex flex-column align-items-center">
                                            <p class="m-0">{{ headSize.name }}</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(color, colorindex) in list.colors" :key="'color-' + colorindex"
                                    v-show="colorindex === 0">
                                    <td class="">
                                        <div
                                            class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex">
                                            All</div>
                                    </td>
                                    <td class="py-3" v-for="(size, sizeIndex) in list.sizes" :key="'size-' + sizeIndex">
                                        <input type="number" class="form-control text-center" style="width: 3rem;"
                                            v-model="regular[`0_${sizeIndex}`]">
                                    </td>
                                    <td class="text-center">
                                        ₹{{ calculateRegularSizeTotal() }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="floatingPassword" placeholder="Expected Date"
                            v-model="expected">
                        <label for="floatingPassword">Expected Date</label>
                    </div>

                    <div class="form-floating mb-3">
                        <textarea class="form-control as" placeholder="Leave a comment here" v-model="comment"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>

                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="button" @click="regularSubmit()">Submit</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="my-3">
                    <p class="m-0 fs-5 text-center">Enter Your Order Quantity</p>
                    <div class="table-responsive mt-4" id="scroll">
                        <table class="table border border-1" style="background-color: #f8f9fa;">
                            <thead>
                                <tr style="line-height: 45px;">
                                    <th class="text-center" scope="col">Qty</th>
                                    <th scope="col" v-for="(headSize, headSizeIndex) in list.sizes"
                                        :key="'head-size-' + headSizeIndex">
                                        <div class="fw-bold d-flex flex-column align-items-center">
                                            <p class="m-0">{{ headSize.name }}</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(color, colorindex) in list.colors" :key="'color-' + colorindex">
                                    <td class="">
                                        <img :src="color.name" class="rounded-circle me-2"
                                            style="width: 38px; height: 38px; object-fit: cover;" alt="">
                                        <!-- <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                            style="width: 38px; height: 38px;" :style="'background-color:' + color.name">
                                        </div> -->
                                    </td>
                                    <td class="" v-for="(size, sizeIndex) in list.sizes" :key="'size-' + sizeIndex">
                                        <input type="number" class="form-control text-center" style="width: 3rem;"
                                            v-model="advance[`${colorindex}_${sizeIndex}`]">
                                    </td>
                                </tr>
                                <tr scope="row">
                                    <th>Total</th>
                                    <td class="text-center" v-for="(footSize, footSizeindex) in list.sizes"
                                        :key="'foot-size-' + footSizeindex">
                                        {{ calculateAdvanceSizeTotal(footSizeindex) }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="floatingPassword" placeholder="Expected Date"
                            v-model="expected">
                        <label for="floatingPassword">Expected Date</label>
                    </div>

                    <div class="form-floating mb-3">
                        <textarea class="form-control as" placeholder="Leave a comment here" v-model="comment"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>

                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="button" @click="advanceSubmit()">Submit</button>
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
            advance: [],
            regular: [],
            quick: '',
            expected: '',
            comment: '',

        }
    },
    computed: {
        list() {
            let listId = this.$route.params.listId;
            return this.$store.getters.getList(listId);
        },

    },
    methods: {
        toggleColor(color) {
            color.isSelected = !color.isSelected;
        },
        toggleSize(size) {
            size.isSelected = !size.isSelected;
        },
        advanceSubmit() {
            console.log(this.advance)
        },
        calculateAdvanceSizeTotal(footSizeindex) {
            let total = 0;
            Object.entries(this.list.sizes).forEach((size, sizeIndex) => {
                if (footSizeindex === sizeIndex) {
                    Object.entries(this.list.colors).forEach((color, colorIndex) => {
                        total += this.advance[`${colorIndex}_${sizeIndex}`];
                    });
                }
            });
            return total;
        },
        calculateRegularSizeTotal() {
            let total = 0;

            // Regular
            Object.entries(this.list.sizes).forEach((size, sizeIndex) => {
                total += this.regular[`0_${sizeIndex}`];

                // Advance
                // for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
                //     this.advance[`${colorIndex}_${sizeIndex}`] = this.regular[`0_${sizeIndex}`];
                // }
            });
            return total;
        },
        calculateQuickSizeTotal() {
            let total = 0;

            // Regular
            Object.entries(this.list.sizes).forEach((size, sizeIndex) => {
                total += this.regular[`0_${sizeIndex}`];

                // Advance
                for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
                    this.advance[`${colorIndex}_${sizeIndex}`] = this.regular[`0_${sizeIndex}`];
                }


            });
            return total;
        },

    },
    created() {
        for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
            for (let sizeIndex = 0; sizeIndex < this.list.sizes.length; sizeIndex++) {
                this.advance[`${colorIndex}_${sizeIndex}`] = '';
                this.regular[`0_${sizeIndex}`] = '';
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.accordion-button:not(.collapsed) {
    color: #fff;
    // color: #ebe8e8;
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

.table th:first-child,
.table td:first-child {
    position: sticky;
    left: 0;
    background-color: #e8e8e8;
    //   color: #373737;
}

.color-selector input[type="checkbox"] {
    display: none;
}

.color-selector input[type="checkbox"]:checked+label {
    border: 2px solid #000000;
}
</style>