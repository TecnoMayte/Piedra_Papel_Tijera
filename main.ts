let MANO = 0
input.onGesture(Gesture.Shake, function () {
    MANO = randint(1, 3)
    if (MANO == 1) {
        basic.showNumber(1)
    } else if (MANO == 2) {
        basic.showNumber(2)
    } else {
        basic.showNumber(3)
    }
})
basic.forever(function () {
	
})
