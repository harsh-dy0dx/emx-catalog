export interface PartItem {
  id: string;
  name: string;
  sku: string;
  category: "Compressor" | "Condenser" | "Evaporator" | "Blower" | "Clutch";
  brand: "Subros" | "Mahle Behr" | "Valeo" | "Delphi" | "Denso";
  vehicleMake: "Maruti Suzuki" | "Hyundai" | "Tata" | "Toyota" | "Mahindra";
  price: number;
  imageKey: string; // The file name that will match your Cloudflare R2 bucket
}

export const CATALOG_PARTS: PartItem[] = [
  {
    id: "part-1",
    name: "Dual-Piston AC Compressor",
    sku: "EMX-CMP-9042",
    category: "Compressor",
    brand: "Subros",
    vehicleMake: "Maruti Suzuki",
    price: 8450,
    imageKey: "compressor-1.webp",
  },
  {
    id: "part-2",
    name: "Micro-Channel AC Condenser",
    sku: "EMX-CND-3011",
    category: "Condenser",
    brand: "Mahle Behr",
    vehicleMake: "Hyundai",
    price: 4200,
    imageKey: "condenser-1.webp",
  },
  {
    id: "part-3",
    name: "HVAC Evaporator Core Unit",
    sku: "EMX-EVP-5520",
    category: "Evaporator",
    brand: "Valeo",
    vehicleMake: "Tata",
    price: 3650,
    imageKey: "evaporator-1.webp",
  },
  {
    id: "part-4",
    name: "Variable Displacement Compressor",
    sku: "EMX-CMP-8812",
    category: "Compressor",
    brand: "Denso",
    vehicleMake: "Toyota",
    price: 11200,
    imageKey: "compressor-2.webp",
  },
  {
    id: "part-5",
    name: "High-Output Blower Motor",
    sku: "EMX-BLW-1049",
    category: "Blower",
    brand: "Delphi",
    vehicleMake: "Mahindra",
    price: 2900,
    imageKey: "blower-1.webp",
  },
];