---
layout: post
title:	"[Design patterns] 소프트웨어 디자인패턴의 기본 개념"
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

  결정되지 않은 모듈의 구현을 통합 할 수 있도록 프레임워크를 제공 해주는 패턴

##### Command pattern

  객체가 나중에 동작을 수행하거나 이벤트를 발생시키는 데 필요한 정보를 캡슐화하여 사용하는 패턴.

##### Chain of responsibility pattern

  로직이 포함된 프로세싱 객체를 통하여 커맨드 오프젝트가 다른 오브젝트를 핸들링할 수 있는 패턴.

##### Interpreter pattern

  문제에 해결을 신속하게 할 수 있도록하는 컴포넌트를 설계 할 때 사용하는 패턴.

##### Iterator pattern

  컨테이너에서 알고리즘 부분을 분리하는 등의 방법을 이용하여 컨테이너의 각 부분알 액세스할 때 사용하는 패턴.

##### Mediator pattern

  직접 연관을 짓는 객체들을 중재자 객체를 통해 캡슐화되어 의존성을 낮추는 패턴.

##### Memento pattern

  이전 상태를 유지할 수 있는 저장 기능이 있는 객체를 사용하는 패턴.(rollback)

##### Observer pattern

  구독된 객체의 의해서 발생한 이벤트를 포착하여 다른 연관 객체에게도 이를 알려주는 패턴.

##### Protocol stack

  여러개의 레이어를 구성하여 이를 통하여 핸들링하는 패턴.

##### Scheduled-task pattern

  특정 시간 간격을 두고 주기적으로 수행되도록 작업을 예약하는 패턴.

##### Visitor pattern

  기존 객체에서 알고리즘 부분을 분리하여, 다른 객체가 새로운 동작을 추가할 때 구조를 변경하지 않아도되는 패턴.

##### Single-serving visitor pattern

  Visitor 패턴을 최적화하여 사용하는 목적을 가지고 있으며, 한 번 사용되고 바로 지워지는 패턴.

##### Specification pattern

  도메인의 일부를 단일로 분리하여 캡슐화하고, 다른 객체에서 재사용할 수 있도록 하는 패턴.

##### State pattern

  런타임 도중에 내부 상태가 변경될 때 객체의 상태를 부분적으로 바꿀 수 있는 패턴.

##### Strategy pattern

  런타임 도중에 원하는 알고리즘을 선택할 수 있도록하는 패턴.

##### Template method pattern

  상속을 이용하여 원하는 알고리즘을 선택할 수 잇는 패턴.

---

Ref.

https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html

https://www.baeldung.com/java-anonymous-classes