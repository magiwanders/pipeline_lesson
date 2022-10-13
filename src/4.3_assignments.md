# Assignments

**Please write your report on a document, to then submit as PDF in the form below. Feel free to add images, if it helps to explain something more concisely.**

1. Simulate the program below in a similar way to the previous lesson. Write a small report (~1 page) in which you describe what execution error you found and how you recognized it, together with what the consequence on the execution of the whole program is. Comment what the assembly does before simulating it and specify any signal that you reckon holds the wrong value and specify why it should hold the value you think is correct. Try to describe what is similar and what differs with the execution error found in the program of the previous lesson. Finally, describe how this error could be solved by using stalls or forwarding values between stages. Do not be afraid to speculate or get this last point wrong, the topic of the next lesson will be exactly this.
- Ripes Processor: ```5-stage processor (w/o forwarding or hazard detection) Extended```
- Registers to Initialize:
    - ```t1 = 0x123```
    - ```a0 = 0x00000fff```

- Program:
```assembly
LOOP:
    add t1 t1 t1 # a2 = t1+t1
    bgt t1 a0 20 #jumpif t1>a0
    add a1 t1 t1 # a1 = t1+t1
    sub a2 t1 t1 # a2 = t1-t1
    j LOOP
```

2. [Optional "game" to do in couples. Although very suggested, as it is an effective way to prepare to one of the course's exam exercise types.] Without the second person knowing, the first person chooses a program among the ones below, or writes a simple assembly program of his own. With the help of Ripes, he/she studies the program and if necessary comes up with a proper register initialization scheme to make it do something interesting. Then, the roles of the "game" are chosen: the first person chooses a stage of the pipeline to play as, and communicates it to the second person, while the second person, who cannot use the simulator (nor knows what program was chosen), plays as one adjecent stage. For example if the first person chooses to play as EX stage, the second can choose to play either as the MEM stage or as the ID stage. Mind that playing as the previous stage is always a bit more difficult than playing as the following stage. The first person chooses a random cycle of the execution of the program, which he/she can keep on Ripes as reference, and the objective of the second person is to find out the exact cycle number the first person chose: the way the second person finds out is by asking the first person to tell the value of some signal. Not any signal, just the signals that the two stages have in common: for example if the second person is playing as the ID stage and the first as EX stage, the second person cannot ask "What is the result of the alu?" or "Is the branch taken.", because those signals have nothing to do with the ID stage, but he/she can ask "What is the value of the first source register in the EX stage?" or "Is the alu selecting the PC or the first register as first operand?" or again "What is the ALU function?" as those are signals that the ID stage calculated in the previous clock and passed to the EX stage. If the second person is playing as the MEM stage (and the first always as EX), he/she can ask "What is the alu result?" as it will receive it in the next cycle, but not "Is the branch taken?" because that signal will never be "viewed" by the MEM stage. When the second person feels he/she understood which cycle the simulation is at, a guess is made. A correct guess is a win for the second player, a wrong guess is a win for the first. If the players wish, they can setup a system of points: the second players gets more points if he/she uses less questions to make a right guess, and makes the first player gain more points if the guess is wrong after many questions. For example starting from 10, if the guess is right the second player gets 10 minus number of questions asked points. If the guess is wrong the first player gets the number of questions asked points. 

In order to increase the game difficulty, the two players can play as non-consecutive stages.

## Examples of programs from the internet

```assembly
addi x2, x0, 1

loop:
  sub x1, x1, x2
  sw  x1, 4(x0)
  blt x0, x1, loop
```

```assembly
 addi x5,x0,0x11        # set x5 to 0x11
  sw x5, 0x100(x0)       # store at address 0x100
  lw x6, 0x100(x0)       # get from mem
  addi x6,x6,1          
  sw x6, 0x104(x0)       # store to mem 0x104
```

```assembly
   addi x3,x0,0    # i = 0
   addi x4,x0,10   # const 10
loop:
   bge  x3,x4, exit
   addi x3,x3,1
   j loop
exit:
```

```assembly
  addi x3,x0,0       #  s = 0
  addi x4,x0,0       #  i = 0
  addi x5,x0,5       #  const 5
  addi x6,x0,0x100   #  base address of ax[]
  addi x8,x0,0       #  offset = 0
loop:
  bge x4, x5, exit
  add x7, x6, x8    # compute effective address
  lw  x9, 0(x7)     # get ax[i]
  add x3, x3, x9    # s = s + ax[i]
  addi x8, x8, 4    # next element
  addi x4, x4, 1    # increment index
  j loop
exit:
```

<!-- ## Answers Form

Please upload here the answers to the questions you have encountered during the lesson:

<iframe width="100%" height="500px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=K3EXCvNtXUKAjjCd8ope62KdyETcpsdCkuMPv8Z87j1UOFFGWUJGVjg5VkJEMjdaNldENlVIMU05VC4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe> -->

## Post-Test

Please compile this form after having finished the lesson and its assignments ( remember to submit your answers in the [Answers Form](https://forms.office.com/r/PVqkuE9WS2)):

<iframe width="100%" height="500px" src="https://forms.office.com/r/eWebw6D5uT?embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

## YOU HAVE REACHED THE END OF THE LESSON. THANK YOU FOR YOUR TIME :)