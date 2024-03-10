function boardRight_extrude_1_outline_fn(){
    return new CSG.Path2D([[397.775,-108.0029616],[397.775,-52.9807308]]).appendArc([394.7661168,-49.1054647],{"radius":4,"clockwise":false,"large":false}).appendPoint([378.3840287,-44.9156723]).appendArc([378.0631719,-44.8474944],{"radius":4,"clockwise":false,"large":false}).appendPoint([350.5263675,-40.1671143]).appendArc([349.3795658,-40.1390463],{"radius":4,"clockwise":false,"large":false}).appendPoint([273.3268933,-49.2646074]).appendArc([269.8040462,-53.1661926],{"radius":4,"clockwise":false,"large":false}).appendPoint([268.5802433,-123.1604171]).appendArc([267.4967761,-125.8286286],{"radius":4,"clockwise":true,"large":false}).appendPoint([252.1923961,-142.1266974]).appendArc([252.3572233,-147.7685369],{"radius":4,"clockwise":false,"large":false}).appendPoint([271.1573854,-165.5806373]).appendArc([276.0992869,-166.0236306],{"radius":4,"clockwise":false,"large":false}).appendPoint([328.863507,-131.4832092]).appendArc([330.5604892,-127.1957212],{"radius":4,"clockwise":false,"large":false}).appendPoint([327.9973894,-116.603822]).appendArc([331.9071565,-111.6630888],{"radius":4,"clockwise":true,"large":false}).appendPoint([393.7530224,-112.0029012]).appendArc([397.775,-108.0029616],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
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

        