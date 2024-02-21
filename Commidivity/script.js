const meals = {
    "lomo-saltado": {
        portions: 1,
        ingredients: {
            "lomo fino bastones": {quantity: 120, unit: "gr"},
            "ajo pasta": {quantity: 6, unit: "gr"},
            "sal": {quantity: 1, unit: "gr"},
            "pimienta": {quantity: 0.01, unit: "gr"},
            "aceite vegetal": {quantity: 50, unit: "ml"},
            "tomate gajos": {quantity: 80, unit: "gr"},
            "arroz": {quantity: 100, unit: "gr"},
            "cebolla roja": {quantity: 80, unit: "gr"},
            "ají amarillo": {quantity: 15, unit: "gr"},
            "vinagre tinto": {quantity: 5, unit: "ml"},
            "salsa de soya clara": {quantity: 5, unit: "ml"},
            "papa rosada": {quantity: 150, unit: "gr"},
            "culantro": {quantity: 0.1, unit: "gr"}
            }
    },
    "caldo-gallina": {
        portions: 1,
        ingredients: {
            "gallina": {quantity: 250, unit: "gr"},
            "papa amarilla": {quantity: 100, unit: "gr"},
            "apio": {quantity: 5, unit: "gr"},
            "kion": {quantity: 3, unit: "gr"},
            "orégano fresco": {quantity: 0.01, unit: ""},
            "fideos": {quantity: 80, unit: "gr"},
            "huevo": {quantity: 60, unit: "gr"},
            "limón": {quantity: 20, unit: "gr"},
            "cebolla china": {quantity: 1, unit: "gr"},
            "maíz chulpi": {quantity: 20, unit: "gr"},
            "aceite": {quantity: 5, unit: "gr"},
            "sal": {quantity: 1.5, unit: "gr"}
            }
    },
    "arroz-con-pollo": {
        portions: 1,
        ingredients: {
            "pollo": {quantity: 200, unit: "gr"},
            "sal": {quantity: 2, unit: "gr"},
            "pimienta": {quantity: 0.01, unit: ""},
            "comino": {quantity: 0.01, unit: ""},
            "aceite": {quantity: 5, unit: "ml"},
            "pasta de ajo": {quantity: 5, unit: "gr"},
            "cebolla": {quantity: 10, unit: "gr"},
            "pasta de ají amarillo": {quantity: 5, unit: "gr"},
            "palillo": {quantity: 1, unit: ""},
            "pasta de culantro": {quantity: 15, unit: "gr"},
            "pasta de espinaca": {quantity: 10, unit: "gr"},
            "pimiento": {quantity: 30, unit: "gr"},
            "arroz": {quantity: 200, unit: "gr"},
            "zanahoria": {quantity: 50, unit: "gr"},
            "arvejas": {quantity: 30, unit: "gr"}
            }
    },
    "arroz-chaufa": {
        portions: 1,
        ingredients: {
            "arroz": {quantity: 200, unit: "gr"},
            "pollo": {quantity: 120, unit: "gr"},
            "huevo": {quantity: 120, unit: "gr"},
            "cebolla china": {quantity: 1, unit: "gr"},
            "aceite": {quantity: 15, unit: "ml"},
            "kion": {quantity: 2, unit: "gr"},
            "sillao": {quantity: 5, unit: "ml"},
            "sal": {quantity: 1, unit: "gr"}
            }
    },
    "causa-tradicional" : {
        portions: 1,
        ingredients: {
            "papa amarilla": {quantity: 200, unit: "gr"},
            "pasta de ají amarillo": {quantity: 30, unit: "gr"},
            "aceite vegetal": {quantity: 5, unit: "ml"},
            "Jugo de limón": {quantity: 10, unit: "ml"},
            "Sal": {quantity: 2, unit: "gr"},
            "pechuga de pollo": {quantity: 100, unit: "gr"},
            "zanahoria": {quantity: 8, unit: "gr"},
            "vainita": {quantity: 3, unit: "gr"},
            "pimienta": {quantity: 0.01, unit: ""},
            "Mayonesa": {quantity: 50, unit: "gr"},
            "Palta": {quantity: 90, unit: "gr"},
            "Huevo duro": {quantity: 30, unit: "gr"},
            "Aceituna negra": {quantity: 1, unit: ""}
            }
    },    
    "palta-rellena" : {
        portions: 1,
        ingredients: {
            "Palta": {quantity: 100, unit: "gr"},
            "pechuga de pollo entera, sin piel y deshuesada": {quantity: 80, unit: "gr"},
            "zanahoria": {quantity: 30, unit: "gr"},
            "arvejas peladas": {quantity: 30, unit: "gr"},
            "choclo": {quantity: 50, unit: "gr"},
            "Jugo de limón": {quantity: 15, unit: "ml"},
            "Pimienta": {quantity: 0.01, unit: ""},
            "Sal": {quantity: 1, unit: "gr"},
            "Mayonesa": {quantity: 40, unit: "gr"}
            }
    },
    "salpicon-de-pollo" : {
        portions: 1,
        ingredients: {
            "pechuga de pollo entera, sin piel y deshuesada": {quantity: 120, unit: "gr"},
            "zanahoria": {quantity: 30, unit: "gr"},
            "vainita": {quantity: 50, unit: "gr"},
            "papa": {quantity: 50, unit: "gr"},
            "arvejas peladas": {quantity: 30, unit: "gr"},
            "choclo": {quantity: 50, unit: "gr"},
            "Jugo de limón": {quantity: 15, unit: "ml"},
            "Pimienta": {quantity: 0.01, unit: ""},
            "Sal": {quantity: 1, unit: "gr"},
            "perejil": {quantity: 0.01, unit: ""},
            "Mayonesa": {quantity: 40, unit: "gr"}
            }
    },
    "choritos-a-la-chalaca" : {
        portions: 4,
        ingredients: {
            "choros": {quantity: 6, unit: "unidades"},
            "cebolla en brunoise": {quantity: 1, unit: "unidades"},
            "ají o rocoto": {quantity: 0.5, unit: "unidades"},
            "tomate brunoise": {quantity: 1, unit: "unidades"},
            "limón": {quantity: 3, unit: "unidades"},
            "sal": {quantity: 1, unit: "al gusto"},
            "perejil": {quantity: 1, unit: "al gusto"},
            "choclo": {quantity: 0.5, unit: "unidades"},
        },
    },
    "escabeche-de-pescado" : {
        portions: 1,
        ingredients: {
            "filetes de pescado": {quantity: 160, unit: "gr"},
            "harina": {quantity: 5, unit: "gr"},
            "aceite": {quantity: 5, unit: "ml"},
            "vinagre tinto": {quantity: 10, unit: "ml"},
            "cebolla": {quantity: 100, unit: "gr"},
            "Sal": {quantity: 2, unit: "gr"},
            "Pimienta": {quantity: 0.01, unit: ""},
            "pasta de ajo": {quantity: 3, unit: "gr"},
            "ají amarillo molido": {quantity: 5, unit: "gr"},
            "ají panca molido": {quantity: 2, unit: "gr"},
            "comino": {quantity: 0.01, unit: ""},
            "hojas de laurel": {quantity: 0.01, unit: ""},
            "ají amarillo tiras": {quantity: 1, unit: ""},
            "Orégano seco": {quantity: 0.01, unit: ""},
            "lechuga": {quantity: 1, unit: "gr"},
            "camote": {quantity: 80, unit: "gr"},
            "huevo": {quantity: 15, unit: "gr"},
            "queso fresco": {quantity: 15, unit: "gr"},
            "aceituna": {quantity: 1, unit: ""},
            "arroz": {quantity: 100, unit: "gr"}
            }
},
"pata-de-cerdo" : {
    portions: 4,
    ingredients: {
        "pata de cerdo": {quantity: 2, unit: "unidades"},
        "cebolla cortada a la pluma": {quantity: 100, unit: "gr"},
        "tomate": {quantity: 1, unit: "unidades"},
        "mirepoix": {quantity: 60, unit: "gr"},
        "vinagre tinto": {quantity: 2, unit: "cdas"},
        "aceite": {quantity: 3, unit: "cdas"},
        "sal y pimienta": {quantity: 1, unit: "al gusto"},
        "perejil picado": {quantity: 1, unit: "cda"},
        "ají limo (opcional)": {quantity: 0.5, unit: "unidades"},
    },
},
"anticuchos" : {
    portions: 1,
    ingredients: {
        "pasta de ajos": {quantity: 3, unit: "gr"},
        "aceite": {quantity: 5, unit: "ml"},
        "pimienta": {quantity: 0.01, unit: ""},
        "sal": {quantity: 1, unit: "gr"},
        "comino": {quantity: 0.01, unit: ""},
        "orégano": {quantity: 0.1, unit: ""},
        "vinagre": {quantity: 3, unit: "ml"},
        "pasta ají panca molido": {quantity: 5, unit: "gr"},
        "corazón de res": {quantity: 200, unit: "gr"},
        "papa": {quantity: 150, unit: "gr"},
        "palitos anticucheros": {quantity: 3, unit: "und"}
        }
},
"sangrecita" : {
    portions: 1,
    ingredients: {
        "sangrecita": {quantity: 200, unit: "gr"},
        "sal": {quantity: 2, unit: "gr"},
        "pimienta": {quantity: 0.01, unit: ""},
        "hierbabuena": {quantity: 1, unit: "gr"},
        "aceite": {quantity: 5, unit: "ml"},
        "cebolla china picada en cuadraditos": {quantity: 5, unit: "gr"},
        "ajo": {quantity: 5, unit: "gr"},
        "ají amarillo picado en cuadraditos": {quantity: 5, unit: "gr"},
        "yuca": {quantity: 150, unit: "gr"}
        }
},
"papa-rellena" : {
    portions: 1,
    ingredients: {
        "papa blanca": {quantity: 80, unit: "gr"},
        "papa amarilla": {quantity: 80, unit: "gr"},
        "yema de huevo": {quantity: 12, unit: "gr"},
        "Sal": {quantity: 2.5, unit: "gr"},
        "Pimienta": {quantity: 0.01, unit: ""},
        "Comino": {quantity: 0.01, unit: ""},
        "bistec picado": {quantity: 100, unit: "gr"},
        "cebollas picadas": {quantity: 20, unit: "gr"},
        "Pasta ajo": {quantity: 3, unit: "gr"},
        "Pasta ají panca": {quantity: 2, unit: "gr"},
        "Perejil picado": {quantity: 0.1, unit: ""},
        "Huevo duro": {quantity: 15, unit: "gr"},
        "Aceitunas negras": {quantity: 0.1, unit: ""},
        "Harina": {quantity: 50, unit: "gr"},
        "huevos": {quantity: 15, unit: "gr"},
        "Aceite vegetal": {quantity: 5, unit: "ml"},
        "cebolla en tiras": {quantity: 30, unit: "gr"},
        "zumo de limón": {quantity: 3, unit: "ml"},
        "Ají limo picado": {quantity: 0.01, unit: ""},
        "Culantro picado": {quantity: 0.01, unit: ""}
        }
},
"sopa-criolla" : {
    portions: 4,
    ingredients: {
        "aceite": {quantity: 80, unit: "ml"},
        "ajo picado": {quantity: 1, unit: "diente"},
        "crema de ají panca": {quantity: 30, unit: "gr"},
        "carne de res picada": {quantity: 150, unit: "gr"},
        "pasta de tomate": {quantity: 40, unit: "gr"},
        "tomate concasse": {quantity: 200, unit: "gr"},
        "cebolla": {quantity: 80, unit: "gr"},
        "cabello de ángel": {quantity: 50, unit: "gr"},
        "fondo de res": {quantity: 1, unit: "lt"},
        "leche evaporada": {quantity: 200, unit: "ml"},
        "sal, pimienta blanca y negra": {quantity: 1, unit: "al gusto"},
        "orégano en polvo": {quantity: 1, unit: "al gusto"},
        "huevo al plato": {quantity: 2, unit: "unidades"},
        "ají amarillo morroneado": {quantity: 1, unit: "unidades"},
        "pan de molde": {quantity: 2, unit: "rebanadas"},
    },
},

"sancochado-limeño" : {
    portions: 4,
    ingredients: {
        "fondo de res": {quantity: 500, unit: "ml"},
        "cebollas": {quantity: 150, unit: "gr"},
        "carne punta de pecho de res": {quantity: 150, unit: "gr"},
        "panceta ahumada": {quantity: 50, unit: "gr"},
        "asado de tira": {quantity: 150, unit: "gr"},
        "col": {quantity: 0.25, unit: "unidad"},
        "yuca": {quantity: 120, unit: "gr"},
        "papa canchan": {quantity: 130, unit: "gr"},
        "choclo": {quantity: 0.5, unit: "unidad"},
        "zanahoria": {quantity: 120, unit: "gr"},
        "nabos": {quantity: 0.5, unit: "unidad"},
        "apio": {quantity: 2, unit: "tallos"},
        "poro": {quantity: 0.5, unit: "unidad"},
        "camote": {quantity: 150, unit: "gr"},
        "garbanzos pelados": {quantity: 100, unit: "gr"},
        "arroz": {quantity: 30, unit: "gr"},
        "orégano en polvo": {quantity: 8, unit: "gr"},
        "sal": {quantity: 8, unit: "gr"},
    },
},
"menestrón" : {
    portions: 4,
    ingredients: {
        "agua": {quantity: 0.5, unit: "lt"},
        "carne de pecho de res": {quantity: 150, unit: "gr"},
        "carne de cerdo": {quantity: 100, unit: "gr"},
        "frijoles verdes": {quantity: 70, unit: "gr"},
        "fideos canuto": {quantity: 100, unit: "gr"},
        "habas": {quantity: 80, unit: "gr"},
        "yuca": {quantity: 100, unit: "gr"},
        "espinacas licuada": {quantity: 0.5, unit: "taza"},
        "albahaca licuada": {quantity: 0.5, unit: "taza"},
        "papas blancas": {quantity: 1, unit: "unidad"},
        "zanahorias": {quantity: 1, unit: "unidad"},
        "choclo": {quantity: 0.5, unit: "unidad"},
        "queso fresco": {quantity: 70, unit: "gr"},
        "queso parmesano": {quantity: 30, unit: "gr"},
        "apio": {quantity: 1, unit: "rama"},
        "sal": {quantity: "C/n", unit: ""},
    },
},

"caldo-de-gallina" : {
    portions: 4,
    ingredients: {
        "presa gallina": {quantity: 0.25, unit: ""},
        "fideos tallarín": {quantity: 70, unit: "gr"},
        "papas amarillas o blancas": {quantity: 1, unit: "unidad"},
        "kion": {quantity: 5, unit: "gr"},
        "apio": {quantity: 1, unit: "rama"},
        "poro": {quantity: 1, unit: "unidad"},
        "huevos": {quantity: 1, unit: "unidad"},
        "madre de gallina": {quantity: 70, unit: "gr"},
        "cebollita china": {quantity: 2, unit: "ramas"},
        "rocoto": {quantity: 0.5, unit: "unidad"},
        "sal": {quantity: "C/n", unit: ""},
    },
},
"sopa-bruta-maleña" : {
    portions: 4,
    ingredients: {
        "res (cadera o tapa)": {quantity: 250, unit: "gr"},
        "yuca": {quantity: 200, unit: "gr"},
        "ají panca": {quantity: 30, unit: "gr"},
        "zanahoria rallada": {quantity: 150, unit: "gr"},
        "tomate": {quantity: 1, unit: "unidad"},
        "ajos": {quantity: 5, unit: "gr"},
        "cebolla": {quantity: 200, unit: "gr"},
        "agua": {quantity: 1, unit: "lt"},
        "apio": {quantity: 1, unit: "rama"},
        "poro": {quantity: 0.125, unit: "unidad"},
        "aceite": {quantity: 150, unit: "ml"},
        "fideos tallarín": {quantity: 120, unit: "ml"},
        "albahaca licuada": {quantity: 50, unit: "gr"},
        "laurel": {quantity: 1, unit: "hoja"},
        "sal": {quantity: "C/n", unit: ""},
        "huesos de res": {quantity: 250, unit: "gr"},
    },
},
"chupe-limeño": {
    portions: 4,
    ingredients: {
        "aceite vegetal": {quantity: 30, unit: "ml"},
        "cebolla": {quantity: 0.5, unit: "unidad"},
        "tomate": {quantity: 1, unit: "unidad"},
        "ajo": {quantity: 2, unit: "dientes"},
        "pasta de tomate": {quantity: 1, unit: "cda"},
        "ají panca": {quantity: 1, unit: "cda"},
        "orégano seco": {quantity: 0.75, unit: "cdta"},
        "ají amarillo": {quantity: 1, unit: "unidad"},
        "laurel": {quantity: 1, unit: "hoja"},
        "agua": {quantity: 1, unit: "lt"},
        "vino blanco": {quantity: 0.25, unit: "taza"},
        "espinazo de pescado": {quantity: 1, unit: "unidad"},
        "papa amarilla": {quantity: 1, unit: "unidad"},
        "arroz": {quantity: 30, unit: "gr"},
        "arvejas": {quantity: 50, unit: "gr"},
        "zanahoria": {quantity: 60, unit: "gr"},
        "choclo": {quantity: 1, unit: "unidad"},
        "filete de pescado (cachema o cabrilla)": {quantity: 1, unit: "unidad"},
        "huevo": {quantity: 1, unit: "unidad"},
        "leche evaporada": {quantity: 0.25, unit: "taza"},
        "queso fresco picado": {quantity: 70, unit: "gr"},
        "sal": {quantity: "C/n", unit: ""},
    },
},

"arroz-con-pollo" : {
    portions: 4,
    ingredients: {
        "pierna y muslo de pollo": {quantity: 1, unit: "unidad"},
        "chicha fuerte": {quantity: 150, unit: "ml"},
        "aceite vegetal": {quantity: 70, unit: "ml"},
        "ajo": {quantity: 2, unit: "dientes"},
        "cebolla brunoise": {quantity: 150, unit: "gr"},
        "ají amarillo": {quantity: 40, unit: "gr"},
        "ají mirasol pasta": {quantity: 35, unit: "gr"},
        "palillo (opcional)": {quantity: 5, unit: "gr"},
        "zanahoria": {quantity: 50, unit: "gr"},
        "pimienta negra": {quantity: 5, unit: "gr"},
        "comino": {quantity: 5, unit: "gr"},
        "culantro": {quantity: 250, unit: "gr"},
        "fondo de ave": {quantity: 400, unit: "ml"},
        "arroz": {quantity: 250, unit: "gr"},
        "pimiento morroneado": {quantity: 0.5, unit: "unidad"},
        "arvejas blanqueadas": {quantity: 50, unit: "gr"},
        "rocoto": {quantity: 40, unit: "gr"},
        "cebolla": {quantity: 100, unit: "gr"},
        "culantro picado": {quantity: 1, unit: "cda"},
        "tomate concase": {quantity: 50, unit: "gr"},
        "ajo pasta": {quantity: 5, unit: "gr"},
        "limón jugo": {quantity: 30, unit: "gr"},
        "sal": {quantity: "C/n", unit: ""},
        "pimienta blanca": {quantity: "C/n", unit: ""},
    },
},

"arroz-tapado" : {
    portions: 4,
    ingredients: {
        "arroz blanco cocido": {quantity: 150, unit: "gr"},
        "carne tapa picada": {quantity: 120, unit: "gr"},
        "aceitunas negras": {quantity: 5, unit: "unidad"},
        "huevos duros": {quantity: 2, unit: "unidad"},
        "cebolla": {quantity: 1, unit: "unidad"},
        "pasas negras": {quantity: 1, unit: "cda"},
        "ajo molido": {quantity: 2, unit: "dientes"},
        "sal": {quantity: "C/n", unit: ""},
        "aceite": {quantity: 100, unit: "ml"},
        "ají panca": {quantity: 50, unit: "gr"},
        "perejil": {quantity: 0.25, unit: "atado"},
    },
},

"arroz-pianito" : {
    portions: 4,
    ingredients: {
        "arroz": {quantity: 250, unit: "gr"},
        "frijol castilla": {quantity: 200, unit: "gr"},
        "pimiento rojo": {quantity: 0.5, unit: "unidad"},
        "orégano": {quantity: 8, unit: "gr"},
        "tocino ahumado": {quantity: 100, unit: "gr"},
        "ajo": {quantity: 2, unit: "dientes"},
        "ají panca": {quantity: 30, unit: "gr"},
        "cebolla": {quantity: 1, unit: "unidad"},
        "aceite": {quantity: 70, unit: "ml"},
        "sal": {quantity: "C/n", unit: ""},
    },
},

"seco-de-res" : {
    portions: 4,
    ingredients: {
        "chicha de jora": {quantity: 120, unit: "ml"},
        "res tapa": {quantity: 180, unit: "gr"},
        "yuca": {quantity: 180, unit: "gr"},
        "aceite vegetal": {quantity: 30, unit: "ml"},
        "arroz": {quantity: 120, unit: "gr"},
        "ajo en pasta": {quantity: 35, unit: "gr"},
        "ají mirasol en pasta": {quantity: 75, unit: "gr"},
        "cebolla": {quantity: 1, unit: "unidad"},
        "ají panca": {quantity: 35, unit: "gr"},
        "arvejas": {quantity: 40, unit: "gr"},
        "fondo de carne": {quantity: 0.5, unit: "lt"},
        "pimienta negra": {quantity: 1, unit: "cucharadita"},
        "comino": {quantity: 0.5, unit: "cucharadita"},
        "sal": {quantity: "C/n", unit: ""},
        "culantro": {quantity: 0.5, unit: "atado"},
        "ají amarillo juliana": {quantity: 1, unit: "unidad"},
    },
},
"picante-de-carne" : {
    portions: 4,
    ingredients: {
        "carne para guiso": {quantity: 180, unit: "gr"},
        "cebolla roja en brunoise": {quantity: 80, unit: "gr"},
        "arroz": {quantity: 80, unit: "gr"},
        "aceite": {quantity: 80, unit: "ml"},
        "ajo en pasta": {quantity: 2, unit: "dientes"},
        "papa blanca en parmentier": {quantity: 200, unit: "gr"},
        "zanahoria": {quantity: 80, unit: "gr"},
        "arvejas": {quantity: 70, unit: "gr"},
        "vainitas picadas": {quantity: 60, unit: "gr"},
        "pimiento": {quantity: 1, unit: "unidad"},
        "crema de ají panca": {quantity: 60, unit: "gr"},
        "pasta de tomate": {quantity: 1, unit: "cucharada"},
        "tomates en concasse": {quantity: 1, unit: "unidad"},
        "laurel": {quantity: 1, unit: "unidad"},
        "culantro": {quantity: 1, unit: "cucharada"},
        "caldo de res": {quantity: 1, unit: "litro"},
    },
},
"estofado-de-res" : {
    portions: 4,
    ingredients: {
        "carne de res para guiso": {quantity: 200, unit: "gr"},
        "papas blancas en mitad": {quantity: 2, unit: "unidades"},
        "arroz": {quantity: 80, unit: "gr"},
        "harina": {quantity: 25, unit: "gr"},
        "aceite": {quantity: 60, unit: "ml"},
        "cebolla": {quantity: 1, unit: "unidad"},
        "vino dulce u Oporto": {quantity: 150, unit: "ml"},
        "fondo de ternera": {quantity: 1.5, unit: "tazas"},
        "pasta de tomate": {quantity: 2, unit: "cucharadas"},
        "crema de ají panca": {quantity: 45, unit: "gr"},
        "tomate": {quantity: 1, unit: "unidad"},
        "hongos secos": {quantity: 25, unit: "gr"},
        "ajo": {quantity: 2, unit: "dientes"},
        "laurel": {quantity: 1, unit: "hoja"},
        "azúcar": {quantity: 1, unit: "cucharadita"},
        "pasas": {quantity: 70, unit: "gr"},
        "arvejas": {quantity: 70, unit: "gr"},
        "sal": {quantity: "al gusto", unit: ""},
    },
},
"carapulcra" : {
    portions: 4,
    ingredients: {
        "papa seca amarilla grande": {quantity: 200, unit: "gr"},
        "aceite": {quantity: 0.25, unit: "lt"},
        "carne de cerdo": {quantity: 180, unit: "gr"},
        "carne de gallina": {quantity: 1, unit: "presa"},
        "cebolla": {quantity: 100, unit: "gr"},
        "ajos": {quantity: 2, unit: "dientes"},
        "ají panca crema": {quantity: 60, unit: "gr"},
        "ají amarillo crema": {quantity: 35, unit: "gr"},
        "sal": {quantity: "al gusto", unit: ""},
        "arroz": {quantity: 120, unit: "gr"},
        "yuca amarilla": {quantity: 120, unit: "gr"},
        "fondo de ave": {quantity: 0.5, unit: "lt"},
        "fondo de cerdo": {quantity: 0.25, unit: "lt"},
        "vino dulce": {quantity: 80, unit: "ml"},
        "clavo de olor": {quantity: 2, unit: "unidades"},
        "rosquitas de manteca molidas": {quantity: 3, unit: "unidades"},
        "maní tostado y molido": {quantity: 120, unit: "gr"},
    },
},
"locro-de-zapallo" : {
    portions: 4,
    ingredients: {
        "zapallo": {quantity: 200, unit: "gr"},
        "cebolla": {quantity: 80, unit: "gr"},
        "ajos": {quantity: 2, unit: "dientes"},
        "arroz": {quantity: 80, unit: "gr"},
        "huevos": {quantity: 2, unit: "unidades"},
        "crema de ají verde": {quantity: 2, unit: "cdas"},
        "papa blanca Yungay": {quantity: 2, unit: "unidades"},
        "choclo": {quantity: 0.5, unit: "unidad"},
        "fréjol verde s/vaina": {quantity: 50, unit: "gr"},
        "habas verdes": {quantity: 30, unit: "gr"},
        "arvejas s/ vaina": {quantity: 25, unit: "gr"},
        "huacatay (hojas)": {quantity: 2, unit: "ramas"},
        "queso fresco": {quantity: 50, unit: "gr"},
        "leche evaporada": {quantity: 0.25, unit: "taza"},
        "perejil (picado)": {quantity: 1, unit: "cda"},
        "sal": {quantity: "al gusto", unit: ""},
        "aceite": {quantity: 2, unit: "onzas"},
        "fondo claro de ave": {quantity: 0.25, unit: "litro"},
    },
},
"aji-de-gallina" : {
    portions: 4,
    ingredients: {
        "pechuga de (gallina o pollo)": {quantity: 200, unit: "gr"},
        "mirepoix": {quantity: 40, unit: "gr"},
        "fondo claro de pollo": {quantity: 500, unit: "ml"},
        "cebolla": {quantity: 50, unit: "gr"},
        "ajo picado": {quantity: 8, unit: "gr"},
        "crema de ají amarillo": {quantity: 150, unit: "gr"},
        "pimienta blanca": {quantity: 3, unit: "gr"},
        "pecanas": {quantity: 10, unit: "gr"},
        "pan (francés o molde)": {quantity: 250, unit: "gr"},
        "leche evaporada": {quantity: 75, unit: "ml"},
        "sal": {quantity: "al gusto", unit: ""},
        "queso parmesano": {quantity: 50, unit: "gr"},
        "huevo duro": {quantity: 1, unit: "unidad"},
        "aceituna": {quantity: 3, unit: "unidades"},
        "perejil": {quantity: 3, unit: "cdas"},
        "papa huayro": {quantity: 1, unit: "unidad"},
        "arroz": {quantity: 50, unit: "gr"},
    },
},
"olluco-con-charqui" : {
    portions: 4,
    ingredients: {
        "aceite": {quantity: 100, unit: "ml"},
        "ajo pasta": {quantity: 50, unit: "gr"},
        "crema ají panca pasta": {quantity: 40, unit: "gr"},
        "crema ají amarillo": {quantity: 40, unit: "gr"},
        "pimienta blanca": {quantity: 5, unit: "gr"},
        "comino": {quantity: 5, unit: "gr"},
        "cebolla": {quantity: 200, unit: "gr"},
        "arroz": {quantity: 120, unit: "gr"},
        "olluco criollo": {quantity: 450, unit: "gr"},
        "charqui": {quantity: 150, unit: "gr"},
        "chalona": {quantity: 50, unit: "gr"},
        "fondo res": {quantity: 100, unit: "ml"},
        "huacatay o perejil picado": {quantity: 4, unit: "cdas"},
        "sal": {quantity: "al gusto", unit: ""},
    },
},
"huatia-sulcana" : {
    portions: 4,
    ingredients: {
        "res": {quantity: 150, unit: "gr"},
        "cerdo": {quantity: 150, unit: "gr"},
        "ají panca": {quantity: 30, unit: "gr"},
        "ají mirasol": {quantity: 30, unit: "gr"},
        "ají amarillo": {quantity: 50, unit: "gr"},
        "chicha de jora": {quantity: 200, unit: "ml"},
        "chincho": {quantity: 1/8, unit: "atado"},
        "huacatay": {quantity: 1/8, unit: "atado"},
        "culantro": {quantity: 1/8, unit: "atado"},
        "muña": {quantity: 1/10, unit: "atado"},
        "paico": {quantity: 1/8, unit: "atado"},
        "hoja de plátano": {quantity: 1/4, unit: "paqte"},
        "sal": {quantity: "al gusto", unit: ""},
        "ajos": {quantity: 4, unit: "dtes"},
        "papa huayro": {quantity: 1, unit: "unid"},
        "papa marimba": {quantity: 1, unit: "unid"},
        "papa tumbay": {quantity: 1, unit: "unid"},
        "papa peruanita": {quantity: 1, unit: "unid"},
        "camote": {quantity: 1, unit: "unid"},
        "choclo": {quantity: 0.5, unit: "unid"},
        "ají amarillo": {quantity: 1, unit: "unid"},
        "leche": {quantity: 50, unit: "ml"},
        "maní tostado": {quantity: 40, unit: "gr"},
        "cebolla": {quantity: 0.5, unit: "unid"},
        "harina": {quantity: 150, unit: "gr"},
        "agua": {quantity: 100, unit: "gr"}
    },
},
"humitas" : {
    portions: 4,
    ingredients: {
        "choclos, tiernos, desgranados": {quantity: 2, unit: "unid"},
        "leche evaporada": {quantity: 0.5, unit: "taza"},
        "pasas": {quantity: 40, unit: "gr"},
        "azúcar": {quantity: 0.25, unit: "taza"},
        "margarina": {quantity: 1, unit: "cda"},
        "canela": {quantity: 1, unit: "trozos"},
        "sal": {quantity: "al gusto", unit: ""},
        "pancas de choclo": {quantity: 0.25, unit: "paqte"}
    },
},
"tamal-criollo" : {
    portions: 4,
    ingredients: {
        "mote": {quantity: 180, unit: "gr"},
        "manteca de cerdo": {quantity: 100, unit: "gr"},
        "achiote": {quantity: 5, unit: "gr"},
        "ajo molido": {quantity: 15, unit: "gr"},
        "comino molido": {quantity: 5, unit: "gr"},
        "ají panca en crema": {quantity: 15, unit: "gr"},
        "ají mirasol crema": {quantity: 25, unit: "gr"},
        "fondo de gallina": {quantity: 0.5, unit: "lt"},
        "sal": {quantity: 0.5, unit: "cda"},
        "panceta de cerdo": {quantity: 60, unit: "gr"},
        "ají mirasol": {quantity: 1, unit: "unid"},
        "aceituna negra": {quantity: 20, unit: "gr"},
        "huevos": {quantity: 2, unit: "unid"},
        "hojas de plátano": {quantity: 0.5, unit: "pqte"},
        "paja": {quantity: 1, unit: "rollo"}
    },
},
"cau-cau" : {
    portions: 4,
    ingredients: {
        "mondongo nacional o importado": {quantity: 200, unit: "gr"},
        "papa blanca": {quantity: 200, unit: "gr"},
        "arroz": {quantity: 80, unit: "gr"},
        "cebolla": {quantity: 70, unit: "gr"},
        "ajo pasta": {quantity: 10, unit: "gr"},
        "ají amarillo en pasta": {quantity: 80, unit: "gr"},
        "pimienta negra molida": {quantity: 3, unit: "gr"},
        "palillo": {quantity: 2, unit: "gr"},
        "comino": {quantity: 2, unit: "gr"},
        "hierba buena": {quantity: 1/8, unit: "atado"},
        "sal": {quantity: "C/n", unit: ""}
    },
},
"chanfainita" : {
    portions: 4,
    ingredients: {
        "bofe de res": {quantity: 350, unit: "gr"},
        "papas cortadas en parmentier": {quantity: 2, unit: "unid"},
        "cebolla picada": {quantity: 1/2, unit: "unid"},
        "arroz": {quantity: 80, unit: "gr"},
        "hierbabuena": {quantity: 2, unit: "ramas"},
        "vinagre tinto": {quantity: 30, unit: "ml"},
        "ají panca molido": {quantity: 2, unit: "cdas"},
        "ají amarillo molido": {quantity: 1, unit: "cda"},
        "ajo molido": {quantity: 1/2, unit: "cdas"},
        "fondo de res": {quantity: 1.5, unit: "taza"},
        "sal": {quantity: "C/n", unit: ""},
        "aceite": {quantity: 100, unit: "ml"}
    },
},
"mondonguito-a-la-italiana" : {
    portions: 4,
    ingredients: {
        "mondongo de res": {quantity: 180, unit: "gr"},
        "ají panca crema": {quantity: 1, unit: "cda"},
        "ajos": {quantity: 1, unit: "dientes"},
        "pasta de tomate": {quantity: 40, unit: "gr"},
        "zanahoria": {quantity: 100, unit: "gr"},
        "sal y pimienta al gusto": {quantity: "C/n", unit: ""},
        "aceite": {quantity: 1/2, unit: "lt"},
        "cebolla": {quantity: 1/2, unit: "unid"},
        "arveja": {quantity: 40, unit: "gr"},
        "tomate": {quantity: 1, unit: "unid"},
        "laurel": {quantity: 1, unit: "unid"},
        "hongos": {quantity: 20, unit: "gr"},
        "leche": {quantity: 1, unit: "onza"},
        "queso parmesano": {quantity: 20, unit: "gr"},
        "perejil": {quantity: 1/16, unit: "atado"},
        "papa amarilla": {quantity: 1, unit: "unid"},
        "arroz": {quantity: 80, unit: "gr"}
    },
},
"estofado-de-lengua" : {
    portions: 4,
    ingredients: {
        "lengua cocida ligeramente": {quantity: 230, unit: "gr"},
        "cebolla": {quantity: 1/2, unit: "unid"},
        "arvejas": {quantity: 1/4, unit: "taza"},
        "papas amarillas": {quantity: 2, unit: "unid"},
        "tomate": {quantity: 1, unit: "unid"},
        "pasta de tomate": {quantity: 30, unit: "gr"},
        "arroz": {quantity: 80, unit: "gr"},
        "ají panca": {quantity: 40, unit: "gr"},
        "zanahoria": {quantity: 1/2, unit: "taza"},
        "ajo molido": {quantity: 1, unit: "cdta"},
        "sal y pimienta": {quantity: "C/n", unit: ""},
        "fondo de la cocción de la lengua": {quantity: 1.5, unit: "taza"},
        "aceite": {quantity: 120, unit: "ml"},
        "leche": {quantity: 100, unit: "ml"},
        "tomillo": {quantity: 4, unit: "ramas"},
        "mantequilla": {quantity: 30, unit: "gr"},
        "perejil picado": {quantity: 1/10, unit: "atado"}
    },
},
"patitas-al-mani" : {
    portions: 4,
    ingredients: {
        "pata de vaca cocida": {quantity: 250, unit: "gr"},
        "papas": {quantity: 3, unit: "unid"},
        "maní tostado": {quantity: 1/4, unit: "taza"},
        "cebolla": {quantity: 1/2, unit: "unid"},
        "ají panca crema": {quantity: 2, unit: "cdas"},
        "ají amarillo molido": {quantity: 1, unit: "cdas"},
        "arroz": {quantity: 100, unit: "gr"},
        "ajo pasta": {quantity: 1/2, unit: "cdas"},
        "aceite": {quantity: 4, unit: "cdas"},
        "sal, pimienta y comino": {quantity: "C/n", unit: ""}
    },
},
"fritangita" : {
    portions: 4,
    ingredients: {
        "hígado de res": {quantity: 180, unit: "gr"},
        "ajo": {quantity: 2, unit: "dientes"},
        "tomate": {quantity: 1/2, unit: "unid"},
        "cebolla": {quantity: 1/2, unit: "unid"},
        "agua": {quantity: 3, unit: "cdas"},
        "ají amarillo": {quantity: 2, unit: "cdas"},
        "salsa de tomate": {quantity: 1, unit: "cdas"},
        "clavo de olor": {quantity: 1, unit: "cdta"},
        "aceite": {quantity: 3, unit: "onza"},
        "limón": {quantity: 3, unit: "unid"},
        "sal y pimienta": {quantity: "C/n", unit: ""},
        "apio": {quantity: 2, unit: "ramas"}
    },
},
"lomo-saltado" : {
    portions: 4,
    ingredients: {
        "lomo fino bastones": {quantity: 150, unit: "gr"},
        "ajo pasta": {quantity: 17, unit: "gr"},
        "sal, pimienta": {quantity: "C/n", unit: ""},
        "aceite vegetal": {quantity: 30, unit: "ml"},
        "tomate gajos": {quantity: 1, unit: "unid"},
        "arroz": {quantity: 100, unit: "gr"},
        "cebolla roja": {quantity: 1/2, unit: "unid"},
        "ají limo": {quantity: 1, unit: "unid"},
        "vinagre tinto": {quantity: "C/n", unit: ""},
        "salsa de soya clara": {quantity: "C/n", unit: ""},
        "salsa de soya oscura": {quantity: "C/n", unit: ""},
        "aceite": {quantity: 150, unit: "ml"},
        "papa rosada": {quantity: 120, unit: "gr"},
    },
},
"tacu-tacu-con-sabana" : {
    portions: 4,
    ingredients: {
        "lomo": {quantity: 200, unit: "gr"},
        "frijoles canario": {quantity: 220, unit: "gr"},
        "arroz blanco": {quantity: 110, unit: "gr"},
        "ají amarillo": {quantity: 80, unit: "gr"},
        "cebolla": {quantity: 1, unit: "unid"},
        "aceite de olivo": {quantity: 100, unit: "ml"},
        "huevo": {quantity: 1, unit: "unid"},
        "limón": {quantity: 1, unit: "unid"},
        "sal, pimienta, comino": {quantity: "C/n", unit: ""},
        "orégano": {quantity: "C/n", unit: ""},
        "culantro": {quantity: 1/8, unit: "atado"},
        "aceite": {quantity: 100, unit: "ml"},
        "laurel": {quantity: 1, unit: "hojas"},
        "tocino ahumado": {quantity: 40, unit: "gr"},
        "ají limo": {quantity: 2, unit: "unid"},
    },
},
"tallarin-saltado" : {
    portions: 4,
    ingredients: {
        "tallarín delgado": {quantity: 120, unit: "gr"},
        "pechugas de pollo": {quantity: 100, unit: "gr"},
        "jolantau": {quantity: 50, unit: "gr"},
        "col oriental": {quantity: 1/8, unit: "kilo"},
        "ajo picado": {quantity: 2, unit: "dientes"},
        "cebolla": {quantity: 1, unit: "unid"},
        "limón": {quantity: 1, unit: "unid"},
        "pimiento": {quantity: 1/2, unit: "unid"},
        "mensí": {quantity: 1, unit: "cda"},
        "aceite": {quantity: 120, unit: "ml"},
        "aceite de ajonjolí": {quantity: 1, unit: "cda"},
        "sal": {quantity: "C/n", unit: ""},
        "azúcar": {quantity: "C/n", unit: ""},
    },
},
"bisteck-a-lo-pobre" : {
    portions: 4,
    ingredients: {
        "lomo fino o tortuga": {quantity: 200, unit: "gr"},
        "huevos": {quantity: 1, unit: "unid"},
        "plátanos de la isla": {quantity: 1, unit: "unid"},
        "salchichas": {quantity: 1, unit: "unid"},
        "lechuga": {quantity: 2, unit: "hojas"},
        "tomate": {quantity: 1, unit: "unid"},
        "limón": {quantity: 1, unit: "unid"},
        "arroz": {quantity: 60, unit: "gr"},
        "papas rosadas": {quantity: 1, unit: "unid"},
        "ajo molido": {quantity: 2, unit: "dientes"},
        "aceite para freír": {quantity: 1/2, unit: "lt"},
        "sal y pimienta al gusto": {quantity: "C/n", unit: ""},
    },
},
"coliflor-saltada" : {
    portions: 4,
    ingredients: {
        "coliflor": {quantity: 80, unit: "gr"},
        "carne de res (lomo fino o de tortuga)": {quantity: 150, unit: "gr"},
        "sillao": {quantity: 1/2, unit: "onza"},
        "vinagre": {quantity: 1, unit: "cdta"},
        "sal, pimienta": {quantity: "C/n", unit: ""},
        "culantro picado": {quantity: 1, unit: "cda"},
        "ajo": {quantity: 1, unit: "diente"},
        "cebollas": {quantity: 1/2, unit: "unid"},
        "leche": {quantity: 1, unit: "onza"},
        "aceite": {quantity: 1/4, unit: "lt"},
        "perejil": {quantity: 1/4, unit: "cda"},
        "papa amarilla": {quantity: 1, unit: "unid"},
        "arroz": {quantity: 70, unit: "gr"},
        "arvejas": {quantity: 15, unit: "gr"},
    },
},
"pescado-a-la-chorrillana" : {
    portions: 4,
    ingredients: {
        "arroz": {quantity: 100, unit: "gr"},
        "pescado (Corvina o Cachema)": {quantity: 1, unit: "filete"},
        "cebolla mediana": {quantity: 1, unit: "unid"},
        "ají amarillo": {quantity: 1, unit: "unid"},
        "tomate": {quantity: 1, unit: "unid"},
        "arvejas": {quantity: 1/2, unit: "taza"},
        "ajo": {quantity: 1, unit: "cdta"},
        "culantro": {quantity: "C/n", unit: ""},
        "harina": {quantity: 5, unit: "gr"},
        "sal": {quantity: "C/n", unit: ""},
        "vinagre": {quantity: "C/n", unit: ""},
        "papa blanca": {quantity: 1, unit: "unid"},
    },
},
"tallarines-rojos" : {
    portions: 4,
    ingredients: {
        "tallarines": {quantity: 120, unit: "gr"},
        "pollo": {quantity: 1, unit: "presas"},
        "zanahoria": {quantity: 1/2, unit: "unid"},
        "pasta de tomate": {quantity: 2, unit: "cdas"},
        "tomate": {quantity: 4, unit: "unid"},
        "crema ají panca": {quantity: 2, unit: "cdas"},
        "cebollas": {quantity: 2, unit: "unid"},
        "vino tinto semi dulce": {quantity: 1, unit: "copa"},
        "aceite vegetal": {quantity: 100, unit: "ml"},
        "queso parmesano": {quantity: 25, unit: "gr"},
        "laurel": {quantity: 2, unit: "hojas"},
        "orégano": {quantity: "C/n", unit: ""},
        "ajos": {quantity: 3, unit: "dtes"},
        "sal, pimienta, cominos": {quantity: "C/n", unit: ""},
        "hongos secos": {quantity: "C/n", unit: ""},
    },
},
"tallarines-verdes-con-milanesa" : {
    portions: 4,
    ingredients: {
        "pechuga de pollo": {quantity: 1/2, unit: "unid"},
        "fideo tallarín": {quantity: 120, unit: "gr"},
        "pan rallado": {quantity: 40, unit: "gr"},
        "pecanas": {quantity: 20, unit: "gr"},
        "espinaca deshojada": {quantity: 100, unit: "gr"},
        "albahaca deshojada": {quantity: 100, unit: "gr"},
        "leche evaporada": {quantity: 100, unit: "ml"},
        "queso fresco": {quantity: 60, unit: "gr"},
        "queso parmesano": {quantity: 30, unit: "gr"},
        "sal, pimienta": {quantity: "C/n", unit: ""},
        "cebolla roja": {quantity: 1/2, unit: "unid"},
        "aceite": {quantity: 120, unit: "ml"},
    },
},
"caigua-rellena" : {
    portions: 4,
    ingredients: {
        "carne de res": {quantity: 120, unit: "gr"},
        "caiguas": {quantity: 2, unit: "unid"},
        "pasta de ají amarillo": {quantity: 100, unit: "gr"},
        "aceitunas": {quantity: 2, unit: "unid"},
        "huevos": {quantity: 2, unit: "unid"},
        "huacatay": {quantity: 1/2, unit: "atado"},
        "pasta de tomate": {quantity: 1, unit: "cdas"},
        "tomate": {quantity: 1, unit: "unid"},
        "crema ají panca": {quantity: 1, unit: "cdas"},
        "cebollas": {quantity: 1.5, unit: "unid"},
        "leche de tarro": {quantity: 100, unit: "ml"},
        "aceite vegetal": {quantity: 100, unit: "ml"},
        "arroz": {quantity: 80, unit: "gr"},
        "queso parmesano": {quantity: 25, unit: "gr"},
        "laurel": {quantity: 1, unit: "hojas"},
        "orégano": {quantity: "C/n", unit: ""},
        "ajos": {quantity: 4, unit: "dtes"},
        "sal, pimienta, comino": {quantity: "C/n", unit: ""},
        "pasas": {quantity: 40, unit: "gr"},
    },
},





};

