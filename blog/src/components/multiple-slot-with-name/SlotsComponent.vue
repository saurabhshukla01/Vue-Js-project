<template>
    <div class="card_1">
       <SlotsChild>
          <template v-slot:header>
             <h4>Saurabh Shukla</h4>
          </template>
          <template v-slot:main>
             <p>
                This is main content for you !!
             </p>
          </template>
          <template v-slot:footer>
             <h6>
                @copyright for 2024
             </h6>
          </template>
       </SlotsChild>
    </div>
    <div class="card_2">
       <SlotsChild>
          <template v-slot:header>
             <h4>
                Vijay Shukla
             </h4>
          </template>
          <template v-slot:main>
             <p>
                This is main content for vijay !!
             </p>
          </template>
          <template v-slot:footer>
             <h6>
                @copyright for 2024
             </h6>
          </template>
       </SlotsChild>
    </div>
 </template>
 <script>
    import SlotsChild from './SlotsChild.vue';
    export default {
        name: "SlotsComponents",
        components: {
            SlotsChild,
        }
    }
 </script>
<style scoped>
.card_1{
    padding: 10px;
    background: blue;
    color: white;
    width: 300px;
    height: 150px;
    align-content: center;
}
.card_2{
    padding: 10px;
    background: skyblue;
    color: blue;
    width: 300px;
    height: 150px;
    align-content: center;
}
</style>