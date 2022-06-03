const recordType = {
  appliances: "Appliances",
  equipment: "Equipment",
  electronics: "Electronics",
  general: "General",
  tools: "Tools",
  supplements: "Supplements",
  other: "other",
};

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
    icon: "washing machine",
    name: "PC",
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
        recordId: 4,
      },
      {
        id: 8,
        name: "Bedroom Ceiling Fan Light Bulbs",
        brand: "GE",
        recordId: 4,
      },
    ],
  },
  {
    id: 6,
    type: recordType.tools,
    icon: "tool",
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
];
