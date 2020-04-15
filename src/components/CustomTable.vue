<template>
  <div class="card-layout p-0 border-radius-0">
    <table class="table m-0">
      <thead class="thead-primary">
      <tr>
        <th scope="col" v-for="(col, key) in settings.column" :key="key">{{col.title}}</th>
        <th scope="col" v-if="settings.actions">actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in values" :key="index">
        <td scope="row" v-for="(col, key) in settings.column" :key="key">{{col.hasOwnProperty('valuePrepareFunction') ? col.valuePrepareFunction(item) : item[key]}}</td>
        <td scope="row" v-if="settings.actions">
          <button class="btn btn-secondary" v-for="(action, name) in settings.actions" :key="name" v-on:click="action.prepareFunction(item)">{{action.icon}}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CustomTable",
  props: {
    settings: Object,
    values: Array
  },
  beforeMount() {
    console.log(this.settings, this.values);
  }
}
</script>

<style scoped lang="scss">

</style>