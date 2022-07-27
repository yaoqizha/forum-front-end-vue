<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit" action="" class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">SignIn Page</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="from-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        @click="handleSubmit()"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p><router-link to="/signup">Sign Up</router-link></p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入email和password",
          });
          return;
        }

        this.isProcessing = true;

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        const { data, statusText } = response;

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        //將資料傳到 Vuex 中
        this.$store.commit("setCurrentUser", data.user);

        this.$router.push("/restaurants");
      } catch {
        this.isProcessing = false;
        this.password = "";
        //顯示錯誤提示;
        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤",
        });
      }
    },
    // handleSubmit() {
    //   if (!this.email || !this.password) {
    //     Toast.fire({
    //       icon: "warning",
    //       title: "請輸入email和password",
    //     });
    //     return;
    //   }
    //   this.isProcessing = true;
    //   authorizationAPI
    //     .signIn({
    //       email: this.email,
    //       password: this.password,
    //     })
    //     .then((response) => {
    //       // TODO: 取得 API 請求後的資料
    //       const { data } = response;
    //       if (data.status !== "success") {
    //         throw new Error(data.message);
    //       }
    //       localStorage.setItem("token", data.token);
    //       this.$router.push("restaurants");
    //     })
    //     .catch(() => {
    //       this.isProcessing = false;
    //       this.password = "";
    //       //顯示錯誤提示
    //       Toast.fire({
    //         icon: "warning",
    //         title: "輸入的帳號密碼有誤",
    //       });
    //     });
    // },
  },
};
</script>
