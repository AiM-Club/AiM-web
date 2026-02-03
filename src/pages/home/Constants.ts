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
import type { ChallengeVSResponse } from "@/types/challenge";


export const cardVSData: ChallengeVSResponse[] = [
    {
        "challengeId": 8,
        "thumbnail": null,
        "user": {
            "userId": 2,
            "nickname": "adminuser",
            "badge": "BRONZE",
            "profileImage": {
                "uuid": "70c9cca9-be0a-4ea5-a62a-3e0fc88cf2fc",
                "fileName": "spring.png",
                "size": 103651,
                "filePath": "profile/70c9cca9-be0a-4ea5-a62a-3e0fc88cf2fc",
                "handlingType": "IMAGE"
            }
        },
        "startDate": "2026-01-20",
        "duration": "4주",
        "name": "아침 6시 기상 챌린지2",
        "fields": [],
        "tags": [],
        "job": "개발자",
        "liked": false,
        "likeCount": 0,
        "createdAt": "2026-01-19T23:22:50.33448",
        "lastModifiedAt": "2026-01-19T23:22:50.33448",
        "status": "IN_PROGRESS"
    },
];

export const fieldData = [
    { id: 1, fieldName: "ALL", name: "전체", img: AllField },
    { id: 2, fieldName: "IT", name: "IT", img: IT },
    { id: 3, fieldName: "BUSINESS", name: "경영", img: Economy },
    { id: 4, fieldName: "ECONOMICS", name: "경제", img: Manage },
    { id: 5, fieldName: "POLITICS", name: "정치", img: Politics },
    { id: 6, fieldName: "LANGUAGE", name: "어문", img: Language },
    { id: 7, fieldName: "SCIENCE", name: "자연", img: Nature },
    { id: 8, fieldName: "DESIGN", name: "디자인", img: Design },
    { id: 9, fieldName: "MUSIC", name: "음악", img: Music },
    { id: 10, fieldName: "SPORTS", name: "체육", img: PE }
];