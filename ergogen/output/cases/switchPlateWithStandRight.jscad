function boardRight_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[397.775,-108.0029616],[397.775,-52.9807308]]).appendArc([394.7661168,-49.1054647],{"radius":4,"clockwise":false,"large":false}).appendPoint([378.3840287,-44.9156723]).appendArc([378.0631719,-44.8474944],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.5263675,-40.1671143]).appendArc([349.3795658,-40.1390463],{"radius":4,"clockwise":false,"large":false}).appendPoint([273.3268933,-49.2646074]).appendArc([269.8040462,-53.1661926],{"radius":4,"clockwise":false,"large":false}).appendPoint([268.5802433,-123.1604171]).appendArc([267.4967761,-125.8286286],{"radius":4,"clockwise":true,"large":false}).appendPoint([252.1923961,-142.1266974]).appendArc([252.3572233,-147.7685369],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.1573854,-165.5806373]).appendArc([276.0992869,-166.0236306],{"radius":4,"clockwise":false,"large":false}).appendPoint([328.863507,-131.4832092]).appendArc([330.5604892,-127.1957212],{"radius":4,"clockwise":false,"large":false}).appendPoint([327.9973894,-116.603822]).appendArc([331.9071565,-111.6630888],{"radius":4,"clockwise":true,"large":false}).appendPoint([393.7530224,-112.0029012]).appendArc([397.775,-108.0029616],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function _plateHoleRight_extrude_4_outline_fn(){
    return CAG.circle({"center":[319.075,-85.475],"radius":3.2})
.union(
    CAG.circle({"center":[278.9299884,-139.8551139],"radius":3.2})
).union(
    CAG.circle({"center":[301.1902283,-120.4810859],"radius":3.2})
).union(
    CAG.circle({"center":[376.225,-86.665],"radius":3.2})
).union(
    CAG.circle({"center":[319.075,-62.615],"radius":3.2})
).union(
    CAG.circle({"center":[376.225,-67.615],"radius":3.2})
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


function _rotaryRight_extrude_3_6_outline_fn(){
    return new CSG.Path2D([[279.5,-109.11],[293.5,-109.11]]).appendPoint([293.5,-95.11]).appendPoint([279.5,-95.11]).appendPoint([279.5,-109.11]).close().innerToCAG()
.extrude({ offset: [0, 0, 3.6] });
}


function _XLextraAreaRight_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[269.045,-49.381],[297.2535,-46.074]]).appendPoint([297.2535,-93.2925]).appendPoint([268.745,-93.2925]).appendPoint([269.045,-49.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function _extraAreaRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[270.545,-50.381],[296.2535,-47.174]]).appendPoint([296.2535,-92.9925]).appendPoint([269.745,-92.9925]).appendPoint([270.545,-50.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _XLextraAreaRight_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[269.045,-49.381],[297.2535,-46.074]]).appendPoint([297.2535,-93.2925]).appendPoint([268.745,-93.2925]).appendPoint([269.045,-49.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.6] });
}


function _extraAreaRight_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[270.545,-50.381],[296.2535,-47.174]]).appendPoint([296.2535,-92.9925]).appendPoint([269.745,-92.9925]).appendPoint([270.545,-50.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.6] });
}


