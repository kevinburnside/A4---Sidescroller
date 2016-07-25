var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
        }
        Play.prototype.Start = function () {
            this.background = new objects.Background("backgroundImage");
            this.addChild(this.background);
            this.platform = new objects.Platform("platformImage");
            this.addChild(this.platform);
            this.player = new objects.Player("playerImage");
            this.addChild(this.player);
            core.stage.on("click", this.clickMove, this);
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            this.background.update();
            this.platform.update();
            this.player.update();
        };
        Play.prototype.clickMove = function (event) {
            this.player.changeY();
        };
        Play.prototype._startButtonClick = function (event) {
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map