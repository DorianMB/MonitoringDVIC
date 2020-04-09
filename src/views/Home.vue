<template>
  <div>
    <navbar :fixed="'top'"></navbar>
    <div class="home"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar";

export default {
  name: "Home",
  components: { Navbar },
  data: () => {
    return {
      height: window.innerHeight
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("d-none");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const navbar = document.getElementById("navbar");

      if (event.path[1].pageYOffset >= this.height) {
        navbar.classList.remove("d-none");
      } else {
        navbar.classList.add("d-none");
      }
    }
  }
};
</script>

<style scoped>
.home {
  height: 3000px;
  background: url("../assets/images/bg-top-home.png") no-repeat top center,
  url("../assets/images/bg-bottom-home.png") no-repeat bottom center;
  background-size: contain;

}
</style>
