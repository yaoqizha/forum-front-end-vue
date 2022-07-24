<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr />
    <RestaurantDetail :initial-restaurant="restaurant" />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>
<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";
// STEP 1: 匯入 restaurantsAPI 和 Toast 顯示提示
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
// STEP 2: 移除 dummyData
export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    // fetchRestaurant(restaurantId) {
    //   console.log("fetchRestaurant id: ", restaurantId);
    //   const { restaurant, isFavorited, isLiked } = dummyData;
    //   const {
    //     id,
    //     name,
    //     Category,
    //     image,
    //     opening_hours: openingHours,
    //     tel,
    //     address,
    //     description,
    //     Comments,
    //   } = restaurant;
    //   this.restaurant = {
    //     id,
    //     name,
    //     categoryName: Category ? Category.name : "未分類",
    //     image,
    //     openingHours,
    //     tel,
    //     address,
    //     description,
    //     isFavorited,
    //     isLiked,
    //   };
    //   this.restaurantComments = Comments;
    // },
    async fetchRestaurant(restaurantId) {
      try {
        // STEP 4: 透過 restaurantsAPI 取得餐廳資訊
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

        // STEP 5: 透過 restaurantsAPI 取得餐廳資訊
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };
        console.log("set");
        this.restaurantComments = Comments;
      } catch (error) {
        console.log("error", error);
        // STEP 6: 透過 restaurantsAPI 取得餐廳資訊
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  afterDeleteComment(commentId) {
    // 以 filter 保留未被選擇的 comment.id
    this.restaurantComments = this.restaurantComments.filter(
      (comment) => comment.id !== commentId
    );
  },
  afterCreateComment(payload) {
    const { commentId, restaurantId, text } = payload;
    this.restaurantComments.push({
      id: commentId,
      RestaurantId: restaurantId,
      User: {
        id: this.currentUser.id,
        name: this.currentUser.name,
      },
      text,
      createdAt: new Date(),
    });
  },
};
</script>