<template>
    <h1>
    
        Hello from Home Component</h1>
    
    <h2>{{ data }}</h2>
    
    <h3>{{ msg }}</h3>
    
    <button @click="hello('Hello function called in vue 3')">Call Hello Function On Vue 3</button>
    
    <!-- this is syntax for vue 3  -->
    
    <button v-on:click="hello('Hello function called in vue 2')">Call Hello Function On Vue 2</button>
    
    <!-- this is syntax for vue 2  -->
</template>

<script>
export default {
    name: 'HomePage',
    props: {
        data: String,
        msg: String
    },
    methods: {
        hello(anyData) {
            console.log("hello console called");
            alert(anyData)
        }
    }
};
</script>
