<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          alt=""
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  watch: {
    currentUser(user) {
      // if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    //在編輯表單時會修改到 user 的資料內容，因此不能直接將 currentUser 的資料拿來用，而是要存到 Vue 的 data 函式內
    setUser(userId) {
      const { id, name, email, image } = this.currentUser;
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }
      this.user = {
        ...this.user,
        id,
        name,
        email,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名",
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);
        this.isProcessing = true;
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
