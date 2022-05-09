function Parent(name, age) {
  this.name = name
  this.age = age
  // console.log('this:', this);
}

Parent.prototype.friends = ['张三', '李四']
Parent.prototype.eat = function () {
  console.log(this.name + '吃饭');
}

function Son(name, age, favor, sex) {
  Parent.call(this, name, age) // TS中使用 super()
  this.favor = favor
  this.sex = sex
}

Son.prototype = new Parent()

let sonObj = new Son('lisi', 34, '打篮球', '男')
sonObj.eat()
console.log(sonObj.friends)

let sonObj2 = new Son('liuwu', 40, '喝酒', '男')
sonObj2.friends

/**
 * 组合继承的缺点：父类的构造函数执行了 2 次
 */