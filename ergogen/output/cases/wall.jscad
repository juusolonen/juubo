function xlBoard_extrude_10_2_outline_fn(){
    return new CSG.Path2D([[86.975,-109.0255699],[86.975,-51.9807308]]).appendArc([89.9838832,-48.1054647],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.3701236,-43.9146103]).appendArc([106.6825436,-43.8478757],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.0188664,-38.9691933]).appendArc([136.175424,-38.9398406],{"radius":4,"clockwise":true,"large":false}).appendPoint([215.2725731,-48.4573603]).appendArc([218.7946973,-52.4177495],{"radius":4,"clockwise":true,"large":false}).appendPoint([218.9870175,-122.5795349]).appendArc([220.028419,-125.2605556],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.3341493,-143.1811095]).appendArc([236.0160934,-148.8776934],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2090693,-168.0423314]).appendArc([209.3950544,-168.3957012],{"radius":4,"clockwise":true,"large":false}).appendPoint([154.8562369,-133.0947649]).appendArc([153.153127,-128.7508987],{"radius":4,"clockwise":true,"large":false}).appendPoint([155.8821711,-118.0201646]).appendArc([152.0061439,-113.034267],{"radius":4,"clockwise":false,"large":false}).appendPoint([90.97443,-113.0255699]).appendArc([86.975,-109.0255699],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10.2] });
}


function board_extrude_10_2_outline_fn(){
    return new CSG.Path2D([[87.975,-108.0029616],[87.975,-52.9807308]]).appendArc([90.9838832,-49.1054647],{"radius":4,"clockwise":true,"large":false}).appendPoint([107.3659713,-44.9156723]).appendArc([107.6868281,-44.8474944],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.2236325,-40.1671143]).appendArc([136.3704342,-40.1390463],{"radius":4,"clockwise":true,"large":false}).appendPoint([212.4231067,-49.2646074]).appendArc([215.9459538,-53.1661926],{"radius":4,"clockwise":true,"large":false}).appendPoint([217.1697567,-123.1604171]).appendArc([218.2532239,-125.8286286],{"radius":4,"clockwise":false,"large":false}).appendPoint([233.5576039,-142.1266974]).appendArc([233.3927767,-147.7685369],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.5926146,-165.5806373]).appendArc([209.6507131,-166.0236306],{"radius":4,"clockwise":true,"large":false}).appendPoint([156.886493,-131.4832092]).appendArc([155.1895108,-127.1957212],{"radius":4,"clockwise":true,"large":false}).appendPoint([157.7526106,-116.603822]).appendArc([153.8428435,-111.6630888],{"radius":4,"clockwise":false,"large":false}).appendPoint([91.9969776,-112.0029012]).appendArc([87.975,-108.0029616],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10.2] });
}


function _wallOpening_extrude_10_2_outline_fn(){
    return new CSG.Path2D([[194.25,-50.925],[204.25,-50.925]]).appendPoint([204.25,-42.925]).appendPoint([194.25,-42.925]).appendPoint([194.25,-50.925]).close().innerToCAG()
.extrude({ offset: [0, 0, 10.2] });
}


function _wallOpeningFillUsb_extrude_3_outline_fn(){
    return new CSG.Path2D([[194.2146734,-47.1990708],[204.1598924,-48.2443555]]).appendPoint([204.2853266,-47.0509292]).appendPoint([194.3401076,-46.0056445]).appendPoint([194.2146734,-47.1990708]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _trrsWallOpening_extrude_10_2_outline_fn(){
    return new CSG.Path2D([[214.885,-92.975],[219.885,-92.975]]).appendPoint([219.885,-86.975]).appendPoint([214.885,-86.975]).appendPoint([214.885,-92.975]).close().innerToCAG()
.extrude({ offset: [0, 0, 10.2] });
}


function _trrsWallOpeningFill_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[216.5125438,-92.9959223],[218.9621706,-92.9531639]]).appendPoint([218.8574562,-86.9540777]).appendPoint([216.4078294,-86.9968361]).appendPoint([216.5125438,-92.9959223]).close().innerToCAG()
.extrude({ offset: [0, 0, 6.6] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_10_2_outline_fn();

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
                let _innerWall__part_0 = board_extrude_10_2_outline_fn();

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
                let _opening__part_0 = _wallOpening_extrude_10_2_outline_fn();

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
                let _wallOpeningFill__part_0 = _wallOpeningFillUsb_extrude_3_outline_fn();

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
                let _trrsOpening__part_0 = _trrsWallOpening_extrude_10_2_outline_fn();

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
            
            
        
            function main() {
                return wall_case_fn();
            }

        