<template>
    <div>

        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            Button with data-bs-target
        </button>

        <div class="offcanvas offcanvas-bottom h-75 show" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-2">
                <div class="row g-2">
                    <div class="col-6 card rounded-0">
                        <img src="https://img101.urbanic.com/v1/goods-pic/44fee475e95342e19f1a0157ba40b9b3UR_w1440_q90.webp"
                            alt="">
                            <div class="d-flex justify-content-between px-1">
                                <span>{{ item.option }} | {{ item.range }}</span>
                                <span>{{ item.quantity }}</span>
                            </div>
                        <!-- <span class="text-center flex-fill text-capitalize">Black</span> -->
                        <!-- <div>
                            <span class="fw-bold">Size Name: </span>
                            <span class="ps-2">Free Size</span>
                        </div>
                        <div>
                            <span class="fw-bold">Quantity :</span>
                            <span class="ps-2">5</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>