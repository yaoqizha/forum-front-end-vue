<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>
<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      //todo:透過API 把formData 資料往後端伺服器送
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>
