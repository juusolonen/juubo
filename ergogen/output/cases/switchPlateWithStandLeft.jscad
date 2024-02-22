function board_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[88.475,-107.5029616],[88.475,-53.4606148]]).appendArc([91.4595264,-49.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([107.354039,-45.4198716]).appendArc([107.6992526,-45.3453826],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.2221364,-40.6673686]).appendArc([136.3718892,-40.6396559],{"radius":4,"clockwise":true,"large":false}).appendPoint([211.9167923,-49.7612354]).appendArc([215.4368587,-53.6730131],{"radius":4,"clockwise":true,"large":false}).appendPoint([216.4689619,-123.1917781]).appendArc([217.5814403,-125.9009301],{"radius":4,"clockwise":false,"large":false}).appendPoint([232.992932,-141.9723461]).appendArc([232.8335696,-147.6665484],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2228245,-165.0180804]).appendArc([209.3250765,-165.4526133],{"radius":4,"clockwise":true,"large":false}).appendPoint([157.2577111,-131.8273612]).appendArc([155.5371778,-127.5378986],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.2709756,-116.0922011]).appendArc([154.3584351,-111.1630031],{"radius":4,"clockwise":false,"large":false}).appendPoint([92.4969776,-111.5029012]).appendArc([88.475,-107.5029616],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function _plateHole_extrude_4_outline_fn(){
    return CAG.circle({"center":[166.675,-85.475],"radius":3.2})
.union(
    CAG.circle({"center":[206.8200116,-139.8551139],"radius":3.2})
).union(
    CAG.circle({"center":[184.5597717,-120.4810859],"radius":3.2})
).union(
    CAG.circle({"center":[109.525,-86.665],"radius":3.2})
).union(
    CAG.circle({"center":[166.675,-62.615],"radius":3.2})
).union(
    CAG.circle({"center":[109.525,-67.615],"radius":3.2})
).extrude({ offset: [0, 0, 4] });
}


function switches_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[282.0942912,-146.590306],[272.1947963,-136.6908111]]).appendPoint([262.2953014,-146.590306]).appendPoint([272.1947963,-156.4898009]).appendPoint([282.0942912,-146.590306]).close().innerToCAG()
.union(
    new CSG.Path2D([[213.5552037,-136.6908111],[203.6557088,-146.590306]]).appendPoint([213.5552037,-156.4898009]).appendPoint([223.4546986,-146.590306]).appendPoint([213.5552037,-136.6908111]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.55,-66.4],[316.55,-66.4]]).appendPoint([316.55,-52.4]).appendPoint([302.55,-52.4]).appendPoint([302.55,-66.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.55,-85.45],[316.55,-85.45]]).appendPoint([316.55,-71.45]).appendPoint([302.55,-71.45]).appendPoint([302.55,-85.45]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.55,-104.5],[316.55,-104.5]]).appendPoint([316.55,-90.5]).appendPoint([302.55,-90.5]).appendPoint([302.55,-104.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.6,-63.9],[335.6,-63.9]]).appendPoint([335.6,-49.9]).appendPoint([321.6,-49.9]).appendPoint([321.6,-63.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.6,-82.95],[335.6,-82.95]]).appendPoint([335.6,-68.95]).appendPoint([321.6,-68.95]).appendPoint([321.6,-82.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.6,-102],[335.6,-102]]).appendPoint([335.6,-88]).appendPoint([321.6,-88]).appendPoint([321.6,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.65,-61.4],[354.65,-61.4]]).appendPoint([354.65,-47.4]).appendPoint([340.65,-47.4]).appendPoint([340.65,-61.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.65,-80.45],[354.65,-80.45]]).appendPoint([354.65,-66.45]).appendPoint([340.65,-66.45]).appendPoint([340.65,-80.45]).close().innerToCAG()
).union(
    new CSG.Path2D([[340.65,-99.5],[354.65,-99.5]]).appendPoint([354.65,-85.5]).appendPoint([340.65,-85.5]).appendPoint([340.65,-99.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.7,-63.9],[373.7,-63.9]]).appendPoint([373.7,-49.9]).appendPoint([359.7,-49.9]).appendPoint([359.7,-63.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.7,-82.95],[373.7,-82.95]]).appendPoint([373.7,-68.95]).appendPoint([359.7,-68.95]).appendPoint([359.7,-82.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.7,-102],[373.7,-102]]).appendPoint([373.7,-88]).appendPoint([359.7,-88]).appendPoint([359.7,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.75,-68.9],[392.75,-68.9]]).appendPoint([392.75,-54.9]).appendPoint([378.75,-54.9]).appendPoint([378.75,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.75,-87.95],[392.75,-87.95]]).appendPoint([392.75,-73.95]).appendPoint([378.75,-73.95]).appendPoint([378.75,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.75,-107],[392.75,-107]]).appendPoint([392.75,-93]).appendPoint([378.75,-93]).appendPoint([378.75,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-66.4],[183.2,-66.4]]).appendPoint([183.2,-52.4]).appendPoint([169.2,-52.4]).appendPoint([169.2,-66.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-85.45],[183.2,-85.45]]).appendPoint([183.2,-71.45]).appendPoint([169.2,-71.45]).appendPoint([169.2,-85.45]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-104.5],[183.2,-104.5]]).appendPoint([183.2,-90.5]).appendPoint([169.2,-90.5]).appendPoint([169.2,-104.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-63.9],[164.15,-63.9]]).appendPoint([164.15,-49.9]).appendPoint([150.15,-49.9]).appendPoint([150.15,-63.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-82.95],[164.15,-82.95]]).appendPoint([164.15,-68.95]).appendPoint([150.15,-68.95]).appendPoint([150.15,-82.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.15,-102],[164.15,-102]]).appendPoint([164.15,-88]).appendPoint([150.15,-88]).appendPoint([150.15,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-61.4],[145.1,-61.4]]).appendPoint([145.1,-47.4]).appendPoint([131.1,-47.4]).appendPoint([131.1,-61.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-80.45],[145.1,-80.45]]).appendPoint([145.1,-66.45]).appendPoint([131.1,-66.45]).appendPoint([131.1,-80.45]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.1,-99.5],[145.1,-99.5]]).appendPoint([145.1,-85.5]).appendPoint([131.1,-85.5]).appendPoint([131.1,-99.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-63.9],[126.05,-63.9]]).appendPoint([126.05,-49.9]).appendPoint([112.05,-49.9]).appendPoint([112.05,-63.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-82.95],[126.05,-82.95]]).appendPoint([126.05,-68.95]).appendPoint([112.05,-68.95]).appendPoint([112.05,-82.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-102],[126.05,-102]]).appendPoint([126.05,-88]).appendPoint([112.05,-88]).appendPoint([112.05,-102]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-68.9],[107,-68.9]]).appendPoint([107,-54.9]).appendPoint([93,-54.9]).appendPoint([93,-68.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-87.95],[107,-87.95]]).appendPoint([107,-73.95]).appendPoint([93,-73.95]).appendPoint([93,-87.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-107],[107,-107]]).appendPoint([107,-93]).appendPoint([93,-93]).appendPoint([93,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[310.6002525,-131.1232141],[324.1232141,-127.4997475]]).appendPoint([320.4997475,-113.9767859]).appendPoint([306.9767859,-117.6002525]).appendPoint([310.6002525,-131.1232141]).close().innerToCAG()
).union(
    new CSG.Path2D([[161.6267859,-127.4997475],[175.1497475,-131.1232141]]).appendPoint([178.7732141,-117.6002525]).appendPoint([165.2502525,-113.9767859]).appendPoint([161.6267859,-127.4997475]).close().innerToCAG()
).union(
    new CSG.Path2D([[299.8011689,-132.3457046],[290.8021423,-121.6210824]]).appendPoint([280.0775201,-130.620109]).appendPoint([289.0765467,-141.3447312]).appendPoint([299.8011689,-132.3457046]).close().innerToCAG()
).union(
    new CSG.Path2D([[194.9478577,-121.6210824],[185.9488311,-132.3457046]]).appendPoint([196.6734533,-141.3447312]).appendPoint([205.6724799,-130.620109]).appendPoint([194.9478577,-121.6210824]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.6] });
}


