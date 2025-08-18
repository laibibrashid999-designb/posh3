export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Appetizers",
    items: [
      { name: "Chicken Nan Bun", price: "399 BDT", description: "Qty: 5 Pcs" },
      { name: "Fried Calamari Rings", price: "359 BDT" },
      { name: "Prawn Tempura", price: "399 BDT", description: "Qty: 4 Pcs/More" },
      { name: "Fish & Chips", price: "399 BDT" },
      { name: "Fried Cheese Wonton", price: "299/430 BDT", description: "Qty: 4Pcs/6pcs/or More" },
      { name: "Bangkok Fried Chicken", price: "399 BDT", description: "Qty: 4 Pcs/More" },
      { name: "Wings", price: "299 BDT", description: "Qty: 6 Pcs" },
      { name: "Roasted Wedges", price: "219 BDT" },
      { name: "Korean Chicken, Mild Spice", price: "289 BDT" },
    ],
  },
  {
    category: "Dumplings",
    items: [
      { name: "Chicken & Prawn Sui Mai", price: "299/439 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Chicken & Lemongrass Sui Mai", price: "289/419 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Nori-Wrapped Sui Mai", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Broccoli With Cheddar Cheese", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Beef & Mushroom Dumpling", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Crystal Cheese Truffle", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Wonton In Chili Oil", price: "299/439 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Chicken Cheung Fun", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Beef & Basil Potsticker", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Crab and Cream Cheese Rangoon", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Prawn & Cream Cheese Rangoon", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Edamame Prawn Hargao", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
      { name: "Prawn Hargao", price: "319/459 BDT", description: "Qty: 4Pcs/6pcs" },
    ],
  },
  {
    category: "Sushi",
    items: [
      { name: "Caviar And Tuna Cut", price: "299/436 BDT", description: "Qty: 4Pcs/6pcs. (Fresh, Thin-Cut Tuna Paired With Rich, Briny Caviar)" },
      { name: "Cheese Crab Crunch", price: "299/436 BDT", description: "Qty: 4Pcs/6pcs. (Crispy On The Outside, Creamy On The Inside)" },
      { name: "Chili Crab Crunch", price: "299/436 BDT", description: "Qty: 4Pcs/6pcs. (Crispy Golden Bites Filled With Succulent Crab Meat)" },
      { name: "Yaki (Grilled) Tempura Roll", price: "299/436 BDT", description: "Qty: 4Pcs/6pcs. (Crispy Tempura Shrimp, Creamy Cheese And Cucumber)" },
      { name: "Volcano Maki Roll", price: "299/436 BDT", description: "Qty: 4Pcs/6pcs. (Topped With Baked Crab Mix, Drizzled With Spicy Mayo)" },
      { name: "Tuna Maki Sushi", price: "299/436 BDT", description: "Qty: 4Pcs/6pcs. (Sashimi-Grade Tuna Wrapped In Crisp Seaweed)" },
    ],
  },
  {
    category: "Soup",
    items: [
      { name: "Thai Thick Soup", price: "R: 250 / L: 490", description: "(Chicken, Mushrooms, Thai Herbs, Lemongrass, Lime Juice, Cornstarch)" },
      { name: "Tom Yum Soup", price: "R: 260 / L: 499", description: "(Spicy And Sour Thai Soup With Prawns Or Chicken)" },
      { name: "Beef Noodle Soup", price: "R: 299 / L: 560", description: "(Beef, Vegetable And Noodles in Broth)" },
      { name: "Cream Of Mushroom Soup", price: "R: 260 / L: 480", description: "(Fresh Mushrooms, Cream, Butter, Garlic, Onion, Herbs)" },
      { name: "Special Seafood Soup", price: "R: 279 / L: 529", description: "(Prawn, Squid, Octopus And Mushroom In Clear Soup)" },
    ],
  },
  {
    category: "Rice",
    items: [
      { name: "Posh Lounge Special Seafood Fried Rice", price: "339 BDT", description: "(Stir-Fried With Prawns, Calamari, And Fresh Fish)" },
      { name: "Tom Yum Mixed Fried Rice", price: "319 BDT", description: "(Fusion Of Prawns, Chicken, And Squid Stir-Fried)" },
      { name: "Egg Fried Rice", price: "199 BDT", description: "(Jasmine Rice With Fluffy Scrambled Eggs, Garlic, Spring Onions)" },
      { name: "Special Mix Fried Rice", price: "349 BDT", description: "(Chicken, Prawns, Beef, And Seasonal Vegetables Stir-Fried)" },
      { name: "PL Special Naga Fried Rice", price: "329 BDT", description: "(Tender Chicken, Spicy Naga Chili, Mixed Vegetables)" },
    ],
  },
  {
    category: "Noodles & Ramen",
    items: [
      { name: "Pad Thai Noodles", price: "399 BDT", description: "(Thailand's Iconic Noodle Dish. Tangy, Sweet, And Spicy)" },
      { name: "Fried Spicy Mix Noodles", price: "399 BDT", description: "(Loaded With Veggies, Chicken, Prawn, Spice & Flavor)" },
      { name: "Chili Oil Mix Noodles", price: "399 BDT", description: "(Tossed In Our Signature House-Made Chili Oil)" },
      { name: "House Special Mix Noodles", price: "399 BDT", description: "(Stir-Fried Noodles Tossed With Juicy Chicken, Tender Beef)" },
      { name: "Korean Chicken Ramen", price: "429 BDT" },
      { name: "Spicy Korea Beef Ramen", price: "499 BDT" },
      { name: "Tomyum Seafood Ramen", price: "489 BDT" },
    ],
  },
  {
    category: "Salad",
    items: [
      { name: "Thai Seafood Salad", price: "349 BDT", description: "(Fresh Prawns, Squid, And Mussels Tossed With Crisp Vegetables)" },
      { name: "Thai Special Papaya Salad", price: "349 BDT", description: "(Shredded Green Papaya, Fresh Chilies, Garlic, Lime Juice)" },
      { name: "Thai Chicken Cashew-Nut Salad", price: "349 BDT", description: "(Grilled Chicken Tossed With Roasted Cashews, Fresh Greens)" },
      { name: "Thai Beef Salad", price: "349 BDT", description: "(Grilled Beef Tossed With Fresh Herbs, Crisp Vegetables)" },
      { name: "Posh Special Green Chicken Salad", price: "339 BDT", description: "(Grilled Chicken Breast on Fresh Greens, Cucumbers, Avocado)" },
    ],
  },
  {
    category: "Chicken",
    items: [
        { name: "Thai Orange Chicken", price: "389 BDT", description: "Crispy chicken in a sweet and tangy Thai orange glaze." },
        { name: "Soy Glazed Ginger Chicken", price: "389 BDT", description: "Tender chicken thighs in a rich soy-ginger sauce." },
        { name: "Thai Chicken With Basil Leaf", price: "389 BDT", description: "Stir-fried with fragrant Thai basil, garlic, and chili." },
        { name: "Sichuan Cashews Chicken", price: "399 BDT", description: "Stir-fried with crunchy cashews in a spicy, tangy Sichuan sauce." },
        { name: "Sriracha Chicken With Mushroom", price: "379 BDT", description: "Tender chicken and sautéed mushroom in a bold sriracha sauce." },
        { name: "Chicken Sizzling", price: "399 BDT", description: "Served piping hot on a sizzling platter." },
        { name: "PL Special Thai Red Curry", price: "419 BDT", description: "A rich and creamy blend of aromatic Thai spices." },
        { name: "PL Special Thai Green Curry", price: "419 BDT", description: "A vibrant blend of fresh green chilies and fragrant herbs." },
    ],
  },
  {
    category: "Beef",
    items: [
        { name: "Beef Bulgogi", price: "549 BDT", description: "Tender, marinated slices of beef grilled to perfection." },
        { name: "Beef Mahalak", price: "539 BDT", description: "A rich and flavorful beef curry with aromatic spices." },
        { name: "Beef Sizzling", price: "559 BDT", description: "Stir-fried with bell peppers, onions on a hot sizzling plate." },
        { name: "Roasted Beef", price: "549 BDT", description: "Tender slices of slow-roasted beef, seasoned with herbs." },
        { name: "Thai Beef In Red Curry", price: "559 BDT", description: "Simmered in a rich, aromatic Thai red curry sauce." },
        { name: "Thai Beef In Green Curry", price: "559 BDT", description: "Simmered in a rich, aromatic Thai green curry sauce." },
    ]
  },
  {
    category: "Seafood",
    items: [
        { name: "Stir-Fried Calamari", price: "449 BDT", description: "Calamari in spicy red pepper sauce." },
        { name: "Oriental Chili Fish", price: "459 BDT", description: "Fish and capsicum cooked in chili oil and soy sauce." },
        { name: "Hunan Prawn", price: "489 BDT", description: "Stir-fried chunky prawn in a blend of chili and soy sauce." },
        { name: "Naga Prawn", price: "499 BDT", description: "Prawn stir-fried in garlic and house special chili." },
        { name: "Fisherman's Basket", price: "499 BDT", description: "Sliced fish, squid and shrimp in a mixture of basil and oriental sauces." },
        { name: "PL Special Chili Crab", price: "499 BDT", description: "Crab with a spicy, savory sauce." },
        { name: "Spicy Prawn Sizzling", price: "519 BDT", description: "Served sizzling hot on a cast iron plate." },
    ],
  },
  {
    category: "Vegetables & Rice Bowls",
    items: [
        { name: "Thai Mixed Vegetables", price: "299 BDT", description: "Seasonal vegetables stir-fried in a fragrant Thai-style sauce." },
        { name: "Butter Sautéed Vegetables", price: "339 BDT", description: "Gently sautéed in creamy butter." },
        { name: "Spicy Garlic Mushroom", price: "349 BDT", description: "Sautéed mushrooms in a fiery garlic-infused sauce." },
        { name: "Sea Food Rice Bowl", price: "499 BDT" },
        { name: "PL Special Rice Bowl", price: "475 BDT" },
        { name: "Chilli Chicken Rice Bowl", price: "455 BDT" },
        { name: "Naga Rice Bowl", price: "460 BDT" },
        { name: "Tomyum Rice Bowl", price: "480 BDT" },
        { name: "Student Meal", price: "350 BDT" },
    ]
  },
  {
    category: "Platters & Sets",
    items: [
        { name: "Classic Set Meal (Chicken)", price: "450 BDT", description: "Thai Fried Rice, Bangkok Fried Chicken, Chicken Curry, Thai Style Vegetable." },
        { name: "Classic Set Meal (Seafood)", price: "500 BDT", description: "Prawn Tempura, Hot Chilli Fish Curry, Thai Special Fried Rice, Thai Mixed Vegetables." },
        { name: "Classic Set Meal (Beef)", price: "500 BDT", description: "Thai Special Fried Rice, Bangkok Fried Chicken, Beef Curry, Thai Style Vegetable." },
        { name: "Sizzling Steak Platter (BBQ)", price: "590 BDT", description: "BBQ Chicken Steak with Sautéed Vegetable, Roasted Tomatoes, and Thai Fried Rice/Mashed potatoes." },
        { name: "Sizzling Steak Platter (Peri Peri)", price: "590 BDT", description: "Peri Peri Chicken Steak with Sautéed Vegetable, Wedges, and Thai Fried Rice/Mashed potatoes." },
        { name: "Sizzling Steak Platter (Mongolian)", price: "590 BDT", description: "Mongolian Chicken Steak with Sautéed Vegetable, Roasted Tomatoes, and Thai Fried Rice/Mashed potatoes." },
        { name: "PL Special Bento Box", price: "690 BDT" },
        { name: "Signature Bento Box", price: "690 BDT" },
        { name: "Couple Platter", price: "1699 BDT", description: "A complete dinner for two, includes soup, appetizer, main course, drinks and water." },
        { name: "Family Platter", price: "4999 BDT", description: "A grand feast for four, includes soup, appetizers, main courses, sides, drinks and dessert." },
    ]
  },
  {
    category: "Fast Food",
    items: [
        { name: "Creamy Chicken Fosulia Pasta", price: "450 BDT" },
        { name: "Creamy Shrimp Pasta", price: "450 BDT" },
        { name: "Cheese Cream Pasta", price: "Chicken 450 / Beef 550" },
        { name: "Spicy Cheese Cream Pasta", price: "Chicken 450 / Beef 550" },
        { name: "Pasta Alfredo", price: "Chicken 450 / Beef 550" },
        { name: "Posh Lounge Special Pasta", price: "Chicken 450 / Beef 550" },
        { name: "Pasta Fusion", price: "Chicken 450 / Beef 550" },
        { name: "Spicy BBQ Chicken Sandwich", price: "345 BDT" },
        { name: "Posh Lounge Special Cheese Sandwich", price: "345 BDT" },
        { name: "Chicken Club Sandwich", price: "390 BDT" },
        { name: "Italian Sandwich", price: "360 BDT" },
        { name: "Posh Lounges Jumbo Burger", price: "Chicken 345 / Beef 460" },
        { name: "Spicy Juicy Burger", price: "Chicken 345 / Beef 460" },
    ]
  },
  {
    category: "Pizza",
    items: [
        { name: "Margarita Pizza", price: "550/650/950", description: "M/L/F. The Classic and Original." },
        { name: "The 4 Cheese", price: "650/750/1095", description: "M/L/F. With crispy beef bacon bits." },
        { name: "Spicy BBQ", price: "650/750/1095", description: "M/L/F. Naga chicken with bacon." },
        { name: "The Kala Bhuna Pizza", price: "850/950/1295", description: "M/L/F. Authentic taste of beef." },
        { name: "The Pepperonia", price: "695/795/1195", description: "M/L/F. Classic pepperoni pizza." },
        { name: "Mushroom Lovers Pizza", price: "650/750/1095", description: "M/L/F. With loaded mushroom." },
        { name: "Chicken Alfredo Pizza", price: "650/750/1095", description: "M/L/F. Creamy Pizza." },
        { name: "Shrimp Lovers Pizza", price: "850/995/1195", description: "M/L/F. Spicy Pizza." },
        { name: "PL Special Pizza", price: "850/995/1195", description: "M/L/F." },
        { name: "Spicy Corned Beef", price: "749/849/1149", description: "M/L/F." },
        { name: "Beef Bolognese", price: "749/849/1149", description: "M/L/F." },
        { name: "Thai Pizza", price: "799/999/1199", description: "M/L/F." },
        { name: "Meat Lovers", price: "799/999/1199", description: "M/L/F." },
    ]
  },
  {
    category: "Drinks",
    items: [
        { name: "Espresso", price: "170 / 190", description: "Single / Double" },
        { name: "Americano", price: "190" },
        { name: "Cappuccino", price: "240" },
        { name: "Cafe Latte", price: "240" },
        { name: "Posh Lounge Mocha", price: "350" },
        { name: "Hot Chocolate", price: "260" },
        { name: "Orange/Pineapple Juice", price: "220" },
        { name: "Milk Chocolicious", price: "250" },
        { name: "Oreo Bliss", price: "250" },
        { name: "Nutella Shake", price: "250" },
        { name: "Limoncello Spritz", price: "200" },
        { name: "Mango Mint Mojito", price: "290" },
        { name: "Mineral Water", price: "20" },
        { name: "Soft Drinks", price: "50" },
    ]
  },
  {
    category: "Desserts & Teas",
    items: [
        { name: "Golden Drops In Coconut Snow", price: "246 BDT" },
        { name: "Coconut Sunset Delight", price: "286 BDT" },
        { name: "Honey Silk With Nut Crystals", price: "236 BDT" },
        { name: "Chocolate Brownie", price: "150 / 200", description: "Regular / With Ice Cream" },
        { name: "Vanilla/Chocolate/Strawberry Ice Cream", price: "150 BDT" },
        { name: "Chocolate/Oreo Mousse", price: "175 BDT" },
        { name: "Straw Perl (Strawberry)", price: "349 BDT" },
        { name: "Perl Blue (Blueberry)", price: "349 BDT" },
        { name: "Green Perl (Apple)", price: "349 BDT" },
        { name: "Mellow Perl (Mango)", price: "349 BDT" },
    ]
  }
];
