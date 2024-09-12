<template>
    <div>
        <h5>This is child component</h5>
    </div>
</template>

<script>
export default {
    name:"ChildPage",
    methods: {

    },
    data(){
        return {}
    },
    beforeCreate:function(){
        console.log("beforeCreate");
    },
    beforeMount:function(){
        console.log("beforeMount");
    },
    mounted:function(){
        console.log("mounted");
    },
    created:function(){
        console.log("created");
    }
};
</script>