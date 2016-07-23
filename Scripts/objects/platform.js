var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Platform = (function (_super) {
        __extends(Platform, _super);
        function Platform(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Object.defineProperty(Platform.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Platform.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
            },
            enumerable: true,
            configurable: true
        });
        Platform.prototype._reset = function () {
            this.y = Math.floor((Math.random() * (640 - (this.height * 0.5))) + (this.height * 0.5));
            this.x = this.width + 640;
        };
        Platform.prototype._checkBounds = function () {
            if (this.x <= -(240 + (this.width * 0.5))) {
                console.log("RESET");
                this._reset();
            }
        };
        Platform.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._reset();
            this._dy = -3;
        };
        Platform.prototype.update = function () {
            this.x += this._dy;
            this._checkBounds();
        };
        return Platform;
    }(createjs.Bitmap));
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map