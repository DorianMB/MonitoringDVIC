<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="homepage">
      <p class="mar-t-8">Vous etes connectés</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "ConnectedHome",
  components: { Navbar },
  data: () => {
    return {
      currentUser: JSON.parse(localStorage.currentUser)
    };
  }
}
</script>

<style scoped lang="scss">
 .homepage {

 }
</style>