---
layout: post_GitHubPages
title:	"[GitHub Page] GitHub 블로그 생성하기."
date:	2023-05-22 12:00:00
categories:
- blog
tags:
- Git
---

이번에 소개할 서비스는 GitHub Pages 다.

GitHub Pages는 티스토리, 네이버 블로그 등과 같은 일종의 블로그 서비스라고 생각하면 된다.

GitHub 서버에 웹 페이지 관련 리소스를 올리고 이를 외부에서 접근하여 화면을 띄우는 서비스이며,

간단히 GitHub 서버를 쓰는 블로그라 생각하면된다.

GitHub Pages 의 장점이라면 장점, 단점이라면 단점인 게

처음부터 끝까지 사용자가 페이지 소스를 제작하여 올려야 한다는 것이다.

자유도가 높은 대신 웹 페이지를 제작하는 스킬이 필요하다는 것이다.

웹 개발자 입장에서 github pages를 통하여 블로그를 작성하면 본인 스킬업도 되고 하고 싶은 거 다~ 할 수 있으니 개인적으로는 긍정적으로 보고 있다.

이제 github pages를 설정하여 index.html을 통하여 제대로 설정되었는지 확인해 보도록 하자.

# GitHub Pages 생성 / 설정하기.

1.  새로운 Repository를 만든다.
    -   GitHub에 로그인하여 우측 상단 계정 아이콘 옆에 + 버튼을 눌러 “New repository” 를 선택한다.  
    ![]({{ site.baseurl }}/images/posts/2023/github_pages/1/1.png)
    -   Repository name 을 \[본인 GitHub ID\].github.io 로 설정 후, Repository를 생성한다.  
    ![]({{ site.baseurl }}/images/posts/2023/github_pages/1/2.png)


2.  생성한 Repository Settings.

    -   생성된 Repository 의 Settings 상단 탭 접근.
    -   Code and automation - Pages
    -   Build and deployment
        -   Sources - Deploy from a branch
        -   Branch - none - save

    ![]({{ site.baseurl }}/images/posts/2023/github_pages/1/3.png)



3.  View 제작 - README.md

    이제 본인의 github pages 도메인을 입력하였을 때 노출되는 페이지를 제작해야 된다.

    README.md / index.html를 제작할 것인데,  
    README.md는 GitHub Repository에 접근하였을 때 대문 설명 내용? 같은 거 작성할 때,  
    index.html은 Root 경로에서 가장 먼저 보일 페이지다.

    먼저 README.md 를 제작하기 위해 Repository에 code를 생성해야 한다.  
    방법이야 여러 가지가 있겠지만 Git 사용법을 익히기 위해서 커맨드를 통하여 생성을 해보자.  
    (git설정이 되어있지 않았다면 [https://jaehoonman.tistory.com/25](https://jaehoonman.tistory.com/25) 를 참고하자)

    Repository - code에 접근하면 현재 생성된 파일이 없기 때문에 아래와 같이 노출될 것이다.  
    ![]({{ site.baseurl }}/images/posts/2023/github_pages/1/4.png)

    ```
    echo "# wido1593.github.io" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/wido1593/wido1593.github.io.git
    git push -u origin main
    ```

    GitHub 에서 소개한 대로 git 설정을 한 뒤

    1.  echo로 [README.md](http://readme.md/) 파일 생성.
    2.  git initialization. (git repository 로 사용할 디렉터리를 cd 로접근하여 init 해준다.)
    3.  연동한 Repository 에 생성한 [README.md](http://readme.md/) 파일을 commit / push를 해준다.

    ![]({{ site.baseurl }}/images/posts/2023/github_pages/1/5.png)  
    생성된 파일을 확인하고, GitHub Repository 대문에 아까 작성한 내용이 노출되는지 확인하자.  
    (index.html은 이미 해놓고 글을 써서 있는 거다 ㅎㅎ)



4.  View 제작 - index.html

    git init 으로 지정한 디렉터리에 index.html을 생성한다.

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title> 하이염 </title>
    </head>
    	<body>
    		하이염
    	</body>
    </html>
    ```

    이후 git add / git commit / git push 를 통하여 해당 소스를 git repository 에 push해준다.

    push가 완료되었다면 Root 경로를 브라우저로 접근한다.

    ![]({{ site.baseurl }}/images/posts/2023/github_pages/1/6.png)  
    작성한 내용이 브라우저에서 확인된다면 git pages 설정을 완료한것이다.

    다만, push한 뒤에도 404 에러 코드를 뱉으면서 index.html 내용이 바로 나타나지 않을수도있다.  
    이때는 1~10분정도의 텀을 두고 확인해보면된다.

    근데 이랬는데도 안됐다?

    ```
    $ git commit --allow-empty -m "Trigger rebuild"
    $ git push
    ```

    의 커멘드로 commit / push 를 진행하여 이전 내용이 반영될 수 있도록 하자.  
    이유는 commit / push가 진행될 때마다 git pages 가 build 되는 것으로 판단된다.

    이것도 안된다? 그럼 git pages 404 키워드로 검색하면 여러 가지 대처 방안이 나올 것이다.

기본적인 설정을 마치게 되면 이걸로 어떻게 블로그를 처음부터 만드나 막막할 텐데,  
다행히 다른 똑똑이들이 Theme 템플릿을 제공하기 때문에 블로그의 기반을 손쉽게 설정을 할 수 있다.


다음 포스트에서는 **Jekyll를 통해 템플릿을 설정하는 방법을 알아보겠다.**



Ref.

https://docs.github.com/en/pages/quickstart

https://eunhee-programming.tistory.com/164