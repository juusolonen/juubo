# juubo ergonomic split keyboard

**This is still a work in progress, i.e. waiting for first assembly & firmware**

juubo keyboard is designed with [Ergogen](https://ergogen.cache.works/) following FlatFootFox's great guide found [here](https://flatfootfox.com/ergogen-introduction/).

It is a 36-key split keyboard, with rotary encoders on both side. The initial setup will be wired with ProMicro RP2040 controllers, running with QMK. The pcb is designed so it can be made wireless with Nice!Nano controller and ZMK firmware. 

**The files in /external-3d-models are not my own creation. They are just added to this repo just to keep all things in the same place**


## Bill of materials


#### Both versions
| Item | Count | Note/Model |
| ----------- | ----------- | ----------- |
| Promicro rp2040  | 2 | wireless: [Nice!Nano](https://nicekeyboards.com/nice-nano) x2, firmware not done yet|
| Reset button | 2 |SKQGABE010 |
| Resistors | 2 | ERJ-2RKF4701X Note: only for other side, wired only |
| TRRS jack | 2 | PJ-320A |
| Socket for MCU | 2 | 315-43-112-41-003000 Note: optional |
| Header for MCU | 2 | EBBL-112-T-E Note: optional |
| Diodes | 36 | 1N4148W |
| Kailh MX hotswap sockets | 36 |  |
| MX switches | 36 |  |
| MX compatible keycaps | 36 | Note: Couple of 3d-models for printing available |
| TRRS cable | 1 | Note: wired only |
| EC11 rotary encoder | 2 | E.g. EC11E18244A5 |
| M2x4x3 kurled insert nuts  | 12 | Optional: Needed for the printable case |
| M2 laptop style screws  | 12 | Optional: Needed for the printable case |


#### Wireless additions

| Item | Count | Note/Model |
| ----------- | ----------- | ----------- |
| Power switch  | 2 | SLW-66527511-SMT-TR|
| JST connector | 2 |S2B-PH-K-S |
| Battery | 2 | Rechargeable li-ion e.g. 301230 (This should fit under the MCU) |



![alt text](qmk.svg)