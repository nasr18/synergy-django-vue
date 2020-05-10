<template>
  <div v-if="currentUser" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          v-model="currentUser.first_name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Lasst Name</label>
        <input
          type="text"
          class="form-control"
          id="last_name"
          v-model="currentUser.last_name"
        />
      </div>
    </form>

    <button class="btn btn-danger mr-2" @click="deleteUser">
      Delete
    </button>

    <button type="submit" class="btn btn-success" @click="updateUser">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import { getUser, updateUser, deleteUser } from "../services";

export default {
  name: "User",

  data() {
    return {
      currentUser: null,
      message: "",
    };
  },

  methods: {
    getMe(id) {
      getUser(id)
        .then((response) => {
          this.currentUser = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateUser() {
      updateUser(this.currentUser.id, this.currentUser)
        .then(() => {
          this.message = "The User was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteUser() {
      if (confirm("Delete " + this.currentUser.first_name)) {
        deleteUser(this.currentUser.id)
          .then(() => {
            this.$router.push({ name: "users" });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },

  mounted() {
    this.message = "";
    this.getMe(this.$route.params.id);
  },
};
</script>
