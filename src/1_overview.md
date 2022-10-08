# Overview and Prerequisites

<iframe width="100%" height="500" src="https://www.youtube.com/embed/kLswTs3N_Kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pre-Test

Please compile this form before continuing to the lesson. It should take no more than 10 minutes.

<iframe width="100%" height="500px" src="https://forms.office.com/r/twdkh8b2Cj?embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

## Navigation

This lesson can be navigated with the menu on the left (first icon on the top left) or even only with the ```Arrow Right``` e ```Arrow Left``` keys.

This site uses no server side cookies. Local storage is used, but only not to lose the user input to the site's widgets at every page refresh.

After watching the overview video and compiling the pre-test, click ```Arrow Right```, or choose from the menu on the left.

## Transcript

In this lesson we are going modify the hardware of a single cycle processor, building a new computer architecture paradigm that allows more instructions to be processed in the same amount of time, without loss of functionality.

In order to understand the lesson, you should have just studied a single cycle processor design, and have a strong grasp of the functioning of each of its components. We are going to start from such a design to handcraft the new hardware organization. Similarly you should have a base knowledge of the RISC 5 RV 32 I Instruction Set, since its characteristics and nuances are reflected in the architecture, and we are going to use assembly examples and case studies.

This also implies that you are comfortable with hex and 2's complement calculations and conversions, as well as with register aliases (RISC 5 ABI names).

The lesson contains the tools you need to review all this material and keep it at hand. In particular, at the end of the lesson there is a link to some RISC 5 cheat sheets, that contains all the info you might need on the instruction set and on the ABI register names. The following section contains some exercises on encoding and decoding, together with hex and 2's complement calculations and conversions. Finally, the last part of the prerequisites sections, contains some interactive models, of some of the most important components of the processor. Later in the lesson we will use a visual processor simulator, and you will be asked to do exercises on it. If you have any doubts and need a level of granularity greater than what it offers, use these interactive models to review your knowledge.