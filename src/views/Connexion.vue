<template>
  <div>
    <navbar :fixed="'bottom'"></navbar>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar";

export default {
  name: "Connexion",
  components: { Navbar }
};
</script>