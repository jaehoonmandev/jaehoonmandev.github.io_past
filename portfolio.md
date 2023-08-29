---
layout: page
title: "🤔 Who are you?"
---
<div>
<table>
  <tbody>
    <tr>
      <td style="width: 40%">
        <img class="img_portfolio" src="{{ site.baseurl }}/images/Real_jaehoonman.JPG" >
      </td>
      <td style="width: 60%">      
        <pre id="typing_eff" class="pre_portfolio">
{
    name: "박재훈",    
    contact: {        
        phone: "+82)10-5058-9041",        
        Email: "wido1593@gmail.com,
    },
    site: {
        git_repository: "github.com/wido1593" ,
        tistory_blog: "jaehoonman.tistory.com"
    },
    education: {
        name: "인덕대학교",
        major: "컴퓨터소프트웨어",
        date: {
            from:"2015.03",
            to:"2020.02"
        }
    },
    location: {
        Lat: "37.6352",
        Lon: "127.0094",
        district: "Gangbuk-Gu, Seoul, South Korea"
    }
}</pre>
      </td>
    </tr>
  </tbody>
</table>
</div>


# 👋 I am...
<div> 
<pre id="typing_eff2" class="pre_portfolio_lined">
Java / Spring 기반의 CS(Customer Service) 웹 애플리케이션 설계/개발/배포/운영의 실무 경험을 가지고 있는 백엔드 개발자입니다.

주로 신규 기능 개발 업무를 담당하였으며, 프로젝트 기획 단계에서부터 요구사항 도출, 기능 설계, 운영의 전반적인 과정에 주도적으로 참가하였습니다.

단순 기능 구현을 넘어 문제 해결과 협업을 통해 효과적인 솔루션을 제공하는 것을 좋아합니다.  
사소하게 놓칠 수 있는 휴면 에러와 효율적인 코드 구성을 위하여 정착되지 않은 코드 리뷰 문화를 도입한 경험이 있습니다.
</pre>
</div>


# 🛠️ I got...  
#### SELECT * FROM SKILLSET WHERE TYPE = 'Back_End'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Back_End" %}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>

#### SELECT * FROM SKILLSET WHERE TYPE = 'Front_End'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Front_End" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>

#### SELECT * FROM SKILLSET WHERE TYPE = 'Server'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Server" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>


#### SELECT * FROM SKILLSET WHERE TYPE = 'DB'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "DB" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>


#### SELECT * FROM SKILLSET WHERE TYPE = 'Tool'

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
  {% assign skilllist = site.data.skillSet %}
  {% for skill in skilllist %}
    {% if skill.type == "Tool" -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ skill.name }}</td>
      <td>{{ skill.type }}</td>
      <td>{{ skill.level }}</td>
    </tr>
    {% endif %}
  {% endfor %}
</table>

#### SELECT * FROM CERTIFICATE

<table>
    <thead> 
        <tr>
            <th style="width: 20%">INDEX</th>
            <th style="width: 40%">TITLE</th>
            <th style="width: 20%">TYPE</th>
            <th style="width: 20%">LEVEL</th>
        </tr>
    </thead>  
  {% assign newIndex = 0 -%}
    {% assign certList = site.data.certificate -%}
    {% for cert in certList -%}
    {% assign newIndex = newIndex | plus: 1 -%}
    <tr>
      <td>{{ newIndex }}</td>
      <td style="text-align: left">{{ cert.name }}</td>
      <td>{{ cert.type }}</td>
      <td>{{ cert.level }}</td>
    </tr>
  {% endfor %}
</table>


# 💼 Career
<div> 
    <pre class="pre_portfolio_lined">
Career
├── 트랜스코스모스코리아
│   └── 기간
│       └── 2021.02 ~ 2023.06
│   └── 직무/직책
│       └── 백엔드 개발자 / 선임연구원
│   └── 프로젝트(클릭 시 확장됩니다.)
│       └──<button class="accordion">네이버톡톡 상담 채널 도입 기반 제공.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2023.05~2023.06
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 1명 / PE / 50%
│           └── 담당 업무
│               └── 네이버톡톡 API 문서 분석 및 기존 시스템 채널 확장 방안 분석.
│               └── button, link, composite 등 다양한 형태로 들어오는 메시징 처리 모듈 설계.
│           └── 기술 스택
│               └── Spring Framework | JS | PostgreSQL | Linux
<pre id="pre_review">
> review
카카오, 라인 상담을 위해서 중계 역할을 해주는 중계 서비스 구조를 파악할 수 있었습니다.

