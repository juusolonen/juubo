function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[86.975,-109.0255699],[86.975,-51.9807308]]).appendArc([89.9838832,-48.1054647],{"radius":4,"clockwise":true,"large":false}).appendPoint([106.3701236,-43.9146103]).appendArc([106.6825436,-43.8478757],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.0188664,-38.9691933]).appendArc([136.175424,-38.9398406],{"radius":4,"clockwise":true,"large":false}).appendPoint([215.2725731,-48.4573603]).appendArc([218.7946973,-52.4177495],{"radius":4,"clockwise":true,"large":false}).appendPoint([218.9870175,-122.5795349]).appendArc([220.028419,-125.2605556],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.3341493,-143.1811095]).appendArc([236.0160934,-148.8776934],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2090693,-168.0423314]).appendArc([209.3950544,-168.3957012],{"radius":4,"clockwise":true,"large":false}).appendPoint([154.8562369,-133.0947649]).appendArc([153.153127,-128.7508987],{"radius":4,"clockwise":true,"large":false}).appendPoint([155.8821711,-118.0201646]).appendArc([152.0061439,-113.034267],{"radius":4,"clockwise":false,"large":false}).appendPoint([90.97443,-113.0255699]).appendArc([86.975,-109.0255699],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
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

        