function _rotary_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[192.25,-109.11],[206.25,-109.11]]).appendPoint([206.25,-95.11]).appendPoint([192.25,-95.11]).appendPoint([192.25,-109.11]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function _XLextraArea_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[216.705,-49.381],[188.4965,-46.074]]).appendPoint([188.4965,-93.2925]).appendPoint([217.005,-93.2925]).appendPoint([216.705,-49.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function _extraArea_extrude_1_outline_fn(){
    return new CSG.Path2D([[215.205,-50.381],[189.4965,-47.174]]).appendPoint([189.4965,-92.9925]).appendPoint([216.005,-92.9925]).appendPoint([215.205,-50.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _XLextraArea_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[216.705,-49.381],[188.4965,-46.074]]).appendPoint([188.4965,-93.2925]).appendPoint([217.005,-93.2925]).appendPoint([216.705,-49.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.6] });
}


function _extraArea_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[215.205,-50.381],[189.4965,-47.174]]).appendPoint([189.4965,-92.9925]).appendPoint([216.005,-92.9925]).appendPoint([215.205,-50.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.6] });
}


function _trrsWallOpeningForStand_extrude_4_outline_fn(){
    return new CSG.Path2D([[212.385,-92.975],[222.385,-92.975]]).appendPoint([222.385,-86.975]).appendPoint([212.385,-86.975]).appendPoint([212.385,-92.975]).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function _wallOpening_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[194.25,-50.925],[204.25,-50.925]]).appendPoint([204.25,-42.925]).appendPoint([194.25,-42.925]).appendPoint([194.25,-50.925]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _resetOpening_extrude_8_outline_fn(){
    return new CSG.Path2D([[209.08,-60.01],[217.08,-60.01]]).appendPoint([217.08,-52.01]).appendPoint([209.08,-52.01]).appendPoint([209.08,-60.01]).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}




                function _switchPlate_case_fn() {
                    

                // creating part 0 of case _switchPlate
                let _switchPlate__part_0 = board_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _switchPlate__part_0_bounds = _switchPlate__part_0.getBounds();
                let _switchPlate__part_0_x = _switchPlate__part_0_bounds[0].x + (_switchPlate__part_0_bounds[1].x - _switchPlate__part_0_bounds[0].x) / 2
                let _switchPlate__part_0_y = _switchPlate__part_0_bounds[0].y + (_switchPlate__part_0_bounds[1].y - _switchPlate__part_0_bounds[0].y) / 2
                _switchPlate__part_0 = translate([-_switchPlate__part_0_x, -_switchPlate__part_0_y, 0], _switchPlate__part_0);
                _switchPlate__part_0 = rotate([0,0,0], _switchPlate__part_0);
                _switchPlate__part_0 = translate([_switchPlate__part_0_x, _switchPlate__part_0_y, 0], _switchPlate__part_0);

                _switchPlate__part_0 = translate([0,0,0], _switchPlate__part_0);
                let result = _switchPlate__part_0;
                
            
                    return result;
                }
            
            

                function _plateHoles_case_fn() {
                    

                // creating part 0 of case _plateHoles
                let _plateHoles__part_0 = _plateHole_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _plateHoles__part_0_bounds = _plateHoles__part_0.getBounds();
                let _plateHoles__part_0_x = _plateHoles__part_0_bounds[0].x + (_plateHoles__part_0_bounds[1].x - _plateHoles__part_0_bounds[0].x) / 2
                let _plateHoles__part_0_y = _plateHoles__part_0_bounds[0].y + (_plateHoles__part_0_bounds[1].y - _plateHoles__part_0_bounds[0].y) / 2
                _plateHoles__part_0 = translate([-_plateHoles__part_0_x, -_plateHoles__part_0_y, 0], _plateHoles__part_0);
                _plateHoles__part_0 = rotate([0,0,0], _plateHoles__part_0);
                _plateHoles__part_0 = translate([_plateHoles__part_0_x, _plateHoles__part_0_y, 0], _plateHoles__part_0);

                _plateHoles__part_0 = translate([0,0,0], _plateHoles__part_0);
                let result = _plateHoles__part_0;
                
            
                    return result;
                }
            
            

                function _switches_case_fn() {
                    

                // creating part 0 of case _switches
                let _switches__part_0 = switches_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _switches__part_0_bounds = _switches__part_0.getBounds();
                let _switches__part_0_x = _switches__part_0_bounds[0].x + (_switches__part_0_bounds[1].x - _switches__part_0_bounds[0].x) / 2
                let _switches__part_0_y = _switches__part_0_bounds[0].y + (_switches__part_0_bounds[1].y - _switches__part_0_bounds[0].y) / 2
                _switches__part_0 = translate([-_switches__part_0_x, -_switches__part_0_y, 0], _switches__part_0);
                _switches__part_0 = rotate([0,0,0], _switches__part_0);
                _switches__part_0 = translate([_switches__part_0_x, _switches__part_0_y, 0], _switches__part_0);

                _switches__part_0 = translate([0,0,0], _switches__part_0);
                let result = _switches__part_0;
                
            
                    return result;
                }
            
            

                function _rotary_case_fn() {
                    

                // creating part 0 of case _rotary
                let _rotary__part_0 = _rotary_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _rotary__part_0_bounds = _rotary__part_0.getBounds();
                let _rotary__part_0_x = _rotary__part_0_bounds[0].x + (_rotary__part_0_bounds[1].x - _rotary__part_0_bounds[0].x) / 2
                let _rotary__part_0_y = _rotary__part_0_bounds[0].y + (_rotary__part_0_bounds[1].y - _rotary__part_0_bounds[0].y) / 2
                _rotary__part_0 = translate([-_rotary__part_0_x, -_rotary__part_0_y, 0], _rotary__part_0);
                _rotary__part_0 = rotate([0,0,0], _rotary__part_0);
                _rotary__part_0 = translate([_rotary__part_0_x, _rotary__part_0_y, 0], _rotary__part_0);

                _rotary__part_0 = translate([0,0,0], _rotary__part_0);
                let result = _rotary__part_0;
                
            
                    return result;
                }
            
            

                function _XLextraArea_case_fn() {
                    

                // creating part 0 of case _XLextraArea
                let _XLextraArea__part_0 = _XLextraArea_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _XLextraArea__part_0_bounds = _XLextraArea__part_0.getBounds();
                let _XLextraArea__part_0_x = _XLextraArea__part_0_bounds[0].x + (_XLextraArea__part_0_bounds[1].x - _XLextraArea__part_0_bounds[0].x) / 2
                let _XLextraArea__part_0_y = _XLextraArea__part_0_bounds[0].y + (_XLextraArea__part_0_bounds[1].y - _XLextraArea__part_0_bounds[0].y) / 2
                _XLextraArea__part_0 = translate([-_XLextraArea__part_0_x, -_XLextraArea__part_0_y, 0], _XLextraArea__part_0);
                _XLextraArea__part_0 = rotate([0,0,0], _XLextraArea__part_0);
                _XLextraArea__part_0 = translate([_XLextraArea__part_0_x, _XLextraArea__part_0_y, 0], _XLextraArea__part_0);

                _XLextraArea__part_0 = translate([0,0,0], _XLextraArea__part_0);
                let result = _XLextraArea__part_0;
                
            
                    return result;
                }
            
            

                function _extraAreaUp_case_fn() {
                    

                // creating part 0 of case _extraAreaUp
                let _extraAreaUp__part_0 = _extraArea_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _extraAreaUp__part_0_bounds = _extraAreaUp__part_0.getBounds();
                let _extraAreaUp__part_0_x = _extraAreaUp__part_0_bounds[0].x + (_extraAreaUp__part_0_bounds[1].x - _extraAreaUp__part_0_bounds[0].x) / 2
                let _extraAreaUp__part_0_y = _extraAreaUp__part_0_bounds[0].y + (_extraAreaUp__part_0_bounds[1].y - _extraAreaUp__part_0_bounds[0].y) / 2
                _extraAreaUp__part_0 = translate([-_extraAreaUp__part_0_x, -_extraAreaUp__part_0_y, 0], _extraAreaUp__part_0);
                _extraAreaUp__part_0 = rotate([0,0,0], _extraAreaUp__part_0);
                _extraAreaUp__part_0 = translate([_extraAreaUp__part_0_x, _extraAreaUp__part_0_y, 0], _extraAreaUp__part_0);

                _extraAreaUp__part_0 = translate([0,0,8.6], _extraAreaUp__part_0);
                let result = _extraAreaUp__part_0;
                
            
                    return result;
                }
            
            

                function stand_case_fn() {
                    

                // creating part 0 of case stand
                let stand__part_0 = _outerStand_case_fn();

                // make sure that rotations are relative
                let stand__part_0_bounds = stand__part_0.getBounds();
                let stand__part_0_x = stand__part_0_bounds[0].x + (stand__part_0_bounds[1].x - stand__part_0_bounds[0].x) / 2
                let stand__part_0_y = stand__part_0_bounds[0].y + (stand__part_0_bounds[1].y - stand__part_0_bounds[0].y) / 2
                stand__part_0 = translate([-stand__part_0_x, -stand__part_0_y, 0], stand__part_0);
                stand__part_0 = rotate([0,0,0], stand__part_0);
                stand__part_0 = translate([stand__part_0_x, stand__part_0_y, 0], stand__part_0);

                stand__part_0 = translate([0,0,0], stand__part_0);
                let result = stand__part_0;
                
            

                // creating part 1 of case stand
                let stand__part_1 = _innerStand_case_fn();

                // make sure that rotations are relative
                let stand__part_1_bounds = stand__part_1.getBounds();
                let stand__part_1_x = stand__part_1_bounds[0].x + (stand__part_1_bounds[1].x - stand__part_1_bounds[0].x) / 2
                let stand__part_1_y = stand__part_1_bounds[0].y + (stand__part_1_bounds[1].y - stand__part_1_bounds[0].y) / 2
                stand__part_1 = translate([-stand__part_1_x, -stand__part_1_y, 0], stand__part_1);
                stand__part_1 = rotate([0,0,0], stand__part_1);
                stand__part_1 = translate([stand__part_1_x, stand__part_1_y, 0], stand__part_1);

                stand__part_1 = translate([0,0,0], stand__part_1);
                result = result.subtract(stand__part_1);
                
            
                    return result;
                }
            
            

                function _outerStand_case_fn() {
                    

                // creating part 0 of case _outerStand
                let _outerStand__part_0 = _XLextraArea_extrude_9_6_outline_fn();

                // make sure that rotations are relative
                let _outerStand__part_0_bounds = _outerStand__part_0.getBounds();
                let _outerStand__part_0_x = _outerStand__part_0_bounds[0].x + (_outerStand__part_0_bounds[1].x - _outerStand__part_0_bounds[0].x) / 2
                let _outerStand__part_0_y = _outerStand__part_0_bounds[0].y + (_outerStand__part_0_bounds[1].y - _outerStand__part_0_bounds[0].y) / 2
                _outerStand__part_0 = translate([-_outerStand__part_0_x, -_outerStand__part_0_y, 0], _outerStand__part_0);
                _outerStand__part_0 = rotate([0,0,0], _outerStand__part_0);
                _outerStand__part_0 = translate([_outerStand__part_0_x, _outerStand__part_0_y, 0], _outerStand__part_0);

                _outerStand__part_0 = translate([0,0,0], _outerStand__part_0);
                let result = _outerStand__part_0;
                
            
                    return result;
                }
            
            

                function _innerStand_case_fn() {
                    

                // creating part 0 of case _innerStand
                let _innerStand__part_0 = _extraArea_extrude_9_6_outline_fn();

                // make sure that rotations are relative
                let _innerStand__part_0_bounds = _innerStand__part_0.getBounds();
                let _innerStand__part_0_x = _innerStand__part_0_bounds[0].x + (_innerStand__part_0_bounds[1].x - _innerStand__part_0_bounds[0].x) / 2
                let _innerStand__part_0_y = _innerStand__part_0_bounds[0].y + (_innerStand__part_0_bounds[1].y - _innerStand__part_0_bounds[0].y) / 2
                _innerStand__part_0 = translate([-_innerStand__part_0_x, -_innerStand__part_0_y, 0], _innerStand__part_0);
                _innerStand__part_0 = rotate([0,0,0], _innerStand__part_0);
                _innerStand__part_0 = translate([_innerStand__part_0_x, _innerStand__part_0_y, 0], _innerStand__part_0);

                _innerStand__part_0 = translate([0,0,0], _innerStand__part_0);
                let result = _innerStand__part_0;
                
            
                    return result;
                }
            
            

                function _trrsStandOpening_case_fn() {
                    

                // creating part 0 of case _trrsStandOpening
                let _trrsStandOpening__part_0 = _trrsWallOpeningForStand_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _trrsStandOpening__part_0_bounds = _trrsStandOpening__part_0.getBounds();
                let _trrsStandOpening__part_0_x = _trrsStandOpening__part_0_bounds[0].x + (_trrsStandOpening__part_0_bounds[1].x - _trrsStandOpening__part_0_bounds[0].x) / 2
                let _trrsStandOpening__part_0_y = _trrsStandOpening__part_0_bounds[0].y + (_trrsStandOpening__part_0_bounds[1].y - _trrsStandOpening__part_0_bounds[0].y) / 2
                _trrsStandOpening__part_0 = translate([-_trrsStandOpening__part_0_x, -_trrsStandOpening__part_0_y, 0], _trrsStandOpening__part_0);
                _trrsStandOpening__part_0 = rotate([0,0,0], _trrsStandOpening__part_0);
                _trrsStandOpening__part_0 = translate([_trrsStandOpening__part_0_x, _trrsStandOpening__part_0_y, 0], _trrsStandOpening__part_0);

                _trrsStandOpening__part_0 = translate([0,0,0], _trrsStandOpening__part_0);
                let result = _trrsStandOpening__part_0;
                
            
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
            
            

                function _resetOpening_case_fn() {
                    

                // creating part 0 of case _resetOpening
                let _resetOpening__part_0 = _resetOpening_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _resetOpening__part_0_bounds = _resetOpening__part_0.getBounds();
                let _resetOpening__part_0_x = _resetOpening__part_0_bounds[0].x + (_resetOpening__part_0_bounds[1].x - _resetOpening__part_0_bounds[0].x) / 2
                let _resetOpening__part_0_y = _resetOpening__part_0_bounds[0].y + (_resetOpening__part_0_bounds[1].y - _resetOpening__part_0_bounds[0].y) / 2
                _resetOpening__part_0 = translate([-_resetOpening__part_0_x, -_resetOpening__part_0_y, 0], _resetOpening__part_0);
                _resetOpening__part_0 = rotate([0,0,0], _resetOpening__part_0);
                _resetOpening__part_0 = translate([_resetOpening__part_0_x, _resetOpening__part_0_y, 0], _resetOpening__part_0);

                _resetOpening__part_0 = translate([0,0,0], _resetOpening__part_0);
                let result = _resetOpening__part_0;
                
            
                    return result;
                }
            
            

                function switchPlateWithStandLeft_case_fn() {
                    

                // creating part 0 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_0 = _switchPlate_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_0_bounds = switchPlateWithStandLeft__part_0.getBounds();
                let switchPlateWithStandLeft__part_0_x = switchPlateWithStandLeft__part_0_bounds[0].x + (switchPlateWithStandLeft__part_0_bounds[1].x - switchPlateWithStandLeft__part_0_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_0_y = switchPlateWithStandLeft__part_0_bounds[0].y + (switchPlateWithStandLeft__part_0_bounds[1].y - switchPlateWithStandLeft__part_0_bounds[0].y) / 2
                switchPlateWithStandLeft__part_0 = translate([-switchPlateWithStandLeft__part_0_x, -switchPlateWithStandLeft__part_0_y, 0], switchPlateWithStandLeft__part_0);
                switchPlateWithStandLeft__part_0 = rotate([0,0,0], switchPlateWithStandLeft__part_0);
                switchPlateWithStandLeft__part_0 = translate([switchPlateWithStandLeft__part_0_x, switchPlateWithStandLeft__part_0_y, 0], switchPlateWithStandLeft__part_0);

                switchPlateWithStandLeft__part_0 = translate([0,0,0], switchPlateWithStandLeft__part_0);
                let result = switchPlateWithStandLeft__part_0;
                
            

                // creating part 1 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_1 = _plateHoles_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_1_bounds = switchPlateWithStandLeft__part_1.getBounds();
                let switchPlateWithStandLeft__part_1_x = switchPlateWithStandLeft__part_1_bounds[0].x + (switchPlateWithStandLeft__part_1_bounds[1].x - switchPlateWithStandLeft__part_1_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_1_y = switchPlateWithStandLeft__part_1_bounds[0].y + (switchPlateWithStandLeft__part_1_bounds[1].y - switchPlateWithStandLeft__part_1_bounds[0].y) / 2
                switchPlateWithStandLeft__part_1 = translate([-switchPlateWithStandLeft__part_1_x, -switchPlateWithStandLeft__part_1_y, 0], switchPlateWithStandLeft__part_1);
                switchPlateWithStandLeft__part_1 = rotate([0,0,0], switchPlateWithStandLeft__part_1);
                switchPlateWithStandLeft__part_1 = translate([switchPlateWithStandLeft__part_1_x, switchPlateWithStandLeft__part_1_y, 0], switchPlateWithStandLeft__part_1);

                switchPlateWithStandLeft__part_1 = translate([0,0,0], switchPlateWithStandLeft__part_1);
                result = result.subtract(switchPlateWithStandLeft__part_1);
                
            

                // creating part 2 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_2 = _switches_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_2_bounds = switchPlateWithStandLeft__part_2.getBounds();
                let switchPlateWithStandLeft__part_2_x = switchPlateWithStandLeft__part_2_bounds[0].x + (switchPlateWithStandLeft__part_2_bounds[1].x - switchPlateWithStandLeft__part_2_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_2_y = switchPlateWithStandLeft__part_2_bounds[0].y + (switchPlateWithStandLeft__part_2_bounds[1].y - switchPlateWithStandLeft__part_2_bounds[0].y) / 2
                switchPlateWithStandLeft__part_2 = translate([-switchPlateWithStandLeft__part_2_x, -switchPlateWithStandLeft__part_2_y, 0], switchPlateWithStandLeft__part_2);
                switchPlateWithStandLeft__part_2 = rotate([0,0,0], switchPlateWithStandLeft__part_2);
                switchPlateWithStandLeft__part_2 = translate([switchPlateWithStandLeft__part_2_x, switchPlateWithStandLeft__part_2_y, 0], switchPlateWithStandLeft__part_2);

                switchPlateWithStandLeft__part_2 = translate([0,0,0], switchPlateWithStandLeft__part_2);
                result = result.subtract(switchPlateWithStandLeft__part_2);
                
            

                // creating part 3 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_3 = _rotary_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_3_bounds = switchPlateWithStandLeft__part_3.getBounds();
                let switchPlateWithStandLeft__part_3_x = switchPlateWithStandLeft__part_3_bounds[0].x + (switchPlateWithStandLeft__part_3_bounds[1].x - switchPlateWithStandLeft__part_3_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_3_y = switchPlateWithStandLeft__part_3_bounds[0].y + (switchPlateWithStandLeft__part_3_bounds[1].y - switchPlateWithStandLeft__part_3_bounds[0].y) / 2
                switchPlateWithStandLeft__part_3 = translate([-switchPlateWithStandLeft__part_3_x, -switchPlateWithStandLeft__part_3_y, 0], switchPlateWithStandLeft__part_3);
                switchPlateWithStandLeft__part_3 = rotate([0,0,0], switchPlateWithStandLeft__part_3);
                switchPlateWithStandLeft__part_3 = translate([switchPlateWithStandLeft__part_3_x, switchPlateWithStandLeft__part_3_y, 0], switchPlateWithStandLeft__part_3);

                switchPlateWithStandLeft__part_3 = translate([0,0,0], switchPlateWithStandLeft__part_3);
                result = result.subtract(switchPlateWithStandLeft__part_3);
                
            

                // creating part 4 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_4 = _XLextraArea_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_4_bounds = switchPlateWithStandLeft__part_4.getBounds();
                let switchPlateWithStandLeft__part_4_x = switchPlateWithStandLeft__part_4_bounds[0].x + (switchPlateWithStandLeft__part_4_bounds[1].x - switchPlateWithStandLeft__part_4_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_4_y = switchPlateWithStandLeft__part_4_bounds[0].y + (switchPlateWithStandLeft__part_4_bounds[1].y - switchPlateWithStandLeft__part_4_bounds[0].y) / 2
                switchPlateWithStandLeft__part_4 = translate([-switchPlateWithStandLeft__part_4_x, -switchPlateWithStandLeft__part_4_y, 0], switchPlateWithStandLeft__part_4);
                switchPlateWithStandLeft__part_4 = rotate([0,0,0], switchPlateWithStandLeft__part_4);
                switchPlateWithStandLeft__part_4 = translate([switchPlateWithStandLeft__part_4_x, switchPlateWithStandLeft__part_4_y, 0], switchPlateWithStandLeft__part_4);

                switchPlateWithStandLeft__part_4 = translate([0,0,0], switchPlateWithStandLeft__part_4);
                result = result.subtract(switchPlateWithStandLeft__part_4);
                
            

                // creating part 5 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_5 = _extraAreaUp_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_5_bounds = switchPlateWithStandLeft__part_5.getBounds();
                let switchPlateWithStandLeft__part_5_x = switchPlateWithStandLeft__part_5_bounds[0].x + (switchPlateWithStandLeft__part_5_bounds[1].x - switchPlateWithStandLeft__part_5_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_5_y = switchPlateWithStandLeft__part_5_bounds[0].y + (switchPlateWithStandLeft__part_5_bounds[1].y - switchPlateWithStandLeft__part_5_bounds[0].y) / 2
                switchPlateWithStandLeft__part_5 = translate([-switchPlateWithStandLeft__part_5_x, -switchPlateWithStandLeft__part_5_y, 0], switchPlateWithStandLeft__part_5);
                switchPlateWithStandLeft__part_5 = rotate([0,0,0], switchPlateWithStandLeft__part_5);
                switchPlateWithStandLeft__part_5 = translate([switchPlateWithStandLeft__part_5_x, switchPlateWithStandLeft__part_5_y, 0], switchPlateWithStandLeft__part_5);

                switchPlateWithStandLeft__part_5 = translate([-1,-0.5,0], switchPlateWithStandLeft__part_5);
                result = result.union(switchPlateWithStandLeft__part_5);
                
            

                // creating part 6 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_6 = stand_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_6_bounds = switchPlateWithStandLeft__part_6.getBounds();
                let switchPlateWithStandLeft__part_6_x = switchPlateWithStandLeft__part_6_bounds[0].x + (switchPlateWithStandLeft__part_6_bounds[1].x - switchPlateWithStandLeft__part_6_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_6_y = switchPlateWithStandLeft__part_6_bounds[0].y + (switchPlateWithStandLeft__part_6_bounds[1].y - switchPlateWithStandLeft__part_6_bounds[0].y) / 2
                switchPlateWithStandLeft__part_6 = translate([-switchPlateWithStandLeft__part_6_x, -switchPlateWithStandLeft__part_6_y, 0], switchPlateWithStandLeft__part_6);
                switchPlateWithStandLeft__part_6 = rotate([0,0,0], switchPlateWithStandLeft__part_6);
                switchPlateWithStandLeft__part_6 = translate([switchPlateWithStandLeft__part_6_x, switchPlateWithStandLeft__part_6_y, 0], switchPlateWithStandLeft__part_6);

                switchPlateWithStandLeft__part_6 = translate([-1,-0.5,0], switchPlateWithStandLeft__part_6);
                result = result.union(switchPlateWithStandLeft__part_6);
                
            

                // creating part 7 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_7 = _trrsStandOpening_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_7_bounds = switchPlateWithStandLeft__part_7.getBounds();
                let switchPlateWithStandLeft__part_7_x = switchPlateWithStandLeft__part_7_bounds[0].x + (switchPlateWithStandLeft__part_7_bounds[1].x - switchPlateWithStandLeft__part_7_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_7_y = switchPlateWithStandLeft__part_7_bounds[0].y + (switchPlateWithStandLeft__part_7_bounds[1].y - switchPlateWithStandLeft__part_7_bounds[0].y) / 2
                switchPlateWithStandLeft__part_7 = translate([-switchPlateWithStandLeft__part_7_x, -switchPlateWithStandLeft__part_7_y, 0], switchPlateWithStandLeft__part_7);
                switchPlateWithStandLeft__part_7 = rotate([0,0,0], switchPlateWithStandLeft__part_7);
                switchPlateWithStandLeft__part_7 = translate([switchPlateWithStandLeft__part_7_x, switchPlateWithStandLeft__part_7_y, 0], switchPlateWithStandLeft__part_7);

                switchPlateWithStandLeft__part_7 = translate([2,0,0], switchPlateWithStandLeft__part_7);
                result = result.subtract(switchPlateWithStandLeft__part_7);
                
            

                // creating part 8 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_8 = _opening_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_8_bounds = switchPlateWithStandLeft__part_8.getBounds();
                let switchPlateWithStandLeft__part_8_x = switchPlateWithStandLeft__part_8_bounds[0].x + (switchPlateWithStandLeft__part_8_bounds[1].x - switchPlateWithStandLeft__part_8_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_8_y = switchPlateWithStandLeft__part_8_bounds[0].y + (switchPlateWithStandLeft__part_8_bounds[1].y - switchPlateWithStandLeft__part_8_bounds[0].y) / 2
                switchPlateWithStandLeft__part_8 = translate([-switchPlateWithStandLeft__part_8_x, -switchPlateWithStandLeft__part_8_y, 0], switchPlateWithStandLeft__part_8);
                switchPlateWithStandLeft__part_8 = rotate([0,0,0], switchPlateWithStandLeft__part_8);
                switchPlateWithStandLeft__part_8 = translate([switchPlateWithStandLeft__part_8_x, switchPlateWithStandLeft__part_8_y, 0], switchPlateWithStandLeft__part_8);

                switchPlateWithStandLeft__part_8 = translate([0,0,0], switchPlateWithStandLeft__part_8);
                result = result.subtract(switchPlateWithStandLeft__part_8);
                
            

                // creating part 9 of case switchPlateWithStandLeft
                let switchPlateWithStandLeft__part_9 = _resetOpening_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandLeft__part_9_bounds = switchPlateWithStandLeft__part_9.getBounds();
                let switchPlateWithStandLeft__part_9_x = switchPlateWithStandLeft__part_9_bounds[0].x + (switchPlateWithStandLeft__part_9_bounds[1].x - switchPlateWithStandLeft__part_9_bounds[0].x) / 2
                let switchPlateWithStandLeft__part_9_y = switchPlateWithStandLeft__part_9_bounds[0].y + (switchPlateWithStandLeft__part_9_bounds[1].y - switchPlateWithStandLeft__part_9_bounds[0].y) / 2
                switchPlateWithStandLeft__part_9 = translate([-switchPlateWithStandLeft__part_9_x, -switchPlateWithStandLeft__part_9_y, 0], switchPlateWithStandLeft__part_9);
                switchPlateWithStandLeft__part_9 = rotate([0,0,0], switchPlateWithStandLeft__part_9);
                switchPlateWithStandLeft__part_9 = translate([switchPlateWithStandLeft__part_9_x, switchPlateWithStandLeft__part_9_y, 0], switchPlateWithStandLeft__part_9);

                switchPlateWithStandLeft__part_9 = translate([0,0,0], switchPlateWithStandLeft__part_9);
                result = result.subtract(switchPlateWithStandLeft__part_9);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchPlateWithStandLeft_case_fn();
            }

        