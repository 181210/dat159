[
    {
        "id": "6dda958b.235854",
        "type": "tab",
        "label": "Oblig_2",
        "disabled": false,
        "info": "Heat control system. All communication through AWS cloud."
    },
    {
        "id": "c5ab2319.a93c58",
        "type": "mqtt-broker",
        "z": "",
        "name": "",
        "broker": "m20.cloudmqtt.com",
        "port": "14879",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "e01e11dd.24bff",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard"
    },
    {
        "id": "33059a0d.316ac6",
        "type": "ui_group",
        "z": "",
        "name": "Temperature",
        "tab": "e01e11dd.24bff",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "a0ec8047.a635d8",
        "type": "ui_base",
        "theme": {
            "name": "theme-dark",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "Courier,monospace",
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "reset": false
            },
            "themeState": {
                "base-color": {
                    "default": "#097479",
                    "value": "#097479",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#097479",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#111111",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#000000",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#0eb8c0",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#555555",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#333333",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#eeeeee",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#097479",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#333333",
                    "edited": false
                },
                "base-font": {
                    "value": "Courier,monospace"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "efb8d737.a9ca6",
        "type": "mqtt in",
        "z": "6dda958b.235854",
        "name": "Temp_sub",
        "topic": "Temp",
        "qos": "1",
        "broker": "c5ab2319.a93c58",
        "x": 95,
        "y": 518,
        "wires": [
            [
                "261a7070.b0bad8",
                "9bfcdc81.b66ff8",
                "a07252a4.85d59"
            ]
        ]
    },
    {
        "id": "42eb090.1bb0d78",
        "type": "mqtt out",
        "z": "6dda958b.235854",
        "name": "Temp_pub",
        "topic": "Temp",
        "qos": "1",
        "retain": "true",
        "broker": "c5ab2319.a93c58",
        "x": 856,
        "y": 87,
        "wires": []
    },
    {
        "id": "261a7070.b0bad8",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "From_cloud",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 314,
        "y": 619,
        "wires": []
    },
    {
        "id": "9bfcdc81.b66ff8",
        "type": "ui_gauge",
        "z": "6dda958b.235854",
        "name": "Temperature",
        "group": "33059a0d.316ac6",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "",
        "label": "*C",
        "format": "{{value}}",
        "min": 0,
        "max": "35",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 314,
        "y": 684,
        "wires": []
    },
    {
        "id": "b104ed78.e2272",
        "type": "mqtt out",
        "z": "6dda958b.235854",
        "name": "Heat_pub",
        "topic": "Heating",
        "qos": "1",
        "retain": "false",
        "broker": "c5ab2319.a93c58",
        "x": 1075,
        "y": 386,
        "wires": []
    },
    {
        "id": "1730d31a.8cd2dd",
        "type": "mqtt in",
        "z": "6dda958b.235854",
        "name": "Heat_sub",
        "topic": "Heating",
        "qos": "1",
        "broker": "c5ab2319.a93c58",
        "x": 83,
        "y": 221,
        "wires": [
            [
                "6c8ae013.9f69f",
                "423109cf.f55c2"
            ]
        ]
    },
    {
        "id": "6c8ae013.9f69f",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "From_cloud",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 337,
        "y": 222,
        "wires": []
    },
    {
        "id": "d1282eb9.68b7f",
        "type": "ui_numeric",
        "z": "6dda958b.235854",
        "name": "Temp_Set",
        "label": "Set Temperature",
        "group": "33059a0d.316ac6",
        "order": 0,
        "width": "6",
        "height": "4",
        "passthru": true,
        "topic": "Temp_Set",
        "format": "{{value}}",
        "min": 0,
        "max": "35",
        "step": 1,
        "x": 87.5,
        "y": 391,
        "wires": [
            [
                "2a45100f.89877"
            ]
        ]
    },
    {
        "id": "423109cf.f55c2",
        "type": "switch",
        "z": "6dda958b.235854",
        "name": "switch",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            },
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 257.5,
        "y": 93,
        "wires": [
            [
                "c8292262.2f0e9"
            ],
            [
                "f3d0433d.3c3dc",
                "5ab01a79.f399ec"
            ]
        ]
    },
    {
        "id": "7d83a6aa.446ea",
        "type": "switch",
        "z": "6dda958b.235854",
        "name": "Switch",
        "property": "Temp",
        "propertyType": "global",
        "rules": [
            {
                "t": "gt",
                "v": "Temp_Set",
                "vt": "global"
            },
            {
                "t": "lt",
                "v": "Temp_Set",
                "vt": "global"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 617.5,
        "y": 393,
        "wires": [
            [
                "cfa392c3.2ef1c8"
            ],
            [
                "66886851.465768"
            ]
        ]
    },
    {
        "id": "f84b2cd8.691878",
        "type": "comment",
        "z": "6dda958b.235854",
        "name": "Switch : Heater is 1 || 0",
        "info": "",
        "x": 268.5,
        "y": 47,
        "wires": []
    },
    {
        "id": "5ebd3b5c.78d94c",
        "type": "comment",
        "z": "6dda958b.235854",
        "name": "Simulates the room temperature",
        "info": "",
        "x": 638.5,
        "y": 44,
        "wires": []
    },
    {
        "id": "1c0efd40.e37e3b",
        "type": "function",
        "z": "6dda958b.235854",
        "name": "Temp_Down_Sim",
        "func": "let temp = global.get(\"Temp\");\nmsg.payload = temp;\nglobal.set(\"Temp\", temp);\n\nif (typeof global.get(\"Temp\") === \"undefined\"){\n    msg.payload = 0;\n    global.set(\"Temp\",0);\n} else if (temp.isnan){\n    let temp = global.get(\"Temp\");\n    temp = 0;\n    msg.payload = temp;\n    global.set(\"Temp\",temp);\n} else {\n    let temp = global.get(\"Temp\");\n    temp -= 1;\n    msg.payload = temp;\n    global.set(\"Temp\",temp);\n}\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 633.5,
        "y": 127,
        "wires": [
            [
                "42eb090.1bb0d78",
                "5f2fa4dd.22e17c"
            ]
        ]
    },
    {
        "id": "844c56e2.3a79c",
        "type": "function",
        "z": "6dda958b.235854",
        "name": "Temp_Up_Sim",
        "func": "let temp =  global.get(\"Temp\");\nmsg.payload = temp;\nglobal.set(\"Temp\", temp);\n\nif (typeof temp === \"undefined\"){\n    msg.payload = 0;\n    global.set(\"Temp\",0);\n} else if (temp.isnan){\n    let temp = global.get(\"Temp\");\n    temp = 0;\n    msg.payload = temp;\n    global.set(\"Temp\",temp);\n} else {\n    let temp = global.get(\"Temp\");\n    temp += 1;\n    msg.payload = temp;\n    global.set(\"Temp\",temp);\n}\n\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 624.5,
        "y": 87,
        "wires": [
            [
                "42eb090.1bb0d78",
                "3807d369.c1af6c"
            ]
        ]
    },
    {
        "id": "cfa392c3.2ef1c8",
        "type": "function",
        "z": "6dda958b.235854",
        "name": "Heater_ON",
        "func": "let heat = global.get(\"Heating\");\nmsg.payload = heat;\nglobal.set(\"Heating\", heat);\n\nif (typeof heat === \"undefined\"){\n    msg.payload = 0;\n    global.set(\"Heating\",0);\n    \n} else{\n    let heat = global.get(\"Heating\");\n    heat = 1;\n    msg.payload = heat;\n    global.set(\"Heating\",heat);\n    \n}\n\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 833.5,
        "y": 386,
        "wires": [
            [
                "b104ed78.e2272",
                "cf9cc3d4.13431"
            ]
        ]
    },
    {
        "id": "66886851.465768",
        "type": "function",
        "z": "6dda958b.235854",
        "name": "Heater_OFF",
        "func": "let heat = global.get(\"Heating\");\nmsg.payload = heat;\nglobal.set(\"Heating\", heat);\n\nif (typeof heat === \"undefined\"){\n    msg.payload = 0;\n    global.set(\"Heating\",0);\n\n} else{\n    let heat = global.get(\"Heating\");\n    heat = 0;\n    msg.payload = heat;\n    global.set(\"Heating\",heat);\n    \n}\n\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 834.5,
        "y": 436,
        "wires": [
            [
                "b104ed78.e2272",
                "fd7a5163.e411"
            ]
        ]
    },
    {
        "id": "2a45100f.89877",
        "type": "function",
        "z": "6dda958b.235854",
        "name": "Temp_Set_global",
        "func": "let setPoint = msg.payload;\n\nglobal.set(\"Temp_Set\", setPoint);\nmsg.payload = setPoint;\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 375.5,
        "y": 392,
        "wires": [
            [
                "7d83a6aa.446ea",
                "f241e637.2109e"
            ]
        ]
    },
    {
        "id": "a07252a4.85d59",
        "type": "function",
        "z": "6dda958b.235854",
        "name": "Parse_Temp_to_int",
        "func": "let temp = global.get(\"Temp\");\n\nlet temp1 = parseInt(temp);\nglobal.set(\"Temp\", temp1);\nmsg.payload = temp1;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 367.5,
        "y": 519,
        "wires": [
            [
                "4e514f0f.76cb28"
            ]
        ]
    },
    {
        "id": "7caef8d.68cb308",
        "type": "comment",
        "z": "6dda958b.235854",
        "name": "Set-Point from UI-device",
        "info": "",
        "x": 116.5,
        "y": 346,
        "wires": []
    },
    {
        "id": "48cde291.1f00b4",
        "type": "comment",
        "z": "6dda958b.235854",
        "name": "SetPoint to Global Var",
        "info": "",
        "x": 366.5,
        "y": 347,
        "wires": []
    },
    {
        "id": "74b7a91e.4a894",
        "type": "comment",
        "z": "6dda958b.235854",
        "name": "Parse Global Temp to int",
        "info": "",
        "x": 360.5,
        "y": 471,
        "wires": []
    },
    {
        "id": "56a6b173.0d7278",
        "type": "comment",
        "z": "6dda958b.235854",
        "name": "Switch : Set_Temp >= || < Temp",
        "info": "",
        "x": 642.5,
        "y": 344,
        "wires": []
    },
    {
        "id": "5f2fa4dd.22e17c",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "from Temp_down",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 885.5,
        "y": 210,
        "wires": []
    },
    {
        "id": "f241e637.2109e",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "Temp_set",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 594.5,
        "y": 472,
        "wires": []
    },
    {
        "id": "f3d0433d.3c3dc",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "from switch",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 455.5,
        "y": 181,
        "wires": []
    },
    {
        "id": "cf9cc3d4.13431",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "Heater_off",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1040.5,
        "y": 302,
        "wires": []
    },
    {
        "id": "fd7a5163.e411",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "Heater_on",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1041.5,
        "y": 507,
        "wires": []
    },
    {
        "id": "3807d369.c1af6c",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "from_temp_up",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 942.5,
        "y": 144,
        "wires": []
    },
    {
        "id": "4e514f0f.76cb28",
        "type": "debug",
        "z": "6dda958b.235854",
        "name": "Parse",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 588.5,
        "y": 519,
        "wires": []
    },
    {
        "id": "c8292262.2f0e9",
        "type": "delay",
        "z": "6dda958b.235854",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 444.5,
        "y": 87,
        "wires": [
            [
                "844c56e2.3a79c"
            ]
        ]
    },
    {
        "id": "5ab01a79.f399ec",
        "type": "delay",
        "z": "6dda958b.235854",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 443.5,
        "y": 127,
        "wires": [
            [
                "1c0efd40.e37e3b"
            ]
        ]
    }
]