function xlBoardRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[398.775,-109.0255699],[398.775,-51.9807308]]).appendArc([395.7661168,-48.1054647],{"radius":4,"clockwise":false,"large":false}).appendPoint([379.3798764,-43.9146103]).appendArc([379.0674564,-43.8478757],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.7311336,-38.9691933]).appendArc([349.574576,-38.9398406],{"radius":4,"clockwise":false,"large":false}).appendPoint([270.4774269,-48.4573603]).appendArc([266.9553027,-52.4177495],{"radius":4,"clockwise":false,"large":false}).appendPoint([266.7629825,-122.5795349]).appendArc([265.721581,-125.2605556],{"radius":4,"clockwise":true,"large":false}).appendPoint([249.4158507,-143.1811095]).appendArc([249.7339066,-148.8776934],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5409307,-168.0423314]).appendArc([276.3549456,-168.3957012],{"radius":4,"clockwise":false,"large":false}).appendPoint([330.8937631,-133.0947649]).appendArc([332.596873,-128.7508987],{"radius":4,"clockwise":false,"large":false}).appendPoint([329.8678289,-118.0201646]).appendArc([333.7438561,-113.034267],{"radius":4,"clockwise":true,"large":false}).appendPoint([394.77557,-113.0255699]).appendArc([398.775,-109.0255699],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function boardRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[397.775,-108.0029616],[397.775,-52.9807308]]).appendArc([394.7661168,-49.1054647],{"radius":4,"clockwise":false,"large":false}).appendPoint([378.3840287,-44.9156723]).appendArc([378.0631719,-44.8474944],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.5263675,-40.1671143]).appendArc([349.3795658,-40.1390463],{"radius":4,"clockwise":false,"large":false}).appendPoint([273.3268933,-49.2646074]).appendArc([269.8040462,-53.1661926],{"radius":4,"clockwise":false,"large":false}).appendPoint([268.5802433,-123.1604171]).appendArc([267.4967761,-125.8286286],{"radius":4,"clockwise":true,"large":false}).appendPoint([252.1923961,-142.1266974]).appendArc([252.3572233,-147.7685369],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.1573854,-165.5806373]).appendArc([276.0992869,-166.0236306],{"radius":4,"clockwise":false,"large":false}).appendPoint([328.863507,-131.4832092]).appendArc([330.5604892,-127.1957212],{"radius":4,"clockwise":false,"large":false}).appendPoint([327.9973894,-116.603822]).appendArc([331.9071565,-111.6630888],{"radius":4,"clockwise":true,"large":false}).appendPoint([393.7530224,-112.0029012]).appendArc([397.775,-108.0029616],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _wallOpeningRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[281.5,-50.925],[291.5,-50.925]]).appendPoint([291.5,-42.925]).appendPoint([281.5,-42.925]).appendPoint([281.5,-50.925]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _wallOpeningFillUsbRight_extrude_3_8_outline_fn(){
    return new CSG.Path2D([[281.5901076,-48.2443555],[291.5353266,-47.1990708]]).appendPoint([291.4098924,-46.0056445]).appendPoint([281.4646734,-47.0509292]).appendPoint([281.5901076,-48.2443555]).close().innerToCAG()
.extrude({ offset: [0, 0, 3.8] });
}


function _trrsWallOpeningRight_extrude_8_2_outline_fn(){
    return new CSG.Path2D([[265.865,-92.975],[270.865,-92.975]]).appendPoint([270.865,-86.975]).appendPoint([265.865,-86.975]).appendPoint([265.865,-92.975]).close().innerToCAG()
.extrude({ offset: [0, 0, 8.2] });
}


function _trrsWallOpeningFillRight_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[266.7878294,-92.9531639],[269.2374562,-92.9959223]]).appendPoint([269.3421706,-86.9968361]).appendPoint([266.8925438,-86.9540777]).appendPoint([266.7878294,-92.9531639]).close().innerToCAG()
.extrude({ offset: [0, 0, 6.6] });
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
            
            
        
            function main() {
                return wallRight_case_fn();
            }

        