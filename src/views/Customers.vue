<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="customers">
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Customers",
  components: { Navbar },
  data: () => {
    return {
      currentUser: JSON.parse(localStorage.currentUser)
    };
  }
};
</script>

<style scoped lang="scss">
  .customers {
    width: 100vw;
    height: 100vh;
  }
</style>