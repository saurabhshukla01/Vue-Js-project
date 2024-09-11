<template>
    <div>
        <h1>Home component</h1>
        <Users />
        <Products />
    </div>
</template>

<script>
import Users from './Users.vue';
import Products from './Products.vue';
export default {
    name: 'HomePage',
    components: {
        Users,
        Products
    }
};
</script>
<style scoped>
div{
    background-color: #dde5ec;
    height: 500px;
}
</style>