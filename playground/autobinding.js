var obj = {
  name: 'Casey',
  printName: function() {
    console.log(`My name is ${this.name}.`);
  }
};

obj.printName();
setTimeout(obj.printName.bind(obj), 1000);
setTimeout(obj.printName.bind({name: 'Mike'}), 1000);
