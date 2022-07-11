<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link
          :to="{
            name: 'user',
            params: {
              id: user.id,
            },
          }"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8w9vjCnk4AAUepZnqDTTfOT3FEjtwC9268w&usqp=CAU"
            width="140px"
            height="140px"
          />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollow(user)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.stop.prevent="addFollow(user)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs.vue";
const dummyData = {
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
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
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
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
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
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
    },
    // addFollow(id) {
    //   const index = this.users.findIndex(
    //     ({ id: theUserId }) => id === theUserId
    //   );

    //   this.users[index] = {
    //     ...this.users[index],
    //     isFollowed: true,
    //   };
    //   console.log(this.users[index]);
    //   this.$forceUpdate();
    // },
    addFollow(user) {
      user.isFollowed = true;
    },
    deleteFollow(user) {
      user.isFollowed = false;
    },
  },
};
</script>
