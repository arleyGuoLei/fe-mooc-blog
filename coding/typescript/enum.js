{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var c1 = Color.Red;
    console.log('JSLog: c1', c1);
    var c2 = Color.Green;
    console.log('JSLog: c2', c2);
    var c3 = Color.Blue;
    console.log('JSLog: c3', c3);
}
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 3] = "Red";
        Color[Color["Green"] = 4] = "Green";
        Color[Color["Blue"] = 6] = "Blue";
    })(Color || (Color = {}));
    var c1 = Color.Red;
    console.log('JSLog: c1', c1);
    var c2 = Color.Green;
    console.log('JSLog: c2', c2);
    var c3 = Color.Blue;
    console.log('JSLog: c3', c3);
}
