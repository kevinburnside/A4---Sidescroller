var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Object.defineProperty(Player.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype._checkBounds = function () {
            if (this.y >= (480 - (this.height * 0.5))) {
                this.y = (480 - (this.height * 0.5));
            }
            if (this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }
        };
        Player.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.y = 230;
            this.x = 100;
            this.rotation = 0;
        };
        Player.prototype.update = function () {
            this.y += 4;
            this._checkBounds();
        };
        Player.prototype.changeY = function () {
            this.y -= 75;
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map