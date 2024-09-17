<template>
    <div>
        <header>
        <slot name="header"></slot>
        </header>
        <content>
        <slot name="main"></slot>
        </content>
        <footer>
        <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    name:"SlotsChild",
}
</script>