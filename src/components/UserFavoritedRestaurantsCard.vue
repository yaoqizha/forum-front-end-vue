<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoritedRestaurant in favoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{ name: 'restaurant', params: { id: favoritedRestaurants.id } }"
      >
        <img
          :src="favoritedRestaurant.image | emptyImageFilter"
          class="avatar"
          width="60"
          height="60"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utils/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    favoritedRestaurants: {
      typed: Array,
      required: true,
    },
  },
};
</script>
