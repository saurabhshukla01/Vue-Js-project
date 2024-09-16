<template>
    <div>
        <h2>Watchers</h2>
        <h4>{{ count }}</h4>
        <button @click="count=count+1">+</button>
        <button @click="count=count-1">-</button>
    </div>
</template>
<script>
export default {
    name:"watchersComponents",
    data(){
        return {
            count:0
        }
    },
    watch:{
        count(val,prev){    // have 2 value first value & old value
            if(val>5 && val>prev){
                // when this value goes up to 5 then its reset value 0
                this.count=0;
                alert("stop counting");
            }
        }
    }
}
</script>