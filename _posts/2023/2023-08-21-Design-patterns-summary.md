---
layout: post
title:	"[Design patterns] 소프트웨어 디자인패턴의 기본 개념(작성중)"
date:	2023-08-21 12:00:00
categories:
- blog
tags:
- Design patterns
---

## 소프트웨어 디자인 패턴이란?

소프트웨어를 개발중에 발생할 수 있는 공통적인 문제를 해결하기 위해 제안된 솔루션이다.

또한 빠른 개발을 위해 템플릿으로 사용되기도한다.   
<br>  
여기서 문제라함은

- 클래스를 생성 했을 때 너무 많은 클래스가 생성됨(유지보수의 어려움)
- 한 클래스에 구분되지 않게 너무 많은 정보 포함(독립적이지 않음)
- 간단한 기능만을 가진 클래스를 사용하기위해 매번 인스턴스를 생성(비효율적)

등등.. 비효율적이거나, 적절하지 않은 개발을 진행하는 “문제”를 얘기한다.  
<br>

1977년 Christopher Alexander는 구조를 가지는 아키텍쳐 컨셉의 개념을 제시하였고, 1987년 Kend Beck과 Ward Cunningham은 이를 프로그래밍에 접목시키는 Pattern to programming의 개념을 제시하였다.  
<br>  
이후 1994년 GoF(Gang of Four)의 등장으로 Pattern to programming 즉, Design patterns은 인기를 얻게되었다.

##### Gang of Four

- Erich Gamma
- Richard Helm
- Ralph Johnson
- john Vissides

<br>
GoF에 의해 대표적으로 소개된 패턴은 크게 3가지 패턴으로 분류된다.
- Creation patterns - 생성 패턴
- Structural patterns - 구조 패턴
- Behavioral patterns - 행동 패턴

3가지 패턴은 내부에서 또한 상세하게 나눠진다.  
<br>

## Creation patterns - 생성 패턴

---

> 시스템을 사용하는데 있어서 객체를 Encapsulating(캡슐화)하고, 객체에서 생성할 인스턴스를 어떻게 생성할 것이고, 어떻게 결합 할지를 결정.
>

##### Abstract factory pattern

  구현되지 않은 서로 관련된 성질을 가지는 객체(인터페이스)들을 그룹화하며, 사용자가 이를 구현해 사용하는 패턴.

##### Builder pattern

  여러가지 요소를 포함하고 있는 객체를 생성할 때 사용자는 복잡한 클래스를 호출하는 것이 아닌 이 객체를 생성하는 표현을 알고 있으면 원하는대로 구성을 조합하여 객체를 생성할 수 있는 패턴.

##### Factory method pattern

  부모 클래스에서 미리 지정한 틀(인터페이스)를 자식 클래스에서 원하는 대로 재구성하여 사용할 수 있는 패턴.

##### Prototype pattern

  객체를 생성하기 위해 호출한 클래스에 의존하지 않고 이를 복사하여 사용자가 자유롭게 구성할 수 있는 패턴.

##### Singleton pattern

  전체적인 시스템에서 공통적으로 수행해야하는 동작을 위한 객체를 생성할 수 있는 패턴.

## Structural patters - 구조 패턴

---

> 엔티티 간의 관계를 단순한 방법으로 맺음으로써 설계를 용이하게 하는 설계 패턴.
>

##### Adapter pattern

  이미 존재하는 클래스의 인터페이스를 수정하지 않고 다른 인터페이스로 변환하여 호환성을 높여주는 패턴.

##### Composite pattern

  복합 객체 그룹을 단일 인스턴스 처럼 사용할 수 있게 부분#####전체 계층을 트리 구조로 통합 시켜주는 패턴.

##### Aggregate pattern

  서로 연관된 객체들을 하나의 Aggregate 안으로 묶어서 연관된 객체들을 모아두는 패턴으로 DDD(Domain Driven Design) 의 기초가 되는 패턴.

##### Bridge pattern

  구현체에서 추상화를 해제하여 대상이 된 두 개의 클래스를 서로 독립적인 클래스로 만드는 패턴.

##### Decorator pattern

  동일한 클래스의 다른 객체의 동작에 영향을 주지 않고 즉, 클래스의 기능을 수정하지 않고 동적으로 개별 객체에 동작을 추가할 수 있는 패턴.

##### Extensibility pattern

  차후 확장될 수 있다는 원칙을 가지고 설계하여 기존 시스템 기능을 손상 시키지 않고 확장성을 제공해주는 패턴.

##### Facade pattern

  상세화되지 않은 하위 인터페이스를 하나의 상위 인터페이스로 조작할 수 있게하는 패턴.

##### Flyweight pattern

  비슷한 객체를 공유하면서 최소한의 메모리를 가지고 객체를 참조할 수 있는 패턴.

##### Marker pattern

  메타데이터에 대한 명시적인 지원을 가지고 있지 않은 클래스와 메타데이터를 연관 시키기 위해 객체의 런타임 타입 정보를 제공하는 패턴.

##### Pipes and filters

  각 프로세스의 출력이 다음 프로세스의 입력이되어 자연스럽게 순차적 흐름을 구성하는 패턴.

##### Proxy pattern

  객체 참조간에 참조되는 객체의 대리자로 역할을 인터페이스로 구현한 패턴.


## Behavioral patterns - 행위 패턴

---

> 객체간의 공통적인 통신 패턴을 식별하는 설계 패턴.
이를 통해 객체간의 유연성을 증가시킴.
>

##### Blackboard design pattern
##### Chain of responsibility pattern
##### Command pattern
##### Interpreter pattern
##### Iterator pattern
##### Mediator pattern
##### Memento pattern
##### Observer pattern
##### Protocol stack
##### Scheduled-task pattern
##### Single-serving visitor pattern
##### Specification pattern
##### Specification pattern
##### State pattern
##### Strategy pattern
##### Template method pattern
##### Visitor pattern

---

Ref.

https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html

https://www.baeldung.com/java-anonymous-classes