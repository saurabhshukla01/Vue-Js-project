<template>
    <div>
        <h2>Component</h2>
        <p>This is the inside of the component.</p>
        <Teleport to="body">
          <div id="redDiv">Hello!</div>
        </Teleport>
    </div>
</template>

<script></script>

<style scoped>
  #redDiv {
    background-color: lightcoral;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
</style>                  