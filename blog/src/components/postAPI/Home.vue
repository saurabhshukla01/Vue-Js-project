<template>
  <div class="form-container">
    <form @submit.prevent="submitPost" class="post-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input v-model="postData.title" id="title" required />
      </div>
      <div class="form-group">
        <label for="content">Content:</label>
        <textarea v-model="postData.content" id="content" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Submit</button>
    </form>

    <!-- Display success message or error message -->
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:"homePage",
  data() {
    return {
      postData: {
        title: '',
        content: '',
      },
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    async submitPost() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', this.postData);
        this.successMessage = 'Post submitted successfully!';
        this.errorMessage = '';
        console.log('Post Response:', response.data);
      } catch (error) {
        this.errorMessage = 'Failed to submit post.';
        this.successMessage = '';
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Center the form vertically and horizontally */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  flex-direction: column;
}

/* Style for the form */
.post-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Style for each form group (label and input) */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

/* Style for input fields and textarea */
input, textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

/* Style for the submit button */
.submit-btn {
  padding: 10px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #218838;
}

/* Style for success and error messages */
.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
