<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          class="form-control"
          id="first_name"
          required
          v-model="user.first_name"
          name="Fist name"
        />
      </div>

      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          class="form-control"
          id="last_name"
          required
          v-model="user.last_name"
          name="last_name"
        />
      </div>

      <button @click="handleSubmit" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </div>
</template>

<script>
import { createUser } from "../services";

export default {
  name: "add-user",

  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
      },
      submitted: false,
    };
  },

  methods: {
    handleSubmit() {
      createUser(this.user)
        .then(() => {
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newUser() {
      this.submitted = false;
      this.user = {};
    },
  },
};
</script>
