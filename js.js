chip = {
    devices: {},
    connectors: [],
    subcircuits: {}
}

chip.devices['dev1'] = { 
    type: "Button", 
    label: "in",
    net: "in",
    order: 0, 
    bits: 1,
    position: {
        x:0,
        y:0
    }
    }

// create the simulation object
const circuit = new digitaljs.Circuit(chip);
// display on #paper
const paper = circuit.displayOn($('#paper'));
// activate real-time simulation
circuit.start();
