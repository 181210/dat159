[
    {
        "id": "a5d63966.aec19",
        "type": "tab",
        "label": "Oblig_3",
        "disabled": false,
        "info": ""
    },
    {
        "id": "1af51fd4.6e1a",
        "type": "function",
        "z": "a5d63966.aec19",
        "name": "Random temperature",
        "func": "let temp = Math.floor((Math.random() * 10) + 20);\nmsg.payload = { \"temperature\": temp };\nmsg.headers = {'content-type':'application/json'};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 407.14288330078125,
        "y": 663.1904296875,
        "wires": [
            [
                "20c02f2.c3e61d",
                "61e7ffa6.32693"
            ]
        ]
    },
    {
        "id": "f60ce05.9ebe82",
        "type": "inject",
        "z": "a5d63966.aec19",
        "name": "",
        "topic": "Temperature",
        "payload": "",
        "payloadType": "str",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 135,
        "y": 664,
        "wires": [
            [
                "1af51fd4.6e1a",
                "d4436967.d3de"
            ]
        ]
    },
    {
        "id": "eb96a7a9.c5971",
        "type": "function",
        "z": "a5d63966.aec19",
        "name": "Control Heating",
        "func": "\nif(typeof global.get(\"heating\") === \"undefined\"){\n    if(msg.payload < 23){\n        global.set(\"heating\", \"on\")\n        msg.payload = \"on\";\n    }\n    else {\n        global.set(\"heating\", \"off\")\n        msg.payload = \"off\";\n    }\n}\nlet heating = global.get(\"heating\")\nif(msg.payload < 23 && heating !==\"on\"){\n    msg.payload = \"on\";\n    global.set(\"heating\", \"on\")\n}else if(msg.payload > 23 && heating !== \"off\") {\n    msg.payload = \"off\";\n    global.set(\"heating\", \"off\")\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820.5,
        "y": 432.6666259765625,
        "wires": [
            [
                "daed6f0b.21b678",
                "b9b063d4.58b41"
            ]
        ]
    },
    {
        "id": "daed6f0b.21b678",
        "type": "switch",
        "z": "a5d63966.aec19",
        "name": "heating",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "on",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "off",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1012.5,
        "y": 432.6666259765625,
        "wires": [
            [
                "12435156.dce977"
            ],
            [
                "12435156.dce977"
            ]
        ]
    },
    {
        "id": "12435156.dce977",
        "type": "ui_text",
        "z": "a5d63966.aec19",
        "group": "b013c29c.7c0098",
        "order": 3,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Heating",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 1212.5,
        "y": 431.6666259765625,
        "wires": []
    },
    {
        "id": "c00822d6.9e1ed",
        "type": "ui_gauge",
        "z": "a5d63966.aec19",
        "name": "",
        "group": "b013c29c.7c0098",
        "order": 2,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Temperature",
        "label": "C",
        "format": "{{value}}",
        "min": 0,
        "max": "60",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 808.5,
        "y": 289,
        "wires": [],
        "inputLabels": [
            "msg.payload.with.content.temperature"
        ]
    },
    {
        "id": "20c02f2.c3e61d",
        "type": "http request",
        "z": "a5d63966.aec19",
        "name": "Put temperature",
        "method": "PUT",
        "ret": "obj",
        "url": "http://172.17.0.1:8081/tempsensor/current",
        "tls": "",
        "x": 683.5,
        "y": 662.3333740234375,
        "wires": [
            []
        ]
    },
    {
        "id": "d4436967.d3de",
        "type": "http request",
        "z": "a5d63966.aec19",
        "name": "Get Temperature",
        "method": "GET",
        "ret": "obj",
        "url": "http://172.17.0.1:8081/tempsensor/current",
        "tls": "",
        "x": 366,
        "y": 349.33331298828125,
        "wires": [
            [
                "6e6ac425.fe7b24",
                "e03bd715.a51db"
            ]
        ]
    },
    {
        "id": "6e6ac425.fe7b24",
        "type": "function",
        "z": "a5d63966.aec19",
        "name": "Parse dweet",
        "func": "msg.payload = msg.payload.with.content.temperature\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 602.5,
        "y": 349,
        "wires": [
            [
                "eb96a7a9.c5971",
                "c00822d6.9e1ed"
            ]
        ]
    },
    {
        "id": "61e7ffa6.32693",
        "type": "debug",
        "z": "a5d63966.aec19",
        "name": "Temp",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 643.5,
        "y": 564,
        "wires": []
    },
    {
        "id": "b9b063d4.58b41",
        "type": "debug",
        "z": "a5d63966.aec19",
        "name": "Heating",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 1036.5,
        "y": 518,
        "wires": []
    },
    {
        "id": "e03bd715.a51db",
        "type": "debug",
        "z": "a5d63966.aec19",
        "name": "get_temp",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 602.5,
        "y": 438,
        "wires": []
    },
    {
        "id": "b013c29c.7c0098",
        "type": "ui_group",
        "z": "",
        "name": "Room_1",
        "tab": "36b9bd5d.e3b44a",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "36b9bd5d.e3b44a",
        "type": "ui_tab",
        "z": "",
        "name": "heating",
        "icon": "dashboard",
        "order": 2
    }
]
