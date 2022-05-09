function Parent(name, age) {
  this.name = name
  this.age = age
  console.log('this:',this);
}

Parent.prototype.friends = ['张三', '李四']
Parent.prototype.eat = function () {
  console.log(this.name + '吃饭');
}

function Son(name, age, favor, sex) {
  Parent.call(this, name, age)
  this.favor = favor
  this.sex = sex
}



let sonObj = new Son('lisi', 34, '打篮球', '男')