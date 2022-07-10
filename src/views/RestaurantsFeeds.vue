<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs.vue";
import NewestRestaurants from "./../components/NewestRestaurants.vue";
import NewestComments from "./../components/NewestComments.vue";
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Lynn Streich",
      tel: "(560) 069-3069",
      address: "94679 Jast Way",
      opening_hours: "08:00",
      description:
        "Libero dolor sed dolorem aut deserunt nihil veritatis. Exercitationem officiis et voluptatem minus doloremque. Commodi officiis aspernatur nemo quod. At dolore consequatur at consequatur ipsum. Rerum itaque ullam. Deleniti modi velit.\n \rOmnis quasi consequatur. Minima quisquam numquam nihil. Et aliquam officiis animi saepe voluptatem ut ut et non. Quam modi et et et. Non eaque aut officiis. Commodi est qui incidunt.\n \rNon tenetur atque dolorem animi voluptatem temporibus mollitia et porro. Repellat aut eius officia quisquam ut eius. Dolores et voluptatem fugit earum quod voluptatum repellat. Illum et sed. Quas et optio optio mollitia facere maxime et. Magni sed doloribus.",
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
    },
    {
      id: 2,
      name: "Miss Garnett Gutmann",
      tel: "174.438.0644",
      address: "05911 Kassulke Skyway",
      opening_hours: "08:00",
      description:
        "Aspernatur tempore et et quaerat nihil itaque nihil. Neque perferendis quia nihil natus vitae. Vel amet optio eum et hic autem voluptatem laborum reiciendis. Tempora unde culpa labore dolorem et et maxime. Possimus ipsa aliquid fuga esse expedita eum nemo id. Ut corrupti inventore modi sapiente tempora quia dicta aperiam.",
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
    },
    {
      id: 4,
      name: "Annabelle Kessler",
      tel: "668-643-4796 x90391",
      address: "33187 Lind Dam",
      opening_hours: "08:00",
      description:
        "Perferendis at fugiat voluptatem. Illo non est et reiciendis temporibus. Distinctio porro quia. Qui cupiditate eum praesentium voluptatem.\n \rSed ullam iusto cumque iure cumque doloribus eaque. Perferendis ea enim aperiam. Non et minima non ea. Ducimus ut officia omnis itaque ut ad aut fugiat. Aut libero qui dolore itaque et nostrum et aut. Rem eaque harum quia itaque dignissimos sint consequuntur dolores quo.\n \rPlaceat deleniti harum omnis incidunt itaque harum dolorem consectetur inventore. Fugit perspiciatis iure expedita maxime ut voluptas impedit porro. Cupiditate quae iure.",
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
    },
    {
      id: 7,
      name: "Mrs. Vaughn Bogan",
      tel: "895-989-2121 x291",
      address: "4844 Kertzmann Road",
      opening_hours: "08:00",
      description:
        "Architecto provident delectus omnis doloremque et dicta consequatur ab. Rerum quas labore rerum sit laudantium qui. Esse architecto veniam adipisci quo aliquid quasi.\n \rLabore unde sed nobis sit est maiores inventore. Eum vel aperiam libero qui illo ut. Laborum labore ipsum maiores tempore sit. Ad nesciunt voluptatibus dolorum quas ut sint. Est et reprehenderit occaecati ex.\n \rOfficiis repellat iure explicabo. Soluta sunt fugit voluptas voluptas. Temporibus minus qui rerum maiores reiciendis. Illum doloremque magni. Suscipit quia accusantium et autem et omnis sequi error dignissimos. Consequatur exercitationem quos ut eaque et voluptate voluptatem.",
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
    },
    {
      id: 9,
      name: "Magnolia McCullough",
      tel: "238.086.6583 x7661",
      address: "38466 Jermaine Passage",
      opening_hours: "08:00",
      description:
        "Temporibus nihil sit velit eius laborum ipsa qui at consequuntur.",
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
    },
  ],
  comments: [
    {
      id: 10,
      text: "Tempore quibusdam dicta dolores maiores sunt dolorem quae.",
      UserId: 1,
      RestaurantId: 10,
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
      Restaurant: {
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
      },
    },
    {
      id: 27,
      text: "Non blanditiis facere saepe.",
      UserId: 1,
      RestaurantId: 27,
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
      Restaurant: {
        id: 27,
        name: "Susanna Davis",
        tel: "608.577.0885",
        address: "20998 Bell Field",
        opening_hours: "08:00",
        description: "incidunt eligendi aut",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=94.7001107928918",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 49,
      text: "Sed fuga veritatis quia aut in quod.",
      UserId: 1,
      RestaurantId: 49,
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
      Restaurant: {
        id: 49,
        name: "Jabari Mills",
        tel: "1-090-515-4995",
        address: "8916 Hammes Terrace",
        opening_hours: "08:00",
        description:
          "Corporis doloremque totam quibusdam impedit dolor voluptas in et. Est soluta vel quam ut quisquam quia explicabo est qui. Deserunt sit maxime. Tempora sed quis vel eaque eaque doloremque est. Et quaerat quos rerum esse dolores nulla dignissimos id.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=48.235432254210274",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 65,
      text: "Natus veritatis et laborum ab eius id quidem sunt.",
      UserId: 1,
      RestaurantId: 15,
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
      Restaurant: {
        id: 15,
        name: "Laverna Leuschke Sr.",
        tel: "138-776-3102 x445",
        address: "8639 Roger Curve",
        opening_hours: "08:00",
        description: "quasi molestiae sit",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=42.31631271958292",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 90,
      text: "Officia magni recusandae sint numquam voluptas odit.",
      UserId: 1,
      RestaurantId: 40,
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
      Restaurant: {
        id: 40,
        name: "Idella Steuber",
        tel: "1-169-123-8305",
        address: "951 Mason Bypass",
        opening_hours: "08:00",
        description:
          "Libero quos est explicabo nobis molestiae omnis dolor sed facilis.\nDolor ut fugiat et officia sed ad autem consequatur laboriosam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=28.965217282526503",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 124,
      text: "Vel alias pariatur excepturi repellendus eaque tempora.",
      UserId: 1,
      RestaurantId: 24,
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
      Restaurant: {
        id: 24,
        name: "Odie Fadel",
        tel: "(076) 011-8359",
        address: "486 Hayes Flat",
        opening_hours: "08:00",
        description: "In velit veritatis provident facilis.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=53.24551125476367",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 2,
      text: "Illum unde enim magni officiis.",
      UserId: 2,
      RestaurantId: 2,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$xhSuLupSgJUC/SSc.v9gGutJR7K6bmVGQ1p1NxRKTxpHI1U8BWqMO",
        isAdmin: false,
        image: null,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      Restaurant: {
        id: 2,
        name: "Miss Garnett Gutmann",
        tel: "174.438.0644",
        address: "05911 Kassulke Skyway",
        opening_hours: "08:00",
        description:
          "Aspernatur tempore et et quaerat nihil itaque nihil. Neque perferendis quia nihil natus vitae. Vel amet optio eum et hic autem voluptatem laborum reiciendis. Tempora unde culpa labore dolorem et et maxime. Possimus ipsa aliquid fuga esse expedita eum nemo id. Ut corrupti inventore modi sapiente tempora quia dicta aperiam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=52.129930969408036",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 22,
      text: "Et velit sit aliquam voluptas placeat amet.",
      UserId: 2,
      RestaurantId: 22,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$xhSuLupSgJUC/SSc.v9gGutJR7K6bmVGQ1p1NxRKTxpHI1U8BWqMO",
        isAdmin: false,
        image: null,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      Restaurant: {
        id: 22,
        name: "Austen Kiehn",
        tel: "358.250.1290",
        address: "49629 Conroy Stream",
        opening_hours: "08:00",
        description: "eum voluptatibus dolore",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=72.68337247184962",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 40,
      text: "Perferendis saepe minima accusamus qui.",
      UserId: 2,
      RestaurantId: 40,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$xhSuLupSgJUC/SSc.v9gGutJR7K6bmVGQ1p1NxRKTxpHI1U8BWqMO",
        isAdmin: false,
        image: null,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      Restaurant: {
        id: 40,
        name: "Idella Steuber",
        tel: "1-169-123-8305",
        address: "951 Mason Bypass",
        opening_hours: "08:00",
        description:
          "Libero quos est explicabo nobis molestiae omnis dolor sed facilis.\nDolor ut fugiat et officia sed ad autem consequatur laboriosam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=28.965217282526503",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 76,
      text: "Quo aut commodi ex placeat occaecati.",
      UserId: 2,
      RestaurantId: 26,
      createdAt: "2022-07-05T13:49:01.000Z",
      updatedAt: "2022-07-05T13:49:01.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$xhSuLupSgJUC/SSc.v9gGutJR7K6bmVGQ1p1NxRKTxpHI1U8BWqMO",
        isAdmin: false,
        image: null,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
      Restaurant: {
        id: 26,
        name: "Kattie Labadie",
        tel: "(983) 647-7624",
        address: "41862 Krajcik Wells",
        opening_hours: "08:00",
        description:
          "Facere et qui repudiandae est autem minima ut voluptatum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=56.94450942791398",
        viewCounts: 0,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        CategoryId: 3,
      },
    },
  ],
};

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments.filter(
        (comment) => comment.Restaurant && comment.text
      );
    },
  },
};
</script>
