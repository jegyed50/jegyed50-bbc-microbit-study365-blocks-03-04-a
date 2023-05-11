# JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-03-04-A
# 30 perces analóg óra, fél másoperces időtartamok, csak LED és pause
def on_button_pressed_a():
    basic.show_string("S")
    basic.pause(200)
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
                . . # # .
                . . # # .
    """)
    basic.pause(500)
    basic.clear_screen()
    basic.show_string("E")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
