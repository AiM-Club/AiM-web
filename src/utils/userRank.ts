import BronzePng from "@/assets/Bronze.svg";
import SilverPng from "@/assets/Silver.svg";
import GoldPng from "@/assets/Gold.svg";
import DiamondPng from "@/assets/Diamond.svg";

const rankImgMap: Record<string, string> = {
  bronze: BronzePng,
  silver: SilverPng,
  gold: GoldPng,
  diamond: DiamondPng,
};

export const getRankImg = (tier: string) => {
  return rankImgMap[tier];
};