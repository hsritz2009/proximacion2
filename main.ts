radio.onReceivedString(function (receivedString) {
    led.plotBarGraph(
    Math.map(0, 0, 1023, 0, 4),
    0
    )
})
radio.setGroup(222)
basic.forever(function () {
	
})
