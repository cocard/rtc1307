PlanetX_Basic.setData(PlanetX_Basic.DataUnit.Second, 0)
basic.forever(function () {
    I2C_LCD1602.ShowNumber(PlanetX_Basic.readData(PlanetX_Basic.DataUnit.Second), 0, 0)
})
