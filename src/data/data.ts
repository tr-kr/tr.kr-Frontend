export interface Card {
  title: string;
  place: string;
  startDate: string;
  endDate: string;
  game: string;
  status: string;
  imgUrl: string;
}
export const cards: Card[] = [
  {
    title: '인하대학교 옵치대회',
    place: '인하대학교',
    startDate: '2021-10-01',
    endDate: '2021-10-10',
    game: '오버워치',
    status: '모집중',
    imgUrl:
      'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
  },
  {
    title: '경상대 롤대회',
    place: '한양대학교 경상학생회',
    startDate: '2021-12-01',
    endDate: '2021-12-10',
    game: '리그오브레전드',
    status: '모집완료',
    imgUrl:
      'https://images.unsplash.com/photo-1523800378286-dae1f0dae656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80',
  },
  {
    title: 'UMC 블루지부 롤대회',
    place: 'UMC 블루지부',
    startDate: '2021-11-01',
    endDate: '2021-11-10',
    game: '리그오브레전드',
    status: '모집중',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    title: '경희대학교 WINTER CUP',
    place: '경희대학교',
    startDate: '2021-12-01',
    endDate: '2021-12-10',
    game: '리그오브레전드',
    status: '준비중',
    imgUrl:
      'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

export const workingAdultsCards: Card[] = [
  {
    title: '서울 직장인 롤 대회',
    place: '강남 PC방',
    startDate: '2021-11-05',
    endDate: '2021-11-08',
    game: '리그오브레전드',
    status: '모집중',
    imgUrl:
      'https://i.pinimg.com/564x/f1/cd/56/f1cd560e9ef4074129e8470bda637d44.jpg',
  },
  {
    title: '부산 직장인 스타대회',
    place: '해운대 PC방',
    startDate: '2021-12-10',
    endDate: '2021-12-12',
    game: '스타크래프트',
    status: '모집완료',
    imgUrl:
      'https://i.pinimg.com/564x/3c/d2/2e/3cd22e05825ec7ba7bef4bfb7acf6274.jpg',
  },
  {
    title: '대전 직장인 오버워치 대회',
    place: '유성 PC방',
    startDate: '2021-11-20',
    endDate: '2021-11-22',
    game: '오버워치',
    status: '준비중',
    imgUrl:
      'https://i.pinimg.com/564x/7a/3a/9a/7a3a9a8058829957033168851d168e15.jpg',
  },
  {
    title: '광주 직장인 PUBG 대회',
    place: '상무지구 PC방',
    startDate: '2021-12-05',
    endDate: '2021-12-07',
    game: 'PUBG',
    status: '모집중',
    imgUrl:
      'https://i.pinimg.com/564x/fe/5d/bb/fe5dbb465255bcc70d5ca5850180f27c.jpg',
  },
];
