// 여행 기본 정보: 날짜/연락처/숙소/우리반 데이터를 여기서 관리합니다.
const travelInfo = {
  startDate: "2026-05-18",
  endDate: "2026-05-20",
  route: "동탄역 ↔ 부산역",
  transportNow: "SRT",
  gatherPlace: "동탄역",
};

const hotelInfo = {
  name: "마티에 오시리아 호텔",
  address: "부산광역시 기장군 기장읍 동부산관광7로 17",
  phone: "051-983-5500",
  stay: "2026.05.18(월) ~ 2026.05.20(수), 2박 3일",
};

const emergencyContacts = {
  headTeacher: "010-2345-6789",
  dutyTeacher: "010-3456-7890",
  emergencyNetwork: "070-1111-2222",
  police: "112",
  fire: "119",
};

const teamSchedule = {
  A: {
    label: "A팀",
    trainToBusan: "SRT309",
    trainToDongtan: "SRT348",
    highlights: {
      day1: "롯데월드, 루지, 장기자랑",
      day2: "송도해상케이블카, 요트, 흰여울문화마을",
      day3: "해운대 자유시간, 귀가",
    },
    day1: [
      { time: "06:30", activity: "동탄역 집결 및 인원 점검", category: "move" },
      { time: "07:23~09:46", activity: "SRT309 동탄역→부산역", category: "train" },
      { time: "09:46~10:20", activity: "도보 이동 후 버스 탑승", category: "move" },
      { time: "10:20~11:00", activity: "부산역→롯데월드", category: "move" },
      { time: "11:00~15:00", activity: "롯데월드 체험 + 점심 자유식", category: "activity", photo: true },
      { time: "15:00~15:10", activity: "롯데월드→루지 이동", category: "move" },
      { time: "15:10~16:50", activity: "스카이라인 루지 체험", category: "activity" },
      { time: "16:50~17:00", activity: "루지→숙소 이동", category: "move" },
      { time: "17:00~17:40", activity: "생활안내 / 안전교육 / 입실", category: "stay" },
      { time: "17:40~17:50", activity: "숙소→식당(호운정)", category: "move" },
      { time: "17:50~19:00", activity: "저녁식사(제육볶음)", category: "meal" },
      { time: "19:00~21:00", activity: "레크레이션 및 장기자랑", category: "event", note: "장소: 롯데월드 포레스트홀" },
      { time: "21:00~21:10", activity: "숙소 이동", category: "move" },
      { time: "21:10~22:00", activity: "정리 및 세면", category: "stay" },
      { time: "22:00~22:30", activity: "점검", category: "stay", note: "환자 파악 / 전달사항 / 불편사항 확인" },
      { time: "22:30", activity: "취침", category: "stay" },
    ],
    day2: [
      { time: "06:30", activity: "기상 / 세면", category: "stay" },
      { time: "06:50~08:10", activity: "아침식사(호텔 뷔페식)", category: "meal" },
      { time: "08:30", activity: "출발", category: "move" },
      { time: "09:00~09:50", activity: "숙소→송도해상케이블카", category: "move" },
      { time: "09:50~11:30", activity: "송도해상케이블카 체험", category: "activity", photo: true },
      { time: "11:30~12:00", activity: "이동", category: "move" },
      { time: "12:00~14:00", activity: "국제시장·부평동 먹자골목 자유식", category: "meal" },
      { time: "14:00~14:20", activity: "이동", category: "move" },
      { time: "14:20~15:20", activity: "흰여울문화마을 체험", category: "activity" },
      { time: "15:20~15:40", activity: "이동", category: "move" },
      { time: "15:40~17:00", activity: "요트체험(영도 북항 일대)", category: "activity", photo: true },
      { time: "17:00~17:40", activity: "이동", category: "move" },
      { time: "17:40~18:40", activity: "저녁식사(중국식 뷔페)", category: "meal" },
      { time: "18:50~22:00", activity: "조별활동 / 휴식 / 정리", category: "stay" },
      { time: "22:00~22:30", activity: "점검", category: "stay" },
      { time: "22:30", activity: "취침", category: "stay" },
    ],
    day3: [
      { time: "07:00", activity: "기상 / 세면", category: "stay" },
      { time: "07:30~08:30", activity: "아침식사(호텔 뷔페식)", category: "meal" },
      { time: "08:30", activity: "출발", category: "move" },
      { time: "09:10~10:40", activity: "블루라인 해변열차 체험", category: "activity" },
      { time: "10:40~14:10", activity: "해운대해수욕장 견학 + 자유식", category: "activity", photo: true },
      { time: "14:10~14:50", activity: "해운대→부산역 이동", category: "move" },
      { time: "14:50~15:39", activity: "인원 점검 및 탑승 준비", category: "move" },
      { time: "15:39~17:52", activity: "SRT348 부산역→동탄역", category: "train" },
      { time: "17:52~18:00", activity: "동탄역 도착 / 종례 후 해산", category: "return" },
    ],
  },
  B: {
    label: "B팀",
    trainToBusan: "SRT311",
    trainToDongtan: "SRT352",
    highlights: {
      day1: "롯데월드, 루지, 장기자랑",
      day2: "해운대해수욕장, 요트, 흰여울문화마을",
      day3: "송도해상케이블카, 국제시장, 귀가",
    },
    day1: [
      { time: "07:00", activity: "동탄역 집결 및 인원 점검", category: "move" },
      { time: "07:43~09:56", activity: "SRT311 동탄역→부산역", category: "train" },
      { time: "09:56~10:30", activity: "도보 이동 후 버스 탑승", category: "move" },
      { time: "10:30~11:10", activity: "부산역→롯데월드", category: "move" },
      { time: "11:10~15:10", activity: "롯데월드 체험 + 점심 자유식", category: "activity", photo: true },
      { time: "15:10~15:20", activity: "롯데월드→루지 이동", category: "move" },
      { time: "15:20~17:00", activity: "스카이라인 루지 체험", category: "activity" },
      { time: "17:00~17:40", activity: "생활안내 / 안전교육 / 입실", category: "stay" },
      { time: "17:40~17:50", activity: "숙소→식당(더테이블 오시리아)", category: "move" },
      { time: "17:50~19:00", activity: "저녁식사(중국식 뷔페)", category: "meal" },
      { time: "19:00~21:00", activity: "레크레이션 및 장기자랑", category: "event", note: "장소: 롯데월드 포레스트홀" },
      { time: "21:00~21:10", activity: "숙소 이동", category: "move" },
      { time: "21:10~22:00", activity: "정리 및 세면", category: "stay" },
      { time: "22:00~22:30", activity: "점검", category: "stay", note: "환자 파악 / 전달사항 / 불편사항 확인" },
      { time: "22:30", activity: "취침", category: "stay" },
    ],
    day2: [
      { time: "06:30", activity: "기상 / 세면 / 방정리", category: "stay" },
      { time: "06:50~08:10", activity: "아침식사(호텔 뷔페식)", category: "meal" },
      { time: "08:30", activity: "출발", category: "move" },
      { time: "09:30~10:30", activity: "블루라인 해변열차 체험", category: "activity" },
      { time: "10:30~13:00", activity: "해운대해수욕장 견학 + 자유식", category: "activity", photo: true },
      { time: "13:40~15:00", activity: "요트체험(영도 북항 일대)", category: "activity", photo: true },
      { time: "15:20~17:00", activity: "흰여울문화마을 체험", category: "activity" },
      { time: "17:40~18:40", activity: "저녁식사(제육볶음)", category: "meal" },
      { time: "18:50~22:00", activity: "조별활동 / 휴식 / 정리", category: "stay" },
      { time: "22:00~22:30", activity: "점검", category: "stay" },
      { time: "22:30", activity: "취침", category: "stay" },
    ],
    day3: [
      { time: "07:00", activity: "기상 / 세면", category: "stay" },
      { time: "07:30~08:30", activity: "아침식사(호텔 뷔페식)", category: "meal" },
      { time: "08:30", activity: "출발", category: "move" },
      { time: "09:50~11:50", activity: "송도해상케이블카 체험", category: "activity", photo: true },
      { time: "12:10~15:00", activity: "국제시장·부평동 자유식", category: "meal" },
      { time: "15:10~15:59", activity: "인원 점검 및 탑승 준비", category: "move" },
      { time: "15:59~18:29", activity: "SRT352 부산역→동탄역", category: "train" },
      { time: "18:29~18:40", activity: "동탄역 도착 / 종례 후 해산", category: "return" },
    ],
  },
};

