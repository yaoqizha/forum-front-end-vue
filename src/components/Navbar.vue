<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/restaurants">
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="/admin/restaurants"
          class="text-white mr-3"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link
            :to="{
              name: 'user',
              params: {
                id: currentUser.id,
              },
            }"
            class="text-white mr-3"
          >
            {{ currentUser.name || "使用者" }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
            @click="logout"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
// Step1：移除 dummyUser
export default {
  // Step2：移除 data 屬性
  // Step3：移除 created 和 fetchUser 的方法

  // Step4：新增 `mapState` 方法
  //created 階段，也就是元件被載入、正在載入資料和事件的階段
  //要是畫面上使用的資料，都會使用 created
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    },
  },
};
</script>
<style scoped>
  .navbar-toggler {
    min-width: 70px;
    margin-right: 0;
  }

  nav.bg-dark {
    padding: 14px 16px;
    background-color: #bd2333 !important;
  }

  .navbar-brand {
    font-size: 19px;
    padding: 0;
}
</style>

