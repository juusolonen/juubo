function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[88.475,-107.5029616],[88.475,-53.4606148]]).appendArc([91.4595264,-49.5916597],{"radius":4,"clockwise":true,"large":false}).appendPoint([107.354039,-45.4198716]).appendArc([107.6992526,-45.3453826],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.2221364,-40.6673686]).appendArc([136.3718892,-40.6396559],{"radius":4,"clockwise":true,"large":false}).appendPoint([211.9167923,-49.7612354]).appendArc([215.4368587,-53.6730131],{"radius":4,"clockwise":true,"large":false}).appendPoint([216.4689619,-123.1917781]).appendArc([217.5814403,-125.9009301],{"radius":4,"clockwise":false,"large":false}).appendPoint([232.992932,-141.9723461]).appendArc([232.8335696,-147.6665484],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.2228245,-165.0180804]).appendArc([209.3250765,-165.4526133],{"radius":4,"clockwise":true,"large":false}).appendPoint([157.2577111,-131.8273612]).appendArc([155.5371778,-127.5378986],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.2709756,-116.0922011]).appendArc([154.3584351,-111.1630031],{"radius":4,"clockwise":false,"large":false}).appendPoint([92.4969776,-111.5029012]).appendArc([88.475,-107.5029616],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        