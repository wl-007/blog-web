---
title:  java基础
order: 1
group:
  title: 基础
---

# 基础语法

## HelloWorld

```java
public class HelloWorld {
	public static void main(String[] args) {
		System.out.println("HelloWorld");
	}
}
```

## 注释

Java中的注释分为三种：

* 单行注释：

~~~java
// 这是单行注释文字
~~~

* 多行注释：

~~~java
/*
这是多行注释文字
这是多行注释文字
这是多行注释文字
*/
注意：多行注释不能嵌套使用。
~~~

* 文档注释：

```java
/**
这是多行注释文字
这是多行注释文字
这是多行注释文字
*/
```

## 字面量

作用：告诉程序员，数据在程序中的书写格式。

| **字面量类型** | **说明**                                  | **程序中的写法**           |
| -------------- | ----------------------------------------- | -------------------------- |
| 整数           | 不带小数的数字                            | 666，-88                   |
| 小数           | 带小数的数字                              | 13.14，-5.21               |
| 字符           | 必须使用单引号，有且仅能一个字符          | ‘A’，‘0’，   ‘我’          |
| 字符串         | 必须使用双引号，内容可有可无              | “HelloWorld”，“黑马程序员” |
| 布尔值         | 布尔值，表示真假，只有两个值：true，false | true 、false               |
| 空值           | 一个特殊的值，空值                        | 值是：null                 |

~~~java
public class Demo {
    public static void main(String[] args) {
        System.out.println(10); // 输出一个整数
        System.out.println(5.5); // 输出一个小数
        System.out.println('a'); // 输出一个字符
        System.out.println(true); // 输出boolean值true
        System.out.println("三坛海会"); // 输出字符串
    }
}
~~~

## 变量

### 基本数据类型的四类八种

| 数据类型 | 关键字  | 内存占用 |                 取值范围                  |
| :------: | :-----: | :------: | :---------------------------------------: |
|   整数   |  byte   |    1     |    负的2的7次方 ~ 2的7次方-1(-128~127)    |
|          |  short  |    2     | 负的2的15次方 ~ 2的15次方-1(-32768~32767) |
|          |   int   |    4     |        负的2的31次方 ~ 2的31次方-1        |
|          |  long   |    8     |        负的2的63次方 ~ 2的63次方-1        |
|  浮点数  |  float  |    4     |        1.401298e-45 ~ 3.402823e+38        |
|          | double  |    8     |      4.9000000e-324 ~ 1.797693e+308       |
|   字符   |  char   |    2     |                  0-65535                  |
|   布尔   | boolean |    1     |                true，false                |



```java
int num = 10;
double highD = 20.2;
```

## 数据类型转换

#### 隐式转换

也叫自动类型提升。就是把一个取值范围小的数据或者变量，赋值给另一个取值范围大的变量。此时不需要我们额外写代码单独实现，是程序自动帮我们完成的。

两种提升规则：

* 取值范围小的，和取值范围大的进行运算，小的会先提升为大的，再进行运算。
* byte、short、char三种类型的数据在运算的时候，都会直接先提升为int，然后再进行运算。

```java
double d = 10;
System.out.println(d);//10.0

byte b = 100;
int i = b;//可以成功赋值

int i = 10;
long n = 20L;
long result = i + n;// long

byte b1 = 10;
byte b2 = 20;
int result = b1 + b2;//int
```

#### 强制转换

目标数据类型 变量名 = （目标数据类型）被强转的数据；

```java
double a = 12.3;
int b = (int) a;
System.out.println(b);//12
```

注意点：

​	强制转换有可能会导致数据发生错误。（数据的精度丢失）

## 运算符

运算符 : (+ - * / %)  这些操作跟小学数学几乎是一模一样的。/取结果的商。% 取结果的余数;

自增符 : ++,--;

赋值符 : =, +=、-=、*=、/=、%=

关系符 : ==, !=, >, <, >=, <=

逻辑符 : & , | , !(取反)

短路逻辑符 :  &&   ||

三元符 : 关系表达式 ？ 表达式1 ：表达式2 ；

## 流程控制语句

if

```java
if (关系表达式1) {
    语句体1;	
} else if (关系表达式2) {
    语句体2;	
} 
else {
    语句体n+1;
}
```

switch, 注意加 break

```java
switch (表达式) {
	case 1:
		语句体1;
		break;
	case 2:
		语句体2;
		break;
	...
	default:
		语句体n+1;
		break;
}
```

for

```java
for (初始化语句;条件判断语句;条件控制语句) {
	循环体语句;
}
for (int i = 1; i <= 5; i++) {
    System.out.println("HelloWorld");
}
```

while

```java
while(条件判断语句){
	循环体;
	条件控制语句;
}

int height = 8844430;
double paper = 0.1;
int count = 0;
while(paper < height){
    //折叠纸张
    paper = paper * 2;
    count++;
}
```

条件控制语句

break: 表示结束，跳出的意思。

continue : 跳过本次循环，继续执行下次循环。

## Random

```java
Random r = new Random();

int number = r.nextInt(100);//0 ~ 99

System.out.println(number);
```

## 键盘录入

```java
// 创建对象，其实就是申明一下，我准备开始用Scanner这个类了。
Scanner sc = new Scanner(System.in);
// 接收数据
//当程序运行之后，我们在键盘输入的数据就会被变量i给接收了
System.out.println("请输入一个数字");
int i = sc.nextInt();
System.out.println(i);
```



