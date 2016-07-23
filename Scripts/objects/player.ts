module objects {
    export class Player extends createjs.Bitmap {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _width:number;
        private _height:number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        get width():number {
            return this._width;
        }

        set width(newWidth:number) {
            this._width = newWidth;
        }

        get height():number {
            return this._height;
        }

        set height(newHeight:number) {
            this._height = newHeight;
        }

        constructor(imageString:string) {
            super(core.assets.getResult(imageString))

            this.start();
        }

        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.y >= (480 - (this.height * 0.5))) {
                this.y = (480 - (this.height * 0.5));
            }

            // check left bounds
            if(this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        public start():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.y = 230;
            this.x = 100;
            this.rotation = 0;
        }

        public update():void {
            //this.x = core.stage.mouseX;
            //this.rotation = 45;
            this.y += 4;
            this._checkBounds();
        }

        public changeY(): void {
            this.y -= 75;
            //this.rotation = -45;
        }

    }
}
