function boardRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[397.275,-107.5029616],[397.275,-53.4606148]]).appendArc([394.2904736,-49.5916597],{"radius":4,"clockwise":false,"large":false}).appendPoint([378.395961,-45.4198716]).appendArc([378.0507474,-45.3453826],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.5278636,-40.6673686]).appendArc([349.3781108,-40.6396559],{"radius":4,"clockwise":false,"large":false}).appendPoint([273.8332077,-49.7612354]).appendArc([270.3131413,-53.6730131],{"radius":4,"clockwise":false,"large":false}).appendPoint([269.2810381,-123.1917781]).appendArc([268.1685597,-125.9009301],{"radius":4,"clockwise":true,"large":false}).appendPoint([252.757068,-141.9723461]).appendArc([252.9164304,-147.6665484],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.5271755,-165.0180804]).appendArc([276.4249235,-165.4526133],{"radius":4,"clockwise":false,"large":false}).appendPoint([328.4922889,-131.8273612]).appendArc([330.2128222,-127.5378986],{"radius":4,"clockwise":false,"large":false}).appendPoint([327.4790244,-116.0922011]).appendArc([331.3915649,-111.1630031],{"radius":4,"clockwise":true,"large":false}).appendPoint([393.2530224,-111.5029012]).appendArc([397.275,-107.5029616],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottomRight_case_fn() {
                    

                // creating part 0 of case bottomRight
                let bottomRight__part_0 = boardRight_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_0_bounds = bottomRight__part_0.getBounds();
                let bottomRight__part_0_x = bottomRight__part_0_bounds[0].x + (bottomRight__part_0_bounds[1].x - bottomRight__part_0_bounds[0].x) / 2
                let bottomRight__part_0_y = bottomRight__part_0_bounds[0].y + (bottomRight__part_0_bounds[1].y - bottomRight__part_0_bounds[0].y) / 2
                bottomRight__part_0 = translate([-bottomRight__part_0_x, -bottomRight__part_0_y, 0], bottomRight__part_0);
                bottomRight__part_0 = rotate([0,0,0], bottomRight__part_0);
                bottomRight__part_0 = translate([bottomRight__part_0_x, bottomRight__part_0_y, 0], bottomRight__part_0);

                bottomRight__part_0 = translate([0,0,0], bottomRight__part_0);
                let result = bottomRight__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomRight_case_fn();
            }

        