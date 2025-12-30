import Profile from "@/assets/ProfileImg.png";
import type { CardVSProps } from "@/types/VSBattle";
import AllField from "@/assets/field/AllField.svg";
import IT from "@/assets/field/ITField.svg";
import Economy from "@/assets/field/EconomyField.svg";
import Manage from "@/assets/field/ManageField.svg";
import Politics from "@/assets/field/PoliticsField.svg";
import Language from "@/assets/field/LanguageField.svg";
import Nature from "@/assets/field/NatureField.svg";
import Design from "@/assets/field/DesignField.svg";
import Music from "@/assets/field/MusicField.svg";
import PE from "@/assets/field/PEField.svg";


export const cardVSData: CardVSProps[] = [
    {id:1, userImg:Profile, userName:"작성자", startTime: "2025.11.07", term: "n주", 
        rank:"bronze", img: Profile, title: "제목 작성은 15글자 이하", 
        field: ["분야","분야","분야"], tag: ["태그","태그","태그"], job: "직무", like:22
    },
    {id:2, userImg:Profile, userName:"작성자", startTime: "2025.11.07", term: "n주", 
        rank:"bronze", img: Profile, title: "제목 작성은 15글자 이하", 
        field: ["분야","분야","분야"], tag: ["태그","태그","태그"], job: "직무", like:22
    },
    {id:3, userImg:Profile, userName:"작성자", startTime: "2025.11.07", term: "n주", 
        rank:"bronze", img: Profile, title: "제목 작성은 15글자 이하", 
        field: ["분야","분야","분야"], tag: ["태그","태그","태그"], job: "직무", like:22
    },
    {id:4, userImg:Profile, userName:"작성자", startTime: "2025.11.07", term: "n주", 
        rank:"bronze", img: Profile, title: "제목 작성은 15글자 이하", 
        field: ["분야","분야","분야"], tag: ["태그","태그","태그"], job: "직무", like:22
    }
];

export const fieldData = [
    {id:1, name:"분야1", img: AllField},
    {id:2, name:"분야2", img: IT},
    {id:3, name:"분야3", img: Economy},
    {id:4, name:"분야4", img: Manage},
    {id:5, name:"분야5", img: Politics},
    {id:6, name:"분야6", img: Language},
    {id:7, name:"분야7", img: Nature},
    {id:8, name:"분야8", img: Design},
    {id:9, name:"분야9", img: Music},
    {id:10, name:"분야10", img: PE}
];