메세지 교환을 위한 중계API 서버의 구조를 파악하고 설계 해볼 수 있었던 경험이었습니다. 
</pre></div>│       └──<button class="accordion">야나두 프로모션 홍보 아웃바운드 채널 구축.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2022.11~2023.04
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 1명 / PE / 60%
│           └── 담당 업무
│               └──  실행 계획을 토대로 과하게 Scan되는 서브 쿼리에 필터링 추가, JOIN 조건 변경, 중복 스칼라 쿼리 제거를 통한 조회 스코프 축소로 대용량 데이터 조회 Query  최적화.
│               └──  야나두 기간계 API 데이터 교환을 통한 상담 대상자 DB 자동 적재 스케쥴 기능 개발.
│               └──  야나두 기간계 API 통신 실패 데이터 재전송 기능 개발.
│           └── 성과
│               └── 대용량 데이터 조회 시 이전 대비 약 50% 쿼리속도 개선.(2.1ms -> 1.1ms)
│           └── 기술 스택
│               └── Spring Framework | JS | PostgreSQL | Linux
<pre id="pre_review">
> review
아무리 컴퓨팅 성능이 많이 좋아졌다하여도 기능만 돌아가는 개발은 하기 싫었기에 쿼리 및 화면 처리 시 최적화에 신경쓰며 개발을 진행했습니다.
Query문 개발 시 주의해야할 점, 성능 분석 등 DB 개발 능력 향상에 도움이되었습니다.

지속적인 개발 요청에 기한을 맞추는 타이트한 프로젝트이기에 무조건 개발을 진행하기보다 기존 기능을 어떻게 활용할것인지, 어떠한 방향으로 진행하면 요구사항에 대응할 수 있는지, 기한 조율 등 타협 및 스케쥴링 스킬을 키울 수 있었습니다.
</pre></div>│       └──<button class="accordion">한국 에자이 구독형 건강 관리 서비스 Helpy 카카오 상담톡 채널 런칭.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2022.09~2022.11
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 1명 / PE / 40%
│           └── 담당 업무
│               └── 고객이 보유한 쿠폰 번호를 기반으로 헬피 기간계와 연동하여 고객 데이터 핸들링 및 서비스 이용 가능 여부 예외처리.
│               └── Helpy 모바일 애플리케이션과 통신을 위한 REST API 기능 개발. 
│               └── 화면 구조, 상담사 배분 로직을 커스마이징하여 채팅 가능 세션 확장.
│           └── 성과
│               └── 상담사 1인당 기존 최대 10개 채팅 세션 배정을 최대 30개로 확장.
│           └── 기술 스택
│               └── Spring Framework | JS | PostgreSQL | Linux
<pre id="pre_review">
> review
구독권이 유지되는동안 계속해서 채팅 세션을 유지시켜야하며, 그로인하여 상담사 1명이 맡는 인원도 많아질 수 있는 프로젝트 특성상,
화면 인터페이스 커스터마이징 및 배분 로직을 재수립하면서 효율적으로 상담을 진행할 수 있도록 구조 및 화면 구성을 변경하며 설계 스킬을 향상 시킬 수 있었습니다.
</pre></div>│       └──<button class="accordion">록시땅 쿠폰 관리 시스템 마이그레이션 및 리뉴얼 </button>
<div class="accordionPanel">│           └── 기간
│               └── 2022.06~2023.09
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 1명 / PE / 40%
│           └── 담당 업무
│               └── Spring Framework + MyBatis 기반 프로젝트를 Spring Boot + JPA로 마이그레이션.
│               └── 록시땅 기간계 정보 조회를 위한 Salesforce API 호출 모듈 개발로 데이터 핸들링 및 예외처리.
│               └── 쿠폰 조회 페이지 / 기능 개발, 주기적인 쿠폰 만료 처리 기능 스케쥴 기능 개발.
│           └── 성과
│               └── Spring Framework + MyBatis 기반의 기존 프로젝트에서 Spring Boot + JPA 프로젝트 기반 수립.
│           └── 기술 스택
│               └── Spring Boot | JPA | PostgreSQL | JS | Git
<pre id="pre_review">
> review
기존 Spring Framework + MyBatis + SVN의 구조를 Spring Boot + JPA + Git 구조의 프로젝트를 진행하게되어 실무 개발 능력 스코프를 넓힐 수 있었습니다.
</pre></div>│       └──<button class="accordion">Microsoft 서비스 연동 상담 웹 애플리케이션 고도화.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2022.05~2022.06
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 1명 / PE / 80%
│           └── 담당 업무
│               └── MS Azure AD 연동 SSO 통합 상담사 웹 애플리케이션 로그인 기능 개발.
│           └── 기술 스택
│               └── Spring Framework | JS | Azure
<pre id="pre_review">
> review
Azure AD(Active Directory)의 Token 교환 방식으로 MS 시스템의 서비스와 구조를 파악할 수 있었으며, MS제공 라이브러리를 직접 커스텀하여 SSO 기반 구축하는 스킬을 향상 시킬 수 있었습니다.
</pre></div>│       └──<button class="accordion">스타자동차 상담 서비스 구축.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2021.11~2022.04
│           └── 구성원 | 역할 | 기여도 
│               └── PM1명 PL 1명, PE 1명 / PE / 60%
│           └── 담당 업무
│               └── 시스템 아키텍쳐 / 구조 설계, UML,WBS 등 프로젝트 관련 문서 작성.
│               └── 스타자동차 그룹 웨어로부터 ID, Company Code 등 Parameter를 기반으로한 By-Pass SSO 로그인 기능 개발.
│               └── 전화 걸기, 전화 받기, 통화 이전 등 CTI 자원을 핸들링 할 수 있는 Web Socket 소프트폰 개발.
│               └── 카카오 상담톡의 전체 진행건, 상담 진행건, 완료건 등 상담 통계 전광판에 제공할 채팅 갯수 제공 API 개발.
│               └── 고객, 차량, 서비스 가입 정보 등 스타자동차 기간계 데이터마트 연동 통합 조회 UI 및 기능 개발. 
│           └── 성과
│               └── Web Socket 소프트폰 개발로 기존 Internet Explorer에서만 구동되는 ActiveX CTI 소프트폰의 단점 개선.
│           └── 기술 스택
│               └── Spring Framework | JS | PostgreSQL | MsSQL | Linux
<pre id="pre_review">
> review
전화, 카카오 상담톡, 이메일을 활용한 통합상담센터의 상담 웹 애플리케이션을 구축하였습니다.

