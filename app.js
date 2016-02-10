function collect(x){

    'use strict';

    x = document.getElementById('radius').value;
    x = parseFloat(x);
    var radius = x,
        circleVolume;

    function calculate (radius) {
        circleVolume = ((4 / 3) * Math.PI * Math.pow(radius, 3));
        var display = document.getElementById('answer');
        if (isNaN(circleVolume)) {
            circleVolume = 'Your entry was not valid';
        }
        display.innerHTML = circleVolume;
    }

    calculate(radius);

}