<template>
  <div class="container py-5">
    <NavTabs />
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- RestaurantCard -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <!-- RestaurantsPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :totalPage="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantCard from "./../components/RestaurantCard.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "./../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Lynn Streich",
      tel: "(560) 069-3069",
      address: "94679 Jast Way",
      opening_hours: "08:00",
      description: "Libero dolor sed dolorem aut deserunt nihil verita",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.675788248752674",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Miss Garnett Gutmann",
      tel: "174.438.0644",
      address: "05911 Kassulke Skyway",
      opening_hours: "08:00",
      description: "Aspernatur tempore et et quaerat nihil itaque nihi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.129930969408036",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Daija Mante",
      tel: "1-643-820-1215",
      address: "06323 Mante Plaza",
      opening_hours: "08:00",
      description: "nulla voluptatem nisi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.998597385242853",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Annabelle Kessler",
      tel: "668-643-4796 x90391",
      address: "33187 Lind Dam",
      opening_hours: "08:00",
      description: "Perferendis at fugiat voluptatem. Illo non est et ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.544386229194345",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Brook Effertz",
      tel: "1-183-928-5036",
      address: "38782 Vandervort Locks",
      opening_hours: "08:00",
      description: "reprehenderit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.823134824068553",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Emilia Cole",
      tel: "1-266-325-4298",
      address: "8421 Emmet Groves",
      opening_hours: "08:00",
      description: "totam eius autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.88498409039451",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Mrs. Vaughn Bogan",
      tel: "895-989-2121 x291",
      address: "4844 Kertzmann Road",
      opening_hours: "08:00",
      description: "Architecto provident delectus omnis doloremque et ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.092163916336702",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Hailie Osinski",
      tel: "1-058-846-8847 x988",
      address: "87222 Considine Meadows",
      opening_hours: "08:00",
      description: "et est quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.3552405986173133",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Magnolia McCullough",
      tel: "238.086.6583 x7661",
      address: "38466 Jermaine Passage",
      opening_hours: "08:00",
      description: "Temporibus nihil sit velit eius laborum ipsa qui a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.89148734808042",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Alaina Krajcik",
      tel: "1-370-845-2335",
      address: "214 Bayer Stravenue",
      opening_hours: "08:00",
      description: "voluptas dolorem ea",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.90608077471397",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
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
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
