<template>
    <div>
        <h4 ref="count">{{ counter }}</h4>
        <button @click="counter=counter+1">Update Count</button>
    </div>
</template>
<script>
export default {
    name:"beforeUpdateAndUpdated",
    data(){
        return{
            counter:0,
        }
    },
    beforeUpdate(){
        console.log("beforeUpdate",this.$refs['count'].textContent)   // get data from UI
    },
    updated(){
        console.log("Updated",this.$refs['count'].textContent)
    }
}
</script>