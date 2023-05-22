import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Tests the Hello World", ()=>{

    const hello = sayHello();

    assert.equal(hello,"hello");

    console.log('hello');

});