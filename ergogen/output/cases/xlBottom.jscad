function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.475,-108.525574],[87.475,-52.4606148]]).appendArc([90.4595264,-48.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.3581857,-44.4187833]).appendArc([106.6949625,-44.3457375],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.0188664,-39.4691933]).appendArc([136.175424,-39.4398406],{"radius":4,"clockwise":true,"large":false}).appendPoint([215.2391648,-48.9533404]).appendArc([218.7612154,-52.9513327],{"radius":4,"clockwise":true,"large":false}).appendPoint([218.2975197,-122.5765677]).appendArc([219.3893773,-125.3496994],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.2262646,-143.1770069]).appendArc([235.9587385,-148.9280986],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2090693,-168.0423314]).appendArc([209.3950544,-168.3957012],{"radius":4,"clockwise":true,"large":false}).appendPoint([154.8402519,-133.0844185]).appendArc([153.1310115,-128.7649799],{"radius":4,"clockwise":true,"large":false}).appendPoint([155.9215855,-117.4957365]).appendArc([152.0394317,-112.5342665],{"radius":4,"clockwise":false,"large":false}).appendPoint([91.474426,-112.525574]).appendArc([87.475,-108.525574],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        