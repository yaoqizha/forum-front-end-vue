<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
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
    updatedAt: "2022-07-09T12:29:52.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
    },
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
};
export default {
  name: "dashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    this.fetchDashboardData();
  },
  methods: {
    fetchDashboardData() {
      const { restaurant } = dummyData;
      const { id, name, Category, Comments, viewCounts } = restaurant;
      this.restaurant.id = id;
      this.restaurant.name = name;
      this.restaurant.categoryName = Category.name;
      this.restaurant.commentsLength = Comments.length;
      this.restaurant.viewCounts = viewCounts;
    },
  },
};
</script>
