

/**
 * The all-capable HelloWidget.
 * @param {number} x
 * @param {number} y
 * @constructor
 */
function HelloWidget(x, y) {
    this.x = x;
    this.y = y;
}
/**
 * Adds the two member numbers
 * @returns {number}
 */
HelloWidget.prototype.add = function() {
    return this.x + this.y;
};
/**
 * Subtracts the two member numbers
 * @returns {number}
 */
HelloWidget.prototype.subtract = function() {
    return this.x + this.y;
};
/**
 * Multiplies the two member numbers
 */
HelloWidget.prototype.devideArea  = function() {


    var z;
    return  this.x +this.y;
};
/**
 * Multiplies the two member numbers
 * @returns {number}
 */
HelloWidget.prototype.multiply = function() {
    return this.x * this.y;
};

