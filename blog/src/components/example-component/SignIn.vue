<template>
    <div>
        <ChildProps :name="name" data="Some Props data" id="non-props-data" />
        <!--  id="non-props-data"  this is non props data because i am not define in child as props object like data or something so its is non props data ( but one thing if i use non props then child have one element tag inside all tags are present then its works )-->
        <!--  data="Some Props data"  this is props data because i am define in child as props object like data as String then its works as a props -->
    <input type="text" name="name" v-model="name"/>
    </div>
</template>
<script>
import ChildProps from './ChildProps.vue';

export default {
    name:"SingIn",
    components:{
        ChildProps
    },
    data(){
        return {
            name:null,
        }
    }
}
</script>