<template>
    <div>
        <div class="d-flex justify-content-between px-2 py-1 border" style="background-color: #F48B29;">
            <div class="right" style="font-weight: 500;">
                    <p class="m-0 py-2 ps-2 text-white">Brand App</p>
            </div>
            <div class="left d-flex align-items-center">
                <i class="bi bi-list fs-5 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"></i>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Menu</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="">
                        <ul class="list-group rounded-0">
                            <RouterLink to="/login-page" class="text-decoration-none text-dark">
                                <p>Login / SignUp</p>
                            </RouterLink>
                            <RouterLink to="/detail" class="text-decoration-none text-dark">
                                <p>Profile / Account</p>
                            </RouterLink>
                            <button class="btn btn-outline-primary m-2 mt-3">Log Out</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav'
}
</script>

<style lang="scss" scoped></style>