var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2489007591905192,
          "pitch": 0.011680202571630716,
          "rotation": 0,
          "target": "1-rea-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rea-principal",
      "name": "Área Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4257144411421798,
          "pitch": 0.029826704711302554,
          "rotation": 0,
          "target": "2-rea-principal-2"
        },
        {
          "yaw": 2.7375455541580624,
          "pitch": -0.0758050718982819,
          "rotation": 0,
          "target": "4-piscina"
        },
        {
          "yaw": -2.559124214893515,
          "pitch": -0.014741334226258118,
          "rotation": 0,
          "target": "3-salao-de-festa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rea-principal-2",
      "name": "Área Principal 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6145475498947697,
          "pitch": -0.0007094967578105127,
          "rotation": 0,
          "target": "1-rea-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salao-de-festa",
      "name": "Salao de festa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2343971690375355,
          "pitch": -0.03204894132029246,
          "rotation": 0,
          "target": "4-piscina"
        },
        {
          "yaw": 2.005091407288546,
          "pitch": 0.003174176498035308,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-piscina",
      "name": "Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10425821776017585,
          "pitch": -0.07481174152908387,
          "rotation": 0,
          "target": "5-corredor-bloco"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.311476354337028,
          "pitch": 0.6516891014983859,
          "title": "Área de lazer",
          "text": "Churrasqueira e piscina"
        }
      ]
    },
    {
      "id": "5-corredor-bloco",
      "name": "Corredor bloco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05955299803643044,
          "pitch": -0.10268966265530821,
          "rotation": 0,
          "target": "4-piscina"
        },
        {
          "yaw": -2.5826345087613802,
          "pitch": -0.013771407820577508,
          "rotation": 0,
          "target": "6-playground"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0677358315890544,
          "pitch": 0.31040949635633197,
          "title": "Corredor de bloco",
          "text": "Entrada para os blocos 1 e 2"
        }
      ]
    },
    {
      "id": "6-playground",
      "name": "Playground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1301970656743094,
          "pitch": 0.03189054279805248,
          "rotation": 0,
          "target": "5-corredor-bloco"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6209416082436938,
          "pitch": 0.032349704327513606,
          "title": "Playground e Campo de Futebol",
          "text": "Espaço kids e campo de futebol"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
