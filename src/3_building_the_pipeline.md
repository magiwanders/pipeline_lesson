# Building the Pipelined Processor

We are now going to build the pipeline, but we are going to use another simulation program: Ripes. Below you'll find a guide to download it and use it.

## Ripes Setup

### Virtual Machine Setup

- Download the virtual machine containing Ripes [HERE](https://drive.google.com/uc?export=download&id=1MIDXYVtsaYKxCYUdW-lFQ8cbkSl-Truh) (the file ```comparch.ova``` is relatively big at ~2.7GB)
- Download and install <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">VirtualBox</a> for your system.
- Open VirtualBox and import the file ```comparch.ova```:
    - ```File > Import Appliance```
    - Select the file ```comparch.ova```
    - Click ```Next```, click ```Import```
    - A new Virtual Machine should appear in the main window. Double click for booting it up.

### Important Info on the Virtual Machine
The information that follows is not directly useful for the lesson but might be needed when operating the virtual machine:

**Some Ripes sub-windows, like the Pipeline Diagram one, DO NOT have the 'x' button to close them. Use the 'Esc' key.**

- The virtual machine only shows the ```Ripes``` program, which opens at startup. It will be needed in the second part of the lesson.
- Verify that the copy and paste functionality works between the host and the guest (it is simply easier to copy programs from this site to within ```Ripes```).
- Login credentials: 
    - user: ```student```
    - psw : ```student```
- System: ```Manjaro Linux i3 minimal updated september 2022```. Any modification or update is strongly advised against to preserve functionality.
- How to open a terminal:
    - ```Alt+2``` 
    - ```Alt+Enter```
    - The terminal is a standard linux terminal. If one desires to modify the i3 configuration, one has to modify the file ```~/.config/i3/config``` for example with the ```nano``` editor:
        - ```sudo nano ~/.config/i3/config```
- To return to Ripes in any moment:
    - ```Alt+1```
- If for any reason ```Ripes``` closes, reboot the virtual machine.

## Ripes Tutorial

<iframe width="854" height="480" src="https://www.youtube.com/embed/fYGnEghKAKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## TRANSCRIPT

This tutorial is an unofficial Introduction to Ripes two point two point three.

RIPES is a graphical processor simulator and assembly code editor for educational purposes. It was written by Morten Petersen. The program itself is theoretically architecture agnostic, but we can see in the processor selector that it currently only offers RISC-V single stage, pipelined and dual issue processors. Each processor has an extended layout for more visualization detail and settings for extensions or register initialization.

Onto the prorgam itself, the EDITOR TAB contains the tools to program in assembly. Programs are loaded via File>Load Program. It is currently biased towards RV32I (and depending on the processor M/C) assembly. On the left hand side actual assembly can be written (or C if you link a RISC-V compiler in the settings). On the right hand side is the machine code in hex, disassembled or binary form.

The execution of a program can be controlled either step by step (forwards and also backwards in time), or setting a clock time and then pressing play. The execution can be reset or played without updating the ui for faster execution. If executing on a pipelined processor, on the right hand side of the editor tab it is displayed what stage the instruction is currently in.

The PROCESSOR TAB contains the hardware visualizations. The visualization itself is very intuitive: wires' can be highlighted for reading their path better and their value can be accessed by hovering (and can have any radix) (if they are 1 bit wide they are colored green when value is 1 and grey when value is 0, if they are multibit, they just flash yellow if updated at a given clock and remain grey if not updated). The selected option of muxes is colored green and a similar visualization is used for useful indicators, like branch taken. The other components tend to be self explanatory, by naming I/O explicitly.  CTRL+Scroll  is for zooming. On the right the register file is displayed. Values can be edited manually. Pipelined processors show the currently processed instruction above each stage. 

The layout can be changed if needed. Just unlock it from outside the visualization square, and modify at your wish. At any point you can save the layout as json file by right clicking on the visualization square. Saved layouts can be loaded back only when layout is unlocked by right clicking on the visualization square. 

On the bottom right is the instruction memory which for each instruction offers the possibility to insert breakpoints, other than again giving information about address and current stage. Here some statistics are given: Number of cycles, retired instructions, CPI, IPC, clock rate. Here is the console that prints ecall print functions. Finally, the table button brings up the pipeline diagram at the current cycle.

The visualization is easier on the eyes in view > dark mode and all values can be shown or hidden under view > show processor signal values.

Under the MEMORY tab the whole Data Memory can be accessed, either by scrolling or with the goto options below. 

Cache and I/O tabs are used for, well, studying cache and Input/Output but the detail for those is for another video. 

All of the processor designs can be modified in the source, for example for modifying the hazard unit of the 5 stage pipelined 32 bit processor one can modify the src/processors/RISC-V/rv5s/rv5s_hazardunit.h. The hardware description language is VSRTL, a domain specific language embedded in C++ by the same author. After modifying, Ripes has to be re-compiled. See instructions in the github repositories, links in the description.

If you are not familiar with the pipeline feel free to skip the rest of the video and come back if you need :)

Taking as reference the visualization of a pipelined single issue processor design, the student can use three overlapping but different ”perspectives of focus” when studying and playing with RIPES: 
The stage view, or vertical view, focuses on checking if a given stage is modified by different kinds of instructions according to the students expectations: for the simplest example let us consider the IF stage. We expect thes hexes out of the instruction memory, and we can verify it when the corresponding instructions pass in in the IF stage. For the ID stage, we expect for example the add instruction to enable the write back flag and the store not to. We can again verify. For the EX stage and the add instruction, we expect the first input of the alu to be the content of the register 1, and we can verify it again. This was the stage or vertical view. 
The instruction view, or cross view, focuses on following the instruction along the pipeline to understand its impact. This is the same thing as the previous focus, just under another perspective. For example the student has to notice that in whatever stage the instruction is in, it "drags"' with it the values it needs as they were when the instruction was in the stage in which they were created. For example the PC here is the current value, here is the previous, which was current when this instruction was in IF stage et cetera. This was the instruction or cross view.
The pipeline view, or horizontal/global view, focuses on the evolution and global impact of signals within the pipeline: this is a combination of the previous two focuses. For example in the ID stage, the Write Register flag is produced here on the control unit and used here on the Register file, but there isn't any direct connection: it has to go all the way through the EX, MEM, and WB stages and come back to the ID stage, because it has to wait for the write data, that you see also coming from the WB stage, to be retrieved in the MEM stage in case of a load, or to be calculated in the EX stage in case of many other instructions. In each following stage the value of the write register flag is the that produced by the Control unit when the corresponding instruction was in the ID stage, so the value currently being used by the register file in the ID stage, which comes looping back from the WB stage, corresponds not to the one being produced by the instruction currently in the ID stage but to the one being produced by the instruction currently in the WB stage. So the instruction currently in WB is writing back to the register file only now, even if topologically the register file is in the ID stage and even if that same instruction already passed through it three cycles ago. The write register flag was ready then, but the data to write was not. So, the write register file had to be "dragged" along until the stage in which the actual write back was going to happen. This was the pipeline or horizontal or global focus. 

That is all, thank you.

