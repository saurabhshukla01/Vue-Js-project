<template>
    <div class="BodyColor">
        <h1 class="homePage">Home component</h1>
        <p v-html="rowHtml"></p>
        <h2 v-once>{{ name }}</h2>
        <h2 v-bind:style="{color:'blue'}">{{ name }}</h2>
        <h3>{{ a+b }}</h3>
        <h3 v-bind:style="{color:'orange'}">{{ ok ? "Yes" : "No" }}</h3>
        <div>
            <button v-on:click="updateText" class="btnClass1">Click me</button>
            <button v-bind:disabled="disabledBtn" class="btnClass2">Disabled Button</button>
        </div>
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
.homePage{
    color:green;
}
.BodyColor{
    background-color: yellow;
    margin: 10px;
    padding: 10px;
}
.btnClass1{
    color:white;
    background-color:blue;
    margin:5px;
    padding: 5px;
}
.btnClass2{
    color:yellow;
    background-color:gray;
    margin:5px;
    padding: 5px;
}
</style>