const dayMessages = {
  day1: { date: "첫째 날 일정 (5.18 월)", lead: "A팀: 1, 2, 3, 4, 9, 12반 / B팀: 5, 6, 7, 8, 10, 11반" },
  day2: { date: "둘째 날 일정 (5.19 화)", lead: "A팀: 1, 2, 3, 4, 9, 12반 / B팀: 5, 6, 7, 8, 10, 11반" },
  day3: { date: "셋째 날 일정 (5.20 수)", lead: "A팀: 1, 2, 3, 4, 9, 12반 / B팀: 5, 6, 7, 8, 10, 11반" },
};

const dayHighlightCards = {
  day1: {
    A: ["집결", "SRT", "도착", "롯데월드·점심", "루지", "저녁식사", "레크리에이션", "숙소"],
    B: ["집결", "SRT", "도착", "롯데월드·점심", "루지", "저녁식사", "레크리에이션", "숙소"],
  },
  day2: {
    A: ["출발", "케이블카", "점심자유식", "흰여울", "요트", "저녁식사", "숙소"],
    B: ["출발", "해변열차", "해운대·점심", "요트", "흰여울", "저녁식사", "숙소"],
  },
  day3: {
    A: ["출발", "해변열차", "해운대·점심", "부산역 이동", "SRT", "귀가"],
    B: ["출발", "케이블카", "국제시장 자유식", "부산역 이동", "SRT", "귀가"],
  },
};

const teamReturnArrivalTimes = {
  A: "17:52",
  B: "18:29",
};

const teamGatherTimes = {
  A: "06:30 동탄역 집결",
  B: "07:00 동탄역 집결",
};

const presentationSlides = {
  notice: [
    { title: "수학여행 전 꼭 기억할 3가지", bullets: ["시간을 지켜서 집합한다.", "단체 행동 원칙을 지킨다.", "문제가 생기면 즉시 보고한다."], emoji: "✅", footer: "기본 수칙을 지키면 모두가 편안하다." },
    { title: "필수 준비물", bullets: ["세면도구를 준비한다.", "여벌 옷을 준비한다.", "충전기를 챙긴다.", "상비약을 챙긴다.", "개인 물병을 챙긴다."], emoji: "🎒", footer: "준비물은 전날 밤에 다시 점검한다." },
    { title: "건강 관리", bullets: ["멀미약은 미리 복용한다.", "처방약은 스스로 챙긴다.", "아프면 교사에게 바로 알린다."], emoji: "💊", footer: "몸 상태를 숨기지 않고 바로 공유한다." },
    { title: "이동 예절", bullets: ["큰 소리는 자제한다.", "자리 이동은 최소화한다.", "쓰레기는 정리한 뒤 하차한다."], emoji: "🚌", footer: "질서는 모두의 안전을 지킨다." },
    { title: "즐거운 여행은 준비에서 시작됩니다", bullets: ["서로 배려하며 즐거운 추억을 만든다."], emoji: "🎒", footer: "함께 준비하면 여행이 더 즐겁다." },
  ],
  move: [
    { title: "출발 전 체크", bullets: ["10분 전 도착한다.", "화장실을 미리 다녀온다.", "짐 정리를 완료한다."], emoji: "📍", footer: "출발 전 3가지를 확인한다." },
    { title: "SRT 탑승 규칙", bullets: ["객차를 확인한다.", "지정 좌석에 착석한다.", "통로를 막지 않는다."], emoji: "🚄", footer: "탑승 질서를 지키면 이동이 편하다." },
    { title: "버스 탑승 규칙", bullets: ["안전벨트를 착용한다.", "자리 이동을 하지 않는다.", "창밖으로 손을 내밀지 않는다."], emoji: "🚌", footer: "버스에서는 안전수칙을 우선한다." },
    { title: "도착 후 행동", bullets: ["교사 지시를 따른다.", "조별로 이동한다.", "무단 이탈하지 않는다."], emoji: "✅", footer: "도착 직후 행동이 하루를 결정한다." },
    { title: "질서가 여행의 시작입니다", bullets: ["차분한 이동이 모두를 안전하게 만든다."], emoji: "🚄", footer: "질서를 지키면 일정이 더 즐겁다." },
  ],
  hotel: [
    { title: "숙소 생활 기본 수칙", bullets: ["배정된 객실 기준으로 생활한다.", "공용 공간에서는 예절을 지킨다.", "소등과 점호 시간을 확인한다."], emoji: "🏨", footer: "숙소는 함께 사용하는 공간이다." },
    { title: "객실 이용", bullets: ["객실 이동을 하지 않는다.", "카드키 분실에 주의한다.", "타 객실 출입을 하지 않는다."], emoji: "🛏️", footer: "객실 질서가 숙소 생활의 기본이다." },
    { title: "야간 생활", bullets: ["고성방가를 하지 않는다.", "취침 시간을 준수한다.", "복도에서 뛰지 않는다."], emoji: "🌙", footer: "야간에는 서로의 휴식을 배려한다." },
    { title: "문제 발생 시", bullets: ["즉시 교사를 호출한다.", "혼자 해결하려 하지 않는다.", "상황을 정확히 전달한다."], emoji: "📞", footer: "문제는 즉시 공유하면 빠르게 해결된다." },
    { title: "좋은 매너가 좋은 추억을 만듭니다", bullets: ["배려와 예절을 지키며 모두가 편안한 숙소 생활을 만든다."], emoji: "🏨", footer: "매너가 여행의 인상을 만든다." },
  ],
  activity: [
    { title: "1일차 활동" },
    { title: "2, 3일차 활동" },
  ],
};

const SAFETY_SLIDE_BASE_DIR_CANDIDATES = [
  "./수학여행 사전교육",
  "../수학여행 사전교육",
  "./사전교육",
  "../사전교육",
];
const SAFETY_SLIDE_EXT_CANDIDATES = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG", "webp", "WEBP"];
const ACTIVITY_IMAGE_BASE_DIR_CANDIDATES = [
  "./체험활동 이미지",
  "../체험활동 이미지",
  "./체험활동이미지",
  "../체험활동이미지",
];
const ACTIVITY_IMAGE_EXT_CANDIDATES = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG", "webp", "WEBP"];
const activityImageNameCandidates = {
  luge: ["루지체험", "루지"],
  lotteworld: ["롯데월드", "롯데 월드"],
  recreation: ["레크리에이션", "레크레이션"],
  cablecar: ["송도해상케이블카", "송도해상 케이블카", "송도케이블카"],
  whiteyeoul: ["흰여울문화마을", "흰여울 문화마을"],
  yacht: ["요트체험", "요트 체험", "요트"],
  blueline: ["블루라인해변열차", "블루라인 해변열차", "해변열차"],
  haeundae: ["해운대견학", "해운대 견학", "해운대"],
};

const safetyPresentationFlow = Array.from({ length: 27 }, (_, index) => {
  const slideNo = index + 1;
  return {
    type: "image",
    slideNo,
    alt: `사전교육 슬라이드 ${slideNo}`,
  };
});

const teamByClass = {
  "1반": "A", "2반": "A", "3반": "A", "4반": "A", "9반": "A", "12반": "A",
  "5반": "B", "6반": "B", "7반": "B", "8반": "B", "10반": "B", "11반": "B",
};

const classData = {};
for (let i = 1; i <= 12; i += 1) {
  const className = `${i}반`;
  const team = teamByClass[className];
  const gatherTime = teamGatherTimes[team];
  const teamTrain = teamSchedule[team];
  const dayFlow = {
    day1: (dayHighlightCards.day1?.[team] || []).join(" → "),
    day2: (dayHighlightCards.day2?.[team] || []).join(" → "),
    day3: (dayHighlightCards.day3?.[team] || []).join(" → "),
  };
  classData[className] = {
    team,
    teacher: `담임교사 ${i}`,
    phone: `010-9000-${String(i).padStart(4, "0")}`,
    gatherTime,
    gatherMove: `${gatherTime} → ${travelInfo.transportNow} 탑승`,
    trainToBusan: teamTrain.trainToBusan,
    trainToDongtan: teamTrain.trainToDongtan,
    returnArrival: teamReturnArrivalTimes[team],
    rooms: [`${700 + i}호 4명`, `${710 + i}호 4명`, `${720 + i}호 4명`],
    groups: ["1조: 1~5번", "2조: 6~10번", "3조: 11~15번"],
    notes: ["집합 시간 10분 전 도착", "개인 상비약 필수 지참", "문제 발생 시 즉시 교사에게 보고"],
    dayFlow,
  };
}

