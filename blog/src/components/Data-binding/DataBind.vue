<template>
    <div>
        <h1>Data Binding in Vue Js</h1>
        <!-- for single line read -->
        <h5>Single Line Bonding in Vue Js</h5>
        <p>{{ message }}</p>
        <input name="message" type="text" v-model="message">
        <!-- for multiple line read -->
        <h5>Multi Line Bonding in Vue Js</h5>
        <p style="white-space: pre-line">{{ multiMessage }}</p>
        <textarea name="multiMessage" type="text" v-model="multiMessage"></textarea>
    </div>
</template>
<script>
export default {
    name:'DataBind',
    data(){
        return {
            message:"Hi Saurabh How are you !!",
            multiMessage:"Hi How you are",
        }
    }
}
</script>