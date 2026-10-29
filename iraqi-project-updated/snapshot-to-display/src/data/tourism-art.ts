import type { ArtKind } from "@/components/artwork";
import type { TourismCategory } from "./tourism-content";

/** Which illustrated scene stands in for each destination (Ur uses its real photograph). */
export const TOURISM_ART: Record<string, ArtKind> = {
  ur: "ziggurat",
  babylon: "gate",
  hatra: "arch",
  "nineveh-nimrud": "winged",
  "aqar-quf": "ziggurat",
  uruk: "tablet",
  kish: "ziggurat",
  shanidar: "cave",
  "taq-kasra": "arch",
  malwiya: "minaret",
  mustansiriya: "gate",
  "erbil-citadel": "citadel",
  "kirkuk-citadel": "citadel",
  ukhaidir: "citadel",
  "qasr-al-ashaq": "citadel",
  mudhafaria: "minaret",
  "mar-mattai": "church",
  marshes: "marsh",
  "ahmad-awa": "waterfall",
  "dokan-lake": "lake",
  sarchenar: "waterfall",
  "mount-sara": "mountain",
  akre: "citadel",
  sulav: "waterfall",
  "duhok-lake": "lake",
  korek: "mountain",
  "gali-ali-bag": "mountain",
  bekhal: "waterfall",
  shanashil: "basra",
  mutanabbi: "market",
  qashla: "skyline",
  saffafeen: "market",
  "national-museum": "winged",
  "imam-ali": "shrine",
  "imam-hussein": "shrine",
  "al-abbas": "shrine",
  kadhimiya: "mosque",
  "abu-hanifa": "mosque",
  kufa: "mosque",
  sahla: "mosque",
};

export const TOURISM_TONE: Record<TourismCategory, "lapis" | "clay" | "gold" | "turq"> = {
  archaeology: "clay",
  architecture: "lapis",
  nature: "turq",
  culture: "gold",
  religious: "lapis",
};

/** The six sites the source guide highlights as UNESCO World Heritage. */
export const TOURISM_UNESCO = [
  "ur",
  "babylon",
  "hatra",
  "malwiya",
  "erbil-citadel",
  "marshes",
] as const;
