<template>
  <div class="sidebar">
    <ul>
      <li @click="menuClick('ComponentA')">组件A</li>
      <li @click="menuClick('ComponentB')">组件B</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    menuClick(component) {
      this.$emit('menu-click', component);
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 10px;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar li {
  cursor: pointer;
  padding: 10px;
  margin: 5px 0;
  background-color: #e0e0e0;
  text-align: center;
}
.sidebar li:hover {
  background-color: #d0d0d0;
}
</style>
