<template>
    <div class="container" style="padding-bottom: 80px;">
        <ul class="nav nav-tabs d-flex justify-content-evenly my-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                    role="tab" aria-controls="home" aria-selected="true" >Quick</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="smart-tab" data-bs-toggle="tab" data-bs-target="#smart" type="button"
                    role="tab" aria-controls="smart" aria-selected="true" >Smart</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                    role="tab" aria-controls="profile" aria-selected="false"  >Regular</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                    role="tab" aria-controls="contact" aria-selected="false"  >Advance</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="my-3">
                    <p class="m-0 fs-5 text-center">Enter Your Order Quantity</p>
                    <div class="form-floating my-3">
                        <input type="number" class="form-control" id="floatingInput" v-model="quick">
                        <label for="floatingInput">Quantity</label>
                        <p class="text-muted m-0 mt-2" style="font-size: 12px;">* Total quantity will split in equal
                            propotion between all sizes and colors</p>
                        <div class="d-flex justify-content-between border container py-2 mb-3"
                            style="background-color: #e8e8e8;">
                            <p class=" mb-0">Actual Ordered Qty</p>
                            <p class=" fw-bold text-center mb-0">
                                {{ calculateRegularSizeTotal() }} pcs
                            </p>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="floatingPassword" v-model="expected">
                        <label for="floatingPassword">Select Expected Date of Delivery</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control as" v-model="comment" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Message</label>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <button class="btn btn-outline-primary w-100" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="smart" role="tabpanel" aria-labelledby="smart-tab">
                <div class="my-3">
                    <p class="m-0 fs-5 mt-3 mb-2">Selected Colors</p>
                    <div class="d-flex gap-2 mb-2">
                        <div v-for="(color, index) in list.colors" :key="index" class="color-selector"
                            @click="toggleColor(color)">
                            <img :src="color.name" class="rounded-circle me-2 p-1"
                                :style="{ border: color.isSelected ? '2px solid black' : 'none' }"
                                style="width: 45px; height: 45px; object-fit: cover;" alt="">
                        </div>
                    </div>
                    <!-- <p class="text-muted m-0" style="font-size: 12px;">* Selection  means you are adding all sizes to the Order</p> -->
                    <p class="text-muted m-0 mb-3" style="font-size: 12px;">* Deselection means you are removing all sizes
                        from the order</p>

                    <p class="m-0 fs-5 mt-1">Selected Sizes</p>
                    <div class="d-flex justify-content-between flex-wrap mx-2">
                        <div v-for="(size, index) in list.sizes " :key="index" @click="toggleSize(size)"
                            class="rounded my-2" style="width: 60px;"
                            :style="{ border: size.isSelected ? '2px solid black' : 'none' }">
                            <div class="text-center rounded   p-2 m-1 fw-bold  text-white"
                                style="background-color: #F48B29;" :for="'size' + index">
                                {{ size.name }}
                            </div>
                        </div>
                    </div>
                    <!-- <p class="text-muted m-0" style="font-size: 12px;">* Selection  means you are adding all colors to the Order</p> -->
                    <p class="text-muted m-0 mb-3" style="font-size: 12px;">* Deselection means you are removing all colors
                        from the order</p>

                    <div class="my-4">
                        <div class="form-floating mb-2">
                            <input type="number" class="form-control" id="floatingInput">
                            <label for="floatingInput">Order Quantity</label>
                        </div>
                        <p class="text-muted m-0 mb-4" style="font-size: 12px;">* Total quantity will split in equal
                            propotion between all sizes and colors</p>
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="floatingPassword" v-model="expected">
                            <label for="floatingPassword">Select Expected Date of Delivery</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control as" v-model="comment" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
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
                                    <th class="text-center" scope="col">
                                        <span class="fw-normal">SKU</span>{{ skuCount }}
                                    </th>
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
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div class="d-flex justify-content-between border container py-2 mb-3"
                        style="background-color: #e8e8e8;">
                        <p class=" mb-0">Total Ordering Quantity</p>
                        <p class=" fw-bold text-center mb-0">
                            {{ calculateRegularSizeTotal() }} pcs
                        </p>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="floatingPassword" placeholder="Expected Date"
                            v-model="expected">
                        <label for="floatingPassword">Select Expected Date of Delivery</label>
                    </div>

                    <div class="form-floating mb-3">
                        <textarea class="form-control as" v-model="comment" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Message</label>
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
                                    <th class="text-center" scope="col"><span class="fw-normal">SKU</span>{{ skuCount }}</th>
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
                                        <div class="">

                                            <input type="number" class="form-control text-center px-0" style="width: 3rem;"
                                                v-model="advance[`${colorindex}_${sizeIndex}`]">
                                        </div>
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
                        <label for="floatingPassword">Select Expected Date of Delivery</label>
                    </div>

                    <div class="form-floating mb-3">
                        <textarea class="form-control as" v-model="comment" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Message</label>
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
            quick: "",
            expected: "",
            comment: "",
        };
    },
    computed: {
        list() {
            let listId = this.$route.params.listId;
            return this.$store.getters.getList(listId);
        },
        skuCount() {
            return this.list.colors.length * this.list.sizes.length;
        },
    },
    watch: {
        quick(value) {
            this.calculateRegularAndAdvance(value);
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
            console.log(this.advance);
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
            Object.entries(this.list.sizes).forEach((size, sizeIndex) => {
                total += this.regular[`0_${sizeIndex}`];
            });
            return total;
        },
        calculateQuickSizeTotal() {
            let total = 0;
            Object.entries(this.list.sizes).forEach((size, sizeIndex) => {
                total += this.regular[`0_${sizeIndex}`];
                for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
                    this.advance[`${colorIndex}_${sizeIndex}`] = Math.round(this.regular[`0_${sizeIndex}`]);
                }
            });
            return total;
        },
        calculateRegularAndAdvance(value) {
            let dividedValueBySizes = value / this.list.sizes.length;
            let dividedValueByColorAndSizes = value / (this.list.sizes.length * this.list.colors.length);
            Object.entries(this.list.sizes).forEach((size, sizeIndex) => {
                this.regular[`0_${sizeIndex}`] = Math.round(dividedValueBySizes);
                for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
                    this.advance[`${colorIndex}_${sizeIndex}`] = Math.round(dividedValueByColorAndSizes);
                }
            });
        },
    },
    created() {
        for (let colorIndex = 0; colorIndex < this.list.colors.length; colorIndex++) {
            for (let sizeIndex = 0; sizeIndex < this.list.sizes.length; sizeIndex++) {
                this.advance[`${colorIndex}_${sizeIndex}`] = "";
                this.regular[`0_${sizeIndex}`] = "";
            }
        }
    },
};

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

.nav-link {
    color:#F48B29;
}</style>