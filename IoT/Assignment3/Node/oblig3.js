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
                "1af51fd4.6e1a"
            ]
        ]
    },
    {
        "id": "eb96a7a9.c5971",
        "type": "function",
        "z": "a5d63966.aec19",
        "name": "Control Heating",
        "func": "let temp = msg.payload;\n\nif(typeof global.get(\"status\") === \"undefined\"){\n    if(temp < 23){\n        global.set = {\"status\" : 1}\n        msg.payload = {\"status\" : 1};\n    }\n    else {\n        global.set = {\"status\" : 0}\n        msg.payload = {\"status\" : 0};\n    }\n}\n\nif(temp < 23 && typeof global.get(\"status\") !==1){\n    global.set = {\"status\" : 1}\n    msg.payload = {\"status\" : 1}\n    \n}else if(temp > 23 && typeof global.get(\"status\") !== 0) {\n    global.set = {\"status\" : 0};\n    msg.payload = {\"status\" : 0};\n}\nmsg.headers = {'content-type':'application/json'};\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 639.5,
        "y": 336.6666259765625,
        "wires": [
            [
                "a2481cc0.f4674",
                "d3497b86.45e73"
            ]
        ]
    },
    {
        "id": "daed6f0b.21b678",
        "type": "switch",
        "z": "a5d63966.aec19",
        "name": "heating",
        "property": "payload",
        "propertyType": "global",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 764.5,
        "y": 481.6666259765625,
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
        "x": 940.5,
        "y": 479.6666259765625,
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
        "x": 628.5,
        "y": 274,
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
        "x": 157,
        "y": 338.33331298828125,
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
        "x": 412.5,
        "y": 338,
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
        "x": 659.5,
        "y": 613,
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
        "x": 404.5,
        "y": 390,
        "wires": []
    },
    {
        "id": "77dd2cfe.dbdfc4",
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
        "x": 124.5,
        "y": 480,
        "wires": [
            [
                "d4436967.d3de"
            ]
        ]
    },
    {
        "id": "d3497b86.45e73",
        "type": "http request",
        "z": "a5d63966.aec19",
        "name": "Put Heating",
        "method": "PUT",
        "ret": "obj",
        "url": "http://172.17.0.1:8081/heating/status",
        "tls": "",
        "x": 969,
        "y": 337,
        "wires": [
            []
        ]
    },
    {
        "id": "c1a94503.f303b",
        "type": "http request",
        "z": "a5d63966.aec19",
        "name": "Get Heating",
        "method": "GET",
        "ret": "obj",
        "url": "http://172.17.0.1:8081/heating/status",
        "tls": "",
        "x": 597,
        "y": 481,
        "wires": [
            [
                "daed6f0b.21b678",
                "d203272.81d8c58"
            ]
        ]
    },
    {
        "id": "a437194c.5dec4",
        "type": "inject",
        "z": "a5d63966.aec19",
        "name": "",
        "topic": "Heating",
        "payload": "",
        "payloadType": "str",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 425,
        "y": 481,
        "wires": [
            [
                "c1a94503.f303b"
            ]
        ]
    },
    {
        "id": "a2481cc0.f4674",
        "type": "debug",
        "z": "a5d63966.aec19",
        "name": "Put heating",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 968.5,
        "y": 274,
        "wires": []
    },
    {
        "id": "d203272.81d8c58",
        "type": "debug",
        "z": "a5d63966.aec19",
        "name": "Get Heat",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 767.5,
        "y": 529,
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
