huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                basic.showIcon(IconNames.Yes)
                music.playMelody("A F E F D G E F ", 199)
            } else {
                basic.showIcon(IconNames.No)
                music.playTone(147, music.beat(BeatFraction.Whole))
            }
        }
    }
    basic.pause(100)
})