도입방안서, WBS, 아키텍처 등 설계 단계에서부터 개발, 테스트 유지보수 전체 과정에 개입하여 주도적으로 프로젝트를 진행하였습니다.
특히 기능 설계, 아키텍처 구조, WBS와 같은 문서 작성은 개발 이외의 스킬을 향상 시킬 수 있었습니다.

CTI, 통계, 녹취와 같은 다른 파트와 협업하면서 연동 지식을 쌓을 수 있었습니다.

고객 등록 자동차 정보, 수리 이력, 서비스 현황 등 이전에 고객사 자체 제작 프로그램에서만 조회할 수 있는 정보를 고객사 기간계 데이터 연동하여 사용자가 간편하고 효율적으로 업무에 집중할 수 있도록 사용자 맞춤 페이지 및 기능을 제작하였습니다.

유지보수 단계에 이슈 발생 시 신속하게 원익 파악 및 해결을 하며 트러블슈팅 스킬을 향상 시킬 수 있었습니다.
</pre></div>│       └──<button class="accordion">KB증권 회원제 자산관리 서비스 'Prime CLUB' 카카오 상담톡 서비스 구축.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2021.07~2021.11
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 1명 / PE / 50%
│           └── 담당 업무
│               └── 기존 배분된, 배분 되었던 채팅 세션의 갯수로만 실시간 상담사 배분을 진행하는 로직을 마지막으로 배분 되었던 시간, PostgreSQL의 random() 기능 사용 등으로 평등 배분 로직으로 개선.
│               └── 인입 시 추가적으로 들어오는 extra 값으로 고객이 희망하는 전담 PB(Private Banker) 상담 배분 로직 개발.
│               └── 보안성 증대를 위한 KB증권 기간계 연동 전문(Fixed Length Format)  데이터 교환 기능 개발.
│               └── Sock.js, Stomp.js 를 기반으로한 Web Socket 실시간 채팅 기능 도입.
│           └── 성과
│               └── <a id="anchor"
                        href="https://www.newsquest.co.kr/news/articleView.html?idxno=205830"
                        target="_blank">KB증권 회원제 자산관리 서비스 'Prime CLUB' 구독자 166만명 돌파.(2023.04 기준)</a>
