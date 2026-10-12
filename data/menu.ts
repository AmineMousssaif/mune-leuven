// Full Muné menu, transcribed from mune.be (October 2026).

export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  /** Short notes: vegetarian, allergens, nutrition, options. */
  notes?: string[];
  /** Small badge, e.g. "Signature" or "Best seller". */
  badge?: string;
  /** Image path under /public. */
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  footnote?: string;
  items: MenuItem[];
};

export type MenuGroup = {
  id: string;
  title: string;
  tagline: string;
  sections: MenuSection[];
};

export const MENU: MenuGroup[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    tagline: "Where rich flavours and soft mornings come together.",
    sections: [
      {
        id: "mornings",
        title: "Mornings",
        items: [
          {
            name: "Dubai Morning",
            price: "€22.90",
            badge: "Signature",
            description:
              "Our signature Shakshuka with Pesto, served with creamy labneh, hummus, grilled halloumi, Medjool dates, fresh tomatoes & cucumber, olives, warm Arabic bread and grilled baguette.",
            notes: ["Vegetarian", "Allergens: gluten, milk, sesame, egg, nuts*"],
            image: "/menu/bfast-menemen.webp",
          },
          {
            name: "Istanbul Morning",
            price: "€21.90",
            description:
              "Traditional simit served with feta white cheese, olives, fresh tomato & cucumber, honey, jam and fresh bread, with your choice of sucuk & eggs or menemen.",
            notes: [
              "Sucuk & eggs: a richly seasoned beef sausage with a bold, slightly spicy flavour",
              "Menemen: softly scrambled eggs cooked with tomatoes and peppers",
              "Vegetarian option with menemen",
              "Allergens: gluten, milk, egg, sesame",
            ],
            image: "/menu/bfast-sucuk.webp",
          },
          {
            name: "Marrakech Morning",
            price: "€19.90",
            description:
              "Traditional Moroccan msemen served with honey, creamy amlou, olives, fried eggs, Medjool dates, fresh bread and your choice of white cheese or Moroccan-style salami.",
            notes: [
              "Amlou: a traditional Moroccan spread of roasted almonds, argan oil and honey",
              "Vegetarian option with white cheese",
              "Allergens: gluten, milk, egg, nuts",
            ],
          },
          {
            name: "Paris Morning",
            price: "€19.90",
            description:
              "A classic European-style breakfast with 2 scrambled eggs, creamy avocado, a buttery croissant, butter, jam, honey, Nutella, Gouda cheese, fresh seasonal fruit, yogurt and fresh bread.",
            notes: ["Vegetarian", "Allergens: gluten, milk, egg, nuts"],
            image: "/menu/croissant-parisienne.webp",
          },
          {
            name: "Protein Morning",
            price: "€19.90",
            description:
              "A protein-packed breakfast with 2 scrambled eggs, creamy avocado, turkey & chicken breast, cottage cheese, Skyr topped with fresh seasonal fruit, and protein bread.",
            notes: ["~720 kcal · 60 g protein · 48 g carbs · 32 g fat", "Allergens: gluten, milk, egg, nuts"],
            image: "/menu/bfast-eggs.webp",
          },
          {
            name: "Kids Morning",
            price: "€8.90",
            description:
              "A fun little breakfast for our youngest guests: mini pancakes, creamy yogurt, honey, fresh seasonal fruit and a mini fried egg, served with a Babyccino.",
            notes: ["Vegetarian", "Allergens: gluten, milk, egg"],
            image: "/menu/bfast-kids.webp",
          },
        ],
      },
      {
        id: "extras",
        title: "Extras",
        items: [
          { name: "Sucuk & Eggs", price: "€9.90" },
          { name: "Menemen", price: "€9.90" },
          { name: "Scrambled Eggs", price: "€3.50" },
          { name: "Tea for 4 (pot)", price: "€9.50" },
          { name: "Bread", price: "€1.50" },
        ],
      },
    ],
  },
  {
    id: "brunch",
    title: "Brunch",
    tagline: "Fresh, vibrant dishes made to share, savour and enjoy.",
    sections: [
      {
        id: "dubai-brunch",
        title: "Dubai Brunch",
        intro: "A beautifully curated brunch that brings together our favourite flavours from around the world.",
        footnote: "Available daily from 11:00 to 19:00.",
        items: [
          {
            name: "Muné Solo Brunch",
            price: "€22.90",
            badge: "For 1",
            description:
              "Your own little Muné moment: creamy scrambled eggs, fresh avocado, grilled halloumi, creamy labneh with olive oil, marinated olives, premium Medjool dates, fresh artisan bread and a mini butter croissant.",
          },
          {
            name: "The International",
            price: "€50",
            badge: "For 2",
            description:
              "Dubai, Morocco, Türkiye and France at one table. Warm msemen, butter croissant & pain au chocolat, warm Arabic bread and grilled artisan baguette. Your choice of menemen or sucuk & eggs, with white cheese, amlou, labneh, hummus, grilled halloumi, olives and olive oil & za'atar.",
            notes: ["Includes any 2 warm drinks of your choice"],
          },
          {
            name: "Dubai Brunch",
            price: "€110",
            badge: "For 4",
            description:
              "Pistachio, strawberry cream and golden chocolate croissants, warm Arabic bread and grilled baguette, our signature Pesto Shakshuka, hummus, labneh, halloumi, feta, avocado, olives, pistachio baklava, amlou, Medjool dates, honey, caramelised walnuts and a fresh fruit selection.",
            notes: ["Finished with Dubai Tea with cardamom, Istanbul Tea, Black Tea or Marrakech Mint Tea"],
          },
        ],
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    tagline: "Fresh, colourful and full of flavour.",
    sections: [
      {
        id: "salads-list",
        title: "Salads",
        footnote: "Available daily from 08:00 to 17:00.",
        items: [
          {
            name: "Muné Chicken Salad",
            price: "€17.90",
            description:
              "Tender grilled chicken with creamy avocado, crisp cucumber, cherry tomatoes, feta and crunchy walnuts, finished with pomegranate syrup and our homemade honey mustard dressing.",
            image: "/menu/salad.webp",
          },
          {
            name: "Burrata & Pistachio Salad",
            price: "€18.90",
            description:
              "Creamy burrata with cherry tomatoes, fresh arugula and basil, topped with crunchy pistachios and finished with balsamic.",
          },
          {
            name: "Halloumi Salad",
            price: "€17.90",
            description:
              "Warm grilled halloumi with juicy pomegranate, fresh mint, cucumber and tomato, finished with our homemade honey-lime dressing.",
          },
        ],
      },
    ],
  },
  {
    id: "toasts",
    title: "Signature Toasts",
    tagline: "Flaky like a croissant. Made like bread. Unmistakably Muné.",
    sections: [
      {
        id: "croissant-toasts",
        title: "Croissant Toasts",
        intro:
          "Our signature bread is made from a croissant-style laminated dough, layered and folded with butter and toasted fresh before serving. Every toast comes with a fresh side salad.",
        items: [
          {
            name: "Chicken Deluxe",
            price: "€16.90",
            description:
              "Juicy grilled chicken with creamy avocado, crisp lettuce and fresh tomato, finished with our smooth honey mustard sauce.",
            image: "/menu/toast.webp",
          },
          {
            name: "Smoked Salmon",
            price: "€17.90",
            description:
              "Fresh salmon in our homemade creamy filling, layered with smooth avocado cream, fresh greens and our signature sauce.",
          },
          {
            name: "Garlic Scampi",
            price: "€16.90",
            description:
              "Juicy scampi in our homemade creamy garlic sauce, with crisp lettuce and rich sun-dried tomatoes.",
          },
          {
            name: "Tuna Crunch",
            price: "€14.90",
            description:
              "Creamy homemade tuna salad with crunchy pickles, finely sliced red onion and fresh peppery arugula.",
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    tagline: "From bold espresso to calming matcha moments.",
    sections: [
      {
        id: "signature-drinks",
        title: "Dubai Signature Drinks",
        items: [
          {
            name: "The Queen “Pink Golden Latte”",
            price: "€7.20",
            badge: "Signature",
            description: "An elegant, velvety pink signature latte with subtle notes of vanilla, finished with genuine 24K edible gold.",
            image: "/menu/latte-pink-golden.webp",
          },
          {
            name: "24K Golden Latte",
            price: "€6.90",
            description: "Double espresso with silky steamed milk, finished with a touch of 24K edible gold.",
            image: "/menu/latte-24k.webp",
          },
          {
            name: "Pistachio Latte",
            price: "€6.80",
            description: "Rich espresso with silky steamed milk and creamy pistachio, finished with finely crushed pistachios.",
            image: "/menu/latte-pistachio.webp",
          },
          {
            name: "Rose Water Latte",
            price: "€6.80",
            description: "Espresso with silky steamed milk, delicate rose water and a subtle touch of vanilla.",
            image: "/menu/latte-rose.webp",
          },
        ],
      },
      {
        id: "specialty-coffee",
        title: "Specialty Coffee",
        intro:
          "Muné Soul Blend, exclusively roasted for Muné by Gust Coffee: carefully selected Arabica beans for a smooth, full-bodied espresso with notes of chocolate, nuts and a naturally sweet finish.",
        items: [
          { name: "Espresso", price: "€2.80", description: "Espresso made with 100% Arabica coffee beans.", image: "/menu/coffee-espresso.webp" },
          { name: "Doppio", price: "€3.30", description: "Double shot of espresso." },
          { name: "Americano", price: "€3.70", description: "Espresso, hot water." },
          { name: "Cortado", price: "€3.50", description: "Espresso with an equal amount of warm steamed milk." },
          { name: "Cappuccino", price: "€4.30", description: "Espresso, steamed milk, creamy milk foam.", image: "/menu/coffee-cappuccino.webp" },
          { name: "Flat White", price: "€4.60", description: "Double espresso, velvety steamed milk with fine microfoam.", image: "/menu/coffee-flat.webp" },
          { name: "Caffè Latte", price: "€4.60", description: "Double espresso, steamed milk, thin layer of milk foam." },
          { name: "Latte Macchiato", price: "€4.60", description: "Steamed milk, espresso, creamy milk foam." },
          { name: "Mocha", price: "€4.90", description: "Double espresso, Belgian chocolate, steamed milk, creamy milk foam." },
          { name: "Babyccino", price: "€2.90", description: "Warm frothed milk, finished with cocoa powder or marshmallows.", image: "/menu/coffee-babyccino.webp" },
        ],
      },
      {
        id: "iced-coffee",
        title: "Iced & Shaken Coffee",
        intro: "Our espresso is freshly shaken with ice, unlocking its full aroma for a smooth, refreshing finish. Exclusively at Muné.",
        footnote: "Extra MONIN syrup +€0.60",
        items: [
          { name: "Classic Iced Coffee", price: "€5.40", description: "Double espresso poured over ice for a bold, smooth and pure coffee experience.", image: "/menu/iced-classic.webp" },
          { name: "Classic Iced Latte", price: "€5.90", description: "Double espresso layered with chilled creamy milk over ice.", image: "/menu/iced-latte.webp" },
          { name: "Shaken Iced Coffee Brown Sugar", price: "€6.20", description: "Double espresso shaken with brown sugar and ice for a bold, perfectly sweet finish.", image: "/menu/iced-shaken.webp" },
          { name: "Shaken Iced Coffee Vanilla", price: "€6.20", description: "Double espresso shaken with smooth vanilla and ice for a silky finish." },
          { name: "Spanish Iced Latte", price: "€6.70", description: "Double espresso with chilled milk and sweet condensed milk over ice, finished with a touch of cinnamon.", image: "/menu/iced-spanish.webp" },
          { name: "Rose Water Iced Latte", price: "€6.70", description: "Double espresso with chilled creamy milk, vanilla and a delicate touch of rose water over ice.", image: "/menu/iced-rose.webp" },
          { name: "Dubai Pistachio Iced Latte", price: "€6.90", badge: "Signature", description: "Double espresso with chilled milk and rich pistachio cream over ice, finished with a swirl of pistachio cream and crushed pistachios.", image: "/menu/iced-pistachio.webp" },
        ],
      },
      {
        id: "matcha",
        title: "Premium Matcha",
        intro: "Our signature Yumi matcha, ceremonial grade.",
        footnote: "MONIN purée +€0.60: mango, strawberry, passion fruit, raspberry or pineapple",
        items: [
          { name: "Hot Matcha Latte", price: "€4.50", description: "A calming mix of vibrant green matcha and creamy steamed milk.", image: "/menu/matcha-hot.webp" },
          { name: "Cold Matcha Latte", price: "€5.80", description: "Ceremonial-grade matcha with chilled creamy milk, layered over ice.", image: "/menu/matcha-cold.webp" },
          { name: "Pistachio Matcha", price: "€6.80", description: "Ceremonial-grade matcha with velvety milk and rich pistachio cream." },
          { name: "Coco Clouds", price: "€7.90", badge: "Best seller", description: "Premium matcha with creamy milk and smooth coconut purée, topped with our signature cream cloud and coconut flakes.", image: "/menu/matcha-coco.webp" },
        ],
      },
      {
        id: "tea",
        title: "Premium Tea",
        items: [
          { name: "Black Tea", price: "€4.20", description: "Classic black tea with a rich, smooth and comforting taste." },
          { name: "Istanbul Tea", price: "€4.50", description: "Traditional Turkish-style black tea, strong, aromatic and full of character.", image: "/menu/tea-istanbul.webp" },
          { name: "Dubai Tea", price: "€4.90", description: "Warm black tea infused with fragrant cardamom for an authentic Middle Eastern touch." },
          { name: "Marrakech Mint Tea", price: "€4.90", description: "Moroccan-style green tea with fresh mint: aromatic, sweet and uplifting.", image: "/menu/tea-mint.webp" },
        ],
      },
      {
        id: "iced-tea",
        title: "Homemade Iced Tea",
        intro: "Freshly homemade with our signature black tea as the base, blended with fruity flavours.",
        items: [
          { name: "Lemon Mint Iced Tea", price: "€5.60", image: "/menu/icedtea-lemon.webp" },
          { name: "Peach Iced Tea", price: "€5.90", image: "/menu/icedtea-peach.webp" },
          { name: "Mango Passion Iced Tea", price: "€5.90", image: "/menu/icedtea-mango.webp" },
        ],
      },
      {
        id: "smoothies",
        title: "Homemade Smoothies",
        items: [
          { name: "Strawberry Banana", price: "€6.90", description: "Strawberries and banana, blended with ice for a smooth, refreshing finish.", image: "/menu/smoothie-strawberry.webp" },
          { name: "Mango", price: "€7.20", description: "Sweet, juicy mango blended with ice for a rich, naturally fruity finish.", image: "/menu/smoothie-mango.webp" },
          { name: "Tropical Smoothie", price: "€7.20", description: "Mango, banana, pineapple and creamy coconut milk, blended with ice.", image: "/menu/smoothie-tropical.webp" },
          { name: "Avocado Royal Shake", price: "€8.90", description: "Fresh avocado, Medjool dates, banana and whole milk, finished with mixed nuts and a touch of honey.", image: "/menu/smoothie-avocado.webp" },
        ],
      },
      {
        id: "soft-drinks",
        title: "Soft Drinks",
        items: [
          { name: "Fritz drinks", price: "€4.80", description: "Fritz-Kola Superzero, Orange, Lemon, Apple-Cherry-Elderflower." },
          { name: "Chaudfontaine Sparkling 25 cl", price: "€3.50" },
          { name: "Chaudfontaine Still 25 cl", price: "€3.50" },
          { name: "Chaudfontaine Sparkling 1 L", price: "€7.50" },
          { name: "Chaudfontaine Still 1 L", price: "€7.50" },
        ],
      },
    ],
  },
  {
    id: "sweets",
    title: "Sweets",
    tagline: "Signature sweets, crafted only for our table.",
    sections: [
      {
        id: "dubai-cakes",
        title: "Dubai Cakes",
        items: [
          { name: "Dubai", price: "€12.90", badge: "Signature", image: "/menu/cake-dubai.webp" },
          { name: "Darky", price: "€11.90", image: "/menu/cake-darky.webp" },
          { name: "Pista", price: "€10.90", image: "/menu/cake-pista.webp" },
          { name: "Coco Loco", price: "€10.90", image: "/menu/cake-coco-loco.webp" },
          { name: "The White One", price: "€9.90", image: "/menu/cake-white-one.webp" },
          { name: "Oreo Lovers", price: "€9.90", image: "/menu/cake-oreo-lovers.webp" },
          { name: "Choconuts", price: "€9.90", image: "/menu/cake-choconuts.webp" },
          { name: "La Rouge", price: "€9.90", image: "/menu/cake-la-rouge.webp" },
        ],
      },
      {
        id: "golden-croissant",
        title: "Golden Croissant",
        items: [
          { name: "Parisienne", price: "€5.00", image: "/menu/croissant-parisienne.webp" },
          { name: "The Golden One", price: "€9.90", badge: "Signature" },
          { name: "Pistachio", price: "€7.00", image: "/menu/croissant-pistachio.webp" },
          { name: "Nutella", price: "€7.00", image: "/menu/croissant-nutella.webp" },
          { name: "Nutella Strawberry", price: "€7.00", image: "/menu/croissant-nutella-straw.webp" },
          { name: "Lotus", price: "€7.00", image: "/menu/croissant-lotus.webp" },
          { name: "Nutella Banana", price: "€7.00", image: "/menu/croissant-nutella-banana.webp" },
          { name: "Creamy Strawberry", price: "€7.00", image: "/menu/croissant-creamy-straw.webp" },
          { name: "Creamy Raspberry", price: "€7.00", image: "/menu/croissant-creamy-ras.webp" },
        ],
      },
      {
        id: "baklava",
        title: "Homemade Baklava",
        items: [
          { name: "Antep Pistachio", price: "€10.00", image: "/menu/baklava-antep.webp" },
          { name: "Walnut Baklava", price: "€10.00", image: "/menu/baklava-walnuts.webp" },
          { name: "Pistachio Rolls", price: "€8.00", image: "/menu/baklava-rolls.webp" },
          { name: "Milky Dream", price: "€7.00", image: "/menu/baklava-milky-dream.webp" },
          { name: "Dubai Milky Baklava", price: "€5.00", image: "/menu/baklava-dubai-milky.webp" },
        ],
      },
    ],
  },
];
