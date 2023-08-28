---
layout: post
title:	"[Java] Anonymous Class - 익명 클래스"
date:	2023-08-17 12:00:00
categories:
- blog
tags:
- Java
---

# Anonymous Class - 익명 클래스

우리가 기본적으로 사용하는 클래스 선언 - 인스턴스의 방법을 간략화 시켜줄 수 있는 방법이다.

익명 클래스는 클래스의 선언과 동시에 인스턴스를 동시에 처리해준다.

코드를 더욱 간결하게 표현할 수 있는 방법이지만 상황에 맞게 사용해야하한다.

특징을 살펴보며 익명 클래스가 무엇인지 파악해보자.

# 익명클래스의 특징

 - 인스턴스의 이름이 없다.
 - 한 번만 사용가능한 인스턴스성.
 - 클래스 상속 및 인터페이스 구현 가능(Override)
 - 로컬 스코프를 가지기에 static 선언 불가능.
 - 생성자의 의미가 없다.
 
등 과 같은 특징을 가지고있다.  
익명 클래스를 사용하기 전에 우리가 이전에 어떻게 클래스를 선언하고 인스턴스화 시켰는지 확인해보자

# 기본적인 클래스의 선언과 인스턴스화

기존에 클래스를 선언하고 인스턴스화 시키는 방법으로

 1. 클래스 선언
 2. 인스턴스 생성(new)
 3. 인스턴스 활용
의 과정을 거쳐야만 했다.

 ```java
public class Main {
    
    public static void main(String[] args) {
        //인스턴스 생성
        Hello hello = new Hello();
        //인스턴스 활용.
        hello.sayHello();
        }
    }
    //클래스 선언
    class Hello{
        //메서드 정의
        void sayHello(){
        System.out.println("Hello");
        }
}
```

 하지만 익명 클래스는 위에서 설명한 것처럼 인스턴스의 이름을 가지지 않는 특징을가지게된다.

기본 생성 방법에서 2~3 단계의 과정을 하나로 구현가능할 수 있게된다.


# 익명 클래스 선언 방법

기본적인 구성으로는

- new
- 인터페이스 or 클래스 이름
- () / {} / ;

가 있으며 익명인 만큼 타입과 인스턴스 명은 제외한다.

익명 클래스는 클래스를 “상속” 받을 수도 있고, 인터페이스를 “구현” 할 수도 있다.

### [이미 선언되어 있는 클래스를 상속]

인스턴스를 생성하는 new 이전의 “[타입] [인스턴스명] =  “ 의 부분을 지워주면된다.

```java
//익명 클래스
new Hello(){
    @Override
    void sayHello(){
        System.out.println("안녕하세요");
    }
}.sayHello();
```

이를 이전의 예시와 합치면

```java
public class Main {

    public static void main(String[] args) {
        //인스턴스 생성
        Hello hello = new Hello();
        //인스턴스 활용.
        hello.sayHello(); // Hello 출력

        //익명 클래스
        new Hello(){
            @Override
            void sayHello(){
                System.out.println("안녕하세요");
            }
        }.sayHello(); // 안녕하세요 출력
    }
}
//클래스 선언
class Hello{
    //메서드 정의
    void sayHello(){
        System.out.println("Hello");
    }
}
```

Hello 와 안녕하세요를 출력하게된다.

기존에 선언된 클래스의 기능을 재구성(@Override) 함으로써 Java의 상속 개념을 적용시킬 수 있으며, 선언과 동시에 인스턴스화를 시킨 뒤 ‘ . ’ 접근자를 활용하여 기능마저 실행 시키기도한다.

### [interface 구현]

클래스가 아닌 인터페이스도 구현이 가능하다.

인터페이스로 Hi를 생성한 뒤 클래스에서 implements해서 구현하지 않고 바로 익명 클래스로 구현해보도록하자.

```java
public class Main {

    public static void main(String[] args) {
        //인스턴스 생성
        Hello hello = new Hello();
        //인스턴스 활용.
        hello.sayHello(); // Hello

        //익명 클래스 블록 외부 변수
        String name= "mark";

        //익명 클래스로 클래스 상속
        new Hello(){
            @Override
            void sayHello(){
                System.out.println("안녕하세요" + name);
            }
        }.sayHello(); // 안녕하세요

        //익명 클래스로 인터페이스 구현.
        new Hi(){
            @Override
            public void seyHi() {
                System.out.println("Hi");
            }
        }.seyHi(); // Hi
    }
}
//클래스 선언
class Hello{
    //메서드 정의
    void sayHello(){
        System.out.println("Hello");
    }
}

//인터페이스 선언.
interface Hi{
    void seyHi();
}
```
여기서 
```java
//인터페이스 선언.
interface Hi{
    void seyHi();
}

new Hi(){
    @Override
    public void seyHi() {
        System.out.println("Hi");
    }
};
```

의 두 부분을 보면된다.

인터페이스로 선언한 Hi를 클래스를 상속했던 방식과 똑같이 new [인터페이스명] () {…}; 로 구성하여 인터페이스를 상속한 클래스를 사용하지 않고 기능을 구현하였다.

---

Ref.

https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html

https://www.baeldung.com/java-anonymous-classes