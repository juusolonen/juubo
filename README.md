# juubo ergonomic split keyboard


juubo keyboard is designed with [Ergogen](https://ergogen.cache.works/) following FlatFootFox's great guide found [here](https://flatfootfox.com/ergogen-introduction/).


## Contents

### V1

![alt text](juubov1.jpeg "Semi-retired V1")
*Semi-retired V1*

V1 is a 36-key wired split keyboard, with rotary encoders on both side. It is wired with ProMicro RP2040 controllers, running with QMK. The pcb is designed so it can be made wireless with Nice!Nano controller and ZMK firmware (Firmware not provided, but V2 firmware can probably be modified eventually for V1 also). 

> `qmk` directory in this repo contains needed files to get the qmk firmware running. Note that the rotary encoders are not perfect so they might need some tweaking.
> Also note that the default keymap is a Colemak-DH with a Finnish hint.

### V2

![alt text](juubov2_case.jpeg "Case V2")
*3D printed case for the upcoming V2*

V2 is a 40-key wireless split keyboard and it does not have the rotary encoders anymore. Designer for Nice!Nano controller. Firmware will be built with ZMK eventually.

### ergogen

This directory contains the ergogen files used for V1. The mountinghole.js footprint is also used in V2, though.

**The files in /external-3d-models are not my own creation. They are just added to this repo just to keep all things in the same place**


## Bill of materials


#### Both versions
| Item | Count | Note/Model |
| ----------- | ----------- | ----------- |
| Reset button | 2 |SKQGABE010 |
| Socket for MCU | 2 | 315-43-112-41-003000 Note: optional |
| Header for MCU | 2 | EBBL-112-T-E Note: optional |
| Diodes | 36/40 | 1N4148W |
| Kailh MX hotswap sockets | 36/40 |  |
| MX switches | 36/40 |  |
| MX compatible keycaps | 36/40 | Note: Couple of 3d-models for printing available |
| M2x4x3 kurled insert nuts  | 12/18 | Optional: Needed for the printable case |
| M2 laptop style screws  | 12/18 | Optional: Needed for the printable case |


### V1 only

| Item | Count | Note/Model |
| ----------- | ----------- | ----------- |
| Promicro rp2040  | 2 | |
| Resistors | 2 | ERJ-2RKF4701X Note: only for other side |
| TRRS jack | 2 | PJ-320A |
| TRRS cable | 1 |  |
| EC11 rotary encoder | 2 | E.g. EC11E18244A5 |

#### V2 only

| Item | Count | Note/Model |
| ----------- | ----------- | ----------- |
| Nice!Nano  | 2 |  |
| Power switch  | 2 | SLW-66527511-SMT-TR|
| JST connector | 2 |S2B-PH-K-S |
| Battery | 2 | Rechargeable li-ion e.g. 301230 (This should fit under the MCU) |



![alt text](qmk.svg)