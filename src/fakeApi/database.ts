const database = `{
   "capacitors": [
    {
      "title": "Capacitor 25V",
      "description": "RS Electrolytic Capacitor 25V DC ",
      "price": 1.2,
      "rating": 4.9,
      "imageUrl": "/assets/c-al-25v.webp",
      "optionName": "capacity",
      "options": [
        "10μF",
        "47μF",
        "100μF",
        "220μF"
      ],
      "type": "aluminium",
      "componentName": "capacitors",
      "id": "c-al-2.7v"
    },
    {
      "title": "Capacitor 2.7V",
      "description": "RS Electrolytic Capacitor 2.7V DC",
      "price": 0.5,
      "rating": 4.3,
      "imageUrl": "/assets/c-al-2.7v.jpeg",
      "optionName": "capacity",
      "options": [
        "10μF",
        "47μF",
        "100μF",
        "220μF"
      ],
      "type": "aluminium",
      "componentName": "capacitors",
      "id": "c-al-25v"
    },
    {
      "title": "Operating capacitor 450V",
      "description": "For the operation of A.C. motors and three-phase A.C",
      "price": 6.4,
      "rating": 3.9,
      "imageUrl": "/assets/c-al-450v.jpeg",
      "optionName": "capacity",
      "options": [
       "68μF",
        "450μF"
      ],
      "type": "aluminium",
      "componentName": "capacitors",
      "id": "c-al-450v"
    },
    {
      "title": "Capacitor 63V",
      "description": "RS Electrolytic Capacitor 63V DC",
      "price": 5.3,
      "rating": 4.2,
      "imageUrl": "/assets/c-al-63v.jpeg",
      "optionName": "capacity",
      "options": [
        "4700μF",
        "6800μF"
      ],
      "type": "aluminium",
      "componentName": "capacitors",
      "id": "c-al-63v"
    },
    {
      "title": "Capacitor 50V",
      "description": "Wurth Elektronik DC capacitor, Through Hole",
      "price": 0.02,
      "rating": 4.7,
      "imageUrl": "/assets/c-al-50v.jpeg",
      "optionName": "capacity",
      "options": [
        "3300μF"
      ],
      "type": "aluminium",
      "componentName": "capacitors",
      "id": "c-al-50v"
    },
    {
      "title": "Ceramic Capacitor 1kV",
      "description": "Vishay Single Layer Ceramic Capacitor",
      "price": 0.16,
      "rating": 3.8,
      "imageUrl": "/assets/c-ce-1kv.jpeg",
      "optionName": "capacity",
      "options": [
        "100pF",
        "1nF"
      ],
      "type": "ceramic",
      "componentName": "capacitors",
      "id": "c-ce-1kv"
    },
    {
      "title": "Capacitor (SLCC) 50V",
      "description": "Vishay Single Layer Ceramic Capacitor",
      "price": 0.13,
      "rating": 4.5,
      "imageUrl": "/assets/c-ce-50v.jpeg",
      "optionName": "capacity",
      "options": [
        "1μF"
      ],
      "type": "ceramic",
      "componentName": "capacitors",
      "id": "c-ce-50v"
    },
    {
      "title": "Capacitor 300V",
      "description": "Vishay Single Layer Ceramic Capacitor (SLCC)",
      "price": 0.22,
      "rating": 4.7,
      "imageUrl": "/assets/c-ce-300v.jpeg",
      "optionName": "capacity",
      "options": [
        "4.7nF"
      ],
      "type": "ceramic",
      "componentName": "capacitors",
      "id": "c-ce-300v"
    },
    {
      "title": "Capacitor 3kV",
      "description": "RS PRO (SLCC)",
      "price": 0.06,
      "rating": 4.3,
      "imageUrl": "/assets/c-ce-3kv.jpeg",
      "optionName": "capacity",
      "options": [
        "470pF"
      ],
      "type": "ceramic",
      "componentName": "capacitors",
      "id": "c-ce-3kv"
    },
    {
      "title": "Film Cap. 440V",
      "description": "Polypropylene Film Capacitor",
      "price": 11.5,
      "rating": 4.4,
      "imageUrl": "/assets/c-fi-440v.webp",
      "optionName": "capacity",
      "options": [
        "6μF",
        "8μF",
        "30μF"
      ],
      "type": "film",
      "componentName": "capacitors",
      "id": "c-fi-440v"
    },
    {
      "title": "RS PRO Polystyrene Cap.",
      "description": "RS PRO Polystyrene Capacitor 63V",
      "price": 3.35,
      "rating": 4.6,
      "imageUrl": "/assets/c-fi-160v.webp",
      "optionName": "capacity",
      "options": [
        "10nF"
      ],
      "type": "film",
      "componentName": "capacitors",
      "id": "c-fi-160v"
    }
   ],

   "resistors": [
    {
      "title": "Film Resistor 1kΩ",
      "description": "RS PRO Carbon Resistor 0.25W ±5%",
      "price": 0.16,
      "rating": 4.1,
      "imageUrl": "/assets/r-fi-1ko.webp",
      "type": "film",
      "componentName": "resistors",
      "id": "r-fi-1ko"
    },
    {
      "title": "Film Resistor 4.7kΩ",
      "description": "RS PRO Carbon Resistor 0.25W ±5%",
      "price": 0.22,
      "rating": 4.2,
      "imageUrl": "/assets/r-fi-4.7ko.webp",
      "type": "film",
      "componentName": "resistors",
      "id": "r-fi-4.7ko"
    },
    {
      "title": "Film Resistor 10kΩ",
      "description": "RS PRO Carbon Resistor 0.25W ±5%",
      "price": 0.27,
      "rating": 4.8,
      "imageUrl": "/assets/r-fi-10ko.webp",
      "type": "film",
      "componentName": "resistors",
      "id": "r-fi-10ko"
    },
    {
      "title": "Film Resistor 330kΩ",
      "description": "RS PRO Carbon Resistor 0.25W ±5%",
      "price": 0.32,
      "rating": 5,
      "imageUrl": "/assets/r-fi-330ko.webp",
      "type": "film",
      "componentName": "resistors",
      "id": "r-fi-330ko"
    },
    {
      "title": "Film Resistor 100Ω",
      "description": "RS PRO Carbon Resistor 0.25W ±5%",
      "price": 0.08,
      "rating": 4.6,
      "imageUrl": "/assets/r-fi-100o.webp",
      "type": "film",
      "componentName": "resistors",
      "id": "r-fi-100o"
    },
    {
      "title": "Wirewound Adjustable Resistor",
      "description": "RS PRO 1kΩ 5% 180W High Power Wirewound Adjustable Resistor 50ppm/°C 21.6mm",
      "price": 52.82,
      "rating": 4.9,
      "imageUrl": "/assets/r-ad-1ko.webp",
      "type": "adjustable",
      "componentName": "resistors",
      "id": "r-ad-1ko"
    },
    {
      "title": "Wirewound Adjustable Resistor",
      "description": "RS PRO 1Ω 10% 225W Adjustable Wire Wound Resistor 50ppm/°C 21.6mm",
      "price": 29.91,
      "rating": 4.6,
      "imageUrl": "/assets/r-ad-1o.webp",
      "type": "adjustable",
      "componentName": "resistors",
      "id": "r-ad-1o"
    }
   ],

   "var-resistors": [
    {
      "title": "Potentiometer Panel Mount",
      "description": "RS PRO 5kΩ Potentiometer Panel Mount",
      "price": 54.57,
      "rating": 4.5,
      "imageUrl": "/assets/vr-po-5ko.webp",
      "type": "potentiometers",
      "componentName": "var-resistors",
      "id": "vr-po-5ko"
    },
    {
      "title": "Potentiometer Panel Mount",
      "description": "RS PRO 5kΩ Potentiometer Panel Mount",
      "price": 6.14,
      "rating": 4.8,
      "imageUrl": "/assets/vr-po-10ko.webp",
      "type": "potentiometers",
      "componentName": "var-resistors",
      "id": "vr-po-10ko"
    },
    {
      "title": "Potentiometer Panel Mount",
      "description": "RS PRO 1kΩ Rotary Potentiometer 10-Turns 1-Gang Panel Mount",
      "price": 12.41,
      "rating": 4.7,
      "imageUrl": "/assets/vr-po-1ko.webp",
      "type": "potentiometers",
      "componentName": "var-resistors",
      "id": "vr-po-1ko"
    },
    {
      "title": "Potentiometer Knob",
      "description": "RS PRO 16.2mm Black Potentiometer Knob for 6mm Shaft Splined",
      "price": 2.27,
      "rating": 4.7,
      "imageUrl": "/assets/vr-poa-16.2mm.webp",
      "type": "potentiometer-accessories",
      "componentName": "var-resistors",
      "id": "vr-poa-16.2mm"
    },
    {
      "title": "Potentiometer Knob",
      "description": "RS PRO 28.4mm Black Potentiometer Knob for 6.35mm Shaft",
      "price": 3.24,
      "rating": 4.5,
      "imageUrl": "/assets/vr-poa-28.4mm.webp",
      "type": "potentiometer-accessories",
      "componentName": "var-resistors",
      "id": "vr-poa-28.4mm"
    },
    {
      "title": "Mounting Nut",
      "description": "Bourns H-38-11 Mounting Nut",
      "price": 0.29,
      "rating": 5.0,
      "imageUrl": "/assets/vr-poa-1.webp",
      "type": "potentiometer-accessories",
      "componentName": "var-resistors",
      "id": "vr-poa-1"
    },
    {
      "title": "Wirewound Rheostat",
      "description": "Arcol 100Ω Wirewound Rheostat 1.8A, VRH320 100R K",
      "price": 189.03,
      "rating": 4.4,
      "imageUrl": "/assets/vr-rh-100o.webp",
      "type": "rheostats",
      "componentName": "var-resistors",
      "id": "vr-rh-100o"
    },
    {
      "title": "Wirewound Rheostat",
      "description": "Arcol 33Ω Wirewound Rheostat 3.1A, VRH320 33R K",
      "price": 190.24,
      "rating": 4.5,
      "imageUrl": "/assets/vr-rh-33o.webp",
      "type": "rheostats",
      "componentName": "var-resistors",
      "id": "vr-rh-33o"
    },
    {
      "title": "Rheostat",
      "description": "Arcol Ohmite 50W 50Ω Rheostat 1A, RJS50RE",
      "price": 105.05,
      "rating": 4.6,
      "imageUrl": "/assets/vr-rh-50o.webp",
      "type": "rheostats",
      "componentName": "var-resistors",
      "id": "vr-rh-50o"
    },
    {
      "title": "Arcol Ohmite Knob",
      "description": "Arcol Ohmite Knob for G Model, H Model, J Model, K Model, L Model, 5150E",
      "price": 13.33,
      "rating": 4.8,
      "imageUrl": "/assets/vr-rha-1.webp",
      "type": "rheostat-accessories",
      "componentName": "var-resistors",
      "id": "vr-rha-1"
    },
    {
      "title": "Vishay Dial",
      "description": "Vishay Dial for RT25 Potentiometer, ACCRFCADRANCG57",
      "price": 47.37,
      "rating": 4.9,
      "imageUrl": "/assets/vr-rha-2.webp",
      "type": "rheostat-accessories",
      "componentName": "var-resistors",
      "id": "vr-rha-2"
    },
    {
      "title": "Vishay Dial",
      "description": "Vishay Dial for RT12 Potentiometer, ACCRFCADRANCG45",
      "price": 44.36,
      "rating": 4.5,
      "imageUrl": "/assets/vr-rha-3.webp",
      "type": "rheostat-accessories",
      "componentName": "var-resistors",
      "id": "vr-rha-3"
    },
    {
      "title": "Trimmer Potentiometer",
      "description": "10kΩ, gh Hole Trimmer Potentiometer 0.5W Top Adjust Bourns, 3296",
      "price": 2.03,
      "rating": 4.6,
      "imageUrl": "/assets/vr-tr-10ko.webp",
      "type": "trimmers",
      "componentName": "var-resistors",
      "id": "vr-tr-10ko"
    },
    {
      "title": "Trimmer Potentiometer",
      "description": "5kΩ, gh Hole Trimmer Potentiometer 0.5W Top Adjust Bourns, 3296",
      "price": 1.96,
      "rating": 4.5,
      "imageUrl": "/assets/vr-tr-5ko.webp",
      "type": "trimmers",
      "componentName": "var-resistors",
      "id": "vr-tr-5ko"
    },
    {
      "title": "Trimmer Potentiometer",
      "description": "100kΩ, gh Hole Trimmer Potentiometer 0.5W Top Adjust Bourns, 3296",
      "price": 1.9,
      "rating": 4.6,
      "imageUrl": "/assets/vr-tr-100ko.webp",
      "type": "trimmers",
      "componentName": "var-resistors",
      "id": "vr-tr-100ko"
    },
    {
      "title": "Adjustment Tool",
      "description": "Vishay Trimmer Adjustment Tool 127mm",
      "price": 7.39,
      "rating": 4.9,
      "imageUrl": "/assets/vr-tra-1.webp",
      "type": "trimmer-accessories",
      "componentName": "var-resistors",
      "id": "vr-tra-1"
    },
    {
      "title": "Panel Mount Adapter",
      "description": "Bourns Panel Mount Adapter 29.7mm, For Use With Potentiometer",
      "price": 2.18,
      "rating": 4.7,
      "imageUrl": "/assets/vr-tra-29.7mm.webp",
      "type": "trimmer-accessories",
      "componentName": "var-resistors",
      "id": "vr-tra-29.7mm"
    },
    {
      "title": "Panel Mount Adapter",
      "description": "Vishay Panel Mount Adapter 32mm, For Use With Potentiometer",
      "price": 12.69,
      "rating": 4.8,
      "imageUrl": "/assets/vr-tra-32mm.webp",
      "type": "trimmer-accessories",
      "componentName": "var-resistors",
      "id": "vr-tra-32mm"
    }
   ],

   "inductors": [
    {
      "title": "Leaded Inductor 1A",
      "description": "RS PRO 100 μH ±15% Leaded Inductor, 1A Idc, 0.044Ω Rdc",
      "price": 3.6,
      "rating": 4.5,
      "imageUrl": "/assets/i-le-1a.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-1a"
    },
    {
      "title": "Ferrite Leaded Inductor",
      "description": "RS PRO 100 μH Ferrite Leaded Inductor, 550mA Idc, 0.67Ω Rdc",
      "price": 2.34,
      "rating": 4.8,
      "imageUrl": "/assets/i-le-550ma.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-550ma"
    },
    {
      "title": "Power Inductor",
      "description": "RS PRO 100 μH ±15% Power Inductor, 10A Idc, 0.044Ω Rdc",
      "price": 4.35,
      "rating": 4.6,
      "imageUrl": "/assets/i-le-10a.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-10a"
    },
    {
      "title": "Leaded Inductor",
      "description": "RS PRO 68 μH ±15% Leaded Inductor, 5A Idc, 0.055Ω Rdc",
      "price": 1.04,
      "rating": 4.2,
      "imageUrl": "/assets/i-le-5a.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-5a"
    },
    {
      "title": "Power Inductor",
      "description": "RS PRO 470 μH ±15% Power Inductor, 3A Idc, 0.187Ω Rdc",
      "price": 2.39,
      "rating": 4.3,
      "imageUrl": "/assets/i-le-3a.webp",
      "optionName": "inductiance",
      "options": [
       "33μH",
       "47μH",
       "100μH",
        "470μH"
      ],
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-3a"
    },
    {
      "title": "Power Inductor",
      "description": "RS PRO 47 μH ±15% Power Inductor, 7.5A Idc, 0.026Ω Rdc",
      "price": 1.65,
      "rating": 4.7,
      "imageUrl": "/assets/i-le-7.5a.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-7.5a"
    },
    {
      "title": "Leaded Inductor",
      "description": "RS PRO 100 μH ±15% Leaded Inductor, 2A Idc, 0.109Ω Rdc",
      "price": 0.76,
      "rating": 4.4,
      "imageUrl": "/assets/i-le-2a.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-2a"
    },
    {
      "title": "Leaded Inductor",
      "description": "RS PRO 100 μH ±15% Leaded Inductor, 500mA Idc, 0.14Ω Rdc",
      "price": 6.78,
      "rating": 4.5,
      "imageUrl": "/assets/i-le-500ma.webp",
      "type": "leaded",
      "componentName": "inductors",
      "id": "i-le-500ma"
    },
    {
      "title": "Surface Mount Inductor",
      "description": "RS PRO, 53 Shielded Wire-wound SMD Inductor 10 μH ±20% Wire-Wound 1.3A Idc",
      "price": 0.49,
      "rating": 4.7,
      "imageUrl": "/assets/i-sm-1.3a.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-1.3a"
    },
    {
      "title": "Shielded Wire-wound",
      "description": "RS PRO, 27 Shielded Wire-wound SMD Inductor 33 μH ±20% Wire-Wound 3A Idc",
      "price": 0.53,
      "rating": 4.3,
      "imageUrl": "/assets/i-sm-3a.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-3a"
    },
    {
      "title": "SMD Inductor",
      "description": "RS PRO, 29 Shielded Wire-wound SMD Inductor 47 μH Shielded 3.45A Idc",
      "price": 1.05,
      "rating": 4.7,
      "imageUrl": "/assets/i-sm-3.45a.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-3.45a"
    },
    {
      "title": "Wire-wound SMD",
      "description": "RS PRO, 43 Shielded Wire-wound SMD Inductor 2.2 μH ±20% Wire-Wound 2.04A Idc",
      "price": 0.23,
      "rating": 4.8,
      "imageUrl": "/assets/i-sm-2.04a.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-2.04a"
    },
    {
      "title": "Inductor with a Ceramic Core",
      "description": "RS PRO, 0402 (1005M) Wire-wound SMD Inductor with a Ceramic Core, 1 nH ±0.1nH Wire-Wound 700mA Idc Q:13",
      "price": 0.03,
      "rating": 4.9,
      "imageUrl": "/assets/i-sm-700ma.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-700ma"
    },
    {
      "title": "Inductor with a Ceramic Core",
      "description": "RS PRO, 0805 (2012M) Wire-wound SMD Inductor with a Ceramic Core, 68 nH ±5% Wire-Wound 500mA Idc Q:60",
      "price": 0.07,
      "rating": 5.0,
      "imageUrl": "/assets/i-sm-500ma.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-500ma"
    },
    {
      "title": "SMD Inductor",
      "description": "RS PRO Shielded Wire-wound SMD Inductor with a Ferrite Core, 22 μH ±20% Moulded 9.5A Idc",
      "price": 2.33,
      "rating": 4.4,
      "imageUrl": "/assets/i-sm-9.5a.webp",
      "type": "surface",
      "componentName": "inductors",
      "id": "i-sm-9s.5a"
    },
    {
      "title": "Coupled inductor",
      "description": "Bourns Dual Coupled Inductor Ferrite Core, 100 μH",
      "price": 0.86,
      "rating": 4.4,
      "imageUrl": "/assets/i-co-100uh.webp",
      "type": "coupled",
      "componentName": "inductors",
      "id": "i-co-100uh"
    },
    {
      "title": "Coupled ferrite inductor",
      "description": "Wurth Elektronik Dual Coupled Inductor Ferrite Core, 220 μH",
      "price": 2.51,
      "rating": 4.7,
      "imageUrl": "/assets/i-co-220uh.webp",
      "type": "coupled",
      "componentName": "inductors",
      "id": "i-co-220uh"
    },
    {
      "title": "Inductor Composite Iron",
      "description": "BWurth Elektronik Dual Coupled Inductor Composite Iron Powder Core, 2.2 μH",
      "price": 5.85,
      "rating": 4.5,
      "imageUrl": "/assets/i-co-2.2uh.webp",
      "type": "coupled",
      "componentName": "inductors",
      "id": "i-co-2.2uh"
    },
    {
      "title": "Dual Coupled Inductor",
      "description": "Bourns Dual Coupled Inductor Ferrite Core, 10 μH",
      "price": 0.48,
      "rating": 4.8,
      "imageUrl": "/assets/i-co-10uh.webp",
      "type": "coupled",
      "componentName": "inductors",
      "id": "i-co-10uh"
    },
    {
      "title": "Shielded Coupled Inductor",
      "description": "Vishay Shielded Coupled Inductor, 22 μH",
      "price": 2.72,
      "rating": 4.5,
      "imageUrl": "/assets/i-co-22uh.webp",
      "type": "coupled",
      "componentName": "inductors",
      "id": "i-co-22uh"
    }
   ]
  }
`;

export default database;