│           └── 기술 스택
│               └── Spring Framework | JS | PostgreSQL | Linux
<pre id="pre_review">
> review
보안이 중요시되는 기업에 On-Premise 서비스를 제공하는 프로젝트였습니다.

내/외부망, DMZ, Proxy, Routing, 방화벽 설정, 이중화 등 현업에서의 서버의 구조와 보안을 배울 수 있었습니다.

직접 Class Diagram, Sequence Diagram을 그려가며 구조와 흐름을 파악하는 스킬을 향상 시킬 수 있었습니다.

직접 개발한 상담톡 배분 로직의 볼륨이 커지면서 유지보수와 재활용 등의 목적으로 모듈화, 객체화 등 최적화를 위한 구조를 고려하며 효율적인 개발 연습을 할 수 있었습니다.
</pre></div>│       └──<button class="accordion">상담 웹 애플리케이션 다국어 버전 개발.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2021.02~2021.07
│           └── 구성원 | 역할 | 기여도 
│               └── PM/PL 1명, PE 3명 / PE / 30%
│           └── 담당 업무
│               └── Spring 기반 웹 애플리케이션 Locale 별 다국어 처리.(Cookie 저장)
│               └── 한국어 / 영어 / 일본어 언어 Messages Properties화.
│               └── Massages Properties 호출 소스 생성 프로그램 개발.
│           └── 성과
│               └── <a id="anchor"
                        href="https://www.mk.co.kr/news/business/10062452"
                        target="_blank">CXpert 솔루션 PowerFront V2 출시로 해외 사업 진출 성공.</a>
│           └── 샘플
│               └── <a id="anchor" 
                        href="https://github.com/wido1593/Multilingual"
                        target="_blank">Spring Boot 다국어 데모</a>
│               └── <a id="anchor" 
                        href="https://github.com/wido1593/Simple_Clipboard_Copy"
                        target="_blank">Massages Properties 호출 소스 생성 프로그램</a>
│           └── 기술 스택
│               └── Spring Framework | JS | PostgreSQL
<pre id="pre_review">
> review
방대한 양의 텍스트들을 추출하고, Messages Properties로 지정, 페이지 렌더링 시 Locale에 따라 나라별 언어를 호출하는 간단하지만 번거로운 프로젝트였습니다.

동료들과 협업하면서 조금씩 모양을 갖춰가는 과정에서 협업의 중요함과 보람을 많이 느꼈습니다.

Messages Properties로 모든 텍스트를 Key=Value의 형태로 추출하고, 페이지 호출 시 사용하는 코드를 클릭 한 번으로 생성해 주는 기능을 제작하여 원활한 작업이 될 수 있도록 지원하였습니다.
</pre></div>│
├── （株式会社）Innocence＿Design
│   └── 직무/직책
│       └── 풀스택 개발자 / 인턴
│   └── 프로젝트(클릭 시 확장됩니다.)
│       └──<button class="accordion">지역 단체 체육회 홍보 사이트, 공연 홍보 사이트 제작.</button>
<div class="accordionPanel">│           └── 기간
│               └── 2019.09~2019.12
│           └── 담당 업무
│               └── PHP 프레임 워크를 이용 백엔드 개발.
│               └── HTML / CSS / JS 를 이용한 프론트엔드 개발
│               └── 사내 자체 Linux 서버 구축.
│               └── MariaDB 데이터 베이스 구축.
│           └── 기술 스택
│               └── PHP | JS | Bootstrap | MariaDB | Linux
<img src="{{ site.baseurl }}/images/portpolio/osaka_prj.png" >
<pre id="pre_review">
> review
개발자로서 처음 실무를 맡아본 프로젝트였습니다.

일본 오사카 디자인회사에서 3개월간 인턴으로 일을 하면서 실무는 물론, 문화를 배울 수 있었습니다.

퍼블리셔 위주의 정적으로 제작되는 사이트에 PHP와 DB를 접목해 동적 웹 프로젝트의 기반을 잡았습니다.
</pre></div>
</pre>
</div>
