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

const rankStringMap: Record<string, string> = {
  bronze: "브론즈",
  silver: "실버",
  gold: "골드",
  diamond: "다이아몬드",
};

const tierOrder = ["bronze", "silver", "gold", "diamond"];

export const getRankImg = (tier: string) => {
  return rankImgMap[tier.toLowerCase()];
};

export const getRankString = (tier: string) => {
  return rankStringMap[tier];
};

export const getNextRank = (tier: string) => {
  const currentIndex = tierOrder.indexOf(tier.toLowerCase());
  if (currentIndex === -1 || currentIndex === tierOrder.length - 1) {
    return null;
  }
  const nextTier = tierOrder[currentIndex + 1];
  return rankStringMap[nextTier];
};