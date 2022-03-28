/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoibmlrb3Nrb3Vyb3UiLCJhIjoiY2wxOWJhMjBmMTd6MTNpczF3ejV5YmdpdCJ9.vvVbE0-YbC_LbaO1fq2COg",
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: "AIzaSyCPb-wcWEds-smCN3XK_20voBxLzTcowVM",
    NEXT_PUBLIC_API_URL: "https://strapi-nick-mevents.herokuapp.com",
    NEXT_PUBLIC_MAPBOX_API_TOKEN:
      "pk.eyJ1Ijoibmlrb3Nrb3Vyb3UiLCJhIjoiY2wxOWJhMjBmMTd6MTNpczF3ejV5YmdpdCJ9.vvVbE0-YbC_LbaO1fq2COg",
  },
};

module.exports = nextConfig;
