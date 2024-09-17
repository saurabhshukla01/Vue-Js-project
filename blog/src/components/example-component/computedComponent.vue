<template>
    <div>
        <h5>Computed Component</h5>
        <!-- Using direct logic in the template (this can affect performance for complex calculations) -->
        <p>Logic is Dollar to rupee conversation less discount :  {{ (Dollar * rupeeVal) - discount  }}</p>

        <!-- Using computed property for better performance -->
        <p> Computed Property Result not need to small Brackets: {{ getResult }}</p>

        <!-- Using method property but computed property is better performance to method  -->
        <p> Method Property Result need to small Brackets: {{ getResultMethod() }}</p>
    </div>
</template>

<script>
export default {
    name: "computedComponent",
    data() {
        return {
            Dollar: 100,
            rupeeVal: 83.90,
            discount: 30,
        };
    },
    methods: {
        // method property to calculate the result
        getResultMethod() {
            return (this.Dollar * this.rupeeVal) - this.discount;
        }
    },
    computed: {
        // Computed property to calculate the result
        getResult() {
            return (this.Dollar * this.rupeeVal) - this.discount;
        }
    }
}
</script>
