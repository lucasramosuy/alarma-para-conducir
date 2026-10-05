radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C5 B A A G F E D ", 120), music.PlaybackMode.UntilDone)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    clases = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (clases == "\"Despierto\"") {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
        radio.sendString("\"cambio\"")
    }
})
let clases = ""
serial.redirectToUSB()
