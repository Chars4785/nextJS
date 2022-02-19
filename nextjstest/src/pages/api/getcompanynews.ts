// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const companyNews = {
  name:'이종민',
  page:1,
  limit:10,
  contents:[
    {
      _id:'1023',
      writer:'이미지님',
      title:'호랑이 사진 고고',
      imageUrl:'/images/씽씽부적_손소독제_씽랑이스티커팩.jpg',
      constents:`
      안녕하세요!
      다들 아시겠지만 최근 오미크론 확산세가 거세지고 있는데요. 
      조금 더 안전하게 스스로를 지키고, 올해도 행복하게 보내자는 의미에서 저희 본부에서 작은 선물을 준비했습니다. 
      그것은 바로바로 손소독제와 스티커팩입니다! 그 중에서도 특히 씽씽부적 스티커를 손소독제에 붙여 지니고 다니면 소원이 이루어진다고 합니..다 :yum: 
      씽랑이 스티커와 씽씽부적을 원하시는 곳에 자유롭게 붙여 사용하시고, ‘와. 이건 내가 봐도 너무 잘 붙였어. 진짜 예쁨!’ 하는 사진이 있다면 부끄러워 마시고 꼭꼭 제보해주세요~
      소정의 상품:gift:과 함께 씽씽 인스타 계정에 포스팅 되는 기회(?)를 드립니다! 
      제보 방법 : 이 글의 스레드에 사진을 남겨주시면 자동 응모가 됩니다.
      응모 기한 : 2월 17일 목요일까지
      추운 겨울 내내 언주로에서 정말 고생 많으셨습니다.
      새 사무실로 이사가는 봄부터는 모든 것이 씽씽 잘 풀릴 수 있기를!`,
      tag:['스티커','씽씽','호랑이'],
      heartCount: 10,
      contentsURL:'https://www.instagram.com/p/CZRGH9HB7NH/',
    },
    {
      _id:'1024',
      writer:'김상훈님',
      title:'Tmap 버스 광고',
      imageUrl:'/images/1641876880223.jpg',
      constents:`
      버스 광고
      잘 되었으면 !!`,
      tag:['씽씽','티맵','한소희'],
      heartCount: 1000,
      contentsURL:'https://youtu.be/8BwOjcMXDxU',
    },
    {
      _id:'1023',
      writer:'이미지님',
      title:'호랑이 사진 고고',
      imageUrl:'/images/씽씽부적_손소독제_씽랑이스티커팩.jpg',
      constents:`
      안녕하세요!
      다들 아시겠지만 최근 오미크론 확산세가 거세지고 있는데요. 
      조금 더 안전하게 스스로를 지키고, 올해도 행복하게 보내자는 의미에서 저희 본부에서 작은 선물을 준비했습니다. 
      그것은 바로바로 손소독제와 스티커팩입니다! 그 중에서도 특히 씽씽부적 스티커를 손소독제에 붙여 지니고 다니면 소원이 이루어진다고 합니..다 :yum: 
      씽랑이 스티커와 씽씽부적을 원하시는 곳에 자유롭게 붙여 사용하시고, ‘와. 이건 내가 봐도 너무 잘 붙였어. 진짜 예쁨!’ 하는 사진이 있다면 부끄러워 마시고 꼭꼭 제보해주세요~
      소정의 상품:gift:과 함께 씽씽 인스타 계정에 포스팅 되는 기회(?)를 드립니다! 
      제보 방법 : 이 글의 스레드에 사진을 남겨주시면 자동 응모가 됩니다.
      응모 기한 : 2월 17일 목요일까지
      추운 겨울 내내 언주로에서 정말 고생 많으셨습니다.
      새 사무실로 이사가는 봄부터는 모든 것이 씽씽 잘 풀릴 수 있기를!`,
      tag:['스티커','씽씽','호랑이'],
      heartCount: 10,
      contentsURL:'https://www.instagram.com/p/CZRGH9HB7NH/',
    },
    {
      _id:'1024',
      writer:'김상훈님',
      title:'Tmap 버스 광고',
      imageUrl:'/images/1641876880223.jpg',
      constents:`
      버스 광고
      잘 되었으면 !!`,
      tag:['씽씽','티맵','한소희'],
      heartCount: 1000,
      contentsURL:'https://youtu.be/8BwOjcMXDxU',
    },
    {
      _id:'1023',
      writer:'이미지님',
      title:'호랑이 사진 고고',
      imageUrl:'/images/씽씽부적_손소독제_씽랑이스티커팩.jpg',
      constents:`
      안녕하세요!
      다들 아시겠지만 최근 오미크론 확산세가 거세지고 있는데요. 
      조금 더 안전하게 스스로를 지키고, 올해도 행복하게 보내자는 의미에서 저희 본부에서 작은 선물을 준비했습니다. 
      그것은 바로바로 손소독제와 스티커팩입니다! 그 중에서도 특히 씽씽부적 스티커를 손소독제에 붙여 지니고 다니면 소원이 이루어진다고 합니..다 :yum: 
      씽랑이 스티커와 씽씽부적을 원하시는 곳에 자유롭게 붙여 사용하시고, ‘와. 이건 내가 봐도 너무 잘 붙였어. 진짜 예쁨!’ 하는 사진이 있다면 부끄러워 마시고 꼭꼭 제보해주세요~
      소정의 상품:gift:과 함께 씽씽 인스타 계정에 포스팅 되는 기회(?)를 드립니다! 
      제보 방법 : 이 글의 스레드에 사진을 남겨주시면 자동 응모가 됩니다.
      응모 기한 : 2월 17일 목요일까지
      추운 겨울 내내 언주로에서 정말 고생 많으셨습니다.
      새 사무실로 이사가는 봄부터는 모든 것이 씽씽 잘 풀릴 수 있기를!`,
      tag:['스티커','씽씽','호랑이'],
      heartCount: 10,
      contentsURL:'https://www.instagram.com/p/CZRGH9HB7NH/',
    },
    {
      _id:'1024',
      writer:'김상훈님',
      title:'Tmap 버스 광고',
      imageUrl:'/images/1641876880223.jpg',
      constents:`
      버스 광고
      잘 되었으면 !!`,
      tag:['씽씽','티맵','한소희'],
      heartCount: 1000,
      contentsURL:'https://youtu.be/8BwOjcMXDxU',
    },
  ],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(companyNews)
}