function board_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[88.475,-107.5029616],[88.475,-53.4606148]]).appendArc([91.4595264,-49.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([107.354039,-45.4198716]).appendArc([107.6992526,-45.3453826],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.2221364,-40.6673686]).appendArc([136.3718892,-40.6396559],{"radius":4,"clockwise":true,"large":false}).appendPoint([211.9167923,-49.7612354]).appendArc([215.4368587,-53.6730131],{"radius":4,"clockwise":true,"large":false}).appendPoint([216.4689619,-123.1917781]).appendArc([217.5814403,-125.9009301],{"radius":4,"clockwise":false,"large":false}).appendPoint([232.992932,-141.9723461]).appendArc([232.8335696,-147.6665484],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2228245,-165.0180804]).appendArc([209.3250765,-165.4526133],{"radius":4,"clockwise":true,"large":false}).appendPoint([157.2577111,-131.8273612]).appendArc([155.5371778,-127.5378986],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.2709756,-116.0922011]).appendArc([154.3584351,-111.1630031],{"radius":4,"clockwise":false,"large":false}).appendPoint([92.4969776,-111.5029012]).appendArc([88.475,-107.5029616],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
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


function _extraArea_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[223.825,-49.38],[186.2965,-44.37]]).appendPoint([186.2965,-107.025]).appendPoint([248.9812534,-146.590306]).appendPoint([223.825,-49.38]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
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
            
            

                function _extraArea_case_fn() {
                    

                // creating part 0 of case _extraArea
                let _extraArea__part_0 = _extraArea_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _extraArea__part_0_bounds = _extraArea__part_0.getBounds();
                let _extraArea__part_0_x = _extraArea__part_0_bounds[0].x + (_extraArea__part_0_bounds[1].x - _extraArea__part_0_bounds[0].x) / 2
                let _extraArea__part_0_y = _extraArea__part_0_bounds[0].y + (_extraArea__part_0_bounds[1].y - _extraArea__part_0_bounds[0].y) / 2
                _extraArea__part_0 = translate([-_extraArea__part_0_x, -_extraArea__part_0_y, 0], _extraArea__part_0);
                _extraArea__part_0 = rotate([0,0,0], _extraArea__part_0);
                _extraArea__part_0 = translate([_extraArea__part_0_x, _extraArea__part_0_y, 0], _extraArea__part_0);

                _extraArea__part_0 = translate([0,0,0], _extraArea__part_0);
                let result = _extraArea__part_0;
                
            
                    return result;
                }
            
            

                function switchPlate_case_fn() {
                    

                // creating part 0 of case switchPlate
                let switchPlate__part_0 = _switchPlate_case_fn();

                // make sure that rotations are relative
                let switchPlate__part_0_bounds = switchPlate__part_0.getBounds();
                let switchPlate__part_0_x = switchPlate__part_0_bounds[0].x + (switchPlate__part_0_bounds[1].x - switchPlate__part_0_bounds[0].x) / 2
                let switchPlate__part_0_y = switchPlate__part_0_bounds[0].y + (switchPlate__part_0_bounds[1].y - switchPlate__part_0_bounds[0].y) / 2
                switchPlate__part_0 = translate([-switchPlate__part_0_x, -switchPlate__part_0_y, 0], switchPlate__part_0);
                switchPlate__part_0 = rotate([0,0,0], switchPlate__part_0);
                switchPlate__part_0 = translate([switchPlate__part_0_x, switchPlate__part_0_y, 0], switchPlate__part_0);

                switchPlate__part_0 = translate([0,0,0], switchPlate__part_0);
                let result = switchPlate__part_0;
                
            

                // creating part 1 of case switchPlate
                let switchPlate__part_1 = _switches_case_fn();

                // make sure that rotations are relative
                let switchPlate__part_1_bounds = switchPlate__part_1.getBounds();
                let switchPlate__part_1_x = switchPlate__part_1_bounds[0].x + (switchPlate__part_1_bounds[1].x - switchPlate__part_1_bounds[0].x) / 2
                let switchPlate__part_1_y = switchPlate__part_1_bounds[0].y + (switchPlate__part_1_bounds[1].y - switchPlate__part_1_bounds[0].y) / 2
                switchPlate__part_1 = translate([-switchPlate__part_1_x, -switchPlate__part_1_y, 0], switchPlate__part_1);
                switchPlate__part_1 = rotate([0,0,0], switchPlate__part_1);
                switchPlate__part_1 = translate([switchPlate__part_1_x, switchPlate__part_1_y, 0], switchPlate__part_1);

                switchPlate__part_1 = translate([0,0,0], switchPlate__part_1);
                result = result.subtract(switchPlate__part_1);
                
            

                // creating part 2 of case switchPlate
                let switchPlate__part_2 = _extraArea_case_fn();

                // make sure that rotations are relative
                let switchPlate__part_2_bounds = switchPlate__part_2.getBounds();
                let switchPlate__part_2_x = switchPlate__part_2_bounds[0].x + (switchPlate__part_2_bounds[1].x - switchPlate__part_2_bounds[0].x) / 2
                let switchPlate__part_2_y = switchPlate__part_2_bounds[0].y + (switchPlate__part_2_bounds[1].y - switchPlate__part_2_bounds[0].y) / 2
                switchPlate__part_2 = translate([-switchPlate__part_2_x, -switchPlate__part_2_y, 0], switchPlate__part_2);
                switchPlate__part_2 = rotate([0,0,0], switchPlate__part_2);
                switchPlate__part_2 = translate([switchPlate__part_2_x, switchPlate__part_2_y, 0], switchPlate__part_2);

                switchPlate__part_2 = translate([0,0,0], switchPlate__part_2);
                result = result.subtract(switchPlate__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchPlate_case_fn();
            }

        