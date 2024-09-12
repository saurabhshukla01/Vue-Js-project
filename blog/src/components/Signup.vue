<template>
    <div>
        <h3>Create SingUp From</h3>
        <input type="text" name="username" id="username" placeholder="Enter Your Name" v-model="singup.username"/> <br/><br/>
        <input type="password" name="password" id="password" placeholder="Enter Your Password" v-model="singup.password"/> <br/><br/>
        <p>Choose Hobbies</p>
        <input type="checkbox" id="cricket" value="cricket" v-model="singup.hobbies"/> 
        <label for="cricket">Cricket</label>
        <input type="checkbox" id="football" value="football" v-model="singup.hobbies"/> 
        <label for="cricket">FootBall</label><br/><br/>
        <p>Select Gender</p>
        <input type="radio" name="gender" id="male" value="male" v-model="singup.gender"/> 
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" v-model="singup.gender"/> 
        <label for="female">Female</label>
        <br/><br/>
        <button @click="singupUser">Submit</button>
    </div>
</template>
<script>
export default {
    name:"SingUpPage",
    data(){
        return{
            singup : {
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        singupUser()
        {
            console.log(this.singup)
        }
    }
}
</script>