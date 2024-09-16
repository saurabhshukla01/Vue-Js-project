<template>
    <div>
        <h3>Slots Components</h3>
        <!-- default slot pass -->
        <SlotsChild></SlotsChild>
        <SlotsChild><h4>Pass H4 tag in slot value using slot tag</h4></SlotsChild>
         <!-- href pass slot pass -->
        <SlotsChild><a href="#google">Google</a></SlotsChild>
        <!-- image pass slot pass -->
        <SlotsChild><img src="https://via.placeholder.com/600/92c952" /></SlotsChild>
        <!-- el ( html code ) pass slot pass -->
        <SlotsChild><p>Pass paragraph</p></SlotsChild>
    </div>
</template>
<script>
import SlotsChild from './SlotsChild.vue';
export default {
    name:"SlotsComponents",
    components:{
        SlotsChild,
    }
}
</script>