<template>
    <div>
        <h1>Home component</h1>
        <p v-html="rowHtml"></p>
        <h2 v-once>{{ name }}</h2>
        <h2>{{ name }}</h2>
        <h3>{{ a+b }}</h3>
        <h3>{{ ok ? "Yes" : "No" }}</h3>
        <button v-on:click="updateText">Click me</button>
        <button v-bind:disabled="disabledBtn">Disabled Button</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {
            name:"Saurabh",
            a:10,
            b:20,
            ok:true,
            rowHtml:"<h2>Html render using function name</h2>",
            disabledBtn:true
        }
    },
    methods : {
        updateText(){
            this.name="Rishabh",
            this.ok=!this.ok
        }
    }
};
</script>
<style scoped>
div{
    background-color: #dde5ec;
    height: 500px;
}
</style>