function _standoffRight_extrude_5_outline_fn(){
    return CAG.circle({"center":[319.075,-85.475],"radius":2.5})
.union(
    CAG.circle({"center":[278.9299884,-139.8551139],"radius":2.5})
).union(
    CAG.circle({"center":[301.1902283,-120.4810859],"radius":2.5})
).union(
    CAG.circle({"center":[376.225,-86.665],"radius":2.5})
).union(
    CAG.circle({"center":[319.075,-62.615],"radius":2.5})
).union(
    CAG.circle({"center":[376.225,-67.615],"radius":2.5})
).extrude({ offset: [0, 0, 5] });
}


function _mountingRight_extrude_5_outline_fn(){
    return CAG.circle({"center":[319.075,-85.475],"radius":1.4})
.union(
    CAG.circle({"center":[278.9299884,-139.8551139],"radius":1.4})
).union(
    CAG.circle({"center":[301.1902283,-120.4810859],"radius":1.4})
).union(
    CAG.circle({"center":[376.225,-86.665],"radius":1.4})
).union(
    CAG.circle({"center":[319.075,-62.615],"radius":1.4})
).union(
    CAG.circle({"center":[376.225,-67.615],"radius":1.4})
).extrude({ offset: [0, 0, 5] });
}


function xlBoardRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[398.275,-108.525574],[398.275,-52.4606148]]).appendArc([395.2904736,-48.5916597],{"radius":4,"clockwise":false,"large":false}).appendPoint([379.3918143,-44.4187833]).appendArc([379.0550375,-44.3457375],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.7311336,-39.4691933]).appendArc([349.574576,-39.4398406],{"radius":4,"clockwise":false,"large":false}).appendPoint([270.5108352,-48.9533404]).appendArc([266.9887846,-52.9513327],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.4524803,-122.5765677]).appendArc([266.3606227,-125.3496994],{"radius":4,"clockwise":true,"large":false}).appendPoint([249.5237354,-143.1770069]).appendArc([249.7912615,-148.9280986],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5409307,-168.0423314]).appendArc([276.3549456,-168.3957012],{"radius":4,"clockwise":false,"large":false}).appendPoint([330.9097481,-133.0844185]).appendArc([332.6189885,-128.7649799],{"radius":4,"clockwise":false,"large":false}).appendPoint([329.8284145,-117.4957365]).appendArc([333.7105683,-112.5342665],{"radius":4,"clockwise":true,"large":false}).appendPoint([394.275574,-112.525574]).appendArc([398.275,-108.525574],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoardRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[398.275,-108.525574],[398.275,-52.4606148]]).appendArc([395.2904736,-48.5916597],{"radius":4,"clockwise":false,"large":false}).appendPoint([379.3918143,-44.4187833]).appendArc([379.0550375,-44.3457375],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.7311336,-39.4691933]).appendArc([349.574576,-39.4398406],{"radius":4,"clockwise":false,"large":false}).appendPoint([270.5108352,-48.9533404]).appendArc([266.9887846,-52.9513327],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.4524803,-122.5765677]).appendArc([266.3606227,-125.3496994],{"radius":4,"clockwise":true,"large":false}).appendPoint([249.5237354,-143.1770069]).appendArc([249.7912615,-148.9280986],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5409307,-168.0423314]).appendArc([276.3549456,-168.3957012],{"radius":4,"clockwise":false,"large":false}).appendPoint([330.9097481,-133.0844185]).appendArc([332.6189885,-128.7649799],{"radius":4,"clockwise":false,"large":false}).appendPoint([329.8284145,-117.4957365]).appendArc([333.7105683,-112.5342665],{"radius":4,"clockwise":true,"large":false}).appendPoint([394.275574,-112.525574]).appendArc([398.275,-108.525574],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function boardRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[397.275,-107.5029616],[397.275,-53.4606148]]).appendArc([394.2904736,-49.5916597],{"radius":4,"clockwise":false,"large":false}).appendPoint([378.395961,-45.4198716]).appendArc([378.0507474,-45.3453826],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.5278636,-40.6673686]).appendArc([349.3781108,-40.6396559],{"radius":4,"clockwise":false,"large":false}).appendPoint([273.8332077,-49.7612354]).appendArc([270.3131413,-53.6730131],{"radius":4,"clockwise":false,"large":false}).appendPoint([269.2810381,-123.1917781]).appendArc([268.1685597,-125.9009301],{"radius":4,"clockwise":true,"large":false}).appendPoint([252.757068,-141.9723461]).appendArc([252.9164304,-147.6665484],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5271755,-165.0180804]).appendArc([276.4249235,-165.4526133],{"radius":4,"clockwise":false,"large":false}).appendPoint([328.4922889,-131.8273612]).appendArc([330.2128222,-127.5378986],{"radius":4,"clockwise":false,"large":false}).appendPoint([327.4790244,-116.0922011]).appendArc([331.3915649,-111.1630031],{"radius":4,"clockwise":true,"large":false}).appendPoint([393.2530224,-111.5029012]).appendArc([397.275,-107.5029616],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _wallOpeningRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[281.5,-50.925],[291.5,-50.925]]).appendPoint([291.5,-42.925]).appendPoint([281.5,-42.925]).appendPoint([281.5,-50.925]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _wallOpeningFillUsbRight_extrude_3_8_outline_fn(){
    return new CSG.Path2D([[281.5901076,-48.7443555],[291.5353266,-47.6990708]]).appendPoint([291.4098924,-46.5056445]).appendPoint([281.4646734,-47.5509292]).appendPoint([281.5901076,-48.7443555]).close().innerToCAG()
.extrude({ offset: [0, 0, 3.8] });
}


function _trrsWallOpeningRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[265.865,-92.975],[270.865,-92.975]]).appendPoint([270.865,-86.975]).appendPoint([265.865,-86.975]).appendPoint([265.865,-92.975]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _trrsWallOpeningFillRight_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[267.2878294,-92.9531639],[269.7374562,-92.9959223]]).appendPoint([269.8421706,-86.9968361]).appendPoint([267.3925438,-86.9540777]).appendPoint([267.2878294,-92.9531639]).close().innerToCAG()
.extrude({ offset: [0, 0, 6.6] });
}




                function _standoffsRight_case_fn() {
                    

                // creating part 0 of case _standoffsRight
                let _standoffsRight__part_0 = _standoffRight_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _standoffsRight__part_0_bounds = _standoffsRight__part_0.getBounds();
                let _standoffsRight__part_0_x = _standoffsRight__part_0_bounds[0].x + (_standoffsRight__part_0_bounds[1].x - _standoffsRight__part_0_bounds[0].x) / 2
                let _standoffsRight__part_0_y = _standoffsRight__part_0_bounds[0].y + (_standoffsRight__part_0_bounds[1].y - _standoffsRight__part_0_bounds[0].y) / 2
                _standoffsRight__part_0 = translate([-_standoffsRight__part_0_x, -_standoffsRight__part_0_y, 0], _standoffsRight__part_0);
                _standoffsRight__part_0 = rotate([0,0,0], _standoffsRight__part_0);
                _standoffsRight__part_0 = translate([_standoffsRight__part_0_x, _standoffsRight__part_0_y, 0], _standoffsRight__part_0);

                _standoffsRight__part_0 = translate([0,0,0], _standoffsRight__part_0);
                let result = _standoffsRight__part_0;
                
            
                    return result;
                }
            
            

                function _holesRight_case_fn() {
                    

                // creating part 0 of case _holesRight
                let _holesRight__part_0 = _mountingRight_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _holesRight__part_0_bounds = _holesRight__part_0.getBounds();
                let _holesRight__part_0_x = _holesRight__part_0_bounds[0].x + (_holesRight__part_0_bounds[1].x - _holesRight__part_0_bounds[0].x) / 2
                let _holesRight__part_0_y = _holesRight__part_0_bounds[0].y + (_holesRight__part_0_bounds[1].y - _holesRight__part_0_bounds[0].y) / 2
                _holesRight__part_0 = translate([-_holesRight__part_0_x, -_holesRight__part_0_y, 0], _holesRight__part_0);
                _holesRight__part_0 = rotate([0,0,0], _holesRight__part_0);
                _holesRight__part_0 = translate([_holesRight__part_0_x, _holesRight__part_0_y, 0], _holesRight__part_0);

                _holesRight__part_0 = translate([0,0,0], _holesRight__part_0);
                let result = _holesRight__part_0;
                
            
                    return result;
                }
            
            

                function xlBottomRight_case_fn() {
                    

                // creating part 0 of case xlBottomRight
                let xlBottomRight__part_0 = xlBoardRight_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottomRight__part_0_bounds = xlBottomRight__part_0.getBounds();
                let xlBottomRight__part_0_x = xlBottomRight__part_0_bounds[0].x + (xlBottomRight__part_0_bounds[1].x - xlBottomRight__part_0_bounds[0].x) / 2
                let xlBottomRight__part_0_y = xlBottomRight__part_0_bounds[0].y + (xlBottomRight__part_0_bounds[1].y - xlBottomRight__part_0_bounds[0].y) / 2
                xlBottomRight__part_0 = translate([-xlBottomRight__part_0_x, -xlBottomRight__part_0_y, 0], xlBottomRight__part_0);
                xlBottomRight__part_0 = rotate([0,0,0], xlBottomRight__part_0);
                xlBottomRight__part_0 = translate([xlBottomRight__part_0_x, xlBottomRight__part_0_y, 0], xlBottomRight__part_0);

                xlBottomRight__part_0 = translate([0,0,0], xlBottomRight__part_0);
                let result = xlBottomRight__part_0;
                
            
                    return result;
                }
            
            

                function wallRight_case_fn() {
                    

                // creating part 0 of case wallRight
                let wallRight__part_0 = _outerWallRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_0_bounds = wallRight__part_0.getBounds();
                let wallRight__part_0_x = wallRight__part_0_bounds[0].x + (wallRight__part_0_bounds[1].x - wallRight__part_0_bounds[0].x) / 2
                let wallRight__part_0_y = wallRight__part_0_bounds[0].y + (wallRight__part_0_bounds[1].y - wallRight__part_0_bounds[0].y) / 2
                wallRight__part_0 = translate([-wallRight__part_0_x, -wallRight__part_0_y, 0], wallRight__part_0);
                wallRight__part_0 = rotate([0,0,0], wallRight__part_0);
                wallRight__part_0 = translate([wallRight__part_0_x, wallRight__part_0_y, 0], wallRight__part_0);

                wallRight__part_0 = translate([0,0,0], wallRight__part_0);
                let result = wallRight__part_0;
                
            

                // creating part 1 of case wallRight
                let wallRight__part_1 = _innerWallRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_1_bounds = wallRight__part_1.getBounds();
                let wallRight__part_1_x = wallRight__part_1_bounds[0].x + (wallRight__part_1_bounds[1].x - wallRight__part_1_bounds[0].x) / 2
                let wallRight__part_1_y = wallRight__part_1_bounds[0].y + (wallRight__part_1_bounds[1].y - wallRight__part_1_bounds[0].y) / 2
                wallRight__part_1 = translate([-wallRight__part_1_x, -wallRight__part_1_y, 0], wallRight__part_1);
                wallRight__part_1 = rotate([0,0,0], wallRight__part_1);
                wallRight__part_1 = translate([wallRight__part_1_x, wallRight__part_1_y, 0], wallRight__part_1);

                wallRight__part_1 = translate([0,0,0], wallRight__part_1);
                result = result.subtract(wallRight__part_1);
                
            

                // creating part 2 of case wallRight
                let wallRight__part_2 = _openingRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_2_bounds = wallRight__part_2.getBounds();
                let wallRight__part_2_x = wallRight__part_2_bounds[0].x + (wallRight__part_2_bounds[1].x - wallRight__part_2_bounds[0].x) / 2
                let wallRight__part_2_y = wallRight__part_2_bounds[0].y + (wallRight__part_2_bounds[1].y - wallRight__part_2_bounds[0].y) / 2
                wallRight__part_2 = translate([-wallRight__part_2_x, -wallRight__part_2_y, 0], wallRight__part_2);
                wallRight__part_2 = rotate([0,0,0], wallRight__part_2);
                wallRight__part_2 = translate([wallRight__part_2_x, wallRight__part_2_y, 0], wallRight__part_2);

                wallRight__part_2 = translate([0,0,0], wallRight__part_2);
                result = result.subtract(wallRight__part_2);
                
            

                // creating part 3 of case wallRight
                let wallRight__part_3 = _openingFillRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_3_bounds = wallRight__part_3.getBounds();
                let wallRight__part_3_x = wallRight__part_3_bounds[0].x + (wallRight__part_3_bounds[1].x - wallRight__part_3_bounds[0].x) / 2
                let wallRight__part_3_y = wallRight__part_3_bounds[0].y + (wallRight__part_3_bounds[1].y - wallRight__part_3_bounds[0].y) / 2
                wallRight__part_3 = translate([-wallRight__part_3_x, -wallRight__part_3_y, 0], wallRight__part_3);
                wallRight__part_3 = rotate([0,0,0], wallRight__part_3);
                wallRight__part_3 = translate([wallRight__part_3_x, wallRight__part_3_y, 0], wallRight__part_3);

                wallRight__part_3 = translate([0,0,0], wallRight__part_3);
                result = result.union(wallRight__part_3);
                
            

                // creating part 4 of case wallRight
                let wallRight__part_4 = _trrsOpeningRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_4_bounds = wallRight__part_4.getBounds();
                let wallRight__part_4_x = wallRight__part_4_bounds[0].x + (wallRight__part_4_bounds[1].x - wallRight__part_4_bounds[0].x) / 2
                let wallRight__part_4_y = wallRight__part_4_bounds[0].y + (wallRight__part_4_bounds[1].y - wallRight__part_4_bounds[0].y) / 2
                wallRight__part_4 = translate([-wallRight__part_4_x, -wallRight__part_4_y, 0], wallRight__part_4);
                wallRight__part_4 = rotate([0,0,0], wallRight__part_4);
                wallRight__part_4 = translate([wallRight__part_4_x, wallRight__part_4_y, 0], wallRight__part_4);

                wallRight__part_4 = translate([0,0,0], wallRight__part_4);
                result = result.subtract(wallRight__part_4);
                
            

                // creating part 5 of case wallRight
                let wallRight__part_5 = _trrsOpeningFillRight_case_fn();

                // make sure that rotations are relative
                let wallRight__part_5_bounds = wallRight__part_5.getBounds();
                let wallRight__part_5_x = wallRight__part_5_bounds[0].x + (wallRight__part_5_bounds[1].x - wallRight__part_5_bounds[0].x) / 2
                let wallRight__part_5_y = wallRight__part_5_bounds[0].y + (wallRight__part_5_bounds[1].y - wallRight__part_5_bounds[0].y) / 2
                wallRight__part_5 = translate([-wallRight__part_5_x, -wallRight__part_5_y, 0], wallRight__part_5);
                wallRight__part_5 = rotate([0,0,0], wallRight__part_5);
                wallRight__part_5 = translate([wallRight__part_5_x, wallRight__part_5_y, 0], wallRight__part_5);

                wallRight__part_5 = translate([0,0,0], wallRight__part_5);
                result = result.union(wallRight__part_5);
                
            
                    return result;
                }
            
            

                function _outerWallRight_case_fn() {
                    

                // creating part 0 of case _outerWallRight
                let _outerWallRight__part_0 = xlBoardRight_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _outerWallRight__part_0_bounds = _outerWallRight__part_0.getBounds();
                let _outerWallRight__part_0_x = _outerWallRight__part_0_bounds[0].x + (_outerWallRight__part_0_bounds[1].x - _outerWallRight__part_0_bounds[0].x) / 2
                let _outerWallRight__part_0_y = _outerWallRight__part_0_bounds[0].y + (_outerWallRight__part_0_bounds[1].y - _outerWallRight__part_0_bounds[0].y) / 2
                _outerWallRight__part_0 = translate([-_outerWallRight__part_0_x, -_outerWallRight__part_0_y, 0], _outerWallRight__part_0);
                _outerWallRight__part_0 = rotate([0,0,0], _outerWallRight__part_0);
                _outerWallRight__part_0 = translate([_outerWallRight__part_0_x, _outerWallRight__part_0_y, 0], _outerWallRight__part_0);

                _outerWallRight__part_0 = translate([0,0,0], _outerWallRight__part_0);
                let result = _outerWallRight__part_0;
                
            
                    return result;
                }
            
            

                function _innerWallRight_case_fn() {
                    

                // creating part 0 of case _innerWallRight
                let _innerWallRight__part_0 = boardRight_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _innerWallRight__part_0_bounds = _innerWallRight__part_0.getBounds();
                let _innerWallRight__part_0_x = _innerWallRight__part_0_bounds[0].x + (_innerWallRight__part_0_bounds[1].x - _innerWallRight__part_0_bounds[0].x) / 2
                let _innerWallRight__part_0_y = _innerWallRight__part_0_bounds[0].y + (_innerWallRight__part_0_bounds[1].y - _innerWallRight__part_0_bounds[0].y) / 2
                _innerWallRight__part_0 = translate([-_innerWallRight__part_0_x, -_innerWallRight__part_0_y, 0], _innerWallRight__part_0);
                _innerWallRight__part_0 = rotate([0,0,0], _innerWallRight__part_0);
                _innerWallRight__part_0 = translate([_innerWallRight__part_0_x, _innerWallRight__part_0_y, 0], _innerWallRight__part_0);

                _innerWallRight__part_0 = translate([0,0,0], _innerWallRight__part_0);
                let result = _innerWallRight__part_0;
                
            
                    return result;
                }
            
            

                function _openingRight_case_fn() {
                    

                // creating part 0 of case _openingRight
                let _openingRight__part_0 = _wallOpeningRight_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _openingRight__part_0_bounds = _openingRight__part_0.getBounds();
                let _openingRight__part_0_x = _openingRight__part_0_bounds[0].x + (_openingRight__part_0_bounds[1].x - _openingRight__part_0_bounds[0].x) / 2
                let _openingRight__part_0_y = _openingRight__part_0_bounds[0].y + (_openingRight__part_0_bounds[1].y - _openingRight__part_0_bounds[0].y) / 2
                _openingRight__part_0 = translate([-_openingRight__part_0_x, -_openingRight__part_0_y, 0], _openingRight__part_0);
                _openingRight__part_0 = rotate([0,0,0], _openingRight__part_0);
                _openingRight__part_0 = translate([_openingRight__part_0_x, _openingRight__part_0_y, 0], _openingRight__part_0);

                _openingRight__part_0 = translate([0,0,0], _openingRight__part_0);
                let result = _openingRight__part_0;
                
            
                    return result;
                }
            
            

                function _openingFillRight_case_fn() {
                    

                // creating part 0 of case _openingFillRight
                let _openingFillRight__part_0 = _wallOpeningFillUsbRight_extrude_3_8_outline_fn();

                // make sure that rotations are relative
                let _openingFillRight__part_0_bounds = _openingFillRight__part_0.getBounds();
                let _openingFillRight__part_0_x = _openingFillRight__part_0_bounds[0].x + (_openingFillRight__part_0_bounds[1].x - _openingFillRight__part_0_bounds[0].x) / 2
                let _openingFillRight__part_0_y = _openingFillRight__part_0_bounds[0].y + (_openingFillRight__part_0_bounds[1].y - _openingFillRight__part_0_bounds[0].y) / 2
                _openingFillRight__part_0 = translate([-_openingFillRight__part_0_x, -_openingFillRight__part_0_y, 0], _openingFillRight__part_0);
                _openingFillRight__part_0 = rotate([0,0,0], _openingFillRight__part_0);
                _openingFillRight__part_0 = translate([_openingFillRight__part_0_x, _openingFillRight__part_0_y, 0], _openingFillRight__part_0);

                _openingFillRight__part_0 = translate([0,0,0], _openingFillRight__part_0);
                let result = _openingFillRight__part_0;
                
            
                    return result;
                }
            
            

                function _trrsOpeningRight_case_fn() {
                    

                // creating part 0 of case _trrsOpeningRight
                let _trrsOpeningRight__part_0 = _trrsWallOpeningRight_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _trrsOpeningRight__part_0_bounds = _trrsOpeningRight__part_0.getBounds();
                let _trrsOpeningRight__part_0_x = _trrsOpeningRight__part_0_bounds[0].x + (_trrsOpeningRight__part_0_bounds[1].x - _trrsOpeningRight__part_0_bounds[0].x) / 2
                let _trrsOpeningRight__part_0_y = _trrsOpeningRight__part_0_bounds[0].y + (_trrsOpeningRight__part_0_bounds[1].y - _trrsOpeningRight__part_0_bounds[0].y) / 2
                _trrsOpeningRight__part_0 = translate([-_trrsOpeningRight__part_0_x, -_trrsOpeningRight__part_0_y, 0], _trrsOpeningRight__part_0);
                _trrsOpeningRight__part_0 = rotate([0,0,0], _trrsOpeningRight__part_0);
                _trrsOpeningRight__part_0 = translate([_trrsOpeningRight__part_0_x, _trrsOpeningRight__part_0_y, 0], _trrsOpeningRight__part_0);

                _trrsOpeningRight__part_0 = translate([0,0,0], _trrsOpeningRight__part_0);
                let result = _trrsOpeningRight__part_0;
                
            
                    return result;
                }
            
            

                function _trrsOpeningFillRight_case_fn() {
                    

                // creating part 0 of case _trrsOpeningFillRight
                let _trrsOpeningFillRight__part_0 = _trrsWallOpeningFillRight_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let _trrsOpeningFillRight__part_0_bounds = _trrsOpeningFillRight__part_0.getBounds();
                let _trrsOpeningFillRight__part_0_x = _trrsOpeningFillRight__part_0_bounds[0].x + (_trrsOpeningFillRight__part_0_bounds[1].x - _trrsOpeningFillRight__part_0_bounds[0].x) / 2
                let _trrsOpeningFillRight__part_0_y = _trrsOpeningFillRight__part_0_bounds[0].y + (_trrsOpeningFillRight__part_0_bounds[1].y - _trrsOpeningFillRight__part_0_bounds[0].y) / 2
                _trrsOpeningFillRight__part_0 = translate([-_trrsOpeningFillRight__part_0_x, -_trrsOpeningFillRight__part_0_y, 0], _trrsOpeningFillRight__part_0);
                _trrsOpeningFillRight__part_0 = rotate([0,0,0], _trrsOpeningFillRight__part_0);
                _trrsOpeningFillRight__part_0 = translate([_trrsOpeningFillRight__part_0_x, _trrsOpeningFillRight__part_0_y, 0], _trrsOpeningFillRight__part_0);

                _trrsOpeningFillRight__part_0 = translate([0,0,0], _trrsOpeningFillRight__part_0);
                let result = _trrsOpeningFillRight__part_0;
                
            
                    return result;
                }
            
            

                function caseRight_case_fn() {
                    

                // creating part 0 of case caseRight
                let caseRight__part_0 = _standoffsRight_case_fn();

                // make sure that rotations are relative
                let caseRight__part_0_bounds = caseRight__part_0.getBounds();
                let caseRight__part_0_x = caseRight__part_0_bounds[0].x + (caseRight__part_0_bounds[1].x - caseRight__part_0_bounds[0].x) / 2
                let caseRight__part_0_y = caseRight__part_0_bounds[0].y + (caseRight__part_0_bounds[1].y - caseRight__part_0_bounds[0].y) / 2
                caseRight__part_0 = translate([-caseRight__part_0_x, -caseRight__part_0_y, 0], caseRight__part_0);
                caseRight__part_0 = rotate([0,0,0], caseRight__part_0);
                caseRight__part_0 = translate([caseRight__part_0_x, caseRight__part_0_y, 0], caseRight__part_0);

                caseRight__part_0 = translate([0,0,0], caseRight__part_0);
                let result = caseRight__part_0;
                
            

                // creating part 1 of case caseRight
                let caseRight__part_1 = _holesRight_case_fn();

                // make sure that rotations are relative
                let caseRight__part_1_bounds = caseRight__part_1.getBounds();
                let caseRight__part_1_x = caseRight__part_1_bounds[0].x + (caseRight__part_1_bounds[1].x - caseRight__part_1_bounds[0].x) / 2
                let caseRight__part_1_y = caseRight__part_1_bounds[0].y + (caseRight__part_1_bounds[1].y - caseRight__part_1_bounds[0].y) / 2
                caseRight__part_1 = translate([-caseRight__part_1_x, -caseRight__part_1_y, 0], caseRight__part_1);
                caseRight__part_1 = rotate([0,0,0], caseRight__part_1);
                caseRight__part_1 = translate([caseRight__part_1_x, caseRight__part_1_y, 0], caseRight__part_1);

                caseRight__part_1 = translate([0,0,0], caseRight__part_1);
                result = result.subtract(caseRight__part_1);
                
            

                // creating part 2 of case caseRight
                let caseRight__part_2 = xlBottomRight_case_fn();

                // make sure that rotations are relative
                let caseRight__part_2_bounds = caseRight__part_2.getBounds();
                let caseRight__part_2_x = caseRight__part_2_bounds[0].x + (caseRight__part_2_bounds[1].x - caseRight__part_2_bounds[0].x) / 2
                let caseRight__part_2_y = caseRight__part_2_bounds[0].y + (caseRight__part_2_bounds[1].y - caseRight__part_2_bounds[0].y) / 2
                caseRight__part_2 = translate([-caseRight__part_2_x, -caseRight__part_2_y, 0], caseRight__part_2);
                caseRight__part_2 = rotate([0,0,0], caseRight__part_2);
                caseRight__part_2 = translate([caseRight__part_2_x, caseRight__part_2_y, 0], caseRight__part_2);

                caseRight__part_2 = translate([0,0,0], caseRight__part_2);
                result = result.union(caseRight__part_2);
                
            

                // creating part 3 of case caseRight
                let caseRight__part_3 = wallRight_case_fn();

                // make sure that rotations are relative
                let caseRight__part_3_bounds = caseRight__part_3.getBounds();
                let caseRight__part_3_x = caseRight__part_3_bounds[0].x + (caseRight__part_3_bounds[1].x - caseRight__part_3_bounds[0].x) / 2
                let caseRight__part_3_y = caseRight__part_3_bounds[0].y + (caseRight__part_3_bounds[1].y - caseRight__part_3_bounds[0].y) / 2
                caseRight__part_3 = translate([-caseRight__part_3_x, -caseRight__part_3_y, 0], caseRight__part_3);
                caseRight__part_3 = rotate([0,0,0], caseRight__part_3);
                caseRight__part_3 = translate([caseRight__part_3_x, caseRight__part_3_y, 0], caseRight__part_3);

                caseRight__part_3 = translate([0,0,0], caseRight__part_3);
                result = result.union(caseRight__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseRight_case_fn();
            }

        