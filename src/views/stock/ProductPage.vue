<template>
  <!-- <ProductTopnav></ProductTopnav> -->
  <div class="">
    <div class="container " style="padding-bottom:80px">
      <div class="row">
        <div class="col-lg-5 d-flex prod-img px-0">
          <div class="d-flex flex-column prod-thumb" id="scroll">
            <img class="" :src="`${publicPath}${image}`" style="width: 60px" v-for="(image, index) in product.images"
              :key="index" v-on:click="selectImage(image)" />
          </div>
          <div class="main-img">
            <img :src="`${publicPath}${selectedImage}`" class="flex-fill"
              style="width: 100%; height: 280px; object-fit: fill;" />
          </div>
        </div>
        <div class="container col-lg-7 px-3">
          <h1 class=" text-start mb-2 fs-5 py-1 text-dark text-muted">
            {{ product.name }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis
          </h1>
          <h1 class=" text-start mb-2 fs-5 py-1 text-muted fw-bold">
            {{ product.info }}
          </h1>
          <div class="">
            <div class=" w-100 d-flex  me-0">
              <div class="col-12 text-start d-flex align-items-center justify-content-between">
                <div>
                  <span class="me-2 text-dark fw-bold fs-1">₹ {{ product.price }} / mtr</span>
                </div>
                <div>
                  <p class="fw-bold m-0">Wholesale Price</p>
                  <p class="fw-bold m-0">with {{ product.moq }}mtr MOQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      <!-- ------------------------ -->
      <div class="mt-3">
        <p class="fs-5 p-2 border d-block  m-0 text-white" style="background-color: #F48B29;">Fabric Details
        </p>
        <div class="d-flex w-100 container border border-1 rounded-0">
          <div class="row g-0 mt-2 w-100">
            <div class="col-6" v-for="(a, index) in details" :key="index">
              <h6>{{ a.name }}:</h6>
              <p style="color:grey">{{ a.value }}</p>
            </div>
          </div>
        </div>

      </div>
      <!-- ------------------------ -->
      <div class="mt-3">
        <p class="fs-5 p-2 border d-block border-1 m-0 text-white" style="background-color: #F48B29;">
          Attributes</p>
        <div class="d-flex w-100 container border border-1 border-bottom-0">
          <div class="row g-0 mt-2 w-100">
            <div class="col-6" v-for="(a, index) in atts" :key="index">
              <h6 class="">{{ a.name }}:</h6>
              <p style="color:grey">{{ a.value }}</p>
            </div>
          </div>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item rounded-0 border-top-0">
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
              <div class="accordion-body p-0">
                <div class="d-flex w-100 container">
                  <div class="row g-0 mt-2 w-100">
                    <div class="col-6" v-for="(at, index) in atts2" :key="index">
                      <h6>{{ at.name }}:</h6>
                      <p style="color:grey">{{ at.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="accordion-header">
              <button class="accordion-button border border-end-0 border-bottom-0 border-start-0  collapsed rounded-0 "
                type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Know More
              </button>
            </h2>
          </div>
        </div>
      </div>
      <!-- ------------------------- -->


    </div>


  </div>
</template>

<script>
// import ProductTopnav from './ProductTopnav.vue';



export default {
  name: "ProductPage",
  // components: {
  //   ProductTopnav,
  // },
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      selectedImage: {},
      quantity: 0,
      activeSize: {},
      atts: [
        {
          name: "Occasion",
          value: "asdf"
        },
        {
          name: "Chest Pad",
          value: "123"
        },
        {
          name: "Neckline",
          value: "234"
        },
        {
          name: "Pattern",
          value: "Chesee"
        },
      ],
      atts2: [
        {
          name: "Trim",
          value: "Jagsd"
        },
        {
          name: "Length",
          value: "60"
        },
        {
          name: "Trim",
          value: "Jagsd"
        },
        {
          name: "Length",
          value: "60"
        },
      ],
      details: [
        {
          name: "Select Fabric",
          value: "Cotton"
        },
        {
          name: "Pana (Inch)",
          value: "400"
        },
        {
          name: "FC/ Unit",
          value: "200"
        },
        {
          name: "Unit",
          value: "60"
        },
      ],
    };
  },
  mounted() {
    this.selectedImage = this.product.images[0];
  },
  computed: {
    product() {
      let productId = this.$route.params.productId;
      return this.$store.getters.getProduct(productId);
    }
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
    },
    increment() {
      this.quantity = parseInt(this.quantity) + parseInt(this.product.moq);
    },
    decrement() {
      if (this.quantity > this.product.moq) {
        this.quantity = this.quantity - this.product.moq;
      }
    },
    addToCart() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: this.quantity
      });
    },
    makeActiveSize(size) {
      this.activeSize = size;
    },
    goBack() {
      window.history.back();
    }
  },

};
</script>


<style scoped>
.accordion {
  --bs-accordion-active-bg: none;
  --bs-accordion-btn-focus-box-shadow: none;
  --bs-accordion-active-color: none;
}

@media (max-width:999px) {
  .prod-img {
    display: flex;
    flex-direction: column-reverse;
  }

  .prod-thumb {
    flex-direction: row !important;
    gap: 1rem;
    margin: 1rem 2rem 1rem 2rem;
    overflow: scroll;
  }

  .main-img {
    width: 100%;
    /* padding-right: 12px !important; */
    margin-right: 0.5rem !important;
  }
}

#scroll::-webkit-scrollbar {
  background-color: none;
  display: none;
}

.nav-bottom.justify-content-evenly {
  display: none !important;
}

/* nav.navbar.fixed-bottom.navbar-light.bg-light {
    display: none !important;
} */
</style>