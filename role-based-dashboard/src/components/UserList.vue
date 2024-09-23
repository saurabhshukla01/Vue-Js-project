<template>
  <div class="user-list">
    <h1>User List</h1>
    <button class="create-user-button" @click="createUser">Create User</button>
    <table v-if="users && users.length > 0">
      <thead>
        <tr>
          <th class="textCenter">ID</th>
          <th class="textCenter">Name</th>
          <th class="textCenter">Email</th>
          <th class="textCenter">Role</th>
          <th class="textCenter">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="textCenter">{{ user.id }}</td>
          <td class="textCenter">{{ user.name }}</td>
          <td class="textCenter">{{ user.email }}</td>
          <td class="textCenter">{{ user.role.name }}</td>
          <td class="textCenter">
            <button @click="editUser(user.id)">Edit</button>
            <button @click="confirmDelete(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No users found.</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserList',
  computed: {
    ...mapState({
      users: state => state.users,
    }),
  },
  methods: {
    ...mapActions(['fetchUsers', 'deleteUser']),
    
    editUser(id) {
      this.$router.push(`/users/${id}/edit`);
    },

    createUser() {
      this.$router.push('/users/add');
    },

    confirmDelete(userId) {
      const confirmation = window.confirm('Has a manager approved this deletion?');
      
      if (confirmation) {
        this.deleteUser(userId).then(() => {
          alert('User deleted successfully.');
        }).catch(error => {
          console.error(error);
          alert('There was an error deleting the user.');
        });
      } else {
        alert('Deletion not approved by manager.');
      }
    }
  },
  
  mounted() {
    // const token = sessionStorage.getItem('token'); // Fetch token from session storage
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}` // Send token in request headers
    //   }
    // };
    this.fetchUsers();
  },
};
</script>

<style scoped>
.user-list {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
}

button {
  margin-right: 5px;
}
.textCenter {
  text-align: center;
}

.create-user-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.create-user-button:hover {
  background-color: #0056b3;
}
</style>
