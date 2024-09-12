<template>
    <div>
        <h3>Login Page</h3>
        <p v-if="error.length">
            <b>Please correct following errors</b>
            <ul>
                <li v-for="em in error" :key="em.id">
                    {{ em }}
                </li>
            </ul>
        </p>
        <form @submit="login">
            <input v-model="name" type="text" id="name" name="name" placeholder="Enter UserName"/><br/><br/>
            <input v-model="password" type="password" id="password" name="password" placeholder="Enter Password"/><br/><br/>
            <button @click="loginData">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"LoginPage",
    data(){
        return{
            error:[],
            name:null,
            password:null
        }
    },
    methods:{
        login(e){
            this.error=[];
            if(this.name && this.password){
                console.log("no error");
                return true;
            }
            if(!this.name){
                this.error.push("User Name is required");
            }
            if(!this.password){
                this.error.push("Password is required");
            }
            console.log(this.error);
            e.preventDefault();
            
        }
    },
}
</script>