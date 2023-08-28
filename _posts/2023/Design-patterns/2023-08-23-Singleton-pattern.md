---
layout: post
title:	"[Design patterns] Creation pattrens - Singleton pattern"
date:	2023-08-23 12:00:00
categories:
- blog
tags:
- Design patterns
---
# Singleton pattern

클래스의 인스턴스를 단일 인스턴스로 제한하여  전체적인 시스템에서 공통적으로 수행해야하는 동작을 위한 객체를 생성하는데 사용된다.

즉, 글로벌 변수로 활용할 객체의 인스턴스를 1개 생성하여 사용하는 식으로 활용되는 객체이다.

싱글톤 패턴을 사용하게되면 아래와 같은 객체를 생성할 수 있게된다.

- 하나의 인스턴스를 가지도록 보장해준다.
- 인스턴스에 접근하기 쉬워진다.
- 인스턴스를 제어할 수 있다.

![Untitled]({{ site.baseurl }}/images/posts/2023/Design_Patterns/Singleton_classDiagram.png)  
Singleton pattern의 class diagram [https://en.wikipedia.org/wiki/Singleton_pattern](https://en.wikipedia.org/wiki/Singleton_pattern)

<br>

# 일반적인 사용

---

- 단일한 이름의 글로벌 객체로 사용한다.
- lazy allocation과 초기화에 사용한다.
- 싱글톤 패턴은 추상 팩토리, 팩토리 메소드, 빌더, 프로토타입 등의 패턴에서도 하나의 facade 객체가 필요할 때 기반으로도 활용된다.
- 모든 객체에서 공통적으로 사용될 정해진 형식으로 로그를 구현할 때 사용한다.

<br>

# 구현

---

### 구현 조건

이전에 존재하지 않는 단일한 글로벌 액세스를 위한 인스턴스를 만들기 위해서는

- 다른 객체에 의해서 새롭게 인스턴스화 되지 않도록 객체는 private로 이루어져야한다.
- 외부에서 인스턴스를 참조할 수 있는 메서드는 static 으로 지정한다.

<br>
싱글톤 패턴을 구현하는 대표적인 방법으론

- Eager Initialization
- Using static block
- Lazy Initialization
- Thread Safe Singleton
- Lazy Initialization with Double check locking
- Bill Pugh Singleton Implementation

가 있으며 하나씩알아보도록하자.

<br>

### Eager Initialization

가장 간단하게 구현할 수 있는 방법이다.

인스턴스가 메모리에 적재 될 때 초기화 하는 방법이며, 객체가 인스턴스로 참조되면서 메모리에 적재되는 방법이다.

```java
//Eager Initialization 으로 호출 시에 초기화된다.
public class Singleton_Eager {

    //어디서 사용하더라도 동일한 인스턴스를 넘겨주기 위해 private static final 로 메모리에 상주시킨다.
    private static final Singleton_Eager instance = new Singleton_Eager();
    
		//Private 생성자.
    private Singleton_Eager(){}

    //단일 인스턴스를 호출하기 위해 public static 으로 외부에서 참조할 수 있도록한다.
    public static Singleton_Eager getInstance(){
        return instance;
    }

}
```

#### 특징

- 간단한 구현 방법.
- 필요하든, 필요하지 않든, 항상 메모리에 상주되어있어 자원 손실 가능성이있다.
- 초기화가 무조건 일어나다 보니 CPU 타임 또한 손실이있다.
- 예외 처리가 불가능하다.

<br>

### Using static block

Eager initialization와 크게 다르지 않지만 static block 안에 생성되어 예외 처리와 같이 생성에 대한 권한을 가질 수 있게된다.

```java
//statick block을 이용하여 인스턴스 생성의 제어를 가질 수 있는 초기화 방법.
public class Static_block {
    //getInstance() 와 같은 인스턴스 제공 메서드가 없기에 public 지정
    public static Static_block instance;
    
    private Static_block(){}
    
    //static 블럭안에서 초기화되기에 예외 처리와 같은 제어권을 가질 수 있게된다.
    static {
        instance = new Static_block();
    }
    
}
```

#### 특징

- 간단한 구현 방법.
- 인스턴스를 직접 액세스하기 때문에 getInstance() 와 같은 메서드를 구현하지 않아도된다.
- static block 안에서 예외처리가 가능하다.
- Eager initialization 과 같이 메모리 낭비의 우려가 있다.

<br>

### Lazy initialization

위의 구현 방법에서 공통적으로 생기는 메모리 낭비의 우려를 보완하여 필요 시에만 생성되도록하는 방법이다.

인스턴스를 return 시켜줄 때 null-check 를 통하여 기존에 생성된 인스턴스가 없으면 생성하여주고, 이미 생성되어 있다면 기존의 값을 넘겨주는 방식으로 호출 시점에서 핸들링이 가능하다.

시스템 초기화 시 인스턴스가 생성되지 않고, 객체가 필요에 의해 호출될 때 객체를 생성할 때 일부러 딜레이를 주는 기술이다.

```java
//필요시에만 인스턴스를 할당하여 메모리 효율적이며, 생성 시점에서 예외처리를 할 수 있다.
public class Lazy {

    private static Lazy instance;

    private Lazy(){}
    
    //인스턴스 참조를 위한 메서드 
    public static Lazy getInstance(){
        //null-check 를 통하여 인스턴스 할당이 되어있지 않은 시점에 인스턴스를 할당한다.
        if(instance == null){
            //인스턴스 생성 시 예외처리를 겸할 수 있다. 
            instance = new Lazy();
        }
        return instance;
    }
}
```

#### 특징

- 필요 시에만 객체를 생성하기에 메모리와 CPU time의 낭비를 방지할 수 있다.
- 생성 과정에서 예외처리가 가능하다.
- null 상태 체크로 상대적으로 안전하다.
- 생성된 인스턴스는 직접 접근이 불가능하다.
- 멀티쓰레드 환경에 적합하지 않다.

<br>

## Thread Safe Singleton

단순 Lazy initialization 은 각자 다른 위치에서 동시에 싱글톤 인스턴스에 접근하는 경우가 생기면 예상하지 못한 동작이 수행될 수 있는 Race Condition이 발생할 수 있다.

멀티쓰레드 환경에서 이를 방지하기 위해서 요청을 동기적으로 처리하는 방법을 사용해야한다.

인스턴스를 참조할 수 있게 하는 getInstance() 메서드에 synchronized 속성을 부여하면된다.

```java
//멀티쓰레드 환경에서 Race condition 이 발생하는 것을 방지하기 위해 synchronized 처리.
synchronized public static Lazy getInstance_sync(){
    if(instance == null){
        instance = new Lazy();
    }
    return instance;
}
```

#### 특징

- Lazy initialization 기능 유지.
- Thread Safe
- synchronized 로 수행되기 때문에 여러 쓰레드가 동시에 액세스 할 수 없어 성능 저하의 원인이 된다.

<br>

## Lazy initialization with Double check locking

Thread safe singleton 에서 발생할 수 있는 동기 처리로 인한 성능 저하를 개선할 수 있는 방법이다.

메서드 자체에 synchronized를 부여하지 않고 인스턴스를 생성하는 부분에서 **synchronized** 속성을 부여하는 방법이다.

이로인해 최초 인스턴스 생성 때에만 **synchronized** 처리를 하게된다.

```java
//메서드 자체가 아닌 인스턴스 생성시기에만 synchronized 속성을 부여해 동기처리로 인한 성능 저하 개선. 
    public static Lazy getInstance_Double_Check_locking(){
        //생성된 인스턴스가 없을 때만
        if(instance == null){
            //클래스에 synchronized 속성 부여
            synchronized (Lazy.class){
                //내부에서 한 번 더 null check
                if (instance == null){
                    instance = new Lazy();
                }

            }
        }
        return instance;
    }
```

#### 특징

- Lazy initialization.
- Thread safe.
- synchronized 속성으로 인한 성능 저하 개선.
- 최초 인스턴스 생성 시에만 성능에 영향을 미친다.

<br>

#### Volatile

추가로 객체 선언 시 “volatile” 이라는 속성을 부여할 수 있는데, 이는 모든 쓰레드에서 해당 객체를 메인 메모리에서만 로드할 수 있도록 강제하는 것을 의미한다.

volatile을 사용하지 않을경우 쓰레드는 메인 메모리에서 가져온 객체를 CPU 캐시에 저장하는데, CPU 캐시는 쓰레드마다 부여가 되기에 서로 불일치할 가능성이 있기에 이를 메인 메모리에서만 읽어 오도록 강제하여 위와 같은 위험성을 회피할 수 있다.

```java
private static volatile Lazy instance_volatile= new Lazy();
```

<br>

## Bill Pugh Singleton Implementation

Java5 이전에는 메모리 모델에 이슈가 빈번하였기에 멀티쓰레드 환경에서 또한 이슈가 생길 가능성이 있었다.

이에 Bill Pugh는 Inner Class 를 이용한 생성방법을 제안하였다.

```java
public class Bill_Pugh {
    
    private Bill_Pugh(){}

    private static class BillPughSingleton{
        private static final Bill_Pugh instance = new Bill_Pugh();
    }

    public static Bill_Pugh getInstance(){
        return BillPughSingleton.instance;
    }
}
```

싱글톤 클래스가 로드되어도 클래스 내부의 클래스는 로드되지 않는다.

getInstance() 가 호출 될때만 생성되기 때문에 Lazy initialization을 구현하며, 성능저하에 영향을 주는 synchronized 또한 사용하지 않는다.

<br>

Ref.

https://en.wikipedia.org/wiki/Singleton_pattern  
https://www.geeksforgeeks.org/java-singleton-design-pattern-practices-examples/  
https://m.blog.naver.com/sun_zero2/222080290099  