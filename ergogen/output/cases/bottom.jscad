function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.975,-108.0029616],[87.975,-52.9807308]]).appendArc([90.9838832,-49.1054647],{"radius":4,"clockwise":true,"large":false}).appendPoint([107.3659713,-44.9156723]).appendArc([107.6868281,-44.8474944],{"radius":4,"clockwise":true,"large":false}).appendPoint([135.2236325,-40.1671143]).appendArc([136.3704342,-40.1390463],{"radius":4,"clockwise":true,"large":false}).appendPoint([212.4231067,-49.2646074]).appendArc([215.9459538,-53.1661926],{"radius":4,"clockwise":true,"large":false}).appendPoint([217.1697567,-123.1604171]).appendArc([218.2532239,-125.8286286],{"radius":4,"clockwise":false,"large":false}).appendPoint([233.5576039,-142.1266974]).appendArc([233.3927767,-147.7685369],{"radius":4,"clockwise":true,"large":false}).appendPoint([214.5926146,-165.5806373]).appendArc([209.6507131,-166.0236306],{"radius":4,"clockwise":true,"large":false}).appendPoint([156.886493,-131.4832092]).appendArc([155.1895108,-127.1957212],{"radius":4,"clockwise":true,"large":false}).appendPoint([157.7526106,-116.603822]).appendArc([153.8428435,-111.6630888],{"radius":4,"clockwise":false,"large":false}).appendPoint([91.9969776,-112.0029012]).appendArc([87.975,-108.0029616],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
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

        