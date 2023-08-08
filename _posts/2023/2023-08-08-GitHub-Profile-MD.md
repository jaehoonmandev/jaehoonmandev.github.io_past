---
layout: post
title:	"[GitHub] GitHub 프로필 메인 꾸미기"
date:	2023-08-08 12:00:00
categories:
- blog
tags:
- Git
---

필자의 깃허브는 상당히 허술하기 짝이없지만 그래도 좀 있어보이고 싶으니 외적인거라도 갖추고 싶어서 메인 화면을 꾸며보기로 했다.  
깃허브 프로필 메인 화면을 좀 더 화려하게 꾸며보자.


### Reoisitory 생성
---
본인의 깃허브 메인 페이지에 접근하여 새로운 레포지토리를 생성해보자.  
이때, 본인 아이디를 깃허브 레포지토리에 넣고 새로운 레포지토리를 생성하게되면

![]({{ site.baseurl }}/images/posts/2023/Github/profile/create_repository.png)

아래와 같이 당신의 깃허브 프로필에 쓸 수 있는 README.md 를 추가할 수 있는 “특별한” 레포지토리를 생성할 수 있다고 안내를 해준다.

<br>
레포지토리 이름을 지정한 뒤 아래에 있는 Add a README file를 체크하여 생성한다면

![]({{ site.baseurl }}/images/posts/2023/Github/profile/added_repository.png)

아래와 같이 Hi there **👋 의 내용이 담긴 [README.md](http://README.md) 파일이 생성된다.**  
옆에서는 또 방금 생성한 레포지토리가 스페셜한 레포지토리이며, Edit할 수 있게 버튼도 제공해준다.

<br>
Edit README를 클릭하게된다면
![]({{ site.baseurl }}/images/posts/2023/Github/profile/edit_README.png)

와 같이 기본 가이드 라인을 제공해준다.

<br>
일단 기본으로 제공된 README.md를 수정하지않고 메인 프로필로 가게되면
![]({{ site.baseurl }}/images/posts/2023/Github/profile/added_repository.png)

상단에 표시되는 것을 확인할 수 있다.

<br>
### 뱃지 및 스킬셋 설정
---
<br>
자 이제 간단하게 본인 소개와 뱃지, 스킬셋을 넣어보자.
본인소개는 기존 마크다운 문법을 쓰면되고, 뱃지와 아이콘 같은 경우에는 자주 사용되는[simpleicons.org](https://simpleicons.org/)
와[Shields.id](http://Shields.id) 를 통하여 진행해볼 것이다.

![]({{ site.baseurl }}/images/posts/2023/Github/profile/simpleicons_main.png)

위와 같은 페이지가 노출되는데 Search 항목에서 자신이 원하는 아이콘을 검색하면 해당하는 아이콘이 노출될 것이다.

<br>
svg 형태 다운 받을 수도 있고, [Shields.id](http://Shields.id) 의 서비스를 이용하여 CDN방식으로 끌어다 쓸 수 있다.

필자의 경우는 뱃지는 CDN 방식을 사용하였고, 스킬셋 아이콘은 svg로 다운받아 인라인 세팅을 해줬다.

일단 현재 등록한 형태는
![]({{ site.baseurl }}/images/posts/2023/Github/profile/jaehoonman_github_README.png)

Personal Page아래에 있는게 뱃지, Skills 아래 있는 아이콘들은 svg 이미지이다.

<br>
뱃지를 먼저 설정해보자.  
[Shields.id](http://Shields.id)에서 제공하는 static badge 서비스를 이용할 것이다.

![]({{ site.baseurl }}/images/posts/2023/Github/profile/shield_io_static_badge.png)


이용하는 방법은 `https://img.shields.io/badge/` 의 도메인 뒤에 [simpleicons.org](https://simpleicons.org/)에서
 원하는 이미지의 아이콘의 이름과, 색깔, 로고명 등을 GET 파라미터로 넘겨주면 자동으로 로고가 포함된 뱃지가 생성된다.

<br>
즉,
```html
<img src="https://img.shields.io/badge/Tistory-FF8224?style=flat&logo=tistory&logoColor=000000"/>
```
를 호출하게되면

![]({{ site.baseurl }}/images/posts/2023/Github/profile/tistory_badge.png)

이와 같은 뱃지를 생성가능하다.

<br>
사용 방법으로는
```
https://img.shields.io/badge/
[뱃지에 표시할 제목]-[뱃지 배경 색상 HEX코드(#제외)]
?style=[flat, flat-square, plastic, for-the-badge, social]
&logo=[호출할 로고 이름]
&logoColor=[제목 색상 HEX코드(#제외)]
```
로 호출을 하면된다.  
다른 옵션들도 많지만 간단하게 진행하겠다.

이제 이 이미지를 <a></a> 안에 넣어 맵핑 할 src를 입력해주면 된다.  
뱃지는 이렇게 완료해두고 스킬셋에 쓰일 아이콘은 https://simpleicons.org/에서 원하는 로고를 검색 후 돋보기 모양을 눌러 색상있는, 없는 svg 를 다운 받아서 프로필 README.md 가 있는 레포지토리에 넣어줬다.

![]({{ site.baseurl }}/images/posts/2023/Github/profile/static_logos.png)

이제 md 파일에서
```
<a href="https://simpleicons.org/" target="_blank">
    <img src="icons/back/spring.svg" height="50"/>
</a>
```
와 같은 방식으로 절대경로를 넣어 표시해주면된다.

(a 태그 안에 target 옵션은 github에서 제공하는 Markdown 엔진에서 랜더링이 안된다…)