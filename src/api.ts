
const fetchRestaurants = fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
.then(res => res.json())

export {fetchRestaurants}
