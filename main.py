def on_forever():
    PlanetX_Display.show_user_number(2,
        PlanetX_Basic.ds18b20_sensor(PlanetX_Basic.DigitalRJPin.J1))
basic.forever(on_forever)
