module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;
        private background: objects.Background;
        private platform: objects.Platform;
        //private platform2: objects.Platform;
        private player: objects.Player;


        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start(): void {
            this.background = new objects.Background("backgroundImage");
            this.addChild(this.background);

            this.platform = new objects.Platform("platformImage");
            this.addChild(this.platform);

            this.player = new objects.Player("playerImage");
            this.addChild(this.player);
            // this.platform2 = new objects.Platform("platformImage");
            // this.addChild(this.platform2);

            core.stage.on("click", this.clickMove, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            // scene updates happen here...
            this.background.update();
            this.platform.update();
            //this.platform2.update();
            this.player.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private clickMove(event: createjs.MouseEvent): void {
            this.player.changeY();
        }

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}
