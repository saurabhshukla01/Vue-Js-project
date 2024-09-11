<template>
    <div>
    
        <h3 v-if="show">Conditional rendering in vue.js if block is showed</h3>
    
        <h3 v-else>Conditional rendering in vue.js else block is showed</h3>
    
        <button @click="display()">Toggle button</button>
    
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: {
        data: String,
        msg: String
    },
    data() {
        return { show: true };
    },
    methods: {
        display() {
            this.show = !this.show; // reverse if hide then show , if show then hide
        }
    }
};
</script>
