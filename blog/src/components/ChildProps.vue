<template>
    <!-- <div>
        <p>John</p>
        <p>Mohan</p>
        <p>Vivek</p>
        <p>{{ data }}</p>
    </div> -->

    <!--  if i remove div here then we can you attar form single tag value like wise -->
    <p v-bind="$attrs">John</p>
    <!--  if access non props data if parent div not i have then we can use attributes -->
    <p>Mohan</p>
    <p>Vivek</p>
    <p>{{ data }}</p>
</template>
<script>
export default {
    name:"ChildProps",
    props:{
        data:String
    }
}
</script>