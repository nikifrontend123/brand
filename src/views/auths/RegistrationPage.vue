<template>
    <div class="px-4" style="padding-top: 20px;">
        <div class="d-flex justify-content-center ">
                <div class="rounded-5 d-flex justify-content-center align-items-center"
                    style="height: 130px; width: 130px; background: linear-gradient(113deg, #F48B29 31%, #FFB740 97%);">
                    <img :src="`${publicPath}${logo}`" style="width: 75%; object-fit: contain; filter: brightness(30);">
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <p class="mt-2 m-0 fw-bold icon">Metro Fashion</p>
                 
            </div>
        <div class="text-center mt-4">
            <p class="fs-5">Register Your Account </p>
        </div>
        <div class="inputss ">

            <div class="w-100 p-2 form-floating container">
                <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="name">
                <label for="floatingInput" class="text-muted">Enter your Name</label>
            </div>
            <div class="w-100 p-2 form-floating container">
                <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="email">
                <label for="floatingInput" class="text-muted">Enter your Email</label>
            </div>
            <div class="w-100 p-2 form-floating container">
                <input type="password" class="form-control" id="floatingInput" placeholder="Email" v-model="password">
                <label for="floatingInput" class="text-muted">Password</label>
            </div>
            <div class="w-100 p-2 form-floating container">
                <input type="password" class="form-control" id="floatingInput" placeholder="Email"
                    v-model="confirmPassword">
                <label for="floatingInput" class="text-muted">Confirm Password</label>
            </div>


            <div class="p-2">
                <router-link to="/email-verification-page">
                    <button class="btn btn-light text-dark w-100 fs-5"
                        style="padding: 10px 12px;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">Submit</button>
                </router-link>
            </div>
        </div>

        <div class="text-center mt-2">
            <span>By creating an account or logging in, you agree to DeshiGirl <span style="cursor: pointer;"
                    class="text-primary">Terms & Conditions</span> and <span style="cursor: pointer;"
                    class="text-primary">Privacy
                    policy</span> </span>
        </div>

        <div class="d-flex justify-content-center mt-4 p-2">
            <router-link to="/login-page" class="w-100 rounded"
                style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                <button class="btn text-white w-100 fs-5" style="background: linear-gradient(113deg, #F48B29 31%, #FFB740 97%);padding: 13px 12px !important;">
                    Click here for Login
                </button>
            </router-link>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            logo: "images/logo.png",
            publicPath: process.env.BASE_URL,
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },

}
</script>
<style scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
    background: -webkit-linear-gradient(#F48B29, #FFB740);
    background-clip: text;
    -webkit-text-fill-color: transparent
}
</style>