function _trrsWallOpeningForStandRight_extrude_4_outline_fn(){
    return new CSG.Path2D([[263.365,-92.975],[273.365,-92.975]]).appendPoint([273.365,-86.975]).appendPoint([263.365,-86.975]).appendPoint([263.365,-92.975]).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function _wallOpeningRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[281.5,-50.925],[291.5,-50.925]]).appendPoint([291.5,-42.925]).appendPoint([281.5,-42.925]).appendPoint([281.5,-50.925]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _resetOpeningRight_extrude_8_outline_fn(){
    return new CSG.Path2D([[268.67,-60.01],[276.67,-60.01]]).appendPoint([276.67,-52.01]).appendPoint([268.67,-52.01]).appendPoint([268.67,-60.01]).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}




                function _switchPlateRight_case_fn() {
                    

                // creating part 0 of case _switchPlateRight
                let _switchPlateRight__part_0 = boardRight_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _switchPlateRight__part_0_bounds = _switchPlateRight__part_0.getBounds();
                let _switchPlateRight__part_0_x = _switchPlateRight__part_0_bounds[0].x + (_switchPlateRight__part_0_bounds[1].x - _switchPlateRight__part_0_bounds[0].x) / 2
                let _switchPlateRight__part_0_y = _switchPlateRight__part_0_bounds[0].y + (_switchPlateRight__part_0_bounds[1].y - _switchPlateRight__part_0_bounds[0].y) / 2
                _switchPlateRight__part_0 = translate([-_switchPlateRight__part_0_x, -_switchPlateRight__part_0_y, 0], _switchPlateRight__part_0);
                _switchPlateRight__part_0 = rotate([0,0,0], _switchPlateRight__part_0);
                _switchPlateRight__part_0 = translate([_switchPlateRight__part_0_x, _switchPlateRight__part_0_y, 0], _switchPlateRight__part_0);

                _switchPlateRight__part_0 = translate([0,0,0], _switchPlateRight__part_0);
                let result = _switchPlateRight__part_0;
                
            
                    return result;
                }
            
            

                function _plateHolesRight_case_fn() {
                    

                // creating part 0 of case _plateHolesRight
                let _plateHolesRight__part_0 = _plateHoleRight_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _plateHolesRight__part_0_bounds = _plateHolesRight__part_0.getBounds();
                let _plateHolesRight__part_0_x = _plateHolesRight__part_0_bounds[0].x + (_plateHolesRight__part_0_bounds[1].x - _plateHolesRight__part_0_bounds[0].x) / 2
                let _plateHolesRight__part_0_y = _plateHolesRight__part_0_bounds[0].y + (_plateHolesRight__part_0_bounds[1].y - _plateHolesRight__part_0_bounds[0].y) / 2
                _plateHolesRight__part_0 = translate([-_plateHolesRight__part_0_x, -_plateHolesRight__part_0_y, 0], _plateHolesRight__part_0);
                _plateHolesRight__part_0 = rotate([0,0,0], _plateHolesRight__part_0);
                _plateHolesRight__part_0 = translate([_plateHolesRight__part_0_x, _plateHolesRight__part_0_y, 0], _plateHolesRight__part_0);

                _plateHolesRight__part_0 = translate([0,0,0], _plateHolesRight__part_0);
                let result = _plateHolesRight__part_0;
                
            
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
            
            

                function _rotaryRight_case_fn() {
                    

                // creating part 0 of case _rotaryRight
                let _rotaryRight__part_0 = _rotaryRight_extrude_3_6_outline_fn();

                // make sure that rotations are relative
                let _rotaryRight__part_0_bounds = _rotaryRight__part_0.getBounds();
                let _rotaryRight__part_0_x = _rotaryRight__part_0_bounds[0].x + (_rotaryRight__part_0_bounds[1].x - _rotaryRight__part_0_bounds[0].x) / 2
                let _rotaryRight__part_0_y = _rotaryRight__part_0_bounds[0].y + (_rotaryRight__part_0_bounds[1].y - _rotaryRight__part_0_bounds[0].y) / 2
                _rotaryRight__part_0 = translate([-_rotaryRight__part_0_x, -_rotaryRight__part_0_y, 0], _rotaryRight__part_0);
                _rotaryRight__part_0 = rotate([0,0,0], _rotaryRight__part_0);
                _rotaryRight__part_0 = translate([_rotaryRight__part_0_x, _rotaryRight__part_0_y, 0], _rotaryRight__part_0);

                _rotaryRight__part_0 = translate([0,0,0], _rotaryRight__part_0);
                let result = _rotaryRight__part_0;
                
            
                    return result;
                }
            
            

                function _XLextraAreaRight_case_fn() {
                    

                // creating part 0 of case _XLextraAreaRight
                let _XLextraAreaRight__part_0 = _XLextraAreaRight_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _XLextraAreaRight__part_0_bounds = _XLextraAreaRight__part_0.getBounds();
                let _XLextraAreaRight__part_0_x = _XLextraAreaRight__part_0_bounds[0].x + (_XLextraAreaRight__part_0_bounds[1].x - _XLextraAreaRight__part_0_bounds[0].x) / 2
                let _XLextraAreaRight__part_0_y = _XLextraAreaRight__part_0_bounds[0].y + (_XLextraAreaRight__part_0_bounds[1].y - _XLextraAreaRight__part_0_bounds[0].y) / 2
                _XLextraAreaRight__part_0 = translate([-_XLextraAreaRight__part_0_x, -_XLextraAreaRight__part_0_y, 0], _XLextraAreaRight__part_0);
                _XLextraAreaRight__part_0 = rotate([0,0,0], _XLextraAreaRight__part_0);
                _XLextraAreaRight__part_0 = translate([_XLextraAreaRight__part_0_x, _XLextraAreaRight__part_0_y, 0], _XLextraAreaRight__part_0);

                _XLextraAreaRight__part_0 = translate([0,0,0], _XLextraAreaRight__part_0);
                let result = _XLextraAreaRight__part_0;
                
            
                    return result;
                }
            
            

                function _extraAreaUpRight_case_fn() {
                    

                // creating part 0 of case _extraAreaUpRight
                let _extraAreaUpRight__part_0 = _extraAreaRight_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _extraAreaUpRight__part_0_bounds = _extraAreaUpRight__part_0.getBounds();
                let _extraAreaUpRight__part_0_x = _extraAreaUpRight__part_0_bounds[0].x + (_extraAreaUpRight__part_0_bounds[1].x - _extraAreaUpRight__part_0_bounds[0].x) / 2
                let _extraAreaUpRight__part_0_y = _extraAreaUpRight__part_0_bounds[0].y + (_extraAreaUpRight__part_0_bounds[1].y - _extraAreaUpRight__part_0_bounds[0].y) / 2
                _extraAreaUpRight__part_0 = translate([-_extraAreaUpRight__part_0_x, -_extraAreaUpRight__part_0_y, 0], _extraAreaUpRight__part_0);
                _extraAreaUpRight__part_0 = rotate([0,0,0], _extraAreaUpRight__part_0);
                _extraAreaUpRight__part_0 = translate([_extraAreaUpRight__part_0_x, _extraAreaUpRight__part_0_y, 0], _extraAreaUpRight__part_0);

                _extraAreaUpRight__part_0 = translate([0,0,8.6], _extraAreaUpRight__part_0);
                let result = _extraAreaUpRight__part_0;
                
            
                    return result;
                }
            
            

                function _standRight_case_fn() {
                    

                // creating part 0 of case _standRight
                let _standRight__part_0 = _outerStandRight_case_fn();

                // make sure that rotations are relative
                let _standRight__part_0_bounds = _standRight__part_0.getBounds();
                let _standRight__part_0_x = _standRight__part_0_bounds[0].x + (_standRight__part_0_bounds[1].x - _standRight__part_0_bounds[0].x) / 2
                let _standRight__part_0_y = _standRight__part_0_bounds[0].y + (_standRight__part_0_bounds[1].y - _standRight__part_0_bounds[0].y) / 2
                _standRight__part_0 = translate([-_standRight__part_0_x, -_standRight__part_0_y, 0], _standRight__part_0);
                _standRight__part_0 = rotate([0,0,0], _standRight__part_0);
                _standRight__part_0 = translate([_standRight__part_0_x, _standRight__part_0_y, 0], _standRight__part_0);

                _standRight__part_0 = translate([0,0,0], _standRight__part_0);
                let result = _standRight__part_0;
                
            

                // creating part 1 of case _standRight
                let _standRight__part_1 = _innerStandRight_case_fn();

                // make sure that rotations are relative
                let _standRight__part_1_bounds = _standRight__part_1.getBounds();
                let _standRight__part_1_x = _standRight__part_1_bounds[0].x + (_standRight__part_1_bounds[1].x - _standRight__part_1_bounds[0].x) / 2
                let _standRight__part_1_y = _standRight__part_1_bounds[0].y + (_standRight__part_1_bounds[1].y - _standRight__part_1_bounds[0].y) / 2
                _standRight__part_1 = translate([-_standRight__part_1_x, -_standRight__part_1_y, 0], _standRight__part_1);
                _standRight__part_1 = rotate([0,0,0], _standRight__part_1);
                _standRight__part_1 = translate([_standRight__part_1_x, _standRight__part_1_y, 0], _standRight__part_1);

                _standRight__part_1 = translate([0,0,0], _standRight__part_1);
                result = result.subtract(_standRight__part_1);
                
            
                    return result;
                }
            
            

                function _outerStandRight_case_fn() {
                    

                // creating part 0 of case _outerStandRight
                let _outerStandRight__part_0 = _XLextraAreaRight_extrude_9_6_outline_fn();

                // make sure that rotations are relative
                let _outerStandRight__part_0_bounds = _outerStandRight__part_0.getBounds();
                let _outerStandRight__part_0_x = _outerStandRight__part_0_bounds[0].x + (_outerStandRight__part_0_bounds[1].x - _outerStandRight__part_0_bounds[0].x) / 2
                let _outerStandRight__part_0_y = _outerStandRight__part_0_bounds[0].y + (_outerStandRight__part_0_bounds[1].y - _outerStandRight__part_0_bounds[0].y) / 2
                _outerStandRight__part_0 = translate([-_outerStandRight__part_0_x, -_outerStandRight__part_0_y, 0], _outerStandRight__part_0);
                _outerStandRight__part_0 = rotate([0,0,0], _outerStandRight__part_0);
                _outerStandRight__part_0 = translate([_outerStandRight__part_0_x, _outerStandRight__part_0_y, 0], _outerStandRight__part_0);

                _outerStandRight__part_0 = translate([0,0,0], _outerStandRight__part_0);
                let result = _outerStandRight__part_0;
                
            
                    return result;
                }
            
            

                function _innerStandRight_case_fn() {
                    

                // creating part 0 of case _innerStandRight
                let _innerStandRight__part_0 = _extraAreaRight_extrude_9_6_outline_fn();

                // make sure that rotations are relative
                let _innerStandRight__part_0_bounds = _innerStandRight__part_0.getBounds();
                let _innerStandRight__part_0_x = _innerStandRight__part_0_bounds[0].x + (_innerStandRight__part_0_bounds[1].x - _innerStandRight__part_0_bounds[0].x) / 2
                let _innerStandRight__part_0_y = _innerStandRight__part_0_bounds[0].y + (_innerStandRight__part_0_bounds[1].y - _innerStandRight__part_0_bounds[0].y) / 2
                _innerStandRight__part_0 = translate([-_innerStandRight__part_0_x, -_innerStandRight__part_0_y, 0], _innerStandRight__part_0);
                _innerStandRight__part_0 = rotate([0,0,0], _innerStandRight__part_0);
                _innerStandRight__part_0 = translate([_innerStandRight__part_0_x, _innerStandRight__part_0_y, 0], _innerStandRight__part_0);

                _innerStandRight__part_0 = translate([0,0,0], _innerStandRight__part_0);
                let result = _innerStandRight__part_0;
                
            
                    return result;
                }
            
            

                function _trrsStandOpeningRight_case_fn() {
                    

                // creating part 0 of case _trrsStandOpeningRight
                let _trrsStandOpeningRight__part_0 = _trrsWallOpeningForStandRight_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _trrsStandOpeningRight__part_0_bounds = _trrsStandOpeningRight__part_0.getBounds();
                let _trrsStandOpeningRight__part_0_x = _trrsStandOpeningRight__part_0_bounds[0].x + (_trrsStandOpeningRight__part_0_bounds[1].x - _trrsStandOpeningRight__part_0_bounds[0].x) / 2
                let _trrsStandOpeningRight__part_0_y = _trrsStandOpeningRight__part_0_bounds[0].y + (_trrsStandOpeningRight__part_0_bounds[1].y - _trrsStandOpeningRight__part_0_bounds[0].y) / 2
                _trrsStandOpeningRight__part_0 = translate([-_trrsStandOpeningRight__part_0_x, -_trrsStandOpeningRight__part_0_y, 0], _trrsStandOpeningRight__part_0);
                _trrsStandOpeningRight__part_0 = rotate([0,0,0], _trrsStandOpeningRight__part_0);
                _trrsStandOpeningRight__part_0 = translate([_trrsStandOpeningRight__part_0_x, _trrsStandOpeningRight__part_0_y, 0], _trrsStandOpeningRight__part_0);

                _trrsStandOpeningRight__part_0 = translate([0,0,0], _trrsStandOpeningRight__part_0);
                let result = _trrsStandOpeningRight__part_0;
                
            
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
            
            

                function _resetOpeningRight_case_fn() {
                    

                // creating part 0 of case _resetOpeningRight
                let _resetOpeningRight__part_0 = _resetOpeningRight_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _resetOpeningRight__part_0_bounds = _resetOpeningRight__part_0.getBounds();
                let _resetOpeningRight__part_0_x = _resetOpeningRight__part_0_bounds[0].x + (_resetOpeningRight__part_0_bounds[1].x - _resetOpeningRight__part_0_bounds[0].x) / 2
                let _resetOpeningRight__part_0_y = _resetOpeningRight__part_0_bounds[0].y + (_resetOpeningRight__part_0_bounds[1].y - _resetOpeningRight__part_0_bounds[0].y) / 2
                _resetOpeningRight__part_0 = translate([-_resetOpeningRight__part_0_x, -_resetOpeningRight__part_0_y, 0], _resetOpeningRight__part_0);
                _resetOpeningRight__part_0 = rotate([0,0,0], _resetOpeningRight__part_0);
                _resetOpeningRight__part_0 = translate([_resetOpeningRight__part_0_x, _resetOpeningRight__part_0_y, 0], _resetOpeningRight__part_0);

                _resetOpeningRight__part_0 = translate([0,0,0], _resetOpeningRight__part_0);
                let result = _resetOpeningRight__part_0;
                
            
                    return result;
                }
            
            

                function switchPlateWithStandRight_case_fn() {
                    

                // creating part 0 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_0 = _switchPlateRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_0_bounds = switchPlateWithStandRight__part_0.getBounds();
                let switchPlateWithStandRight__part_0_x = switchPlateWithStandRight__part_0_bounds[0].x + (switchPlateWithStandRight__part_0_bounds[1].x - switchPlateWithStandRight__part_0_bounds[0].x) / 2
                let switchPlateWithStandRight__part_0_y = switchPlateWithStandRight__part_0_bounds[0].y + (switchPlateWithStandRight__part_0_bounds[1].y - switchPlateWithStandRight__part_0_bounds[0].y) / 2
                switchPlateWithStandRight__part_0 = translate([-switchPlateWithStandRight__part_0_x, -switchPlateWithStandRight__part_0_y, 0], switchPlateWithStandRight__part_0);
                switchPlateWithStandRight__part_0 = rotate([0,0,0], switchPlateWithStandRight__part_0);
                switchPlateWithStandRight__part_0 = translate([switchPlateWithStandRight__part_0_x, switchPlateWithStandRight__part_0_y, 0], switchPlateWithStandRight__part_0);

                switchPlateWithStandRight__part_0 = translate([0,0,0], switchPlateWithStandRight__part_0);
                let result = switchPlateWithStandRight__part_0;
                
            

                // creating part 1 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_1 = _plateHolesRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_1_bounds = switchPlateWithStandRight__part_1.getBounds();
                let switchPlateWithStandRight__part_1_x = switchPlateWithStandRight__part_1_bounds[0].x + (switchPlateWithStandRight__part_1_bounds[1].x - switchPlateWithStandRight__part_1_bounds[0].x) / 2
                let switchPlateWithStandRight__part_1_y = switchPlateWithStandRight__part_1_bounds[0].y + (switchPlateWithStandRight__part_1_bounds[1].y - switchPlateWithStandRight__part_1_bounds[0].y) / 2
                switchPlateWithStandRight__part_1 = translate([-switchPlateWithStandRight__part_1_x, -switchPlateWithStandRight__part_1_y, 0], switchPlateWithStandRight__part_1);
                switchPlateWithStandRight__part_1 = rotate([0,0,0], switchPlateWithStandRight__part_1);
                switchPlateWithStandRight__part_1 = translate([switchPlateWithStandRight__part_1_x, switchPlateWithStandRight__part_1_y, 0], switchPlateWithStandRight__part_1);

                switchPlateWithStandRight__part_1 = translate([0,0,0], switchPlateWithStandRight__part_1);
                result = result.subtract(switchPlateWithStandRight__part_1);
                
            

                // creating part 2 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_2 = _switches_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_2_bounds = switchPlateWithStandRight__part_2.getBounds();
                let switchPlateWithStandRight__part_2_x = switchPlateWithStandRight__part_2_bounds[0].x + (switchPlateWithStandRight__part_2_bounds[1].x - switchPlateWithStandRight__part_2_bounds[0].x) / 2
                let switchPlateWithStandRight__part_2_y = switchPlateWithStandRight__part_2_bounds[0].y + (switchPlateWithStandRight__part_2_bounds[1].y - switchPlateWithStandRight__part_2_bounds[0].y) / 2
                switchPlateWithStandRight__part_2 = translate([-switchPlateWithStandRight__part_2_x, -switchPlateWithStandRight__part_2_y, 0], switchPlateWithStandRight__part_2);
                switchPlateWithStandRight__part_2 = rotate([0,0,0], switchPlateWithStandRight__part_2);
                switchPlateWithStandRight__part_2 = translate([switchPlateWithStandRight__part_2_x, switchPlateWithStandRight__part_2_y, 0], switchPlateWithStandRight__part_2);

                switchPlateWithStandRight__part_2 = translate([0,0,0], switchPlateWithStandRight__part_2);
                result = result.subtract(switchPlateWithStandRight__part_2);
                
            

                // creating part 3 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_3 = _rotaryRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_3_bounds = switchPlateWithStandRight__part_3.getBounds();
                let switchPlateWithStandRight__part_3_x = switchPlateWithStandRight__part_3_bounds[0].x + (switchPlateWithStandRight__part_3_bounds[1].x - switchPlateWithStandRight__part_3_bounds[0].x) / 2
                let switchPlateWithStandRight__part_3_y = switchPlateWithStandRight__part_3_bounds[0].y + (switchPlateWithStandRight__part_3_bounds[1].y - switchPlateWithStandRight__part_3_bounds[0].y) / 2
                switchPlateWithStandRight__part_3 = translate([-switchPlateWithStandRight__part_3_x, -switchPlateWithStandRight__part_3_y, 0], switchPlateWithStandRight__part_3);
                switchPlateWithStandRight__part_3 = rotate([0,0,0], switchPlateWithStandRight__part_3);
                switchPlateWithStandRight__part_3 = translate([switchPlateWithStandRight__part_3_x, switchPlateWithStandRight__part_3_y, 0], switchPlateWithStandRight__part_3);

                switchPlateWithStandRight__part_3 = translate([0,0,0], switchPlateWithStandRight__part_3);
                result = result.subtract(switchPlateWithStandRight__part_3);
                
            

                // creating part 4 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_4 = _XLextraAreaRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_4_bounds = switchPlateWithStandRight__part_4.getBounds();
                let switchPlateWithStandRight__part_4_x = switchPlateWithStandRight__part_4_bounds[0].x + (switchPlateWithStandRight__part_4_bounds[1].x - switchPlateWithStandRight__part_4_bounds[0].x) / 2
                let switchPlateWithStandRight__part_4_y = switchPlateWithStandRight__part_4_bounds[0].y + (switchPlateWithStandRight__part_4_bounds[1].y - switchPlateWithStandRight__part_4_bounds[0].y) / 2
                switchPlateWithStandRight__part_4 = translate([-switchPlateWithStandRight__part_4_x, -switchPlateWithStandRight__part_4_y, 0], switchPlateWithStandRight__part_4);
                switchPlateWithStandRight__part_4 = rotate([0,0,0], switchPlateWithStandRight__part_4);
                switchPlateWithStandRight__part_4 = translate([switchPlateWithStandRight__part_4_x, switchPlateWithStandRight__part_4_y, 0], switchPlateWithStandRight__part_4);

                switchPlateWithStandRight__part_4 = translate([0,0,0], switchPlateWithStandRight__part_4);
                result = result.subtract(switchPlateWithStandRight__part_4);
                
            

                // creating part 5 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_5 = _extraAreaUpRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_5_bounds = switchPlateWithStandRight__part_5.getBounds();
                let switchPlateWithStandRight__part_5_x = switchPlateWithStandRight__part_5_bounds[0].x + (switchPlateWithStandRight__part_5_bounds[1].x - switchPlateWithStandRight__part_5_bounds[0].x) / 2
                let switchPlateWithStandRight__part_5_y = switchPlateWithStandRight__part_5_bounds[0].y + (switchPlateWithStandRight__part_5_bounds[1].y - switchPlateWithStandRight__part_5_bounds[0].y) / 2
                switchPlateWithStandRight__part_5 = translate([-switchPlateWithStandRight__part_5_x, -switchPlateWithStandRight__part_5_y, 0], switchPlateWithStandRight__part_5);
                switchPlateWithStandRight__part_5 = rotate([0,0,0], switchPlateWithStandRight__part_5);
                switchPlateWithStandRight__part_5 = translate([switchPlateWithStandRight__part_5_x, switchPlateWithStandRight__part_5_y, 0], switchPlateWithStandRight__part_5);

                switchPlateWithStandRight__part_5 = translate([1,-0.5,0], switchPlateWithStandRight__part_5);
                result = result.union(switchPlateWithStandRight__part_5);
                
            

                // creating part 6 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_6 = _standRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_6_bounds = switchPlateWithStandRight__part_6.getBounds();
                let switchPlateWithStandRight__part_6_x = switchPlateWithStandRight__part_6_bounds[0].x + (switchPlateWithStandRight__part_6_bounds[1].x - switchPlateWithStandRight__part_6_bounds[0].x) / 2
                let switchPlateWithStandRight__part_6_y = switchPlateWithStandRight__part_6_bounds[0].y + (switchPlateWithStandRight__part_6_bounds[1].y - switchPlateWithStandRight__part_6_bounds[0].y) / 2
                switchPlateWithStandRight__part_6 = translate([-switchPlateWithStandRight__part_6_x, -switchPlateWithStandRight__part_6_y, 0], switchPlateWithStandRight__part_6);
                switchPlateWithStandRight__part_6 = rotate([0,0,0], switchPlateWithStandRight__part_6);
                switchPlateWithStandRight__part_6 = translate([switchPlateWithStandRight__part_6_x, switchPlateWithStandRight__part_6_y, 0], switchPlateWithStandRight__part_6);

                switchPlateWithStandRight__part_6 = translate([1,-0.5,0], switchPlateWithStandRight__part_6);
                result = result.union(switchPlateWithStandRight__part_6);
                
            

                // creating part 7 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_7 = _trrsStandOpeningRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_7_bounds = switchPlateWithStandRight__part_7.getBounds();
                let switchPlateWithStandRight__part_7_x = switchPlateWithStandRight__part_7_bounds[0].x + (switchPlateWithStandRight__part_7_bounds[1].x - switchPlateWithStandRight__part_7_bounds[0].x) / 2
                let switchPlateWithStandRight__part_7_y = switchPlateWithStandRight__part_7_bounds[0].y + (switchPlateWithStandRight__part_7_bounds[1].y - switchPlateWithStandRight__part_7_bounds[0].y) / 2
                switchPlateWithStandRight__part_7 = translate([-switchPlateWithStandRight__part_7_x, -switchPlateWithStandRight__part_7_y, 0], switchPlateWithStandRight__part_7);
                switchPlateWithStandRight__part_7 = rotate([0,0,0], switchPlateWithStandRight__part_7);
                switchPlateWithStandRight__part_7 = translate([switchPlateWithStandRight__part_7_x, switchPlateWithStandRight__part_7_y, 0], switchPlateWithStandRight__part_7);

                switchPlateWithStandRight__part_7 = translate([2,0,0], switchPlateWithStandRight__part_7);
                result = result.subtract(switchPlateWithStandRight__part_7);
                
            

                // creating part 8 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_8 = _openingRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_8_bounds = switchPlateWithStandRight__part_8.getBounds();
                let switchPlateWithStandRight__part_8_x = switchPlateWithStandRight__part_8_bounds[0].x + (switchPlateWithStandRight__part_8_bounds[1].x - switchPlateWithStandRight__part_8_bounds[0].x) / 2
                let switchPlateWithStandRight__part_8_y = switchPlateWithStandRight__part_8_bounds[0].y + (switchPlateWithStandRight__part_8_bounds[1].y - switchPlateWithStandRight__part_8_bounds[0].y) / 2
                switchPlateWithStandRight__part_8 = translate([-switchPlateWithStandRight__part_8_x, -switchPlateWithStandRight__part_8_y, 0], switchPlateWithStandRight__part_8);
                switchPlateWithStandRight__part_8 = rotate([0,0,0], switchPlateWithStandRight__part_8);
                switchPlateWithStandRight__part_8 = translate([switchPlateWithStandRight__part_8_x, switchPlateWithStandRight__part_8_y, 0], switchPlateWithStandRight__part_8);

                switchPlateWithStandRight__part_8 = translate([0,0,0], switchPlateWithStandRight__part_8);
                result = result.subtract(switchPlateWithStandRight__part_8);
                
            

                // creating part 9 of case switchPlateWithStandRight
                let switchPlateWithStandRight__part_9 = _resetOpeningRight_case_fn();

                // make sure that rotations are relative
                let switchPlateWithStandRight__part_9_bounds = switchPlateWithStandRight__part_9.getBounds();
                let switchPlateWithStandRight__part_9_x = switchPlateWithStandRight__part_9_bounds[0].x + (switchPlateWithStandRight__part_9_bounds[1].x - switchPlateWithStandRight__part_9_bounds[0].x) / 2
                let switchPlateWithStandRight__part_9_y = switchPlateWithStandRight__part_9_bounds[0].y + (switchPlateWithStandRight__part_9_bounds[1].y - switchPlateWithStandRight__part_9_bounds[0].y) / 2
                switchPlateWithStandRight__part_9 = translate([-switchPlateWithStandRight__part_9_x, -switchPlateWithStandRight__part_9_y, 0], switchPlateWithStandRight__part_9);
                switchPlateWithStandRight__part_9 = rotate([0,0,0], switchPlateWithStandRight__part_9);
                switchPlateWithStandRight__part_9 = translate([switchPlateWithStandRight__part_9_x, switchPlateWithStandRight__part_9_y, 0], switchPlateWithStandRight__part_9);

                switchPlateWithStandRight__part_9 = translate([0,0,0], switchPlateWithStandRight__part_9);
                result = result.subtract(switchPlateWithStandRight__part_9);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchPlateWithStandRight_case_fn();
            }

        