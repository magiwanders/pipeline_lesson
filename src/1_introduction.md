# Introduction

Welcome to "Introduction to Pipelining": an experimental simulation-tool-assisted lesson to introduce the user to the basics of parallel execution and pipelining. 

<iframe width="100%" height="500" src="https://www.youtube.com/embed/XLqdMohMtv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Who is this lesson for

"Introduction to Pipelining" caters to undergraduate computer science students that have an understanding of the basics of computer science and computer architecture and want to take one step closer towards understanding how the modern processors are designed and built. 

## Scope

The goals of the lesson are: 
 - Introducing the user to the most rudimentary form of hardware level technique for parallel execution.
 - Presenting two software tools for simulating simple RISC-V processors at multiple abstraction layers.
 - Letting the user exercise the acquisition of knowledge and evaluate the lesson itself.

The highest goal of the lesson is to make the user understand that they can get their hands dirty, play and experiment with bits, clocks and instructions thanks to the simulators being presented, and maybe also have fun while cementing their knowledge.

## Assumptions and Prerequisites

The lesson assumes that: 
 - You have worked before with simple logic circuits and ports.
 - You are comfortable with basic RISC-V assembly programming and its binary and hex representations.
 - You know what the main components of a simple processor are and how assembly runs on them.

If at any moment you need to review any of these concepts, we have left some resources in the Appendix, expecially:
 - A RISC-V Instruction Set Cheat Sheet [HERE](5.1_rv21imac.md)
 - Interactive models of the most important components of a processor [HERE](./5.2_components_review.md). Use these models if at any point during the lesson you feel the need to see how one of the components works as isolate. For example if you want to see what is happening inside the ALU at a specific time of a Ripes program simulation, just copy in the interactive ALU model found in the appendix the values that you see in Ripes and inspect the ALU from there.

## Setup 

The lesson will use two simulation software, that is recommended that you verify are working for you before the lesson:
 - S.H.E.A.S., a simple logic ports simulator also available [standalone](https://sheas.magiwanders.com). It will however be mostly embedded in the lesson pages. A tutorial is available in the appendices [HERE](./5.3.1_sheas.md)
 - Ripes, a visual RISC-V processor simulator. The appendices contain [HERE](./5.3.2_ripes.md) a virtual machine, to be sure it will work on any system, and a tutorial of the program.
 
## Overview 

The lesson will consist of videos, interactive visualization tools, and sometimes exercises. Expect to dedicate two to four hours for completing the lesson, depending on your own pace (you could take even less). We will ask you to compile two forms:
 - An [Answers Form](https://forms.office.com/r/PVqkuE9WS2), in which we ask you to submit the answers to the various questions and exercises found along the lesson. Open it now and keep it open in another tab for easier access during the lesson.
 - A [Final Evaluation Form](https://forms.office.com/r/eWebw6D5uT), which you will also find in the [Assignments Section](./4.3_assignments.md) in embedded form for easier access. This has to be compiled after you have finished the lesson and the assignments.

What follows is an overview of the next chapters.

 - [Chapter 2 - Timing](./2_timing.md): this chapter will deal with the problem of propagation delay. We will see how gates calculating their input in a non negligible amount of time impacts the single cycle processor and we are going to construct an intuitive idea of the solution, the new processor paradigm called pipeline, by analogy. 

 - [Chapter 3 - Building the Pipeline](./3_building_the_pipeline.md): in this chapter we will build the new processor paradigm lego-like, starting from the components of the single cycle processor. We will also see how each instruction activates each of the stages of the pipeline and understand the main advantages of the pipelined processor.

 - [Chapter 4 - Demos](./4_demos.md): this chapter will finally cover the execution on the pipelined processor of a couple of programs from start to finish. We will encounter the problems that the pipeline introduced and that were not of concern before, and develop an intuition on how to resolve them. At the end of this chapter you will find the [EVALUATION FORM]() embedded below the assignments.

 - [Appendix](./5_appendix.md): as said above, this contains some corollary material for the lesson, among which is the setup and tutorials for the two software tools we are going to use, a reference of the RISC-V Instruction Set and a catalogue of interactive processor components.

<!-- ## Pre-Test

Please compile this form before continuing to the lesson. It should take no more than 10 minutes.

<iframe width="100%" height="500px" src="https://forms.office.com/r/twdkh8b2Cj?embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe> -->

## Transcript

In this lesson we are going to modify the hardware of a single cycle processor, building a new computer architecture paradigm, that allows more instructions to be processed in the same amount of time, without loss of functionality.

With the support of two hardware simulation tools, we will start with simple logic ports and their propagation delay, and we will study their consequences on the single cycle processor; then we will proceed to build a new execution paradigm called the pipeline, and, with the help of a complete RISC five Reference, run programs on it. 

Before beginning the lesson, make sure you read the goals, prerequisites and overview written below.