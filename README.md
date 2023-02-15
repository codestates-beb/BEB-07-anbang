 # 안방
<img src="https://user-images.githubusercontent.com/113483518/218401123-d1e10f61-3695-4bbb-9f08-b81001c140cd.png">

# 1. 팀 소개
- 프로젝트 명 : AnBang ( Safety Room )
- 팀원 : 허건회(팀장), 송해현, 이범혁, 정충환

# 2. 프로젝트 소개
- Web3.0와 블록체인 분산원장, 스마트 컨트랙트를을 이용한 한국형 부동산 전세, 월세 거래 Dapp입니다.
<details>
<summary>프로젝트 기획 의도</summary>
걱정없는 부동산 거래가 없을까? 

2022년 말, 부동산 업계에 시끌벅적했던 전세사기 사건은 사기꾼과 이와 협탁한 공인중개사들이 만들어낸 사건으로 조사됐습니다. 이처럼 전세사기로 공인중개사에 대한 시선은 싸늘해지고 있지만 집을 계약하고자 하는 임차인과 임대인 모두 공인중개사를 통해서 부동산 거래를 하곤 있습니다. 

중개로 부동산 거래질서가 교란된 상황에서, 임대인은 본인이 보유한 물건을 NFT로 등록하고, 임차인은 해당 NFT를 계약하는 플랫폼을 조성해 사기 매물을 근절하고 임대인과 임차인이 부담하던 중개수수료를 절감해 결과적으로 사회적 비용을 줄이고자 합니다.
</details>

<details>
<summary>기존 부동산 거래의 문제점</summary>

- 부동산 거래의 문제점

기존 부동산과 공인중개사를 통한 거래는 많은 문제들을 갖고 있었습니다. 최근 들어 생기는 “깡통 전세 사기” 부터 공인중개사들과 집주인과의 가격 담합 및 사기 공모 등 많은 문제들이 있습니다. 

- 악의적인 이용자는 법의 허점을 이용합니다.

한국에만 존재하는 부동산 전세 거래를 하기 위해서는 큰 금액의 보증금이 필요합니다. 보증금을 임대인에게 계약을 성사할 때 제공합니다. 임차인은 집 대항력을 얻기 위해 전입 신고와 확정 일자를 받지만 이 과정에서 법의 허점이 존재합니다.

- 불안한 계약을 진행해야 합니다.

전입 신고를 하면서 생기는 대항력은 다음 날 00시 기준으로 설정되어 있기 때문에, 임대인은 이의 허점을 이용해서 계약서를 위조하거나 명의를 바꾸거나 또 다른 대출을 설정하거나 하는 악의적인 행동을 할 수 있습니다. 이러한 과정에서, 임차인은 많은 등기부 등본을 확인해가면서 불안한 과정에서 계약을 진행할 수 밖에 없습니다.

- 위험성이 존재한 제 3자의 중개사

