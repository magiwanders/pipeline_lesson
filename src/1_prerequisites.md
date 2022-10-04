# Prerequisites

video

## Transcript

In this lesson we are going to study how to modify the hardware of a single cycle processor to make it effectively run faster: a new computer architecture paradigm that allows more instructions to be processed in the same amount of time without loss of functionality.

In order to understand the lesson, you should have just studied a single cycle processor design and have a strong grasp of the functioning of each of its components, because we are going to start from such a design to handcraft the new hardware organization. Similarly you should have a base knowledge of the RISC-V RV32I Instruction Set, since its characteristics and nuances are reflected in the architecture, and we are going to use assembly examples and case studies.

This also implies that you are comfortable with hex and 2's complement calculations and register aliases (RISC-V ABI names).

The lesson contains the tools you need to review all this material and keep it at hand. In particular, at the end of the lesson there is a link to some RISC-V cheat sheets that contains all the info you might need on the instruction set and on the ABI register names. The following section contains some exercises on encoding and decoding, together with hex and 2's complement calculations and conversions. Finally, the last part of the prerequisites sections contains some interactive models of some of the most important components of the single cycle processor. Later in the lesson we will use a visual processor simulator and you will be asked to do exercises on it. If you have any doubts and need a level of granularity greater than what it offers, use these interactive models.