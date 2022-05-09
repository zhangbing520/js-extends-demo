"use strict";
/*
 * @Description:
 * @Autor: zhangbing
 * @Date: 2022-05-06 13:39:07
 * @LastEditors: zhangbing
 * @LastEditTime: 2022-05-06 14:25:41
 */
class Person {
    constructor(name_, age_, phone_) {
        // public name:string|undefined
        // 类上定义的变量一定是描述类本身特征的变量
        this.name = "noname";
        this.age = 0;
        this.phone = '11111';
        this.name = name_;
        this.age = age_;
        this.phone = phone_;
    }
    // 类中定义方法不能用 function
    doEat(who, address) {
        console.log(`${this.name}和${who}在${address}吃饭`);
    }
    step() {
    }
}
// let zhangsan = new Person()
// // 给对象赋值的两种方式
// // 方法一：通过类中的属性或者方法来赋值
// zhangsan.name = 'wangwu'
// zhangsan.age = 23
// zhangsan.phone = '123456'
// zhangsan.doEat('lisi', 'wangufjin')
// 方法二： 通过构造函数【构造器】来赋值
// 创建对象一共做了三件事：
// 1. 在堆中为类的某个对象（实例）分配一个空间
// 2. 调用对用的构造器（构造函数）
// 3. 把对象赋值给对象变量
let zhangsan = new Person('wangwu', 23, '123456');
zhangsan.doEat('lisi', 'wangufjin');
console.log(zhangsan);
console.log(Person);
