---
layout: post
title:	"[Software Design Patterns] 소프트웨어 디자인 패턴"
date:	2023-07-17 12:00:00
categories:
- blog
tags:
- Software Design Patterns
published: false
---

# Software Design Pattern

---

##### 소프트웨어 디자인 패턴이란?

소프트웨어를 개발중에 발생할 수 있는 공통적인 문제를 해결하기 위해 제안된 솔루션이다.

또한 빠른 개발을 위해 템플릿으로 사용되기도한다.

여기서 문제라함은

- 클래스를 생성 했을 때 너무 많은 클래스가 생성됨(유지보수의 어려움)
- 한 클래스에 구분되지 않게 너무 많은 정보 포함(독립적이지 않음)
- 간단한 기능만을 가진 클래스를 사용하기위해 매번 인스턴스를 생성(비효율적)

등등.. 비효율적이거나, 적절하지 않은 개발을 진행하는 “문제”를 얘기한다.

1977년 Christopher Alexander는 구조를 가지는 아키텍쳐 컨셉의 개념을 제시하였고, 1987년 Kend Beck과 Ward Cunningham은 이를 프로그래밍에 접목시키는 Pattern to programming의 개념을 제시하였다.

이후 1994년 GoF(Gang of Four)의 등장으로 Pattern to programming 즉, Design patterns은 인기를 얻게되었다.

[Gang of Four]

- Erich Gamma
- Richard Helm
- Ralph Johnson
- john Vissides

GoF에 의해 대표적으로 소개된 패턴은 3가지 패턴으로 분류된다.

- Creation Patterns - 생성 패턴
- Structual Patterns - 구조 패턴
- Behavioral Patterns - 행동 패턴
  
3가지 패턴은 또한 상세하게 나눠진다.

## Creation Patterns

---

[객체 생성 메커니즘]
  
  기본적인 아이디어는 시스템을 사용하는데 있어서 객체를 Encapsulating(캡슐화)하고, 객체에서 생성할 인스턴스를 어떻게 생성할 것이고, 어떻게 결합할지를 결정하는데서 시작한다.  

  대표격이라 볼 수 있는 5가지 패턴을 함께 살펴보자

- Factory method pattern  
  부모 클래스에 알려지지 않은 구체 클래스를 생성하는 패턴, 자식 클래스가 어떤 객체를 생성할지를 결정하도록하는 패턴.  
  
  [팩토리]
  복잡한 오브젝트의 생성과정을 클라이언트가 직접 다룰필요가 없다.

  오브젝트를 생성하는게 쉽다.

  ~~만 만들어주세요 라고 factory에 넘겨주면 리턴해준다.

  오브젝트의 생성방법을 몰라도 생성이 가능하다.

  오브젝트를 찍어낼 수 있는 공장.

  여러 개의 서브 클래스를 가진 슈퍼 클래스가 있을 때 인풋에 따라 하나의 자식 클래스의 인서턴스를 리턴해주는 방식.

  [팩토리 메소드]

  팩토리 인터페이스를 만들고 create() 메서드를 넣고 하위 클래스에서 구체화하여 생성하도록한다

  생성한 객체에 개별적으로 적용하고 싶은 기능이 있을 때 사용할 수 있다.

- Abstract factory patterns(추상 팩토리 패턴)

  공통적인 주제를 가진 관련 객체들을 그룹핑하여 팩토리 클래스를 많들어 사용하는 패턴으로, 각 객체들은 상세화되지 않는다.

  사용자는 구체화 되지 않은 클래스를 사용함에 있어서 틀을 제공 받고, 구현하여 사용하게되는데 이렇게 생성된 인스턴스들을 공통점을 가지고 그룹핑된다.


Ref.

[https://en.wikipedia.org/wiki/Software_design_pattern](https://en.wikipedia.org/wiki/Software_design_pattern) 

[https://en.wikipedia.org/wiki/Creational_pattern](https://en.wikipedia.org/wiki/Creational_pattern)

[https://refactoring.guru/ko/design-patterns/factory-method](https://refactoring.guru/ko/design-patterns/factory-method)