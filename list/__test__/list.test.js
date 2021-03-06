'use strict';

// These 2 should be interchangeable!
//const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops item from the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.pop()).toEqual('b');
    expect(stuff.length).toEqual(1);
  });

  it('shift item out from the front of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.shift()).toEqual('a');
    expect(stuff.length).toEqual(1);
  });

  it('unshift item into the front of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.unshift('a')).toEqual(3);
    expect(stuff.data[0]).toEqual('a');
  });

  it('executes a given function on each element', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    function add(num) {
      return num +1;
    }
    stuff.forEach(add);

    expect(stuff.data).toEqual({0:2, 1:3});
  });
});

