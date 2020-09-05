class FakeData {
  constructor() {
    this.faker = require('faker')
  }
  getFakeData(){
      return {
          name : this.faker.name.findName(),
          age : Math.ceil(Math.random()* 30 + 18),
          gender : this.faker.name.gender(),
          lookingFor : this.faker.name.gender(),
          image : this.faker.image.people()
      }
  }
}

const data = new FakeData;
console.log(data.getFakeData())