임대인과 임차인을 원활한 계약을 위해 존재하는 제 3자, 부동산과 공인중개사도 계약에 대한 안전을 보장할 수 없습니다. 중개사는 부동산 금액의 % 비율로 수입을 받기 때문에 가격 담합을 시도하거나 임대인과 사기를 공모할 수 있습니다.

 [https://youtu.be/flno3DC7HHk](https://youtu.be/flno3DC7HHk) 위 영상과 같이 공인중개사로 인한 피해들이 점점 많아지면서 정부에서는 중개사 없이 거래하는 시스템을 구축하려고 하고 있습니다.
</details>

<details>
<summary>WEB3.0과 블록체인 기술의 도입 방안</summary>

- 블록체인 분산원장 기술에 초점을 두었습니다.
    
    블록체인 분산원장 기술을 이용하여 계약을 진행하면 위조와 변조가 불가능하고 신뢰 가능한 부동산 계약을 진행할 수 있습니다.
    
    - 시간 차 공격에 어떻게 대응합니까?
    
    기존 전입 신고 시스템의 허점을 이용한 공격들은 계약서를 블록체인 분산원장에 데이터를 저장하면 계약 효력이 즉시 발생하고, 누구나 계약 내용을 확인할 수 있습니다. 스마트 컨트랙트를 활용해서 계약서를 작성하기 때문에 위변조는 불가능합니다.
   
    - 신뢰성이 높고 안전한 계약을 제공합니다.
    
    기존 부동산과 사람이 아닌 시스템이 제 3자가 되어서 계약을 보증하고 2번, 3번 검증합니다.
    
    외부 등기부 등본 API를 이용해 등기부 등본의 정보와 회원 정보가 다르면 거래가 불가능하고,  에스크로의 도입으로 스테이블 코인(=보증금) 을 보증해줍니다.
    
    최종 계약에서도 투표 형식으로 진행되기 때문에, 임대인이 등록한 정보와 실제 부동산 정보가 다르다면 투표에서 거부권을 행사해서 계약이 진행되질 않습니다.
</details>


# 3. 프로젝트 시연 
| 기능 | 설명 |
| --- | --- |
| 회원가입 | 추후 거래를 위해 주민번호와 같은 민감한 정보가 필요하기에 OAuth는 도입하지 않았습니다. 계약과 NFT 등록을 위해선 개인정보와 일치해야 서비스를 이용 할 수 있습니다. |
| 마이페이지 | 자신이 등록한 부동산 매물(NFT)를 확인하고 소유권을 주장할 수 있습니다. |
| 부동산(NFT) 등록 | 부동산 매물을 등록하기 위해선 실제 사진과 등기부 등본 외부 API를 이용해 현재 계정의 회원정보와 일치하는지 확인합니다. 확인된 이후에 정상적으로 정보가 맞다면  NFT가 Minting 되고 Main 페이지 에서 확인 할 수 있습니다.  |
| 메인 페이지 | 모든 사람들이 등록한 부동산 매물(NFT)를 확인할 수 있습니다. 거래가 완료된 NFT는 메인페이지에 나타나지 않습니다. |
| 부동산 계약 | 메인 페이지에서 등록된 정보를 확인하고, 계약을 진행하면 특약 사항을 추가로 작성하고 임대인과 임차인은 계약서를 확인하고 최종 계약 페이지로 이동합니다. |
| 부동산 최종 계약 | 부동산 최종 계약에선 임대인과 임차인이 계약 내용을 확인하고 투표를 진행합니다. 에스크로에서 현금 보유를 검증하고 플랫폼에서 데이터를 최종적으로 검증하면 투표를 거쳐서 최종 계약이 완료됩니다. |

<aside>
💡 영상은 시간이 소요됩니다!
</aside>


<br><br/>

[ 회원가입 ]

![회원가입](https://user-images.githubusercontent.com/112463036/218934660-ce2b34e9-5941-4c92-9a0a-a724a23a82ea.gif)


[ 로그인 이후 NFT 확인 ]
![-min](https://user-images.githubusercontent.com/112463036/218934758-3ff3bc76-2aa2-4076-be5a-34e84b019aa6.gif)

[ 부동산(NFT) 등록 ]

![NFT](https://user-images.githubusercontent.com/112463036/218935720-b33d861b-dd45-42da-91f8-97a65aecbf1a.gif)


[ 부동산 계약 ]

![계약](https://user-images.githubusercontent.com/112463036/218934802-8a0a6c42-5b4b-4537-8886-c4d27f452192.gif)
![최종](https://user-images.githubusercontent.com/112463036/218934812-d48d71bb-02c4-4725-bba7-80314cce9093.gif)


---

# 4. 팀원 소개

<details>
<summary>송해현</summary>
역할 > Front-End 

기술 스택 > React, axios Tailwindcss, Metamask

기능 구현 

- 프로젝트 기획 및 운영
- 디자인 기획 및 운영
- 프론트엔드 총괄 UI&UX 구현
- IPFS를 이용한 NFT minting
- 서버 API를 통한 데이터 요청
- Metamask 를 이용한 클라이언트 연결 및 인증
- 스마트 컨트랙트와 클라이언트 상호작용
</details>


# 5. tech Stack
FE : <img src="https://img.shields.io/badge/react-61DAFB?style=plastic&logo=react&logoColor=white"/>  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=plastic&logo=tailwindcss&logoColor=white"/>  <img src="https://img.shields.io/badge/axios-5A29E4?style=plastic&logo=axios&logoColor=white"/>

SC : <img src="https://img.shields.io/badge/web3.js-F16822?style=plastic&logo=web3.js&logoColor=white"/> <img src="https://img.shields.io/badge/remix-000000?style=plastic&logo=remix&logoColor=white"/> <img src="https://img.shields.io/badge/solidity-363636?style=plastic&logo=solidity&logoColor=white"/>
 
BE : <img src="https://img.shields.io/badge/node.js-339933?style=plastic&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express-000000?style=plastic&logo=express&logoColor=white"/>  <img src="https://img.shields.io/badge/jsonwebtoken-000000?style=plastic&logo=jsonwebtoken&logoColor=white"/> <img src="https://img.shields.io/badge/mysql-4479A1?style=plastic&logo=mysql&logoColor=white"/>
