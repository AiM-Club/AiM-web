import BronzePng from "@/assets/Bronze.png";
import SilverPng from "@/assets/Silver.png";
import GoldPng from "@/assets/Gold.png";
import DiamondPng from "@/assets/Diamond.png";

const rankImgMap: Record<string, string> = {
  bronze: BronzePng,
  silver: SilverPng,
  gold: GoldPng,
  diamond: DiamondPng,
};

export const getRankImg = (tier: string) => {
  return rankImgMap[tier];
};