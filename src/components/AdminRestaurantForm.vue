<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <!-- selected 代表瀏覽器會自動先把這個選項選起來 -->
        <!-- restaurant.categoryId 裡指定的值，需要和 <option value=""> 是一致的，也就是空字串 -->
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        class="d-block img-thumbnail mb-3"
        :src="restaurant.image"
        alt=""
        width="200"
        height="200"
      />
      <input
        multiple
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>
<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
  ],
};

export default {
  name: "AdminRestaurantForm",
  data() {
    return {
      categories: [],
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.restaurant.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
  },
};
</script>