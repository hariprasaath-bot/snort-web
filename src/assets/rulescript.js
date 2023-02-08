var ruleObject = {
    "msg": {
    "alert": ["Attack happend", "Threat Detected", "network trafic", "trafic limit reached"]

    },
    "flag": {
    "F-FIN": ["+", "*", "!"],
    "S-SYN": ["+", "*", "!"],
    "R-RST": ["+", "*", "!"],
    "P-PSH": ["+", "*", "!"],
    "A-ACK": ["+", "*", "!"],
    "U-URG":  ["+", "*", "!"],
    "Reserved bit 2":  ["+", "*", "!"],
    "Reserved bit 1":  ["+", "*", "!"]
    },
    "Ipoption": {
    "next": ["RR","EOL","NOP","TS","SEC","LSRR","SSRR","SATID"],
    },
    "flag": {
    "R": ["+", "*", "!"],
    "D": ["+", "*", "!"],
    "M": ["+", "*", "!"]

    }
}
window.onload = function() {
    var ruleSel = document.getElementById("rule");
    var optSel = document.getElementById("opt");
    var option1Sel = document.getElementById("option1");
    for (var x in ruleObject) {
    ruleSel.options[ruleSel.options.length] = new Option(x, x);
    }
    ruleSel.onchange = function() {
    option1Sel.length = 1;
    optSel.length = 1;

    for (var y in ruleObject[this.value]) {
        optSel.options[optSel.options.length] = new Option(y, y);
    }
    }
    optSel.onchange = function() {
    option1Sel.length = 1;
    //display correct values
    var z = ruleObject[ruleSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
        option1Sel.options[option1Sel.options.length] = new Option(z[i], z[i]);
    }
    }
}