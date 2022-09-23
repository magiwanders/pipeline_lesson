// chip = {
//     devices: {},
//     connectors: [],
//     subcircuits: {}
// }

// chip.devices['dev1'] = { 
//     type: "Button", 
//     label: "in_1",
//     net: "in_1",
//     order: 0, 
//     bits: 1,
//     position: {
//         x:0,
//         y:0
//     }
//     }

// chip.devices['dev2'] = { 
//     type: "Button", 
//     label: "in_2",
//     net: "in_2",
//     order: 0, 
//     bits: 1,
//     position: {
//         x:0,
//         y:0
//     }
//     }

//     style="width: 100%; height: 500px;"

// // create the simulation object
// const circuit = new digitaljs.Circuit(chip);
// // display on #paper
// const paper = circuit.displayOn($('#paper'));
// // activate real-time simulation
// circuit.start();
console.log('Boot...')
BuildSHEAS(document.getElementById('sheas_container')) 