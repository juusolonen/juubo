function _standoff_extrude_5_outline_fn(){
    return CAG.circle({"center":[166.675,-85.475],"radius":2.5})
.union(
    CAG.circle({"center":[206.8200116,-139.8551139],"radius":2.5})
).union(
    CAG.circle({"center":[184.5597717,-120.4810859],"radius":2.5})
).union(
    CAG.circle({"center":[109.525,-86.665],"radius":2.5})
).union(
    CAG.circle({"center":[166.675,-62.615],"radius":2.5})
).union(
    CAG.circle({"center":[109.525,-67.615],"radius":2.5})
).extrude({ offset: [0, 0, 5] });
}


function _mounting_extrude_5_outline_fn(){
    return CAG.circle({"center":[166.675,-85.475],"radius":1.4})
.union(
    CAG.circle({"center":[206.8200116,-139.8551139],"radius":1.4})
).union(
    CAG.circle({"center":[184.5597717,-120.4810859],"radius":1.4})
).union(
    CAG.circle({"center":[109.525,-86.665],"radius":1.4})
).union(
    CAG.circle({"center":[166.675,-62.615],"radius":1.4})
).union(
    CAG.circle({"center":[109.525,-67.615],"radius":1.4})
).extrude({ offset: [0, 0, 5] });
}


