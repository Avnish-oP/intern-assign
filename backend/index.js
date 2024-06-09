import express from "express"
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());

const clothes = [
    { id: 1, name: 'T-Shirt', image: 'https://example.com/images/t-shirt.jpg' },
    { id: 2, name: 'Jeans', image: 'https://example.com/images/jeans.jpg' },
    { id: 3, name: 'Jacket', image: 'https://example.com/images/jacket.jpg' },
    { id: 4, name: 'Sweater', image: 'https://example.com/images/sweater.jpg' },
    { id: 5, name: 'Shorts', image: 'https://example.com/images/shorts.jpg' },
    { id: 6, name: 'Skirt', image: 'https://example.com/images/skirt.jpg' },
    { id: 7, name: 'Dress', image: 'https://example.com/images/dress.jpg' },
    { id: 8, name: 'Blouse', image: 'https://example.com/images/blouse.jpg' },
    { id: 9, name: 'Leggings', image: 'https://example.com/images/leggings.jpg' },
    { id: 10, name: 'Scarf', image: 'https://example.com/images/scarf.jpg' },
    { id: 11, name: 'Hat', image: 'https://example.com/images/hat.jpg' },
    { id: 12, name: 'Gloves', image: 'https://example.com/images/gloves.jpg' },
    { id: 13, name: 'Socks', image: 'https://example.com/images/socks.jpg' },
    { id: 14, name: 'Tie', image: 'https://example.com/images/tie.jpg' },
    { id: 15, name: 'Belt', image: 'https://example.com/images/belt.jpg' },
    { id: 16, name: 'Sunglasses', image: 'https://example.com/images/sunglasses.jpg' },
    { id: 17, name: 'Watch', image: 'https://example.com/images/watch.jpg' },
    { id: 18, name: 'Bracelet', image: 'https://example.com/images/bracelet.jpg' },
    { id: 19, name: 'Earrings', image: 'https://example.com/images/earrings.jpg' },
    { id: 20, name: 'Necklace', image: 'https://example.com/images/necklace.jpg' },
    { id: 21, name: 'Cap', image: 'https://example.com/images/cap.jpg' },
    { id: 22, name: 'Boots', image: 'https://example.com/images/boots.jpg' },
    { id: 23, name: 'Sneakers', image: 'https://example.com/images/sneakers.jpg' },
    { id: 24, name: 'Sandals', image: 'https://example.com/images/sandals.jpg' },
    { id: 25, name: 'Heels', image: 'https://example.com/images/heels.jpg' },
    { id: 26, name: 'Flip Flops', image: 'https://example.com/images/flip-flops.jpg' },
    { id: 27, name: 'Coat', image: 'https://example.com/images/coat.jpg' },
    { id: 28, name: 'Hoodie', image: 'https://example.com/images/hoodie.jpg' },
    { id: 29, name: 'Polo Shirt', image: 'https://example.com/images/polo-shirt.jpg' },
    { id: 30, name: 'Tank Top', image: 'https://example.com/images/tank-top.jpg' },
    { id: 31, name: 'Cardigan', image: 'https://example.com/images/cardigan.jpg' },
    { id: 32, name: 'Blazer', image: 'https://example.com/images/blazer.jpg' },
    { id: 33, name: 'Turtleneck', image: 'https://example.com/images/turtleneck.jpg' },
    { id: 34, name: 'Pajamas', image: 'https://example.com/images/pajamas.jpg' },
    { id: 35, name: 'Swimsuit', image: 'https://example.com/images/swimsuit.jpg' },
    { id: 36, name: 'Kimono', image: 'https://example.com/images/kimono.jpg' },
    { id: 37, name: 'Sari', image: 'https://example.com/images/sari.jpg' },
    { id: 38, name: 'Tuxedo', image: 'https://example.com/images/tuxedo.jpg' },
    { id: 39, name: 'Wedding Dress', image: 'https://example.com/images/wedding-dress.jpg' },
    { id: 40, name: 'Cargo Pants', image: 'https://example.com/images/cargo-pants.jpg' },
    { id: 41, name: 'Track Pants', image: 'https://example.com/images/track-pants.jpg' },
    { id: 42, name: 'Beanie', image: 'https://example.com/images/beanie.jpg' },
    { id: 43, name: 'Beret', image: 'https://example.com/images/beret.jpg' },
    { id: 44, name: 'Fedora', image: 'https://example.com/images/fedora.jpg' },
    { id: 45, name: 'Panama Hat', image: 'https://example.com/images/panama-hat.jpg' },
    { id: 46, name: 'Bikini', image: 'https://example.com/images/bikini.jpg' },
    { id: 47, name: 'Raincoat', image: 'https://example.com/images/raincoat.jpg' },
    { id: 48, name: 'Mittens', image: 'https://example.com/images/mittens.jpg' },
    { id: 49, name: 'Cufflinks', image: 'https://example.com/images/cufflinks.jpg' },
    { id: 50, name: 'Bow Tie', image: 'https://example.com/images/bow-tie.jpg' },
  ];

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  console.log(query)
  const results = clothes.filter(item => item.name.toLowerCase().includes(query));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