let mealPlan = {
    "Lunes": { meal: "", portions: 1 },
    "Martes": { meal: "", portions: 1 },
    "Miércoles": { meal: "", portions: 1 },
    "Jueves": { meal: "", portions: 1 },
    "Viernes": { meal: "", portions: 1 },
    "Sábado": { meal: "", portions: 1 },
    "Domingo": { meal: "", portions: 1 }
};

function updatePlan(day, meal, portions) {
    mealPlan[day].meal = meal;
    mealPlan[day].portions = parseInt(portions);
    updateShoppingList();
}

function displayShoppingList(shoppingList) {
    let shoppingListDiv = document.getElementById('grocery-list');
    shoppingListDiv.innerHTML = '';
    for (let ingredient in shoppingList) {
        shoppingListDiv.innerHTML += `<p>${ingredient}: ${shoppingList[ingredient].quantity.toFixed(2)} ${shoppingList[ingredient].unit}</p>`;
    }
}

function updateShoppingList() {
    let shoppingList = {};
    for (let day in mealPlan) {
        let meal = mealPlan[day].meal;
        let portions = mealPlan[day].portions;
        if (meal) {
            for (let ingredient in meals[meal].ingredients) {
                let ingredientData = meals[meal].ingredients[ingredient];
                let shoppingListItem = shoppingList[ingredient];
                
                // Convert quantities to a common unit of measurement
                let quantity = ingredientData.quantity;
                if (ingredientData.unit === "kg" && shoppingListItem && shoppingListItem.unit === "gr") {
                    quantity *= 1000;  // convert kg to gr
                } else if (ingredientData.unit === "gr" && shoppingListItem && shoppingListItem.unit === "kg") {
                    shoppingListItem.quantity *= 1000;  // convert existing quantity from kg to gr
                    shoppingListItem.unit = "gr";
                }
                
                if (shoppingListItem) {
                    shoppingListItem.quantity += quantity * portions / meals[meal].portions;
                } else {
                    shoppingList[ingredient] = { 
                        quantity: ingredientData.quantity * portions / meals[meal].portions, 
                        unit: ingredientData.unit 
                    };
                }
            }
        }
    }
    displayShoppingList(shoppingList);
}

// ... rest of your JavaScript code ...
// ... rest of your JavaScript code ...

function toUTF8Array(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

function encodeURIWithEmoji(unencoded) {
  return [...unencoded].map((char) => {
    return /^[\u0000-\u007f]*$/.test(char) ? encodeURIComponent(char) : char;
  }).join('');
}

function updateWhatsAppLink() {
  const phoneNumber = '51977571922';
  const message = 'Hola! Este es mi pedido ñ 🤗';
  const encodedMessage = encodeURIWithEmoji(message);
  const whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
}

updateWhatsAppLink();

