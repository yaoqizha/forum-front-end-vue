<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>
<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      // TODO: 向 API 發送 POST 請求
      // 伺服器新增 Comment 成功後...
      this.$emit("after-create-comment", {
        commentId: uuidv4(),
        restaurantId: this.restaurantId,
        text: this.text,
      });
      this.text = ""; // 將表單內的資料清空
    },
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>