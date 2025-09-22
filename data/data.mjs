import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Amphibian from './models/amphSchema.mjs';
import SignUpUser from './models/signUpSchema.mjs';
import LoginUser from './models/loginSchema.mjs';

dotenv.config();

const amphibians = [
  {
    name: "Red-eyed Tree Frog",
    species: "Agalychnis callidryas",
    age: 2,
    habitat: "tropical"
  },
  {
    name: "Axolotl",
    species: "Ambystoma mexicanum",
    age: 1,
    habitat: "aquatic"
  },
  {
    name: "Fire Salamander",
    species: "Salamandra salamandra",
    age: 3,
    habitat: "temperate"
  },
  {
    name: "African Bullfrog",
    species: "Pyxicephalus adspersus",
    age: 5,
    habitat: "desert"
  },
  {
    name: "Eastern Newt",
    species: "Notophthalmus viridescens",
    age: 2,
    habitat: "aquatic"
  },
  {
    name: "Tiger Salamander",
    species: "Ambystoma tigrinum",
    age: 4,
    habitat: "temperate"
  },
  {
    name: "Glass Frog",
    species: "Centrolenidae",
    age: 1,
    habitat: "jungles"
  },
  {
    name: "Cave Salamander",
    species: "Eurycea lucifuga",
    age: 2,
    habitat: "temperate"
  },
  {
    name: "Green Tree Frog",
    species: "Hyla cinerea",
    age: 3,
    habitat: "tropical"
  },
  {
    name: "Amazon Milk Frog",
    species: "Trachycephalus resinifictrix",
    age: 2,
    habitat: "tropical"
  }
];


const signUpUsers = [
  {
    firstname: "Alice",
    lastname: "Frogger",
    email: "alice@example.com",
    password: "pass123"
  },
  {
    firstname: "Bob",
    lastname: "Newt",
    email: "bob@example.com",
    password: "pass456"
  },
  {
    firstname: "Charlie",
    lastname: "Toad",
    email: "charlie@example.com",
    password: "pass789"
  },
  {
    firstname: "Daisy",
    lastname: "Axol",
    email: "daisy@example.com",
    password: "pass101"
  },
  {
    firstname: "Eve",
    lastname: "Salam",
    email: "eve@example.com",
    password: "pass202"
  },
  {
    firstname: "Frank",
    lastname: "Bullfrog",
    email: "frank@example.com",
    password: "pass303"
  },
  {
    firstname: "Grace",
    lastname: "Treefrog",
    email: "grace@example.com",
    password: "pass404"
  },
  {
    firstname: "Henry",
    lastname: "Hop",
    email: "henry@example.com",
    password: "pass505"
  },
  {
    firstname: "Ivy",
    lastname: "Leap",
    email: "ivy@example.com",
    password: "pass606"
  },
  {
    firstname: "Jake",
    lastname: "Swamp",
    email: "jake@example.com",
    password: "pass707"
  }
];

const loginUsers = [
  { name: "frogFan101", password: "secret123" },
  { name: "swampGuy", password: "green456" },
  { name: "axolotlQueen", password: "gills789" },
  { name: "salamanderPower", password: "firefire" },
  { name: "toadKing", password: "croakit" },
  { name: "wetWorld", password: "splashy" },
  { name: "jungleJumper", password: "leapfrog" },
  { name: "pondPeeper", password: "quackme" },
  { name: "mudDweller", password: "dirtlife" },
  { name: "ecoWarrior", password: "savefrogs" }
];

try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("Connected to MongoDB");

  // Clear existing data
  await Amphibian.deleteMany({});
  await SignUpUser.deleteMany({});
  await LoginUser.deleteMany({});

  // Insert new data
  await Amphibian.insertMany(amphibians);
  await SignUpUser.insertMany(signUpUsers);
  await LoginUser.insertMany(loginUsers);

  console.log("Database seeded successfully");

  mongoose.connection.close();
} catch (err) {
  console.error("Seeding error:", err.message);
  process.exit(1);
}
