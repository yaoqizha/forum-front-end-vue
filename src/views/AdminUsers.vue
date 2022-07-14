<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              @click.stop.prevent="toggleUserRole(user.id)"
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AdminNav from "./../components/AdminNav";
const dummyUser = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$EYbo6r8TsyKiDpMlHZ7sbe/dTzfkwGWQ2r7n4Hn5ThodEHmS1BzzW",
      isAdmin: true,
      image: null,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$xhSuLupSgJUC/SSc.v9gGutJR7K6bmVGQ1p1NxRKTxpHI1U8BWqMO",
      isAdmin: false,
      image: null,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$fgSnxeJYvT14urkSugsor.SeLm46QRgc0KC9i9Hnhb/9KbD1SE1ci",
      isAdmin: false,
      image: null,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
  ],
};
export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        id: 1,
        name: "",
        email: "",
        isAdmin: true,
      },
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyUser;
      this.users = users;
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>