const modalData = {
  "notice-banned": {
    title: "필수 준비물 체크",
    sections: [{ heading: "출발 전 준비", items: ["여벌 옷과 속옷, 양말 준비", "세면도구 및 개인 위생용품 준비", "개인 상비약 및 멀미약 준비", "충전기·보조배터리·개인 물병 준비", "우산/우의 및 간단한 필기구 준비"] }],
  },
  "notice-medicine": {
    title: "개인 건강·상비약 안내",
    sections: [{ heading: "건강 관리", items: ["멀미약은 탑승 전에 <strong>미리 복용</strong>한다.", "<strong>개인 처방약</strong>은 빠뜨리지 않도록 <strong>별도로</strong> 챙긴다.", "두통약, 소화제 등 필요한 약품은 <strong>미리 준비</strong>한다.", "몸 상태에 <strong>이상이 느껴지면 교사에게</strong> 바로 알린다."] }],
  },
  "notice-transport": {
    title: "열차·버스 탑승 시 유의사항",
    sections: [{ heading: "이동 기본 수칙", items: ["집합 시간에 맞춰 <strong>여유 있게</strong> 도착한다.", "<strong>지정된 좌석</strong>에 차분히 착석한다.", "차량 안에서는 <strong>이동을 최소화</strong>한다.", "다른 사람을 배려하며 <strong>적당한 목소리</strong>로 대화한다.", "쓰레기는 모아서 <strong>정리한 뒤 하차</strong>한다.", "버스 탑승 시 <strong>안전벨트</strong>를 꼭 착용한다."] }],
  },
  "notice-hotel": {
    title: "숙소 이용 시 유의사항",
    sections: [{ heading: "숙소 생활수칙", items: ["객실은 <strong>배정된 공간</strong>을 기준으로 이용한다.", "야간에는 숙소 내에서 <strong>안전하게 생활</strong>한다.", "늦은 시간에는 주변을 배려해 <strong>조용히 생활</strong>한다.", "시설물은 내 물건처럼 <strong>소중히 사용</strong>한다.", "취침 시간에 맞춰 <strong>충분히 휴식</strong>한다.", "문제가 생기면 <strong>교사에게</strong> 바로 알린다."] }],
  },
  "notice-restricted": {
    title: "휴대 금지 물품",
    sections: [{ heading: "출발 전 확인", items: ["고가 물품 지참 금지", "게임기 / 도박성 물품 금지", "칼 / 라이터 등 위험 물품 금지", "담배 / 주류 절대 금지", "적발 시 학교 규정에 따라 조치"] }],
  },
  "notice-dress": {
    title: "복장 및 신발 안내",
    sections: [{ heading: "복장 기준", items: ["활동하기 편한 복장 착용", "운동화 착용 권장", "슬리퍼 / 구두 금지", "노출 심한 복장 금지", "날씨 대비 겉옷 준비"] }],
  },
  "notice-money": {
    title: "용돈 / 소지품 관리",
    sections: [{ heading: "개인 관리 수칙", items: ["현금은 최소한만 소지", "체크카드 사용 권장", "지갑 / 휴대폰 본인 관리", "분실 시 즉시 교사에게 보고"] }],
  },
  "sos-sick": {
    title: "몸이 아플 때",
    sections: [{ heading: "즉시 행동", items: ["참지 말고 즉시 교사에게 알리기", "복통, 두통, 멀미도 바로 말하기", "무리해서 일정 참여 금지", "개인 약 복용 여부 전달"] }],
  },
  "sos-lost": {
    title: "길을 잃었을 때",
    sections: [{ heading: "침착하게", items: ["당황하지 말기", "현재 위치에서 이동 멈추기", "담임교사 연락", "혼자 찾으러 돌아다니지 않기"] }],
  },
  "sos-friend": {
    title: "친구가 안 보일 때",
    sections: [{ heading: "조별 확인", items: ["조원끼리 먼저 확인", "즉시 교사에게 알리기", "혼자 멀리 찾으러 가지 않기", "마지막 위치 전달하기"] }],
  },
  "sos-accident": {
    title: "사고가 났을 때",
    sections: [{ heading: "현장 안전", items: ["즉시 주변 어른 또는 교사 호출", "다친 사람 함부로 이동 금지", "장난 및 촬영 금지", "지시에 따르기"] }],
  },
  "sos-contacts": {
    title: "긴급 연락 안내",
    sections: [{ heading: "비상 연락처", items: [`담임교사 연락처: ${emergencyContacts.homeroomTeacher}`, `부장교사 연락처: ${emergencyContacts.headTeacher}`, `비상연락망: ${emergencyContacts.emergencyNetwork}`, `경찰: ${emergencyContacts.police}`, `소방/구급: ${emergencyContacts.fire}`] }],
  },
  "move-gather": {
    title: "집결",
    sections: [{ heading: "출발 전", items: [`집결 장소: <strong class="text-alert">${travelInfo.gatherPlace}</strong>`, "<span class=\"team-badge team-badge--A\">A팀</span> <strong class=\"text-alert\">집결 시간</strong>: <strong class=\"text-alert\">06:30</strong>", "<span class=\"team-badge team-badge--B\">B팀</span> <strong class=\"text-alert\">집결 시간</strong>: <strong class=\"text-alert\">07:00</strong>", `이동 구간: ${travelInfo.route}`, `${travelInfo.transportNow} 탑승 전 인원 점검`, "멀미약은 출발 30분 전 복용", "몸 상태 이상 시 즉시 보고", "무리한 이동 금지"] }],
  },
  "move-srt": {
    title: "SRT 탑승",
    sections: [{ heading: "열차 이용", items: ["지정 객차 / 좌석 확인", "승차 질서 준수", "열차 내 이동 자제", "하차 전 개인 물품 확인"] }],
  },
  "move-bus": {
    title: "버스 탑승",
    sections: [{ heading: "버스 이용", items: ["지정 차량 탑승", "안전벨트 착용", "자리 이동 금지", "창밖으로 손 내밀지 않기"] }],
  },
  "move-attendance": {
    title: "출석 확인",
    sections: [{ heading: "인원 점검", items: ["탑승 전 반별 인원 최종 확인", "조장 보고 후 교사 재확인", "결원 발생 시 즉시 보고", "무단 이동 없이 확인 완료 후 출발"] }],
  },
  "move-rules": {
    title: "이동 중 생활수칙",
    sections: [{ heading: "차량 내 질서", items: ["큰 소리 금지", "쓰레기 정리", "통로 막지 않기", "다른 승객 배려"] }],
  },
  "move-arrival": {
    title: "도착 후 행동 안내",
    sections: [{ heading: "도착 직후", items: ["인솔교사 지시에 따라 이동", "무단 이탈 금지", "조별 이동 준비", "짐 분실 주의"] }],
  },
  "move-flow": {
    title: "이동 절차",
    sections: [{ heading: "이동 순서", items: ["1️⃣ 집결 → 2️⃣ 출석 확인 → 3️⃣ 팀별 이동 → 4️⃣ 객차 확인 → 5️⃣ 탑승"] }],
  },
  "move-health": {
    title: "멀미 / 건강 안내",
    sections: [{ heading: "건강 관리", items: ["멀미약은 출발 30분 전 복용", "몸 상태 이상 시 즉시 보고", "무리한 이동 금지"] }],
  },
  "hotel-room": {
    title: "객실",
    sections: [{ heading: "객실 배정", items: ["객실 배정표 확인", "객실 무단 변경 금지", "카드키 분실 주의", "타 객실 출입 금지"] }],
  },
  "hotel-living": {
    title: "생활수칙",
    sections: [{ heading: "공동 생활", items: ["고성방가 금지", "복도 뛰지 않기", "시설물 파손 주의", "쓰레기 정리", "외부인 접촉 금지"] }],
  },
  "hotel-sleep": {
    title: "취침",
    sections: [{ heading: "야간 규칙", items: ["취침 시간 준수", "점호 시간 확인", "야간 외출 금지", "소등 후 소란 금지"] }],
  },
  "hotel-facility": {
    title: "편의시설",
    sections: [{ heading: "공용시설", items: ["편의점 위치", "정수기 위치", "엘리베이터 예절", "공용 공간 이용 규칙"] }],
  },
  "hotel-delivery": {
    title: "배달",
    sections: [{ heading: "배달 주문", items: ["허용 시간 준수", "지정 장소 수령", "객실 소란 금지", "쓰레기 정리 필수", "무단 주문 금지"] }],
  },
  "hotel-checkout": {
    title: "체크아웃",
    sections: [{ heading: "퇴실 준비", items: ["기상 시간", "짐 정리", "분실물 확인", "객실 상태 점검", "정해진 시간 집합"] }],
  },
  "hotel-ban": {
    title: "숙소 생활 금지행위",
    sections: [{ heading: "반드시 금지", items: ["타 객실 무단 출입 금지", "베개 싸움 / 장난 금지", "이성 객실 왕래 금지", "야간 무단 외출 금지", "고성방가 금지"] }],
  },
  "hotel-lost": {
    title: "분실물 안내",
    sections: [{ heading: "분실 예방", items: ["카드키 본인 관리", "휴대폰 / 충전기 확인", "퇴실 전 분실물 점검", "발견 시 즉시 교사 보고"] }],
  },
};

