// https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a
// https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a/blob/master/03-04-pomodoro-timeline.jpg
// JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-04-A
// 30 perces analóg óra, fél másoperces időtartamok, csak LED és pause
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
})
basic.forever(function () {
	
})
