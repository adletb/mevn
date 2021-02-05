<template>
  <div id="app">
    <div id="nav">
       <router-link to="/">Home</router-link> |
        <router-link to="/todo-list">TodoList</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
#nav {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
}

.icon {
  cursor: pointer;
}
</style>
