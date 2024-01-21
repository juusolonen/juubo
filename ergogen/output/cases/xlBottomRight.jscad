function xlBoardRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[398.275,-108.525574],[398.275,-52.4606148]]).appendArc([395.2904736,-48.5916597],{"radius":4,"clockwise":false,"large":false}).appendPoint([379.3918143,-44.4187833]).appendArc([379.0550375,-44.3457375],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.7311336,-39.4691933]).appendArc([349.574576,-39.4398406],{"radius":4,"clockwise":false,"large":false}).appendPoint([270.5108352,-48.9533404]).appendArc([266.9887846,-52.9513327],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.4524803,-122.5765677]).appendArc([266.3606227,-125.3496994],{"radius":4,"clockwise":true,"large":false}).appendPoint([249.5237354,-143.1770069]).appendArc([249.7912615,-148.9280986],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5409307,-168.0423314]).appendArc([276.3549456,-168.3957012],{"radius":4,"clockwise":false,"large":false}).appendPoint([330.9097481,-133.0844185]).appendArc([332.6189885,-128.7649799],{"radius":4,"clockwise":false,"large":false}).appendPoint([329.8284145,-117.4957365]).appendArc([333.7105683,-112.5342665],{"radius":4,"clockwise":true,"large":false}).appendPoint([394.275574,-112.525574]).appendArc([398.275,-108.525574],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
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

        