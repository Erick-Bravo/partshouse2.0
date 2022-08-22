const recordType = {
  appliances: "Appliances",
  equipment: "Equipment",
  electronics: "Electronics",
  general: "General",
  tools: "Tools",
  food: "Food",
  supplements: "Supplements",
  other: "other",
};

//PartsHouse
export const partsHouseData: {
  id: number;
  name: string;
  userId: number;
}[] = [
  {
    id: 1,
    name: "Home",
    userId: 1
  },
  {
    id: 2,
    name: "San Bernardino AirBnB",
    userId: 1
  },
]

// RECORD

export const recordData: {
  id: number;
  type: string;
  name: string;
  icon: string;
  brand: string;
  partsHouseId: number;
  parts: any[];
}[] = [
  {
    id: 1,
    type: recordType.appliances,
    icon: "refrigerator",
    name: "Refrigerator",
    brand: "Frigidair",
    partsHouseId: 1,
    parts: [
      {
        id: 1,
        name: "Water Filter",
        brand: "Frigidair",
        recordId: 1,
      },
    ],
  },
  {
    id: 2,
    type: recordType.equipment,
    icon: "home",
    name: "AC",
    brand: "Rheem",
    partsHouseId: 1,
    parts: [
      {
        id: 2,
        name: "14x24x1 Air Filter",
        brand: "",
        recordId: 2,
      },
    ],
  },
  {
    id: 3,
    type: recordType.electronics,
    icon: "computer",
    name: "PC",
    brand: "",
    partsHouseId: 1,
    parts: [
      {
        id: 3,
        name: "Geforce RTX 3070",
        brand: "",
        recordId: 3,
      },
      {
        id: 4,
        name: "16 gig RAM",
        brand: "Corssair",
        recordId: 3,
      },
    ],
  },
  {
    id: 4,
    type: recordType.appliances,
    icon: "laptop",
    name: "Latop",
    brand: "",
    partsHouseId: 1,
    parts: [
      {
        id: 5,
        name: "Geforce RTX 3070",
        brand: "",
        recordId: 4,
      },
      {
        id: 6,
        name: "16 gig RAM",
        brand: "Corssair",
        recordId: 4,
      },
    ],
  },
  {
    id: 5,
    type: recordType.general,
    icon: "fan",
    name: "Ceiling Fans",
    brand: "",
    partsHouseId: 1,
    parts: [
      {
        id: 7,
        name: "Bedroom Ceiling Fan Light Bulbs",
        brand: "GE",
        recordId: 5,
      },
      {
        id: 8,
        name: "Bedroom Ceiling Fan Light Bulbs",
        brand: "GE",
        recordId: 5,
      },
    ],
  },
  {
    id: 6,
    type: recordType.tools,
    icon: "saw",
    name: "Table Saw",
    brand: "Rigid",
    partsHouseId: 1,
    parts: [
      {
        id: 9,
        name: "10inch Blade",
        brand: "",
        recordId: 6,
      },
    ],
  },
  {
    id: 7,
    type: recordType.tools,
    icon: "tool",
    name: "Tools",
    brand: "",
    partsHouseId: 1,
    parts: [
      {
        id: 10,
        name: "13 in 1 Driver",
        brand: "",
        recordId: 7,
      },
      {
        id: 11,
        name: "10inch Blade",
        brand: "",
        recordId: 7,
      },
      {
        id: 12,
        name: "Woodworking Clamp",
        brand: "Dewalt",
        recordId: 7,
      },
    ],
  },
    {
      id: 8,
      type: recordType.supplements,
      icon: "fitness",
      name: "Supplements",
      brand: "",
      partsHouseId: 1,
      parts: [
        {
          id: 13,
          name: "Vitamin D3 5000cu",
          brand: "",
          recordId: 8,
        },
        {
          id: 14,
          name: "Omega-3 Oil",
          brand: "",
          recordId: 8,
        },
        {
          id: 15,
          name: "Magnesium",
          brand: "",
          recordId: 8,
        },
        {
          id: 16,
          name: "Multi-Vitamin Gummies",
          brand: "",
          recordId: 8,
        },
        {
          id: 17,
          name: "Chocolate Protein Meal Shake",
          brand: "Kachava",
          recordId: 8,
        },
      ],
    },
    {
      id: 9,
      type: recordType.appliances,
      icon: "refrigerator",
      name: "Refrigerator",
      brand: "Samsung",
      partsHouseId: 2,
      parts: []
    },
    {
      id: 10,
      type: recordType.equipment,
      icon: "home",
      name: "Air Conditioning",
      brand: "Carrier",
      partsHouseId: 2,
      parts: []
    },
    {
      id: 11,
      type: recordType.food,
      icon: "coffee",
      name: "Coffee Pods",
      brand: "Starbucks",
      partsHouseId: 2,
      parts: []
    },
];

//PARTS

export const partsData: {
  id: number;
  name: string;
  brand: string;
  recordId: number;
}[] = [
  {
    id: 1,
    name: "Water Filter",
    brand: "Frigidair",
    recordId: 1,
  },
  {
    id: 2,
    name: "14x24x1 Air Filter",
    brand: "",
    recordId: 2,
  },
  {
    id: 3,
    name: "Geforce RTX 3070",
    brand: "",
    recordId: 3,
  },
  {
    id: 4,
    name: "16 gig RAM",
    brand: "Corssair",
    recordId: 3,
  },
  {
    id: 5,
    name: "Geforce RTX 3070",
    brand: "",
    recordId: 4,
  },
  {
    id: 6,
    name: "16 gig RAM",
    brand: "Corssair",
    recordId: 4,
  },

  {
    id: 7,
    name: "Bedroom Ceiling Fan Light Bulbs",
    brand: "GE",
    recordId: 5,
  },
  {
    id: 8,
    name: "Bedroom Ceiling Fan Light Bulbs",
    brand: "GE",
    recordId: 5,
  },
  {
    id: 9,
    name: "10inch Blade",
    brand: "",
    recordId: 6,
  },
  {
    id: 10,
    name: "13 in 1 Driver",
    brand: "",
    recordId: 7,
  },
  {
    id: 11,
    name: "10inch Blade",
    brand: "",
    recordId: 7,
  },
  {
    id: 12,
    name: "Woodworking Clamp",
    brand: "Dewalt",
    recordId: 7,
  },
  {
    id: 13,
    name: "Vitamin D3 5000cu",
    brand: "",
    recordId: 8,
  },
  {
    id: 14,
    name: "Omega-3 Oil",
    brand: "",
    recordId: 8,
  },
  {
    id: 15,
    name: "Magnesium",
    brand: "",
    recordId: 8,
  },
  {
    id: 16,
    name: "Multi-Vitamin Gummies",
    brand: "",
    recordId: 8,
  },
  {
    id: 17,
    name: "Chocolate Protein Meal Shake",
    brand: "Kachava",
    recordId: 8,
  },
  {
    id: 18,
    name: "Water Filter",
    brand: "Samsung",
    recordId: 9,
  },
  {
    id: 19,
    name: "16x22x1 Air Filter",
    brand: "",
    recordId: 10,
  }
];