const moveInlineGuideCards = [
  { id: "move-gather", icon: "📍", desc: "A/B팀 집결 시간과 장소 확인" },
  { id: "move-srt", icon: "🚄", desc: "객차·좌석 및 하차 전 체크" },
  { id: "move-bus", icon: "🚌", desc: "차량 배정 및 안전벨트 수칙" },
  { id: "move-attendance", icon: "🧑‍🏫", desc: "출발 직전 반별 인원 최종 확인" },
];

const hotelInlineGuideCards = [
  {
    id: "hotel-facility",
    icon: "🏪",
    desc: "정수기·편의점·공용시설 이용",
    action: {
      label: "근처 편의점",
      href: "https://map.naver.com/p/search/%EB%A7%88%ED%8B%B0%EC%97%90%20%EC%98%A4%EC%8B%9C%EB%A6%AC%EC%95%84%20%EA%B7%BC%EC%B2%98%20%ED%8E%B8%EC%9D%98%EC%A0%90?c=15.00,0,0,0,dh",
    },
  },
  {
    id: "hotel-delivery",
    icon: "🛵",
    desc: "허용 시간과 수령 방법",
    action: {
      label: "근처 음식점",
      href: "https://map.naver.com/p/search/%EB%A7%88%ED%8B%B0%EC%97%90%20%EC%98%A4%EC%8B%9C%EB%A6%AC%EC%95%84%20%EA%B7%BC%EC%B2%98%20%EB%B0%B0%EB%8B%AC?c=15.00,0,0,0,dh",
    },
  },
];

const tabButtons = [...document.querySelectorAll(".step-pill[data-step]")];
const panels = [...document.querySelectorAll(".step-panel")];
const modalRoot = document.getElementById("modalRoot");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const ddayLabel = document.getElementById("ddayLabel");
const classSelector = document.getElementById("classSelector");
const classInfoCards = document.getElementById("classInfoCards");
const scheduleDate = document.getElementById("scheduleDate");
const scheduleMessage = document.getElementById("scheduleMessage");
const scheduleContent = document.getElementById("scheduleContent");
const daySwitchButtons = [...document.querySelectorAll(".day-switch-btn")];
const openSafetyPresentationButton = document.getElementById("openSafetyPresentation");
const openActivityPresentationButton = document.getElementById("openActivityPresentation");
const noticeInlineBoard = document.getElementById("noticeInlineBoard");
const safetyInlineCards = document.getElementById("safetyInlineCards");
const moveInlineCards = document.getElementById("moveInlineCards");
const hotelInlineCards = document.getElementById("hotelInlineCards");
const presentationRoot = document.getElementById("presentationRoot");
const presentationPage = document.getElementById("presentationPage");
const presentationImage = document.getElementById("presentationImage");
const presentationImagePlaceholder = document.getElementById("presentationImagePlaceholder");
const presentationPrev = document.getElementById("presentationPrev");
const presentationNext = document.getElementById("presentationNext");
const safetyPresentationRoot = document.getElementById("safetyPresentationRoot");
const safetyPresentationContent = document.getElementById("safetyPresentationContent");
const safetyPresentationPage = document.getElementById("safetyPresentationPage");
const safetyPresentationPrev = document.getElementById("safetyPresentationPrev");
const safetyPresentationNext = document.getElementById("safetyPresentationNext");
const PREP_CHECKLIST_STORAGE_KEY = "fieldTripPrepChecklistV1";
const TRAVEL_SELF_CHECK_STORAGE_KEY = "fieldTripSelfCheckV1";

let activeClassName = null;
let lastFocusedElement = null;
let presentationState = { open: false, group: null, index: 0, lastFocusedElement: null };
let safetyPresentationState = { open: false, index: 0, lastFocusedElement: null };
let activeScheduleDay = "day1";

function getPrepChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(PREP_CHECKLIST_STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function savePrepChecklistState(state) {
  localStorage.setItem(PREP_CHECKLIST_STORAGE_KEY, JSON.stringify(state));
}

function getSelfCheckState() {
  try {
    return JSON.parse(localStorage.getItem(TRAVEL_SELF_CHECK_STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function saveSelfCheckState(state) {
  localStorage.setItem(TRAVEL_SELF_CHECK_STORAGE_KEY, JSON.stringify(state));
}

function calculateDday(dateString) {
  const today = new Date();
  const target = new Date(dateString);
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  const diffDays = Math.ceil((target.getTime() - today.getTime()) / 86400000);
  if (diffDays > 0) return `D-${diffDays}`;
  if (diffDays === 0) return "D-DAY";
  return `D+${Math.abs(diffDays)}`;
}

function switchTab(stepId, focusTab = false) {
  tabButtons.forEach((button, idx) => {
    const isActive = button.dataset.step === stepId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
    if (focusTab && isActive) button.focus();
    button.dataset.tabIndex = String(idx);
  });
  panels.forEach((panel) => {
    panel.hidden = panel.id !== `panel-${stepId}`;
  });
}

function renderModal(modalId) {
  const info = modalData[modalId];
  if (!info) return;
  modalTitle.textContent = info.title;

  if (modalId === "notice-banned") {
    const checklistState = getPrepChecklistState();
    const items = info.sections[0]?.items || [];
    const checkedCount = items.filter((_, index) => checklistState[String(index)]).length;
    const checklistItems = items
      .map((item, index) => {
        const id = `prep-check-${index}`;
        const checked = checklistState[String(index)] ? "checked" : "";
        const checkedClass = checklistState[String(index)] ? " is-checked" : "";
        return `
          <li class="prep-check-item${checkedClass}">
            <label for="${id}" class="prep-check-label">
              <input id="${id}" type="checkbox" class="prep-check-input" data-prep-check="${index}" ${checked} />
              <span class="prep-check-text">${item}</span>
            </label>
          </li>
        `;
      })
      .join("");

    modalBody.innerHTML = `
      <article class="modal-category-card">
        <h4 class="modal-category-heading">준비물 체크리스트</h4>
        <p class="placeholder-text prep-check-progress" id="prepCheckProgress">${checkedCount} / ${items.length} 완료</p>
        <ul class="prep-check-list">${checklistItems}</ul>
      </article>
    `;
    return;
  }

  modalBody.innerHTML = info.sections
    .map((section) => {
      const list = section.items.map((item) => `<li>${item}</li>`).join("");
      return `<article class="modal-category-card"><h4 class="modal-category-heading">${section.heading}</h4><div class="modal-category-body"><ul>${list}</ul></div></article>`;
    })
    .join("");
}

function renderPresentationSlide() {
  if (!presentationState.open || !presentationState.group) return;
  const slides = presentationSlides[presentationState.group] || [];
  const slide = slides[presentationState.index];
  if (!slide) return;

  const page = presentationState.index + 1;
  const total = slides.length;
  const canPrev = presentationState.index > 0;
  const canNext = presentationState.index < total - 1;

  presentationPage.textContent = `${page} / ${total}`;
  if (slide.image) {
    presentationImage.src = slide.image;
    presentationImage.hidden = false;
    presentationImagePlaceholder.hidden = true;
  } else {
    presentationImage.hidden = true;
    presentationImage.removeAttribute("src");
    presentationImagePlaceholder.hidden = false;
    presentationImagePlaceholder.textContent = "이미지 준비중";
  }

  presentationPrev.disabled = !canPrev;
  presentationNext.disabled = !canNext;
}

function openPresentation(group) {
  if (!presentationSlides[group]) return;
  presentationState = {
    open: true,
    group,
    index: 0,
    lastFocusedElement: document.activeElement,
  };
  presentationRoot.hidden = false;
  presentationRoot.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderPresentationSlide();
  presentationNext?.focus();
}

function closePresentation() {
  if (!presentationState.open) return;
  presentationState.open = false;
  presentationRoot.hidden = true;
  presentationRoot.setAttribute("aria-hidden", "true");
  document.body.style.overflow = safetyPresentationState.open || !modalRoot.hidden ? "hidden" : "";
  if (presentationState.lastFocusedElement && typeof presentationState.lastFocusedElement.focus === "function") {
    presentationState.lastFocusedElement.focus();
  }
}

function goPresentationSlide(delta) {
  if (!presentationState.open) return;
  const slides = presentationSlides[presentationState.group] || [];
  const nextIndex = presentationState.index + delta;
  if (nextIndex < 0 || nextIndex >= slides.length) return;
  presentationState.index = nextIndex;
  renderPresentationSlide();
}

function getSafetySlideCandidates(slideNo) {
  const candidates = [];
  SAFETY_SLIDE_BASE_DIR_CANDIDATES.forEach((dir) => {
    SAFETY_SLIDE_EXT_CANDIDATES.forEach((ext) => {
      candidates.push(`${dir}/${slideNo}.${ext}`);
    });
  });
  return candidates;
}

function getActivityImageCandidates(activityKey) {
  const nameCandidates = activityImageNameCandidates[activityKey] || [];
  const candidates = [];
  ACTIVITY_IMAGE_BASE_DIR_CANDIDATES.forEach((dir) => {
    nameCandidates.forEach((name) => {
      ACTIVITY_IMAGE_EXT_CANDIDATES.forEach((ext) => {
        candidates.push(`${dir}/${name}.${ext}`);
      });
    });
  });
  return candidates;
}

function applyActivityImageSource(photoEl, candidates) {
  if (!photoEl || !candidates.length) return;
  let index = 0;

  const tryNext = () => {
    if (index >= candidates.length) {
      return;
    }

    const src = candidates[index];
    index += 1;
    const probe = new Image();
    probe.onload = () => {
      photoEl.style.backgroundImage = `url("${src}")`;
      photoEl.style.backgroundSize = "cover";
      photoEl.style.backgroundPosition = "center";
      photoEl.style.backgroundRepeat = "no-repeat";
      photoEl.classList.remove("activity-photo--placeholder");
      photoEl.textContent = "";
      const label = photoEl.getAttribute("aria-label") || "";
      photoEl.setAttribute("aria-label", label.replace(" 이미지 준비중", "") || "활동 사진");
    };
    probe.onerror = tryNext;
    probe.src = src;
  };

  tryNext();
}

function renderActivityImages() {
  const nodes = document.querySelectorAll("[data-activity-image]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-activity-image");
    if (!key) return;
    const candidates = getActivityImageCandidates(key);
    applyActivityImageSource(node, candidates);
  });
}

function applySafetySlideSource(imageEl, placeholderEl, candidates) {
  if (!imageEl || !placeholderEl) return;
  let index = 0;

  const tryNext = () => {
    if (index >= candidates.length) {
      imageEl.hidden = true;
      imageEl.removeAttribute("src");
      placeholderEl.hidden = false;
      return;
    }
    imageEl.src = candidates[index];
    index += 1;
  };

  imageEl.onload = () => {
    imageEl.hidden = false;
    placeholderEl.hidden = true;
  };

  imageEl.onerror = () => {
    tryNext();
  };

  tryNext();
}

function renderSafetyPresentationStep() {
  if (!safetyPresentationState.open || !safetyPresentationContent || !safetyPresentationPage) return;
  const step = safetyPresentationFlow[safetyPresentationState.index];
  if (!step) return;

  const current = safetyPresentationState.index + 1;
  const total = safetyPresentationFlow.length;
  safetyPresentationPage.textContent = `${current} / ${total}`;
  if (safetyPresentationPrev) safetyPresentationPrev.disabled = safetyPresentationState.index === 0;
  if (safetyPresentationNext) safetyPresentationNext.disabled = safetyPresentationState.index === total - 1;
  safetyPresentationContent.innerHTML = `
    <img class="presentation-viewer-image" id="safetyPresentationImage" alt="${step.alt}" loading="eager" hidden />
    <p class="presentation-viewer-image-placeholder" id="safetyPresentationImagePlaceholder">이미지 준비중</p>
  `;
  const imageEl = safetyPresentationContent.querySelector("#safetyPresentationImage");
  const placeholderEl = safetyPresentationContent.querySelector("#safetyPresentationImagePlaceholder");
  const candidates = getSafetySlideCandidates(step.slideNo);
  applySafetySlideSource(imageEl, placeholderEl, candidates);
}

function openSafetyPresentation() {
  if (!safetyPresentationRoot) return;
  safetyPresentationState = {
    open: true,
    index: 0,
    lastFocusedElement: document.activeElement,
  };
  safetyPresentationRoot.hidden = false;
  safetyPresentationRoot.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderSafetyPresentationStep();
  safetyPresentationNext?.focus();
}

function closeSafetyPresentation() {
  if (!safetyPresentationRoot || !safetyPresentationState.open) return;
  safetyPresentationState.open = false;
  safetyPresentationRoot.hidden = true;
  safetyPresentationRoot.setAttribute("aria-hidden", "true");
  document.body.style.overflow = presentationState.open || !modalRoot.hidden ? "hidden" : "";
  if (safetyPresentationState.lastFocusedElement && typeof safetyPresentationState.lastFocusedElement.focus === "function") {
    safetyPresentationState.lastFocusedElement.focus();
  }
}

function goSafetyPresentationStep(delta) {
  if (!safetyPresentationState.open) return;
  const nextIndex = safetyPresentationState.index + delta;
  if (nextIndex < 0 || nextIndex >= safetyPresentationFlow.length) return;
  safetyPresentationState.index = nextIndex;
  renderSafetyPresentationStep();
}

function openModal(modalId, sourceElement) {
  renderModal(modalId);
  lastFocusedElement = sourceElement || document.activeElement;
  modalRoot.hidden = false;
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalRoot.querySelector(".modal-close")?.focus();
}

function closeModal() {
  modalRoot.hidden = true;
  modalRoot.setAttribute("aria-hidden", "true");
  document.body.style.overflow = presentationState.open || safetyPresentationState.open ? "hidden" : "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function renderClassSelector() {
  const classNames = Object.keys(classData);
  classSelector.innerHTML = classNames
    .map((name) => `<button class="koppen-chip${name === activeClassName ? " is-active" : ""}" type="button" role="tab" aria-selected="${name === activeClassName}" data-class="${name}">${name}</button>`)
    .join("");
}

function renderTeamCard(teamKey, dayKey) {
  const team = teamSchedule[teamKey];
  const schedule = team[dayKey];
  const highlights = dayHighlightCards[dayKey]?.[teamKey] || [];
  const badgeClass = `team-badge--${teamKey}`;
  const highlightClass = teamKey === "A" ? "schedule-highlight-chip--A" : "schedule-highlight-chip--B";
  const arrowClass = teamKey === "A" ? "schedule-flow-arrow--A" : "schedule-flow-arrow--B";
  const categoryLabel = {
    move: "이동",
    meal: "식사",
    event: "행사",
    stay: "숙소",
    train: "열차",
    activity: "체험",
    return: "귀가",
  };
  const rows = schedule
    .map((item, index) => {
      const isGatherTime = dayKey === "day1" && index === 0;
      const isReturnTime = dayKey === "day3" && item.category === "return";
      const tag = item.category ? `<span class="schedule-tag schedule-tag--${item.category}">${categoryLabel[item.category] || item.category}</span>` : "";
      const photoChip = item.photo ? `<span class="schedule-photo-chip">📸 단체사진 촬영 포함</span>` : "";
      const note = item.note ? `<p class="schedule-note">${item.note}</p>` : "";
      return `
        <li class="schedule-item${item.photo ? " schedule-item--photo" : ""}">
          <p class="schedule-time${isGatherTime || isReturnTime ? " schedule-time--gather" : ""}">${item.time}</p>
          <div class="schedule-content">
            <p class="schedule-activity">${tag}${item.activity}</p>
            ${photoChip}
            ${note}
          </div>
        </li>
      `;
    })
    .join("");

  return `
    <article class="ios-panel team-schedule-card team-schedule-card--${teamKey}">
      <h4 class="cards-section-title">
        <span class="team-badge ${badgeClass}">${team.label}</span>
        <span class="team-train-meta">왕복 열차: ${team.trainToBusan} / ${team.trainToDongtan}</span>
      </h4>
      <div class="schedule-highlights schedule-highlights--team">
        <div class="schedule-highlights-grid">
          ${highlights
            .map(
              (item, index) =>
                `<span class="schedule-highlight-chip ${highlightClass}">${item}</span>${
                  index < highlights.length - 1 ? `<span class="schedule-flow-arrow ${arrowClass}" aria-hidden="true">→</span>` : ""
                }`
            )
            .join("")}
        </div>
      </div>
      <ol class="schedule-list">${rows}</ol>
    </article>
  `;
}

function renderDaySchedule(dayKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="team-schedule-grid">
      ${renderTeamCard("A", dayKey)}
      ${renderTeamCard("B", dayKey)}
    </div>
  `;
}

function renderScheduleDay(dayKey) {
  activeScheduleDay = dayKey;
  daySwitchButtons.forEach((button) => {
    const isActive = button.dataset.scheduleDay === dayKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (scheduleDate) {
    scheduleDate.textContent = dayMessages[dayKey].date;
  }
  if (scheduleMessage) {
    scheduleMessage.innerHTML = `<span class="team-badge team-badge--A">A팀</span>: 1, 2, 3, 4, 9, 12반 &nbsp; <span class="team-badge team-badge--B">B팀</span>: 5, 6, 7, 8, 10, 11반`;
  }
  if (scheduleContent) {
    const returnCard =
      dayKey === "day3"
        ? `
      <article class="ios-panel return-arrival-card">
        <h4 class="cards-section-title">🚄 동탄역 도착 예정</h4>
        <p class="placeholder-text"><strong>A팀</strong> 17:52 &nbsp; | &nbsp; <strong>B팀</strong> 18:29</p>
      </article>
    `
        : "";
    scheduleContent.innerHTML = `
      <div class="team-schedule-grid">
        ${renderTeamCard("A", dayKey)}
        ${renderTeamCard("B", dayKey)}
      </div>
      ${returnCard}
    `;
  }
}

function renderInlineGuideCards(targetNode, cardConfigs) {
  if (!targetNode) return;
  targetNode.innerHTML = cardConfigs
    .map(({ id, icon, desc, action, layout }) => {
      const info = modalData[id];
      if (!info) return "";
      const items = info.sections.flatMap((section) => section.items);
      const contentMarkup =
        layout === "sequence"
          ? `<p class="placeholder-text inline-sequence-text">${items[0] || ""}</p>`
          : `<ul class="class-info-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
      const actionButton = action
        ? `<a class="ios-button ios-button--secondary inline-guide-action" href="${action.href}" target="_blank" rel="noopener noreferrer">${action.label}</a>`
        : "";
      return `
        <article class="climate-card inline-guide-card">
          <span class="climate-card-icon" aria-hidden="true">${icon}</span>
          <div class="inline-guide-head">
            <h3 class="climate-card-name">${info.title}</h3>
            ${actionButton}
          </div>
          <p class="climate-card-desc">${desc}</p>
          <div class="inline-guide-body">
            ${contentMarkup}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderNoticeInlineBoard() {
  if (!noticeInlineBoard) return;

  const checklistInfo = modalData["notice-banned"];
  const checklistState = getPrepChecklistState();
  const selfCheckState = getSelfCheckState();
  const checklistItems = checklistInfo.sections[0]?.items || [];
  const checkedCount = checklistItems.filter((_, index) => checklistState[String(index)]).length;

  const checklistHtml = checklistItems
    .map((item, index) => {
      const id = `notice-inline-check-${index}`;
      const checked = checklistState[String(index)] ? "checked" : "";
      const checkedClass = checklistState[String(index)] ? " is-checked" : "";
      return `
        <li class="prep-check-item${checkedClass}">
          <label for="${id}" class="prep-check-label">
            <input id="${id}" type="checkbox" class="prep-check-input" data-prep-inline-check="${index}" ${checked} />
            <span class="prep-check-text">${item}</span>
          </label>
        </li>
      `;
    })
    .join("");

  const selfCheckSections = [
    {
      heading: "준비물(건강 포함)",
      items: [
        "준비물과 개인 상비약을 빠짐없이 챙겼는가?",
        "멀미약/처방약 복용 및 지참 여부를 확인하였는가?",
      ],
    },
    {
      heading: "휴대 금지 물품",
      items: [
        "고가 물품, 게임기, 위험 물품을 가방에서 제외하였는가?",
        "담배/주류 등 반입 금지 물품을 소지하지 않았는가?",
      ],
    },
    {
      heading: "복장",
      items: [
        "활동하기 편한 복장과 운동화를 준비하였는가?",
        "날씨 대비 겉옷을 챙기고 부적절한 복장을 피하였는가?",
      ],
    },
    {
      heading: "용돈 및 소지품",
      items: [
        "현금은 최소한만 준비하고 결제수단을 확인하였는가?",
        "지갑/휴대폰 등 소지품을 직접 관리할 준비가 되었는가?",
        "사전교육 내용에 따라 준비물을 점검하고, 수학여행 중 지켜야 할 규칙을 인지하였는가?",
      ],
    },
  ];

  const selfCheckRows = selfCheckSections
    .map((section, sectionIndex) =>
      section.items
        .map((question, itemIndex) => {
          const key = `s${sectionIndex}-q${itemIndex}`;
          const checked = selfCheckState[key] ? "checked" : "";
          return `
            <tr>
              <td class="self-check-cell">${question}</td>
              <td class="self-check-cell self-check-cell--check">
                <input type="checkbox" data-self-check="${key}" ${checked} />
              </td>
            </tr>
          `;
        })
        .join("")
    )
    .join("");

  noticeInlineBoard.innerHTML = `
    <article class="ios-panel">
      <h3 class="cards-section-title">🎒 필수 준비물 체크리스트</h3>
      <p class="placeholder-text prep-check-progress" id="noticeInlinePrepCheckProgress">${checkedCount} / ${checklistItems.length} 완료</p>
      <ul class="prep-check-list">${checklistHtml}</ul>
    </article>
    <article class="ios-panel">
      <h3 class="cards-section-title">📝 수학여행 출발 전 자가 점검표</h3>
      <table class="self-check-table">
        <thead>
          <tr>
            <th>점검 질문</th>
            <th>체크</th>
          </tr>
        </thead>
        <tbody>
          ${selfCheckRows}
        </tbody>
      </table>
      <p class="self-check-consent">위 내용을 점검하였으며, 규칙을 어긴 사례가 적발될 경우, 담임 선생님의 지도에 따르겠습니다.</p>
      <div class="self-check-signature-row">
        <div class="self-check-signature">
          <label class="self-check-signature-field">학번 <input type="text" class="self-check-input" placeholder="예: 20101" /></label>
          <label class="self-check-signature-field">성명 <input type="text" class="self-check-input" placeholder="이름 입력" /></label>
        </div>
        <button type="button" class="ios-button ios-button--secondary self-check-download-btn" data-self-check-download>이미지 다운</button>
      </div>
    </article>
  `;
}

function downloadSelfCheckImage() {
  if (!noticeInlineBoard) return;
  const card = noticeInlineBoard.querySelector(".ios-panel:last-child");
  if (!card) return;

  const title = card.querySelector(".cards-section-title")?.textContent?.trim() || "수학여행 출발 전 자가 점검표";
  const rows = [...card.querySelectorAll(".self-check-table tbody tr")].map((row) => {
    const question = row.querySelector("td")?.textContent?.trim() || "";
    const checked = Boolean(row.querySelector("input[type='checkbox']")?.checked);
    return { question, checked };
  });
  const consent = card.querySelector(".self-check-consent")?.textContent?.trim() || "";
  const inputs = [...card.querySelectorAll(".self-check-input")];
  const studentId = inputs[0]?.value?.trim() || "";
  const studentName = inputs[1]?.value?.trim() || "";

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = 1200;
  const padding = 46;
  const rowHeight = 52;
  const tableHeaderHeight = 54;
  const titleHeight = 64;
  const titleGap = 20;
  const consentTop = 24;
  const lineHeight = 30;

  const wrapText = (text, maxWidth) => {
    const words = text.split(" ");
    const lines = [];
    let current = "";
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (ctx.measureText(candidate).width <= maxWidth || !current) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    });
    if (current) lines.push(current);
    return lines.length ? lines : [text];
  };

  ctx.font = "700 26px 'Segoe UI', 'Malgun Gothic', sans-serif";
  const consentLines = wrapText(consent, width - padding * 2);
  const questionLines = rows.map((item) => wrapText(item.question, width - padding * 2 - 110));
  const tableRowsHeight = questionLines.reduce((sum, lines) => sum + Math.max(rowHeight, lines.length * 26 + 18), 0);

  const height =
    padding * 2 +
    titleHeight +
    titleGap +
    tableHeaderHeight +
    tableRowsHeight +
    consentTop +
    consentLines.length * lineHeight +
    72;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  let y = padding;
  ctx.fillStyle = "#111111";
  ctx.font = "700 34px 'Segoe UI', 'Malgun Gothic', sans-serif";
  ctx.fillText(title, padding, y + 34);
  y += titleHeight + titleGap;

  // table header
  const questionColWidth = width - padding * 2 - 110;
  const checkColX = padding + questionColWidth;
  ctx.fillStyle = "#f2f2f5";
  ctx.fillRect(padding, y, questionColWidth, tableHeaderHeight);
  ctx.fillRect(checkColX, y, 110, tableHeaderHeight);
  ctx.strokeStyle = "#d1d1d6";
  ctx.strokeRect(padding, y, questionColWidth, tableHeaderHeight);
  ctx.strokeRect(checkColX, y, 110, tableHeaderHeight);
  ctx.fillStyle = "#111111";
  ctx.font = "700 20px 'Segoe UI', 'Malgun Gothic', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("점검 질문", padding + questionColWidth / 2, y + 34);
  ctx.fillText("체크", checkColX + 55, y + 34);
  ctx.textAlign = "left";
  y += tableHeaderHeight;

  // table rows
  rows.forEach((item, idx) => {
    const lines = questionLines[idx];
    const rowH = Math.max(rowHeight, lines.length * 26 + 18);
    ctx.strokeStyle = "#d1d1d6";
    ctx.strokeRect(padding, y, questionColWidth, rowH);
    ctx.strokeRect(checkColX, y, 110, rowH);

    ctx.fillStyle = "#3a3a3c";
    ctx.font = "500 18px 'Segoe UI', 'Malgun Gothic', sans-serif";
    lines.forEach((line, lineIdx) => {
      ctx.fillText(line, padding + 14, y + 28 + lineIdx * 24);
    });

    const boxSize = 24;
    const boxX = checkColX + (110 - boxSize) / 2;
    const boxY = y + (rowH - boxSize) / 2;
    ctx.strokeStyle = "#8e8e93";
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, boxSize, boxSize);
    if (item.checked) {
      ctx.strokeStyle = "#007aff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(boxX + 5, boxY + 13);
      ctx.lineTo(boxX + 10, boxY + 18);
      ctx.lineTo(boxX + 19, boxY + 7);
      ctx.stroke();
    }

    y += rowH;
  });

  y += consentTop;
  ctx.fillStyle = "#111111";
  ctx.font = "700 18px 'Segoe UI', 'Malgun Gothic', sans-serif";
  consentLines.forEach((line, idx) => {
    ctx.fillText(line, padding, y + idx * lineHeight);
  });

  const signatureY = y + consentLines.length * lineHeight + 24;
  ctx.font = "700 20px 'Segoe UI', 'Malgun Gothic', sans-serif";
  ctx.fillText(`학번: ${studentId || "(미입력)"}      성명: ${studentName || "(미입력)"}`, padding, signatureY);

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "수학여행_자가점검표.png";
  link.click();
}

function renderSafetyInlineCards() {
  if (!safetyInlineCards) return;
  const sectionIds = ["notice-medicine", "notice-restricted", "notice-dress", "notice-money", "notice-transport", "notice-hotel"];
  const noticeSectionEmojis = {
    "notice-medicine": "💊",
    "notice-restricted": "🚫",
    "notice-dress": "👟",
    "notice-money": "💳",
    "notice-transport": "🚌",
    "notice-hotel": "🏨",
  };
  safetyInlineCards.innerHTML = sectionIds
    .map((id) => {
      const info = modalData[id];
      if (!info) return "";
      const items = info.sections.flatMap((section) => section.items);
      const emoji = noticeSectionEmojis[id] || "📌";
      return `
        <article class="ios-panel">
          <h3 class="cards-section-title">${emoji} ${info.title}</h3>
          <ul class="class-info-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `;
    })
    .join("");
}

function renderTopNoticeCard(targetNode, modalId) {
  if (!targetNode) return;
  const info = modalData[modalId];
  if (!info) return;
  const items = info.sections.flatMap((section) => section.items);
  const topNoticeEmojis = {
    "notice-transport": "🚌",
    "notice-hotel": "🏨",
  };
  const emoji = topNoticeEmojis[modalId] || "📌";
  targetNode.innerHTML = `
    <h3 class="cards-section-title">${emoji} ${info.title}</h3>
    <ul class="class-info-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function renderClassInfo() {
  if (!activeClassName) {
    classInfoCards.innerHTML = "";
    classInfoCards.hidden = true;
    return;
  }

  const data = classData[activeClassName];
  if (!data) return;
  const team = teamSchedule[data.team];

  classInfoCards.hidden = false;
  const row = (title, value) => `<article class="ios-panel"><h3 class="cards-section-title">${title}</h3>${value}</article>`;
  const listBlock = (items) => `<ul class="class-info-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  classInfoCards.innerHTML = [
    row(
      "소속 팀 / 열차 정보",
      `<p class="placeholder-text class-info-meta"><strong>소속 팀</strong>: <span class="team-badge team-badge--${data.team}">${team.label}</span></p>
       <p class="placeholder-text class-info-meta"><strong>집결 시간</strong>: <span class="class-info-emphasis">${data.gatherTime}</span></p>
       <p class="placeholder-text class-info-meta"><strong>가는 열차</strong>: ${data.trainToBusan}</p>
       <p class="placeholder-text class-info-meta"><strong>오는 열차</strong>: ${data.trainToDongtan}</p>
       <p class="placeholder-text class-info-meta"><strong>3일차 동탄역 도착 예정</strong>: <span class="class-info-emphasis">${data.returnArrival}</span></p>`
    ),
    row("전달사항", listBlock(data.notes)),
    row(
      "우리 팀 날짜별 주요 일정 요약",
      listBlock([
        `1일차 흐름: ${data.dayFlow.day1}`,
        `2일차 흐름: ${data.dayFlow.day2}`,
        `3일차 흐름: ${data.dayFlow.day3}`,
      ])
    ),
    row("조 편성", listBlock(data.groups)),
    row("객실표", listBlock(data.rooms)),
  ].join("");
}

