import Profile from "@/assets/ProfileImg.png";
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

export const rankingListData = [
    {id:1, userImg:Profile, userName:"작성자작성자작성자작성자작성자", 
        rank:"bronze", level:10, tryNum: 10, successNum: 10, successPercent: 100},
    {id:2, userImg:Profile, userName:"작성자", 
        rank:"bronze", level:10, tryNum: 10, successNum: 10, successPercent: 100},
    {id:3, userImg:Profile, userName:"작성자", 
        rank:"bronze", level:10, tryNum: 10, successNum: 10, successPercent: 100},
    {id:4, userImg:Profile, userName:"작성자", 
        rank:"bronze", level:10, tryNum: 10, successNum: 10, successPercent: 100},
    {id:5, userImg:Profile, userName:"작성자", 
        rank:"bronze", level:10, tryNum: 10, successNum: 10, successPercent: 100},
    {id:6, userImg:Profile, userName:"작성자", 
        rank:"bronze", level:10, tryNum: 10, successNum: 10, successPercent: 100},
];

export const rankingHeader =  
    {id:"순위", userImg:"프로필", userName:"닉네임", level: "레벨", tryNum: "시도 횟수", successNum: "성공 횟수", successPercent: "성공률"};
