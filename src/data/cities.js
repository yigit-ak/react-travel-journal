export default [
    {
        id: 1,
        title: "Rome",
        country: "Italy",
        linkGoogleMaps: "https://goo.gl/maps/PDUGptZTK7NT6AeEA",
        startDate: new Date(2018, 6, 16),
        endDate: new Date(2018, 6, 21),
        description: "Rome (Latin: Roma) is the capital city of Italy. It is also the capital and largest city in the region of Lazio, and the geographical region of Latium. It is on the Tiber River and has 2.8 million people. An estimate by the OECD put the number of people of the city area of Rome at 3.47 million. When the Roman Empire was new, Rome was called the Eternal City because it was already very old.",
        imageURL: process.env.PUBLIC_URL+"/images/rome.jpg"
    },

    {
        id: 2,
        title: "Paris",
        country: "France",
        linkGoogleMaps: "https://goo.gl/maps/zUSiH8ZiRjEX3dCV8",
        startDate: new Date(2023, 0, 4),
        endDate: new Date(2023, 0, 9),
        description: 'Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. The area is 105 square kilometres (41 square miles), and around 2.15 million people live there. If suburbs are counted, the population of the Paris area rises to 10.7 million people. It is the most densely populated city in the European Union, with 20.653 people per square kilometer.',
        imageURL: process.env.PUBLIC_URL+"/images/paris.jpg"
    },

    {
        id: 3,
        title: "Barcelona",
        country: "Spain",
        linkGoogleMaps: "https://goo.gl/maps/3TxECbSkMijtboyq8",
        startDate: new Date(2023, 0, 15),
        endDate: new Date(2023, 0, 18),
        description: 'Barcelona is the capital city of Catalonia, which is a region of Spain. Barcelona is the largest city on the Mediterranean coast. The city is between the rivers of Llobregat and Besòs, and south of the Pyrenees mountains. It has a humid subtropical climate (Cfa in the Köppen climate classification). Most rain falls in autumn and spring, and the least rain falls in winter and summer. The average rainfall is relatively low, due to the rain shadow from the mountains.',
        imageURL: process.env.PUBLIC_URL+"/images/barcelona.jpg"
    }
]