## 数组

#### 数组的定义

```java
// 静态初始化
int[] arr = new int[]{11,22,33};
int[] arr = {11,22,33};
System.out.println(arr);//[I@6d03e736 直接打印是地址信息

// 数组遍历
for(int i = 0; i < arr.length; i++){
    //在循环的过程中，i依次表示数组中的每一个索引
    sout(arr[i]);//就可以把数组里面的每一个元素都获取出来，并打印在控制台上了。
}

// 动态初始化
//1.定义一个数组，存3个人的年龄，年龄未知
int[] agesArr = new int[3];
```

## 方法

形参：方法定义中的参数 例如：int number

实参：方法调用中的参数 例如：method( 10);   10

#### 方法定义和调用

```java
public static boolean isEvenNumber( int number ) {           
	return true ;
}
public static int getMax( int a, int b ) {
	return  100 ;
}
```

### 方法重载

方法重载指同一个类中定义的多个方法之间的关系，满足下列条件的多个方法相互构成重载

* 多个方法在同一个类中
* 多个方法具有相同的方法名
* 多个方法的参数不相同，类型不同或者数量不同

```java
public static void fn(int a) {
    //方法体
}
public static int fn(double a) {
    //方法体
}
```

## 面向对象基础

### 类和对象的理解

客观存在的事物皆为对象 ，所以我们也常常说万物皆对象。

### 类的定义

```java
public class 类名 {
	// 成员变量
	变量1的数据类型 变量1；
	变量2的数据类型 变量2;
	…
	// 成员方法
	方法1;
	方法2;	
}
public class Phone {
    //成员变量
    String brand;
    int price;

    //成员方法
    public void call() {
        System.out.println("打电话");
    }

    public void sendMessage() {
        System.out.println("发短信");
    }
}
```

### 对象的使用

```java
// 类名 对象名 = new 类名();

 //创建对象
Phone p = new Phone();
p.brand;
p.price;
```

### 封装

将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问

private: 被private修饰的成员，只能在本类进行访问

```java
class Student {
    //成员变量
    String name;
    ...
}
```

### this关键字

this修饰的变量用于指代成员变量，其主要作用是（区分局部变量和成员变量的重名问题）

```java
 public void setName(String name) {
        this.name = name;
    }
```

### 构造方法

构造方法是一种特殊的方法

```java
public class 类名{

     修饰符 类名( 参数 ) { // 构造方法

      }

}
```

## 标准类

1. 类名需要见名知意
2. 成员变量使用private修饰
3. 提供至少两个构造方法 (无参, 全参)
4. get和set方法 

## String

String类的特点:

- 字符串不可变，它们的值在创建后不能被更改
- 虽然 String 的值是不可变的，但是它们可以被共享(字面量定义相同的值共享)
- 字符串效果上相当于字符数组( char[] )，但是底层原理是字节数组( byte[] )

#### 字符串创建

```java
String s4 = "abc";
```

#### 字符串的比较equals

==号的作用

- 比较基本数据类型：比较的是具体的值
- 比较引用数据类型：比较的是对象地址值
- 字符串比较用equals

```java
s1.equals(s2)
```

#### 获取索引位置字符 charAt

```java
char c = str.charAt(i);
```

#### 字符串截取

```java
String end = phoneNumber.substring(7);
String star = phoneNumber.substring(0, 3);
```

#### 替换

```java
String result = talk.replace("FW", "***");
```

## StringBuilder

StringBuilder 可以看成是一个容器，创建之后里面的内容是可变的。

```JAVA
StringBuilder sb = new StringBuilder("abc");

//添加元素
sb.append(1);
sb.append(2.3);
sb.append(true);

 //反转
sb.reverse();

 //获取长度
int len = sb.length();

//把StringBuilder变回字符串
String str = sb.toString();

```

拼接字符串

```java
public static String arrToString(int[] arr){
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        for (int i = 0; i < arr.length; i++) {
            if(i == arr.length - 1){
                sb.append(arr[i]);
            }else{
                sb.append(arr[i]).append(", ");
            }
        }
        sb.append("]");

        return sb.toString();
    }
```

## ArrayList

集合和数组的优势对比：

1. 长度可变
2. 添加数据的时候不需要考虑索引，默认将数据添加到末尾

### ArrayList类常用方法

| 方法名                                | 说明                                   |
| ------------------------------------- | -------------------------------------- |
| public boolean add(要添加的元素)      | 将指定的元素追加到此集合的末尾         |
| public boolean remove(要删除的元素)   | 删除指定元素,返回值表示是否删除成功    |
| public E  remove(int   index)         | 删除指定索引处的元素，返回被删除的元素 |
| public E   set(int index,E   element) | 修改指定索引处的元素，返回被修改的元素 |
| public E   get(int   index)           | 返回指定索引处的元素                   |
| public int   size()                   | 返回集合中的元素的个数                 |

```java
//创建集合
ArrayList<String> array = new ArrayList<String>();

 //添加元素
array.add("hello");
array.add("world");
array.add("java");

// 删除
array.remove("world");
array.remove(1);
    
// 修改
array.set(1,"javaee");

// 查询
array.get(0);
    
// 集合大小,元素个数
array.size();
```

### ArrayList存储字符串并遍历

```java
for (int i = 0; i < list.size(); i++) {
   sout
}
```







### 结尾

