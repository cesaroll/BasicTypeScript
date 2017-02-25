interface RectangleOptions {
    width: number;
    length: number;
    //Optional
    height?: number;
}

(function () {

    function drawRectangle(options: RectangleOptions) {
        let width = options.width;
        let length = options.length;
        
        if(options.height) {
            // Draw 3D Rectangle
            let height = options.height;
        }

    }

    drawRectangle({
        width: 100,
        length: 200
    });

})();