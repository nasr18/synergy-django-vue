<template>
  <div class="row">
    <div class="col-md-12">
      <h4>Users List</h4>

      <b-table-simple hover small responsive>
        <b-thead head-variant="dark">
          <b-tr>
            <b-th>#</b-th>
            <b-th>First Name</b-th>
            <b-th>Last Name</b-th>
            <b-th>Created At</b-th>
            <b-th>Updated At</b-th>
            <b-th>Actions</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-if="!users.length">
            <b-th colspan="6" class="text-center">No Users found</b-th>
          </b-tr>

          <b-tr v-else v-for="(user, index) in users" :key="index">
            <b-th>{{ index + 1 }}</b-th>
            <b-td>{{ user.first_name }}</b-td>
            <b-td>{{ user.last_name }}</b-td>
            <b-td>{{ user.created_at | date }}</b-td>
            <b-td>{{ user.updated_at | date }}</b-td>
            <b-td>
              <button
                class="btn btn-sm btn-primary mr-1"
                @click="handleEdit(user)"
              >
                Edit
              </button>
              <button class="btn btn-sm btn-danger" @click="handleDelete(user)">
                Delete
              </button>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
import { getUsers, deleteUser } from "../services";

const dateFilter = function(value = new Date()) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const date = new Date(value);

  return new Intl.DateTimeFormat("default", options).format(date);
};

export default {
  name: "users-list",

  filters: {
    date: dateFilter,
  },

  data() {
    return {
      users: [],
    };
  },

  methods: {
    retrieveUsers() {
      getUsers()
        .then((response) => {
          this.users = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    handleEdit({ id }) {
      this.$router.push(`/users/${id}`);
    },

    handleDelete({ id, first_name }) {
      if (confirm("Delete " + first_name)) {
        deleteUser(id)
          .then(() => {
            this.retrieveUsers();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },

  mounted() {
    this.retrieveUsers();
  },
};
</script>
