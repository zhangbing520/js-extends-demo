function Parent(name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.methods = function() {
  console.log('parent methods');
}

function Son(sex, favor) {
  this.sex = sex
  this.favor = favor
}

Son.prototype = new Parent('zhangsan', 13)
Son.prototype.constructor = Son
Son.prototype.methods1 = function() {
  console.log('son methods');
}

let sonObj = new Son('男',['运动', '看电影'])
console.log(sonObj.name);
console.log(sonObj.age);
sonObj.methods();

console.log(Son.prototype.constructor)