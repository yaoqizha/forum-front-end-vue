<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <a href="#" class="btn btn-link">Edit</a>

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
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
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 12,
      name: "Mose Hahn I",
      tel: "(382) 729-4247 x682",
      address: "73818 Prosacco Course",
      opening_hours: "08:00",
      description:
        "Dignissimos quia veniam ratione ex. Quia ex commodi delectus et. Quaerat tempore id ratione cumque est. Accusantium magnam ad aut alias voluptates.\n \rNihil voluptatem autem. Omnis dicta accusamus nostrum sequi molestias. Dolorum voluptatem deleniti atque aliquam odit accusantium.\n \rEaque omnis voluptates sunt officiis quas. Et quia error consequatur eum nulla aliquid minus ut molestiae. Consectetur repellat unde sunt occaecati deserunt eligendi. Non quia et odit consequuntur sed veritatis a iste voluptatem. Assumenda nesciunt cum minima blanditiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.67166419495419",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 18,
      name: "Mariane Kihn",
      tel: "(852) 042-4653 x603",
      address: "9525 Lang Row",
      opening_hours: "08:00",
      description:
        "Aut quis tenetur maxime. Consequuntur ab dolorem rem aut officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.433090098461273",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 26,
      name: "Kattie Labadie",
      tel: "(983) 647-7624",
      address: "41862 Krajcik Wells",
      opening_hours: "08:00",
      description: "Facere et qui repudiandae est autem minima ut voluptatum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.94450942791398",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 28,
      name: "Malachi Effertz",
      tel: "1-924-665-5797 x61212",
      address: "33484 Connelly Crossing",
      opening_hours: "08:00",
      description:
        "Repellat voluptates nam molestias rem et neque doloremque magnam facere. Aliquid soluta reiciendis expedita nihil et error excepturi nihil. Doloremque velit repellendus possimus voluptas reiciendis et. Deleniti aliquid esse debitis est vel ab.\n \rQuam est ullam esse maiores. Nam quos dicta adipisci omnis fuga. Cupiditate voluptatem atque natus veritatis et enim. Illo itaque blanditiis minus aut.\n \rEt doloribus et inventore placeat aliquam. Ad aut hic eos eaque ex rerum nemo nostrum. Distinctio voluptatibus qui sint harum et. Quas maxime est ducimus officiis nobis iste quia et iure. Laborum iusto et ab sint veniam et harum occaecati. Eaque blanditiis unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.237339087930579",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 31,
      name: "Mr. Bennie Zieme",
      tel: "(710) 685-1788",
      address: "20111 Aufderhar Flats",
      opening_hours: "08:00",
      description:
        "Minus quae et id. Ea dolores error. Rem voluptatum rerum placeat vero ut ut in. Voluptatibus occaecati est. Eos sint facilis delectus.\n \rAccusamus quam corrupti. Et repellendus dolores laudantium qui nulla vel hic cum maxime. Dolores velit illo necessitatibus sed quidem. Consequatur ut quis ex neque et mollitia ipsa quis quia.\n \rA delectus mollitia. Fuga nihil corrupti pariatur nam at. Non error dolores voluptate maxime explicabo. Minima voluptatibus repellat iure nihil quis est consequatur. Nostrum saepe non quia ad molestiae quos beatae magnam. Culpa quod adipisci adipisci necessitatibus doloremque provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.28090363466382",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 43,
      name: "Tito Stoltenberg",
      tel: "1-127-154-6611 x140",
      address: "0074 Willis Divide",
      opening_hours: "08:00",
      description:
        "Et quia ut cum voluptates veritatis inventore voluptatem.\nAdipisci alias sit vel iusto laudantium delectus.\nIste aspernatur temporibus delectus fugit.\nFugiat a quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.978548635303085",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-05T13:49:01.000Z",
        updatedAt: "2022-07-05T13:49:01.000Z",
      },
    },
    {
      id: 50,
      name: "Mrs. Jayme Keebler",
      tel: "(731) 318-4174 x85492",
      address: "260 Christiansen Manor",
      opening_hours: "08:00",
      description:
        "Perferendis repellendus quis velit excepturi non ab occaecati.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.80775324529682",
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
  ],
};
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
