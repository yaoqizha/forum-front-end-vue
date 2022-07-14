<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          alt=""
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
const dummyUser = {
  profile: {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$xhSuLupSgJUC/SSc.v9gGutJR7K6bmVGQ1p1NxRKTxpHI1U8BWqMO",
    isAdmin: false,
    image: "",
    createdAt: "2022-07-05T13:49:01.000Z",
    updatedAt: "2022-07-05T13:49:01.000Z",
    Comments: [
      {
        id: 2,
        text: "Illum unde enim magni officiis.",
        UserId: 2,
        RestaurantId: 2,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 3,
        text: "Dolores at qui pariatur et qui dignissimos quod quia.",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 4,
        text: "Aut ab praesentium aperiam aliquid neque qui dolor doloribus aut.",
        UserId: 2,
        RestaurantId: 4,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 7,
        text: "Itaque magni in eum id.",
        UserId: 2,
        RestaurantId: 7,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 8,
        text: "Beatae maxime nostrum aut inventore.",
        UserId: 2,
        RestaurantId: 8,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 13,
        text: "Ut distinctio voluptatem non maxime maxime similique.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 13,
          name: "Glenna Gaylord",
          tel: "(052) 705-6412 x601",
          address: "81652 Izaiah Spring",
          opening_hours: "08:00",
          description: "Perferendis dolore facere aperiam totam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=64.22681101988681",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 16,
        text: "Nihil perferendis totam vero quam cumque dolore perferendis.",
        UserId: 2,
        RestaurantId: 16,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 16,
          name: "Fidel Ledner V",
          tel: "765-252-7839 x9117",
          address: "1590 Carley Field",
          opening_hours: "08:00",
          description: "quasi nam in",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=66.14933009219396",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 19,
        text: "Temporibus ratione nihil consectetur porro perspiciatis.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 19,
          name: "Dora Boyle",
          tel: "(813) 655-5101",
          address: "0827 Zena Spurs",
          opening_hours: "08:00",
          description: "Asperiores quod ea ipsum incidunt totam sit.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.23758594224068",
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
        id: 23,
        text: "Eligendi reprehenderit dolorum officiis voluptates ducimus neque nostrum.",
        UserId: 2,
        RestaurantId: 23,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 23,
          name: "Katelynn Ledner",
          tel: "330.417.3700",
          address: "222 Beier Shore",
          opening_hours: "08:00",
          description:
            "Aut enim aperiam laboriosam impedit sunt molestiae. Suscipit porro nihil explicabo dolor facere ullam provident numquam eaque. Dolor aliquid facilis nulla et quaerat. Sit ut beatae sunt qui. Voluptatem saepe rerum. Dolorem vel et ab minima dolores quia.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=10.046995107118306",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 25,
        text: "Omnis praesentium omnis autem ipsum molestiae.",
        UserId: 2,
        RestaurantId: 25,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 25,
          name: "Garland Durgan",
          tel: "458-633-3241 x394",
          address: "9666 Romaguera Mill",
          opening_hours: "08:00",
          description:
            "Repudiandae nobis hic magnam velit ut corrupti dolorem id. Et quisquam nisi voluptates. Error maiores possimus aut maiores sed.\n \rOccaecati asperiores porro sed ut molestiae et ut dicta a. Doloribus cumque est. Voluptatem veritatis labore aut labore aliquid beatae at. Autem sunt velit voluptatem est. Officiis animi iusto nisi corrupti et odit. Aspernatur veniam doloribus.\n \rPerspiciatis ut et maxime tenetur vel dolore est ad asperiores. Enim suscipit laboriosam ab inventore eveniet. Dolor sit distinctio quam dolor. Est non dolorum quo.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=90.371017245536",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 26,
        text: "Esse accusamus quos voluptatem nam nobis placeat dignissimos.",
        UserId: 2,
        RestaurantId: 26,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
      {
        id: 32,
        text: "Aut est necessitatibus voluptas est quo commodi laborum autem.",
        UserId: 2,
        RestaurantId: 32,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 32,
          name: "Dr. Faye O'Hara",
          tel: "451.994.7471 x23853",
          address: "3023 Breitenberg Forks",
          opening_hours: "08:00",
          description:
            "Iste ducimus modi facere fugiat qui asperiores. Ullam dolorem molestias molestiae reprehenderit tenetur impedit facere unde.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.930007712516804",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 34,
        text: "A impedit reiciendis amet ut vitae tempora ad.",
        UserId: 2,
        RestaurantId: 34,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 34,
          name: "Dwight Osinski",
          tel: "1-892-426-5029 x245",
          address: "20819 Schneider Radial",
          opening_hours: "08:00",
          description:
            "Esse sunt delectus beatae accusantium quaerat. Aut consectetur et nostrum cumque nesciunt corrupti perferendis culpa. Maxime rerum excepturi quis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.99603058869619",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 36,
        text: "Sequi delectus est repellendus beatae omnis fugit recusandae.",
        UserId: 2,
        RestaurantId: 36,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 36,
          name: "Leopoldo Nitzsche",
          tel: "000-819-9220 x7737",
          address: "2181 Gerlach Stream",
          opening_hours: "08:00",
          description:
            "Nobis occaecati sapiente aut quasi qui.\nExcepturi sed quas laudantium ullam vero voluptatibus.\nEos omnis cum est vitae nihil neque voluptatem officiis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=46.28595140455365",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 37,
        text: "Et repudiandae doloremque voluptas.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 37,
          name: "Arthur Windler",
          tel: "295-912-4576 x9335",
          address: "5904 Angelo Station",
          opening_hours: "08:00",
          description:
            "Sint odit exercitationem maxime rem. Quibusdam sint nobis rerum eaque molestiae.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=44.11872572831814",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 40,
        text: "Perferendis saepe minima accusamus qui.",
        UserId: 2,
        RestaurantId: 40,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 48,
        text: "Qui corporis quas.",
        UserId: 2,
        RestaurantId: 48,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 53,
        text: "Eos incidunt labore quia et.",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 56,
        text: "Itaque accusantium mollitia corporis quas.",
        UserId: 2,
        RestaurantId: 6,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 60,
        text: "Autem laborum id accusantium.",
        UserId: 2,
        RestaurantId: 10,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 67,
        text: "Molestias sit autem.",
        UserId: 2,
        RestaurantId: 17,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 17,
          name: "Mable Funk",
          tel: "1-523-538-5167",
          address: "74689 Willa Lodge",
          opening_hours: "08:00",
          description:
            "Qui eveniet maxime et quis quaerat dolores et ut quo. Et quo nobis ullam possimus quasi voluptatem adipisci voluptates delectus. Culpa dolores enim consequatur incidunt aut consequatur. Deserunt dolorum consequatur exercitationem est ipsam ut. Pariatur iusto facilis numquam quia dolore omnis aperiam odio tempore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=57.19226973873912",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 70,
        text: "Aperiam et deleniti cumque suscipit.",
        UserId: 2,
        RestaurantId: 20,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 20,
          name: "Destini Hintz DVM",
          tel: "271-297-8939 x1074",
          address: "9173 Bruce Street",
          opening_hours: "08:00",
          description: "sint dolor dignissimos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.906712574999288",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 71,
        text: "Optio dolorum consequuntur perspiciatis vel id a omnis.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 21,
          name: "Mitchel Stokes",
          tel: "1-687-358-2225",
          address: "27624 Martina Spur",
          opening_hours: "08:00",
          description: "laudantium",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=10.166955646583409",
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
      {
        id: 80,
        text: "Itaque voluptas modi pariatur reprehenderit placeat.",
        UserId: 2,
        RestaurantId: 30,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 30,
          name: "Kailee Windler",
          tel: "460-446-1921",
          address: "367 Quinn Fort",
          opening_hours: "08:00",
          description: "Commodi itaque cumque et quaerat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.351139561359204",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 84,
        text: "Enim repellat facere iure adipisci incidunt.",
        UserId: 2,
        RestaurantId: 34,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 34,
          name: "Dwight Osinski",
          tel: "1-892-426-5029 x245",
          address: "20819 Schneider Radial",
          opening_hours: "08:00",
          description:
            "Esse sunt delectus beatae accusantium quaerat. Aut consectetur et nostrum cumque nesciunt corrupti perferendis culpa. Maxime rerum excepturi quis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.99603058869619",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 88,
        text: "Et consequuntur aut omnis ut.",
        UserId: 2,
        RestaurantId: 38,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 38,
          name: "Adrain Lowe",
          tel: "1-436-667-9868",
          address: "9004 Gottlieb Points",
          opening_hours: "08:00",
          description:
            "Minima animi deleniti dolores asperiores repudiandae earum eos provident.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=74.34869809896958",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 89,
        text: "Ut eius omnis blanditiis doloribus eveniet molestiae reiciendis aliquid sit.",
        UserId: 2,
        RestaurantId: 39,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 39,
          name: "Josiah Marks",
          tel: "904-073-3965 x378",
          address: "49127 Gleichner Pines",
          opening_hours: "08:00",
          description:
            "Omnis molestiae sed accusantium. Natus corporis cupiditate vel at earum quis. Ut est eligendi. Aut voluptatem qui quam et esse. Vel inventore magnam atque delectus omnis quia magnam. Minus quia animi enim officiis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=79.46129315519653",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 94,
        text: "Fugiat laboriosam non voluptatem et hic.",
        UserId: 2,
        RestaurantId: 44,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 44,
          name: "Alfredo Rath",
          tel: "1-593-371-9353 x75499",
          address: "8622 Prohaska Valleys",
          opening_hours: "08:00",
          description:
            "Omnis ab laborum recusandae iusto quisquam. Expedita corrupti aut et. Dicta aut atque quaerat. Placeat possimus dicta ut. Possimus numquam atque animi officia eum perspiciatis aperiam nobis velit. Fuga facilis dolorum doloremque at at.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=79.02855021683652",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 95,
        text: "Reprehenderit modi ipsam vero qui itaque dolore provident.",
        UserId: 2,
        RestaurantId: 45,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 45,
          name: "Dr. Johnathon Sauer",
          tel: "(942) 123-4411",
          address: "848 Amina Parks",
          opening_hours: "08:00",
          description:
            "Mollitia alias consequuntur ex.\nQuos pariatur ratione.\nQuisquam qui in quaerat rerum in quas qui laudantium.\nQui aspernatur sed ea maiores voluptatem non.\nQuo magnam inventore delectus amet ducimus officia a non.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=84.96357760820771",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 96,
        text: "Sit ipsa at minus id tempore aut qui architecto.",
        UserId: 2,
        RestaurantId: 46,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 97,
        text: "Quia et cupiditate est voluptates non maiores sint exercitationem eos.",
        UserId: 2,
        RestaurantId: 47,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 47,
          name: "Adam Kunde",
          tel: "447.956.9623 x70923",
          address: "975 Stella Drives",
          opening_hours: "08:00",
          description:
            "Facilis occaecati commodi necessitatibus laboriosam ut hic voluptatum deleniti.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=64.53264653519292",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 99,
        text: "Cupiditate dolor sunt et.",
        UserId: 2,
        RestaurantId: 49,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 102,
        text: "Temporibus est sapiente qui voluptas et.",
        UserId: 2,
        RestaurantId: 2,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 106,
        text: "Nihil aut libero facilis quis fugit molestias delectus non ipsam.",
        UserId: 2,
        RestaurantId: 6,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 109,
        text: "Voluptas voluptatem amet doloribus maiores voluptas vitae.",
        UserId: 2,
        RestaurantId: 9,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 111,
        text: "Eligendi minima in id consequatur ab.",
        UserId: 2,
        RestaurantId: 11,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 11,
          name: "Stephon Deckow",
          tel: "(538) 641-4952 x8538",
          address: "8726 Ryley Shores",
          opening_hours: "08:00",
          description:
            "Ea molestiae quidem blanditiis molestiae.\nEt accusamus quidem adipisci.\nConsequatur expedita quis perspiciatis.\nUt asperiores itaque perferendis corrupti autem quo aut voluptates.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=84.14086710483801",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 114,
        text: "Sed laboriosam voluptas atque earum adipisci nulla officiis asperiores.",
        UserId: 2,
        RestaurantId: 14,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 14,
          name: "Corine Hammes",
          tel: "146-546-7993",
          address: "322 Zieme Course",
          opening_hours: "08:00",
          description:
            "Dolorem in rerum.\nDeleniti totam eaque eveniet omnis sed nihil officiis non est.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=33.115771232615245",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 115,
        text: "Quasi temporibus voluptate.",
        UserId: 2,
        RestaurantId: 15,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 117,
        text: "Porro itaque totam ut itaque ut iusto reiciendis.",
        UserId: 2,
        RestaurantId: 17,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 17,
          name: "Mable Funk",
          tel: "1-523-538-5167",
          address: "74689 Willa Lodge",
          opening_hours: "08:00",
          description:
            "Qui eveniet maxime et quis quaerat dolores et ut quo. Et quo nobis ullam possimus quasi voluptatem adipisci voluptates delectus. Culpa dolores enim consequatur incidunt aut consequatur. Deserunt dolorum consequatur exercitationem est ipsam ut. Pariatur iusto facilis numquam quia dolore omnis aperiam odio tempore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=57.19226973873912",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 120,
        text: "Occaecati non qui necessitatibus doloremque cumque incidunt.",
        UserId: 2,
        RestaurantId: 20,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 20,
          name: "Destini Hintz DVM",
          tel: "271-297-8939 x1074",
          address: "9173 Bruce Street",
          opening_hours: "08:00",
          description: "sint dolor dignissimos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.906712574999288",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 121,
        text: "Suscipit voluptatibus molestias modi non quis fugiat inventore.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 21,
          name: "Mitchel Stokes",
          tel: "1-687-358-2225",
          address: "27624 Martina Spur",
          opening_hours: "08:00",
          description: "laudantium",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=10.166955646583409",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 122,
        text: "Tempora blanditiis ullam labore distinctio deleniti ea laudantium iure.",
        UserId: 2,
        RestaurantId: 22,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
        id: 129,
        text: "Fugit quia laborum illum incidunt.",
        UserId: 2,
        RestaurantId: 29,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 29,
          name: "Viviane Carter",
          tel: "483-149-5606",
          address: "61045 Pollich Village",
          opening_hours: "08:00",
          description:
            "Incidunt et nihil voluptatem. Numquam sunt aut qui. Quisquam quia dignissimos dolor fugit quidem. Voluptate atque est. Accusamus quia voluptas. Repellat quo porro sed sed quibusdam ut qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=10.624042443310543",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 133,
        text: "Voluptate voluptatem vero rem qui non.",
        UserId: 2,
        RestaurantId: 33,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 33,
          name: "Monserrat Johnson",
          tel: "1-022-514-8732",
          address: "536 Emmerich Court",
          opening_hours: "08:00",
          description:
            "Occaecati eos sapiente voluptates ipsum magnam accusantium illum. Cumque accusamus accusamus officiis et error illum eius labore et. Consequatur est eaque et a ducimus dolores quaerat. Non voluptas asperiores voluptate voluptatem repudiandae. In vero temporibus consequatur.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=51.10538034670844",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 135,
        text: "Est culpa velit mollitia soluta et quod temporibus neque tempore.",
        UserId: 2,
        RestaurantId: 35,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 35,
          name: "Johathan Torp",
          tel: "1-471-758-6886 x02605",
          address: "63696 Becker Loaf",
          opening_hours: "08:00",
          description: "rerum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=39.74380871622159",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 138,
        text: "Est culpa corrupti excepturi.",
        UserId: 2,
        RestaurantId: 38,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 38,
          name: "Adrain Lowe",
          tel: "1-436-667-9868",
          address: "9004 Gottlieb Points",
          opening_hours: "08:00",
          description:
            "Minima animi deleniti dolores asperiores repudiandae earum eos provident.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=74.34869809896958",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 139,
        text: "Perferendis voluptatem a repudiandae nesciunt ex sapiente omnis et.",
        UserId: 2,
        RestaurantId: 39,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
          id: 39,
          name: "Josiah Marks",
          tel: "904-073-3965 x378",
          address: "49127 Gleichner Pines",
          opening_hours: "08:00",
          description:
            "Omnis molestiae sed accusantium. Natus corporis cupiditate vel at earum quis. Ut est eligendi. Aut voluptatem qui quam et esse. Vel inventore magnam atque delectus omnis quia magnam. Minus quia animi enim officiis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=79.46129315519653",
          viewCounts: 0,
          createdAt: "2022-07-05T13:49:01.000Z",
          updatedAt: "2022-07-05T13:49:01.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 141,
        text: "Dignissimos praesentium voluptatem voluptate quasi ex autem.",
        UserId: 2,
        RestaurantId: 41,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 142,
        text: "Magnam rem voluptatem ad ab laboriosam aut consequatur sunt eveniet.",
        UserId: 2,
        RestaurantId: 42,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 149,
        text: "Voluptas labore est blanditiis nisi fugit iste.",
        UserId: 2,
        RestaurantId: 49,
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
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
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("user id", userId);
      const { profile } = dummyUser;
      const { id, name, email, image } = profile;
      this.user = {
        ...this.user,
        id,
        name,
        email,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new formData(form);
      this.$emit("after submit", formData);
    },
  },
};
</script>
