function _XLextraArea_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[216.705,-49.381],[187.7965,-46.074]]).appendPoint([187.7965,-94.3425]).appendPoint([217.005,-94.3425]).appendPoint([216.705,-49.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.6] });
}


function _extraArea_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[215.205,-50.381],[188.7965,-47.174]]).appendPoint([188.7965,-94.0425]).appendPoint([216.005,-94.0425]).appendPoint([215.205,-50.381]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.6] });
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
            
            
        
            function main() {
                return stand_case_fn();
            }

        