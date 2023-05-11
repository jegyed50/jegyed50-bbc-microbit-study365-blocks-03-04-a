//  https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a
//  JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-04-A
//  30 perces analóg óra, fél másoperces időtartamok, csak LED és pause
input.onButtonPressed(Button.A, function on_button_pressed_a() {
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
basic.forever(function on_forever() {
    
})
