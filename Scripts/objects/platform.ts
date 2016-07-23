module objects {
    export class Platform extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy: number;
        private _width: number;
        private _height: number;

        // PUBLIC PROPERTIES

        get width(): number {
            return this._width;
        }

        set width(newWidth: number) {
            this._width = newWidth;
        }

        get height(): number {
            return this._height;
        }

        set height(newHeight: number) {
            this._height = newHeight;
        }

        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.start();
        }

        private _reset(): void {
            // get a random y location
            this.y = Math.floor((Math.random() * (640 - (this.height * 0.5))) + (this.height * 0.5));

            this.x = this.width+640;
        }

        private _checkBounds(): void {
            if (this.x <= -(240 + (this.width * 0.5))) {
                console.log("RESET");
                this._reset();
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        public start(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._reset();
            this._dy = -3; // 3px per frame left
        }

        public update(): void {
            this.x += this._dy;
            this._checkBounds();
        }
    }
}
