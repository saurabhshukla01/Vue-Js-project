<template>
    <div>
        <h1 class="homePage">Home component</h1>  <!-- This is class style is below its working -->
        <h1 v-bind:style="{color:'red'}"> Style Binding With Object </h1>  <!-- This is style is its working like inline css -->
        <h1 v-bind:class="{display:show}"> Class Binding With Object </h1>  <!-- This is style is its working like inline css based on script code if pass data as true then display otherwise no display css -->
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {
           show:true
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
</style>