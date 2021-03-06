'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length -1];
  delete this.data[this.length -1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  for(let i = 0;i < this.length; i++){
    this.data[i] = this.data[i + 1];
  }
  delete this.data[length + 1];
  return returnValue;
};

List.prototype.unshift = function(item) {
  //shift all item over
  for(let i = this.length-1; i > -1; i--){
    this.data[i+1] = this.data[i];
  }
  //reassign 0
  this.data[0] = item;
  //return the new length
  this.length++;
  return this.length;
}

List.prototype.forEach = function(fn) {
  for(let i = 0; i < this.length; i++) {
    this.data[i] = fn(this.data[i]);
  }
}
module.exports = List;
