const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());


//explaining before it, describe and it of Mocha.
/*
class Car {
  park() {
    return "stopped";
  }
  drive() {
    return "vroom";
  }
}

let car;

beforeEach(() => {
  car = new Car();
});

describe("Car", () => {
  it("can park", () => { 
    assert.equal(car.park(), "stopped");
  });
  it("can drive", () => {
    assert.equal(car.drive(), "vroom");
  });
});

*/

//0xa941805


//gets list of all accounts provided by ganache
let accounts;

beforeEach(async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();
    //use one of those accounts to deploy the contract
});

describe("Inbox", () => {
    it("deploys a contract", () => {
        console.log(accounts);
    })
});

