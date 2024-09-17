<template>
    <div>
        <h1 class="homePage">Home component</h1>  <!-- This is class style is below its working -->
        <h1 v-bind:style="{color:'red'}"> Style Binding With Object </h1>  <!-- This is style is its working like inline css -->
        <h1 v-bind:style="{color:colorKey}"> Style Binding With Object Replaced Direct Variable In Script</h1>  <!-- This is style is its working like inline css based on script components-->
        <h1 v-bind:class="{display:show}"> Class Binding With Object </h1>  <!-- This is style is its working like inline css based on script code if pass data as true then display otherwise no display css -->
        <h1 v-bind:class="[aClass]"> Class Binding With Array </h1>  <!-- This is style is its working like inline css based on script code if pass data as true then display otherwise no display css while pass array code -->
        <h1 v-bind:class="[show ? 'YesShow' : 'NoShow']"> Class Binding With Ternary Condition </h1>  <!-- using ternary condition   -->
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {
           show:true,
           aClass:'arrayClass',
           colorKey:"orange",
        }
    }
};
</script>
<style scoped>
.homePage{
    color:green;
}
.display{
    color:yellow;
    background-color:gray;
}
.arrayClass {
    background-color: cyan;
}
</style>