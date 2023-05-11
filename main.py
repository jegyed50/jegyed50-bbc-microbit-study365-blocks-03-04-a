# https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a
# https://github.com/jegyed50/jegyed50-bbc-microbit-study365-blocks-03-04-a/blob/master/03-04-pomodoro-timeline.jpg
# JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-04-A
# 30 perces analóg óra, fél másoperces időtartamok, csak LED és pause
 
def on_button_pressed_a():
    basic.show_leds("""
        . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . # .
                . . . # .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . # #
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . # #
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
    """)
    basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
