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
        . . # . .
        . . # . .
        `)
    basic.pause(500)
})
basic.forever(function () {
	
})
