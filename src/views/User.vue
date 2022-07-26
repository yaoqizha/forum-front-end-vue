<template>
  <div class="container">
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="followings" />
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="comments" />
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "user",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        name: "",
        image: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    //「網址產生變化時」，重新向後端發送 request
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        const { profile, isFollowed } = data;

        const {
          id,
          name,
          image,
          email,
          Comments,
          Followers,
          Followings,
          FavoritedRestaurants,
        } = profile;

        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        };
        this.isFollowed = isFollowed;
        this.followers = Followers;
        this.followings = Followings;
        //預防comments.Restaurant有空值
        //利用 Set 中元素不會重複的特性，可以用來過濾掉陣列中重複的元素
        const commentSet = new Set();
        this.comments = Comments.filter(
          (comment) =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        );
        this.favoritedRestaurants = FavoritedRestaurants;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
