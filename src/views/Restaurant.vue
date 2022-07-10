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
const dummyData = {
  restaurant: {
    id: 1,
    name: "Lynn Streich",
    tel: "(560) 069-3069",
    address: "94679 Jast Way",
    opening_hours: "08:00",
    description:
      "Libero dolor sed dolorem aut deserunt nihil veritatis. Exercitationem officiis et voluptatem minus doloremque. Commodi officiis aspernatur nemo quod. At dolore consequatur at consequatur ipsum. Rerum itaque ullam. Deleniti modi velit.\n \rOmnis quasi consequatur. Minima quisquam numquam nihil. Et aliquam officiis animi saepe voluptatem ut ut et non. Quam modi et et et. Non eaque aut officiis. Commodi est qui incidunt.\n \rNon tenetur atque dolorem animi voluptatem temporibus mollitia et porro. Repellat aut eius officia quisquam ut eius. Dolores et voluptatem fugit earum quod voluptatum repellat. Illum et sed. Quas et optio optio mollitia facere maxime et. Magni sed doloribus.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=54.675788248752674",
    viewCounts: 1,
    createdAt: "2022-07-05T13:49:01.000Z",
    updatedAt: "2022-07-09T12:29:52.725Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Qui accusantium molestias vitae vitae rem in.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$EYbo6r8TsyKiDpMlHZ7sbe/dTzfkwGWQ2r7n4Hn5ThodEHmS1BzzW",
          isAdmin: true,
          image: null,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
        },
      },
      {
        id: 51,
        text: "Fugiat omnis atque provident molestiae consequatur perferendis rerum.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$fgSnxeJYvT14urkSugsor.SeLm46QRgc0KC9i9Hnhb/9KbD1SE1ci",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
        },
      },
      {
        id: 101,
        text: "Esse ratione vel rerum quis et deleniti aliquam sit enim.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$fgSnxeJYvT14urkSugsor.SeLm46QRgc0KC9i9Hnhb/9KbD1SE1ci",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
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
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      const { restaurant, isFavorited, isLiked } = dummyData;
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
      this.restaurantComments = Comments;
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
  },
};
</script>