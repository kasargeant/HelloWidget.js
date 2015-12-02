/**
 *
 * @param x
 * @param y
 * @constructor
 */
function HelloWidget(x, y) {
    this.x = x;
    this.y = y;
}
HelloWidget.prototype.getArea = function() {
    return this.x * this.y;
};
HelloWidget.prototype.devideArea = function() {
    return this.x / this.y;
};
