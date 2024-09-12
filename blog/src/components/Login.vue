<template>
    <div>
        <h3>Login Page</h3>
        <input v-model="loginForm.username" type="text" id="username" name="username" placeholder="Enter UserName"/><br/><br/>
        <input v-model="loginForm.password" type="password" id="password" name="password" placeholder="Enter Password"/><br/><br/>
        <button @click="loginData">Login</button>
    </div>
</template>
<script>
export default {
    name:"LoginPage",
    methods:{
        loginData(){
            console.log("loginData",this.loginForm.username,this.loginForm.password);
        }
    },data(){
        return {
            loginForm:{
                username:null,
                password:null
            }
        }
    }
}
</script>