function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.475,-108.525574],[87.475,-52.4606148]]).appendArc([90.4595264,-48.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.3581857,-44.4187833]).appendArc([106.6949625,-44.3457375],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.0188664,-39.4691933]).appendArc([136.175424,-39.4398406],{"radius":4,"clockwise":true,"large":false}).appendPoint([215.2391648,-48.9533404]).appendArc([218.7612154,-52.9513327],{"radius":4,"clockwise":true,"large":false}).appendPoint([218.2975197,-122.5765677]).appendArc([219.3893773,-125.3496994],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.2262646,-143.1770069]).appendArc([235.9587385,-148.9280986],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2090693,-168.0423314]).appendArc([209.3950544,-168.3957012],{"radius":4,"clockwise":true,"large":false}).appendPoint([154.8402519,-133.0844185]).appendArc([153.1310115,-128.7649799],{"radius":4,"clockwise":true,"large":false}).appendPoint([155.9215855,-117.4957365]).appendArc([152.0394317,-112.5342665],{"radius":4,"clockwise":false,"large":false}).appendPoint([91.474426,-112.525574]).appendArc([87.475,-108.525574],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[87.475,-108.525574],[87.475,-52.4606148]]).appendArc([90.4595264,-48.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.3581857,-44.4187833]).appendArc([106.6949625,-44.3457375],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.0188664,-39.4691933]).appendArc([136.175424,-39.4398406],{"radius":4,"clockwise":true,"large":false}).appendPoint([215.2391648,-48.9533404]).appendArc([218.7612154,-52.9513327],{"radius":4,"clockwise":true,"large":false}).appendPoint([218.2975197,-122.5765677]).appendArc([219.3893773,-125.3496994],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.2262646,-143.1770069]).appendArc([235.9587385,-148.9280986],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2090693,-168.0423314]).appendArc([209.3950544,-168.3957012],{"radius":4,"clockwise":true,"large":false}).appendPoint([154.8402519,-133.0844185]).appendArc([153.1310115,-128.7649799],{"radius":4,"clockwise":true,"large":false}).appendPoint([155.9215855,-117.4957365]).appendArc([152.0394317,-112.5342665],{"radius":4,"clockwise":false,"large":false}).appendPoint([91.474426,-112.525574]).appendArc([87.475,-108.525574],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function board_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[88.475,-107.5029616],[88.475,-53.4606148]]).appendArc([91.4595264,-49.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([107.354039,-45.4198716]).appendArc([107.6992526,-45.3453826],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.2221364,-40.6673686]).appendArc([136.3718892,-40.6396559],{"radius":4,"clockwise":true,"large":false}).appendPoint([211.9167923,-49.7612354]).appendArc([215.4368587,-53.6730131],{"radius":4,"clockwise":true,"large":false}).appendPoint([216.4689619,-123.1917781]).appendArc([217.5814403,-125.9009301],{"radius":4,"clockwise":false,"large":false}).appendPoint([232.992932,-141.9723461]).appendArc([232.8335696,-147.6665484],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2228245,-165.0180804]).appendArc([209.3250765,-165.4526133],{"radius":4,"clockwise":true,"large":false}).appendPoint([157.2577111,-131.8273612]).appendArc([155.5371778,-127.5378986],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.2709756,-116.0922011]).appendArc([154.3584351,-111.1630031],{"radius":4,"clockwise":false,"large":false}).appendPoint([92.4969776,-111.5029012]).appendArc([88.475,-107.5029616],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _wallOpening_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[194.25,-50.925],[204.25,-50.925]]).appendPoint([204.25,-42.925]).appendPoint([194.25,-42.925]).appendPoint([194.25,-50.925]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _wallOpeningFillUsb_extrude_3_8_outline_fn(){
    return new CSG.Path2D([[194.2146734,-47.6990708],[204.1598924,-48.7443555]]).appendPoint([204.2853266,-47.5509292]).appendPoint([194.3401076,-46.5056445]).appendPoint([194.2146734,-47.6990708]).close().innerToCAG()
.extrude({ offset: [0, 0, 3.8] });
}


function _trrsWallOpening_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[214.885,-92.975],[219.885,-92.975]]).appendPoint([219.885,-86.975]).appendPoint([214.885,-86.975]).appendPoint([214.885,-92.975]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _trrsWallOpeningFill_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[216.0125438,-92.9959223],[218.4621706,-92.9531639]]).appendPoint([218.3574562,-86.9540777]).appendPoint([215.9078294,-86.9968361]).appendPoint([216.0125438,-92.9959223]).close().innerToCAG()
.extrude({ offset: [0, 0, 6.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = _standoff_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = _mounting_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            

                // creating part 2 of case wall
                let wall__part_2 = _opening_case_fn();

                // make sure that rotations are relative
                let wall__part_2_bounds = wall__part_2.getBounds();
                let wall__part_2_x = wall__part_2_bounds[0].x + (wall__part_2_bounds[1].x - wall__part_2_bounds[0].x) / 2
                let wall__part_2_y = wall__part_2_bounds[0].y + (wall__part_2_bounds[1].y - wall__part_2_bounds[0].y) / 2
                wall__part_2 = translate([-wall__part_2_x, -wall__part_2_y, 0], wall__part_2);
                wall__part_2 = rotate([0,0,0], wall__part_2);
                wall__part_2 = translate([wall__part_2_x, wall__part_2_y, 0], wall__part_2);

                wall__part_2 = translate([0,0,0], wall__part_2);
                result = result.subtract(wall__part_2);
                
            

                // creating part 3 of case wall
                let wall__part_3 = _wallOpeningFill_case_fn();

                // make sure that rotations are relative
                let wall__part_3_bounds = wall__part_3.getBounds();
                let wall__part_3_x = wall__part_3_bounds[0].x + (wall__part_3_bounds[1].x - wall__part_3_bounds[0].x) / 2
                let wall__part_3_y = wall__part_3_bounds[0].y + (wall__part_3_bounds[1].y - wall__part_3_bounds[0].y) / 2
                wall__part_3 = translate([-wall__part_3_x, -wall__part_3_y, 0], wall__part_3);
                wall__part_3 = rotate([0,0,0], wall__part_3);
                wall__part_3 = translate([wall__part_3_x, wall__part_3_y, 0], wall__part_3);

                wall__part_3 = translate([0,0,0], wall__part_3);
                result = result.union(wall__part_3);
                
            

                // creating part 4 of case wall
                let wall__part_4 = _trrsOpening_case_fn();

                // make sure that rotations are relative
                let wall__part_4_bounds = wall__part_4.getBounds();
                let wall__part_4_x = wall__part_4_bounds[0].x + (wall__part_4_bounds[1].x - wall__part_4_bounds[0].x) / 2
                let wall__part_4_y = wall__part_4_bounds[0].y + (wall__part_4_bounds[1].y - wall__part_4_bounds[0].y) / 2
                wall__part_4 = translate([-wall__part_4_x, -wall__part_4_y, 0], wall__part_4);
                wall__part_4 = rotate([0,0,0], wall__part_4);
                wall__part_4 = translate([wall__part_4_x, wall__part_4_y, 0], wall__part_4);

                wall__part_4 = translate([0,0,0], wall__part_4);
                result = result.subtract(wall__part_4);
                
            

                // creating part 5 of case wall
                let wall__part_5 = _trrsOpeningFill_case_fn();

                // make sure that rotations are relative
                let wall__part_5_bounds = wall__part_5.getBounds();
                let wall__part_5_x = wall__part_5_bounds[0].x + (wall__part_5_bounds[1].x - wall__part_5_bounds[0].x) / 2
                let wall__part_5_y = wall__part_5_bounds[0].y + (wall__part_5_bounds[1].y - wall__part_5_bounds[0].y) / 2
                wall__part_5 = translate([-wall__part_5_x, -wall__part_5_y, 0], wall__part_5);
                wall__part_5 = rotate([0,0,0], wall__part_5);
                wall__part_5 = translate([wall__part_5_x, wall__part_5_y, 0], wall__part_5);

                wall__part_5 = translate([0,0,0], wall__part_5);
                result = result.union(wall__part_5);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _opening_case_fn() {
                    

                // creating part 0 of case _opening
                let _opening__part_0 = _wallOpening_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _opening__part_0_bounds = _opening__part_0.getBounds();
                let _opening__part_0_x = _opening__part_0_bounds[0].x + (_opening__part_0_bounds[1].x - _opening__part_0_bounds[0].x) / 2
                let _opening__part_0_y = _opening__part_0_bounds[0].y + (_opening__part_0_bounds[1].y - _opening__part_0_bounds[0].y) / 2
                _opening__part_0 = translate([-_opening__part_0_x, -_opening__part_0_y, 0], _opening__part_0);
                _opening__part_0 = rotate([0,0,0], _opening__part_0);
                _opening__part_0 = translate([_opening__part_0_x, _opening__part_0_y, 0], _opening__part_0);

                _opening__part_0 = translate([0,0,0], _opening__part_0);
                let result = _opening__part_0;
                
            
                    return result;
                }
            
            

                function _wallOpeningFill_case_fn() {
                    

                // creating part 0 of case _wallOpeningFill
                let _wallOpeningFill__part_0 = _wallOpeningFillUsb_extrude_3_8_outline_fn();

                // make sure that rotations are relative
                let _wallOpeningFill__part_0_bounds = _wallOpeningFill__part_0.getBounds();
                let _wallOpeningFill__part_0_x = _wallOpeningFill__part_0_bounds[0].x + (_wallOpeningFill__part_0_bounds[1].x - _wallOpeningFill__part_0_bounds[0].x) / 2
                let _wallOpeningFill__part_0_y = _wallOpeningFill__part_0_bounds[0].y + (_wallOpeningFill__part_0_bounds[1].y - _wallOpeningFill__part_0_bounds[0].y) / 2
                _wallOpeningFill__part_0 = translate([-_wallOpeningFill__part_0_x, -_wallOpeningFill__part_0_y, 0], _wallOpeningFill__part_0);
                _wallOpeningFill__part_0 = rotate([0,0,0], _wallOpeningFill__part_0);
                _wallOpeningFill__part_0 = translate([_wallOpeningFill__part_0_x, _wallOpeningFill__part_0_y, 0], _wallOpeningFill__part_0);

                _wallOpeningFill__part_0 = translate([0,0,0], _wallOpeningFill__part_0);
                let result = _wallOpeningFill__part_0;
                
            
                    return result;
                }
            
            

                function _trrsOpening_case_fn() {
                    

                // creating part 0 of case _trrsOpening
                let _trrsOpening__part_0 = _trrsWallOpening_extrude_8_2_outline_fn();

                // make sure that rotations are relative
                let _trrsOpening__part_0_bounds = _trrsOpening__part_0.getBounds();
                let _trrsOpening__part_0_x = _trrsOpening__part_0_bounds[0].x + (_trrsOpening__part_0_bounds[1].x - _trrsOpening__part_0_bounds[0].x) / 2
                let _trrsOpening__part_0_y = _trrsOpening__part_0_bounds[0].y + (_trrsOpening__part_0_bounds[1].y - _trrsOpening__part_0_bounds[0].y) / 2
                _trrsOpening__part_0 = translate([-_trrsOpening__part_0_x, -_trrsOpening__part_0_y, 0], _trrsOpening__part_0);
                _trrsOpening__part_0 = rotate([0,0,0], _trrsOpening__part_0);
                _trrsOpening__part_0 = translate([_trrsOpening__part_0_x, _trrsOpening__part_0_y, 0], _trrsOpening__part_0);

                _trrsOpening__part_0 = translate([0,0,0], _trrsOpening__part_0);
                let result = _trrsOpening__part_0;
                
            
                    return result;
                }
            
            

                function _trrsOpeningFill_case_fn() {
                    

                // creating part 0 of case _trrsOpeningFill
                let _trrsOpeningFill__part_0 = _trrsWallOpeningFill_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let _trrsOpeningFill__part_0_bounds = _trrsOpeningFill__part_0.getBounds();
                let _trrsOpeningFill__part_0_x = _trrsOpeningFill__part_0_bounds[0].x + (_trrsOpeningFill__part_0_bounds[1].x - _trrsOpeningFill__part_0_bounds[0].x) / 2
                let _trrsOpeningFill__part_0_y = _trrsOpeningFill__part_0_bounds[0].y + (_trrsOpeningFill__part_0_bounds[1].y - _trrsOpeningFill__part_0_bounds[0].y) / 2
                _trrsOpeningFill__part_0 = translate([-_trrsOpeningFill__part_0_x, -_trrsOpeningFill__part_0_y, 0], _trrsOpeningFill__part_0);
                _trrsOpeningFill__part_0 = rotate([0,0,0], _trrsOpeningFill__part_0);
                _trrsOpeningFill__part_0 = translate([_trrsOpeningFill__part_0_x, _trrsOpeningFill__part_0_y, 0], _trrsOpeningFill__part_0);

                _trrsOpeningFill__part_0 = translate([0,0,0], _trrsOpeningFill__part_0);
                let result = _trrsOpeningFill__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        