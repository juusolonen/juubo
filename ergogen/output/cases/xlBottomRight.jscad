function xlBoardRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[398.775,-109.0255699],[398.775,-51.9807308]]).appendArc([395.7661168,-48.1054647],{"radius":4,"clockwise":false,"large":false}).appendPoint([379.3798764,-43.9146103]).appendArc([379.0674564,-43.8478757],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.7311336,-38.9691933]).appendArc([349.574576,-38.9398406],{"radius":4,"clockwise":false,"large":false}).appendPoint([270.4774269,-48.4573603]).appendArc([266.9553027,-52.4177495],{"radius":4,"clockwise":false,"large":false}).appendPoint([266.7629825,-122.5795349]).appendArc([265.721581,-125.2605556],{"radius":4,"clockwise":true,"large":false}).appendPoint([249.4158507,-143.1811095]).appendArc([249.7339066,-148.8776934],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5409307,-168.0423314]).appendArc([276.3549456,-168.3957012],{"radius":4,"clockwise":false,"large":false}).appendPoint([330.8937631,-133.0947649]).appendArc([332.596873,-128.7508987],{"radius":4,"clockwise":false,"large":false}).appendPoint([329.8678289,-118.0201646]).appendArc([333.7438561,-113.034267],{"radius":4,"clockwise":true,"large":false}).appendPoint([394.77557,-113.0255699]).appendArc([398.775,-109.0255699],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlBottomRight_case_fn();
            }

        