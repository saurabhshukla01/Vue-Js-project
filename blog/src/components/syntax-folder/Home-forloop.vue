<template>
    <div>
    
        <h2>For loop in Vue Js</h2>
    
        <table border="1px" align="center">
    
            <tr>
    
                <td>ID</td>
    
                <td>Name</td>
    
                <td>Email</td>
    
            </tr>
    
            <tr v-for="user in users" :key="user.id">
    
                <td>{{ user.id }}</td>
    
                <td>{{ user.name }}</td>
    
                <td>{{ user.email }}</td>
    
            </tr>
    
        </table>
    
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: {
        data: String,
        msg: String
    },
    data() {
        return {
            users: [
                { id: 1, name: "Saurabh", email: "saurabh@gmail.com" },
                { id: 2, name: "Vijay", email: "vijay@gmail.com" },
                { id: 3, name: "Mukesh", email: "mukesh@gmail.com" },
                { id: 4, name: "Ashish", email: "ashish@gmail.com" },
                { id: 5, name: "Soni", email: "soni@gmail.com" },
            ]
        };
    }
};
</script>
