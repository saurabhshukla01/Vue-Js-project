<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Your Role: {{ user.role }}</p>
    <p>Your Token: {{ token }}</p>

    <!-- Logout Button -->
    <button @click="logout" class="logout-btn">Logout</button>

    <!-- Role-Based Cards -->
    <div class="cards">
      
      <!-- Admin Card (Visible for Admin only) -->
      <div v-if="user.role === 'Admin'" class="card admin-card">
        <h3>Admin Management</h3>
        <p>Manage the entire system, users, and settings.</p>
      </div>

      <!-- Manager Card (Visible for Admin and Manager roles) -->
      <div v-if="user.role === 'Admin' || user.role === 'Manager'" class="card manager-card">
        <h3>Manager Dashboard</h3>
        <p>Oversee teams, projects, and reports.</p>
      </div>

      <!-- HR Card (Visible for Admin, Manager, and HR roles) -->
      <div v-if="user.role === 'Admin' || user.role === 'Manager' || user.role === 'HR'" class="card hr-card">
        <h3>HR Management</h3>
        <p>Manage employee records, payroll, and leave requests.</p>
      </div>

      <!-- Employee Card (Visible for all roles) -->
      <div v-if="user.role === 'Admin' || user.role === 'Manager' || user.role === 'HR' || user.role === 'Employee'" class="card employee-card">
        <h3>Employee Dashboard</h3>
        <p>View your profile, manage tasks, and track progress.</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      token: '',
      user: {
        name: '',
        email: '',
        role: ''
      }
    };
  },
  created() {
    this.loadSessionData(); // Load session data when component is created
  },
  methods: {
    loadSessionData() {
      const token = sessionStorage.getItem('token'); // Get token from sessionStorage
      const user = JSON.parse(sessionStorage.getItem('user')); // Get user details and parse them

      if (token && user) {
        this.token = token;
        this.user = user; // Set user object in data
      } else {
        // If no session data found, redirect to login
        this.$router.push('/login');
      }
    },
    logout() {
      // Clear all session data
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      
      // Redirect to login page
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
}

.card h3 {
  margin-bottom: 10px;
}

.logout-btn {
  background-color: #ff4b4b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #ff3232;
}

/* Card Styles */
.admin-card {
  background-color: #ffd1dc; /* Light Pink */
}

.manager-card {
  background-color: #ffd966; /* Light Yellow */
}

.hr-card {
  background-color: #d1ffd8; /* Light Green */
}

.employee-card {
  background-color: #d1eaff; /* Light Blue */
}
</style>
