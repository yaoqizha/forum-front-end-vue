<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs.vue";
const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Mrs. Jayme Keebler",
      tel: "(731) 318-4174 x85492",
      address: "260 Christiansen Manor",
      opening_hours: "08:00",
      description: "Perferendis repellendus quis velit excepturi non a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.80775324529682",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Jabari Mills",
      tel: "1-090-515-4995",
      address: "8916 Hammes Terrace",
      opening_hours: "08:00",
      description: "Corporis doloremque totam quibusdam impedit dolor ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.235432254210274",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Jazmyne Reinger",
      tel: "(255) 010-9192 x727",
      address: "058 Jude Parks",
      opening_hours: "08:00",
      description: "Omnis ea necessitatibus ut omnis enim at dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.94667386889269",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Adam Kunde",
      tel: "447.956.9623 x70923",
      address: "975 Stella Drives",
      opening_hours: "08:00",
      description: "Facilis occaecati commodi necessitatibus laboriosa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.53264653519292",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Lillie Bechtelar PhD",
      tel: "712.669.9571 x311",
      address: "3432 Edna Crossroad",
      opening_hours: "08:00",
      description: "mollitia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.71072797938301",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Dr. Johnathon Sauer",
      tel: "(942) 123-4411",
      address: "848 Amina Parks",
      opening_hours: "08:00",
      description: "Mollitia alias consequuntur ex.\nQuos pariatur rati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.96357760820771",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Alfredo Rath",
      tel: "1-593-371-9353 x75499",
      address: "8622 Prohaska Valleys",
      opening_hours: "08:00",
      description: "Omnis ab laborum recusandae iusto quisquam. Expedi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.02855021683652",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Tito Stoltenberg",
      tel: "1-127-154-6611 x140",
      address: "0074 Willis Divide",
      opening_hours: "08:00",
      description: "Et quia ut cum voluptates veritatis inventore volu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.978548635303085",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Lilly Halvorson",
      tel: "1-277-581-6828",
      address: "2808 Jonathan Corner",
      opening_hours: "08:00",
      description: "eos aperiam eius",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.93428113918491",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Trudie Leannon I",
      tel: "(125) 589-6216 x52136",
      address: "600 Little Estate",
      opening_hours: "08:00",
      description: "repellendus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.90514145215654",
      viewCounts: 0,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurant();
  },
  methods: {
    fetchTopRestaurant() {
      const { restaurants } = dummyData;
      this.restaurants = restaurants;
    },
    deleteFavorite(restaurant) {
      restaurant.isFavorited = false;
    },
    addFavorite(restaurant) {
      restaurant.isFavorited = true;
    },
  },
};
</script>
