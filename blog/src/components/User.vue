<template>
    <div>
        <h2>User View Page</h2>
        <h4>User Id is: {{ userId }}</h4>
    </div>
</template>

<script>
export default {
    name: "userPage",
    data() {
        return {
            userId: this.$route.params.id // Corrected from param to params
        };
    }
}
</script>
