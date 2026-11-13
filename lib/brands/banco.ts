// Banco parts catalog.
// Isolated into its own file so future brands can be added
// without regenerating lib/data.ts.

import type { Part } from "../data";

export const BANCO_PARTS: Part[] = [
  { brand: "Banco", category: "Condenser", partNumber: "92311350CNALU", suitableFor: "ALTO / WAGON R" },
  { brand: "Banco", category: "Condenser", partNumber: "92311450NALU", suitableFor: "SWIFT / ERTIGA (T-2)" },
  { brand: "Banco", category: "Condenser", partNumber: "92311950CNALU", suitableFor: "RITZ (DSL)" },
  { brand: "Banco", category: "Condenser", partNumber: "92312150CNALU", suitableFor: "MARUTI EECO (T-2)" },
  { brand: "Banco", category: "Condenser", partNumber: "92312650CNALU", suitableFor: "ALTO (K-10)" },
  { brand: "Banco", category: "Condenser", partNumber: "92331250CNALU", suitableFor: "POLO / FABIA / VENTO" },
  { brand: "Banco", category: "Condenser", partNumber: "93521750CNALU", suitableFor: "ECO SPORTS" },
  { brand: "Banco", category: "Condenser", partNumber: "95804250CNALU", suitableFor: "BOLERO (T-1)" },
];