function updateDday() {
  const dday = calculateDday(travelInfo.startDate);
  ddayLabel.innerHTML = `<span class="dday-badge">${dday}</span><span class="dday-period">${travelInfo.startDate} ~ ${travelInfo.endDate}</span>`;
}

function bindEvents() {
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => switchTab(button.dataset.step));
    button.addEventListener("keydown", (event) => {
      const last = tabButtons.length - 1;
      let next = index;
      if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
      else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = last;
      else return;
      event.preventDefault();
      switchTab(tabButtons[next].dataset.step, true);
    });
  });

  document.querySelectorAll("[data-go-step]").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.goStep, true));
  });

  document.querySelectorAll("[data-modal-id]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.modalId, button));
  });

  modalRoot.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) closeModal();
  });
  modalRoot.addEventListener("change", (event) => {
    const checkInput = event.target.closest("[data-prep-check]");
    if (!checkInput) return;
    const index = checkInput.dataset.prepCheck;
    const state = getPrepChecklistState();
    state[index] = checkInput.checked;
    savePrepChecklistState(state);

    const itemNode = checkInput.closest(".prep-check-item");
    if (itemNode) {
      itemNode.classList.toggle("is-checked", checkInput.checked);
    }

    const allChecks = [...modalBody.querySelectorAll("[data-prep-check]")];
    const checkedCount = allChecks.filter((input) => input.checked).length;
    const progress = modalBody.querySelector("#prepCheckProgress");
    if (progress) {
      progress.textContent = `${checkedCount} / ${allChecks.length} 완료`;
    }
  });
  if (noticeInlineBoard) {
    noticeInlineBoard.addEventListener("click", (event) => {
      if (event.target.closest("[data-self-check-download]")) {
        downloadSelfCheckImage();
      }
    });
    noticeInlineBoard.addEventListener("change", (event) => {
      const checkInput = event.target.closest("[data-prep-inline-check]");
      if (checkInput) {
        const index = checkInput.dataset.prepInlineCheck;
        const state = getPrepChecklistState();
        state[index] = checkInput.checked;
        savePrepChecklistState(state);

        const itemNode = checkInput.closest(".prep-check-item");
        if (itemNode) {
          itemNode.classList.toggle("is-checked", checkInput.checked);
        }

        const allChecks = [...noticeInlineBoard.querySelectorAll("[data-prep-inline-check]")];
        const checkedCount = allChecks.filter((input) => input.checked).length;
        const progress = noticeInlineBoard.querySelector("#noticeInlinePrepCheckProgress");
        if (progress) {
          progress.textContent = `${checkedCount} / ${allChecks.length} 완료`;
        }
        return;
      }

      const selfCheckInput = event.target.closest("[data-self-check]");
      if (selfCheckInput) {
        const key = selfCheckInput.dataset.selfCheck;
        const state = getSelfCheckState();
        state[key] = selfCheckInput.checked;
        saveSelfCheckState(state);
      }
    });
  }
  document.addEventListener("keydown", (event) => {
    if (safetyPresentationState.open) {
      if (event.key === "Escape") {
        closeSafetyPresentation();
        return;
      }
      if (event.key === "ArrowRight") {
        goSafetyPresentationStep(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        goSafetyPresentationStep(-1);
        return;
      }
      return;
    }

    if (presentationState.open) {
      if (event.key === "Escape") {
        closePresentation();
        return;
      }
      if (event.key === "ArrowRight") {
        goPresentationSlide(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        goPresentationSlide(-1);
        return;
      }
      return;
    }

    if (event.key === "Escape" && !modalRoot.hidden) closeModal();
  });

  classSelector.addEventListener("click", (event) => {
    const button = event.target.closest("[data-class]");
    if (!button) return;
    activeClassName = button.dataset.class;
    renderClassSelector();
    renderClassInfo();
  });

  daySwitchButtons.forEach((button) => {
    button.addEventListener("click", () => renderScheduleDay(button.dataset.scheduleDay));
  });

  if (openSafetyPresentationButton) {
    openSafetyPresentationButton.addEventListener("click", openSafetyPresentation);
  }
  if (openActivityPresentationButton) {
    openActivityPresentationButton.addEventListener("click", () => openPresentation("activity"));
  }

  if (presentationRoot) {
    presentationRoot.addEventListener("click", (event) => {
      if (event.target.closest("[data-presentation-close]")) {
        closePresentation();
      }
    });
  }
  if (presentationPrev) {
    presentationPrev.addEventListener("click", () => goPresentationSlide(-1));
  }
  if (presentationNext) {
    presentationNext.addEventListener("click", () => goPresentationSlide(1));
  }
  if (safetyPresentationRoot) {
    safetyPresentationRoot.addEventListener("click", (event) => {
      if (event.target.closest("[data-safety-presentation-close]")) {
        closeSafetyPresentation();
      }
    });
  }
  if (safetyPresentationPrev) {
    safetyPresentationPrev.addEventListener("click", () => goSafetyPresentationStep(-1));
  }
  if (safetyPresentationNext) {
    safetyPresentationNext.addEventListener("click", () => goSafetyPresentationStep(1));
  }
}

function initStaticTexts() {
  document.getElementById("hotelInfoCard").innerHTML = `
    <div class="hotel-info-head">
      <h3 class="cards-section-title">🏨 ${hotelInfo.name}</h3>
      <div class="hotel-info-actions">
        <a class="ios-button ios-button--secondary hotel-info-link" href="https://map.naver.com/p/search/%EB%A7%88%ED%8B%B0%EC%97%90%20%EC%98%A4%EC%8B%9C%EB%A6%AC%EC%95%84?c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer">숙소 보기</a>
        <a class="ios-button ios-button--secondary hotel-info-link" href="https://www.instagram.com/matie_official/" target="_blank" rel="noopener noreferrer">숙소 인스타그램</a>
      </div>
    </div>
    <p class="placeholder-text">주소: ${hotelInfo.address}<br>대표번호: ${hotelInfo.phone}<br>체류 일정: ${hotelInfo.stay}<br>이동 구간: ${travelInfo.route} (${travelInfo.transportNow})</p>
    <div class="hotel-quick-grid">
      <article class="hotel-quick-card">
        <p class="hotel-quick-title">🚫 숙소 생활 금지행위</p>
        <ul class="hotel-quick-list">
          <li>타 객실 무단 출입</li>
          <li>베개 싸움 / 장난</li>
          <li>이성 객실 왕래</li>
          <li>야간 무단 외출</li>
          <li>고성방가</li>
        </ul>
      </article>
      <article class="hotel-quick-card">
        <p class="hotel-quick-title">🧳 체크아웃</p>
        <ul class="hotel-quick-list">
          <li>기상 시간</li>
          <li>짐 정리</li>
          <li>분실물 확인</li>
          <li>객실 상태 점검</li>
          <li>정해진 시간 집합</li>
        </ul>
      </article>
      <article class="hotel-quick-card">
        <p class="hotel-quick-title">🔑 분실물 안내</p>
        <ul class="hotel-quick-list">
          <li>카드키 본인 관리</li>
          <li>휴대폰 / 충전기 확인</li>
          <li>퇴실 전 분실물 점검</li>
          <li>발견 시 즉시 교사 보고</li>
        </ul>
      </article>
    </div>
  `;

  const sosContactsList = document.getElementById("sosContactsList");
  if (sosContactsList) {
    const homeroomContacts = Object.keys(classData)
      .sort((a, b) => Number(a.replace("반", "")) - Number(b.replace("반", "")))
      .map((className) => {
        const info = classData[className];
        return {
          label: `${className} 담임교사`,
          value: info.phone,
        };
      });

    const contacts = [
      { label: "부장교사", value: emergencyContacts.headTeacher },
      { label: "업무 담당 교사", value: emergencyContacts.dutyTeacher },
      { label: "경찰", value: emergencyContacts.police },
      { label: "소방", value: emergencyContacts.fire },
      ...homeroomContacts,
    ];
    sosContactsList.innerHTML = `
      <ul class="sos-call-list">
        ${contacts
          .map((item) => {
            const tel = String(item.value).replace(/[^0-9+]/g, "");
            return `<li class="sos-call-item"><span class="sos-call-label">${item.label}</span><a class="sos-call-link" href="tel:${tel}">${item.value}</a></li>`;
          })
          .join("")}
      </ul>
    `;
  }

  renderInlineGuideCards(moveInlineCards, moveInlineGuideCards);
  renderInlineGuideCards(hotelInlineCards, hotelInlineGuideCards);
  renderNoticeInlineBoard();
  renderSafetyInlineCards();
  renderActivityImages();
  renderScheduleDay(activeScheduleDay);
}

function init() {
  // 기존 디자인 시스템의 로딩 오버레이 스타일 해제
  document.body.classList.add("app-ready");
  updateDday();
  initStaticTexts();
  renderClassSelector();
  renderClassInfo();
  bindEvents();
  switchTab("safety");
}

init();
