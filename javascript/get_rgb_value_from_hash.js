function getRGBfromHash(hashColor) {
    var hexColor = hashColor.replace("#", "");
    let red, green, blue;
    if (hexColor.length === 3) {
        redString = hexColor.substring(0, 1).repeat(2);
        greenString = hexColor.substring(1, 2).repeat(2);
        blueString = hexColor.substring(2, 3).repeat(2);
        red = parseInt(redString, 16);
        green = parseInt(greenString, 16);
        blue = parseInt(blueString, 16);
    } else {
        red = parseInt(hexColor.substring(0, 2), 16);
        green = parseInt(hexColor.substring(2, 4), 16);
        blue = parseInt(hexColor.substring(4, 6), 16);
    }

    console.log({
        "r": red,
        "g": green,
        "b": blue,
    });
};