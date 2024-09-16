<template>
    <div>
        <!-- how to pass default value in slots -->
        <slot>Default Slots</slot>
        <!-- how to pass all value pass from data components using child components -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"SlotsChild",
}
</script>