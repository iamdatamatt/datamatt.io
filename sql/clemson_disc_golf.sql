CREATE TABLE
  IF NOT EXISTS clemson_disc_golf_courses (
    course_id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT
  );

CREATE TABLE
  IF NOT EXISTS clemson_disc_golf_holes (
    course_id INTEGER,
    hole_number INTEGER,
    description TEXT,
    PRIMARY KEY (course_id, hole_number),
    FOREIGN KEY (course_id) REFERENCES clemson_disc_golf_courses (course_id)
  );

DELETE FROM clemson_disc_golf_courses;

DELETE FROM clemson_disc_golf_holes;

INSERT INTO
  clemson_disc_golf_courses (course_id, name, description)
VALUES
  (
    1,
    'The Thomas Green Clemson Course',
    'If you can only play one of the courses, make it this one. This is the ''official'' unofficial disc golf course for campus. There are no set pars for the holes, so either make up ones you think are accurate or play for best score amongst your group.'
  );

INSERT INTO
  clemson_disc_golf_courses (course_id, name, description)
VALUES
  (
    2,
    'The Schilletter Course',
    'This is the newest course of the four, and has some overlap with the Thomas Green Clemson course. There are no set pars for the holes, so either make up ones you think are accurate or play for best score amongst your group.'
  );

INSERT INTO
  clemson_disc_golf_courses (course_id, name, description)
VALUES
  (
    3,
    'The Botanical Gardens Course',
    'Some of the holes on this course can go across very muddy/dirty areas. Best to wear boots or expect to get muddy on a trip through this one. Unofficial hole names are listed in parenthesis before the hole description. There are no set pars for the holes, so either make up ones you think are accurate or play for best score amongst your group.'
  );

INSERT INTO
  clemson_disc_golf_courses (course_id, name, description)
VALUES
  (
    4,
    'The ClemsonTalk Course',
    'To the best of my knowledge, ClemsonTalk used to be a forum to discuss all things Clemson and living in the Clemson area. I don''t think it exists anymore, but this course seems to have come from there. There are no set pars for the holes, so either make up ones you think are accurate or play for best score amongst your group.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    1,
    'Tee from the Thomas Green statue in front of Tillman to the bell in Carillon Gardens.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    2,
    'Tee from the staircase at the edge of Carillon Gardens to the third lamppost from the left encircling the amphitheater.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    3,
    'Tee from the center of the sidewalk above the amphitheater, with a mandatory dogleg through the door on the amphitheater stage, to the lamppost directly above the stairwell next to the door.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    4,
    'Tee from the lamppost in #3 across the Reflection Pond to the lamppost behind Olin that sticks out next to the pond.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    5,
    'Tee from near the lamppost in #4 across the Reflection Pond to the central pillar beneath the staircase in front of the library.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    6,
    'Tee from near #5 to the yellow emergency phone following the bridge to outside of Daniel.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    7,
    'Tee from the sidewalk next to the yellow emergency phone down the path towards the fire hydrant at the end of the library parking lot.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    8,
    'Tee from the behind the fire hydrant around the right side of Strode to the double doors that enter Daniel from Jordan.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    9,
    'Tee from beneath the bridge connecting Strode and Daniel to around the right of Daniel and up the stairwell to the dumpster between Long and Jordan.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    10,
    'Tee from behind the chained guardrail near the dumpster around Long to the first lamppost on the corner of Long (closest to the dorms).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    11,
    'Tee from behind the pylons preventing non-foot-traffic up the sidewalk towards Mauldin with the goal being the lamppost at the very end of the sidewalk on the corner of Mauldin.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    12,
    'Tee from the corner of Mauldin to the pillar on the corner of Smith.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    13,
    'Tee from the corner of Smith to the traffic sign at the edge of the large parking lot behind Sikes (back near the lamppost in Hole #10).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    14,
    'Tee from near the traffic sign along the sidewalk running to the right of Sikes with the goal being the final lamppost before turning the corner around Sikes.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    15,
    'Tee from the corner of Sikes across the massive stairs, over the fence, with the goal beingthe bell (once again).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    16,
    'Tee from the lamppost across from the entrance to Carillion Gardens over to the benchlooking down on Bowman Field.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    17,
    'Tee from the bench looking down on Bowman over to the ''Class of...'' L-shaped bench beneath the large window of Tillman.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    1,
    18,
    'Tee from the next to the soldier statue, ending with Thomas Green Clemson once again.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    1,
    'Tee from the Thomas Green statue in front of Tillman to the bell in the Carillon Gardens.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    2,
    'Tee from the staircase at the edge of Carillon Gardens to the third lamppost from the left encircling the amphitheater.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    3,
    'Tee from the center of the sidewalk above the amphitheater, with a mandatory dogleg through the door on the amphitheater stage, to the lamppost directly above the stairwell next to the door.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    4,
    'Tee from the lamppost in #3 across the Reflection Pond to the lamppost behind Olin that sticks out next to the pond.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    5,
    'Tee from near the lamppost in #4 across the Reflection Pond to the central pillar beneath the staircase in front of the library.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    6,
    'Tee from underneath the bridge to the entrance of the library to the yellow emergency phone following the bridge to outside of Daniel.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    7,
    'Tee from the brick just before the library bridge to the lamppost on the right across the pond.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    8,
    'Tee from #7 to the elevator door (must hit metal). Ride up the elevator. Throw from inside the elevator through the white triangle in front of Riggs. Must pass through the front.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    9,
    'Tee from under the overhang between Riggs and Rhodes to the tree in the middle of the traffic circle in front of Lowry. Must hit trunk.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    10,
    'Tee from inside the triangle (Atari symbol) on the west side of the traffic circle to the tree in the traffic circle in front of Strom Thurmond (must hit trunk).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    11,
    'Tee from the traffic circle (before the curb) up to the flag poles. Must hit metal on the US flagpole.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    12,
    'Tee from behind the posts sticking up to the back doors of Cooper straight ahead.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    13,
    'Tee from the end of the side walk to the right after finishing #12 to the trunk of the tree in the middle of the traffic circle in front of the ASC.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    14,
    'Tee from the behind the fire hydrant around the right side of Strode to the double doors that enter Daniel from Jordan.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    15,
    'Tee from beneath the bridge connecting Strode and Daniel to around the right of Daniel and up the stairwell to either dumpster between Long and Jordan.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    16,
    'Tee from behind the chained guardrail near the dumpster around Long to the first lamppost on the corner of Long (closest to the dorms).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    2,
    17,
    'Tee from the side walk junction at the corner of Sikes closest to 93 to the Bell in the Carillion Gardens.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    1,
    '(Warm Up Hucks) Park at the main parking area just off Perimeter Road. Tee from the old white sign at the back corner of the parking lot. The goal is the white pole on left hand side of the meadow pond.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    2,
    '(Picnic Spot) Tee from the last goal towards the big oak tree at the crest of the hill (#7 on SCBG map). The goal is the bench underneath the tree.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    3,
    '(Meadow of Despair) - Tee from the last goal towards the big oak tree at the crest of the next hill (#6 on SCBG map). The goal is the bench underneath the tree.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    4,
    '(Across the Creek) Tee from the last goal towards the picnic area to the south. The goal is a wooden structure across the creek with openings on two sides (only visible after you walk beyond the trees and bushes surrounding the tee location). Your disc must pass through both openings to complete the hole.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    5,
    '(The Long and Winding Road) The tee is a marker for the Schoenike Arboretum located about 25 yards east from the last goal. The goal is a sign up the road to the northeast.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    6,
    '(Lone Trunk) Tee from the last goal. The goal is a tree trunk visible to the east.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    7,
    '(Natural Dialog) The tee is a 2-way traffic sign down the road about 100 yards or so to the north from last goal. The goal is the center rock in the ''Natural Dialog'' project (#10 on SCBG map).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    8,
    '(Stone Throne) Tee from the last goal. The goal is the stone throne, which can be found on the right by crossing the creek and walking down the path towards the gazebo in the meditation garden.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    9,
    '(Ring the Bell) Tee from the amphitheater stage, located up the trail and to the left from the last goal. The goal is the bell at the Class of 1942 garden (#14 on SCBG map).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    10,
    '(Trolley) Tee from the bell pedestal towards the red trolley. The goal is the red 39 sign on end of the trolley.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    11,
    '(Waterfall) Walking away from the trolley to the left, you will come to a stone bench. Tee from the stone bench towards the pond. The goal is the bench at the top of the waterfall on the far side of the pond.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    12,
    '(Hosta Garden) Walking away from the pond you come to an intersection of several paths. Tee from the Charles and Betty Cruickshank Hosta Garden plaque, aiming down the brick path directly across from and to the left of the tee. The goal is the bench at the end of the path.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    13,
    '(Wedding Arbor) Walk up through woods to the bridge that is directly beyond the bench, and turn right so you look down the path. Tee from the bridge and play to the end ofpath (right down the road and left to the Wedding Arbor, roughly a Z shape). The goal is to get the disc to drop through the ''roof'' of the arbor.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    14,
    '(Restricted Access) Continue past the arbor towards the Hayden Lecture Area (#27 on SCBG map). Tee from the end of the brick path. The goal is the triangular ''Restricted Access'' sign down the road.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    15,
    '(Earthen Bridge) Tee from the road above the Restricted Access sign. Aim down the hill and to the left through the Camelias. The goal is Earthen Bridge (#33 on SCBG map) at back edge of Pioneer Pond. Your disc must pass through the doorway.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    16,
    '(Door Knocker) Walk up the stairs and to the right. Tee from the pond overlook (not the gazebo), towards the Hunt Cabin (#31 on SCBG map). You can go to the right, hugging the hill next to the pond, or you can go left down the path until it meets the road to avoid the water. The goal is the front door of cabin.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    17,
    '(Metal Gears) Walk around the cabin to the opposite porch. Tee from the porch, towards the path going into the woods at the back left of the grass meadow. The goal is the stone pillars with the metal gears stretched across. Pass your disc between the pillars to score.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    3,
    18,
    '(Crucible) Tee from the stone pillars (preferably from the on top of the stone pillars), following the path across the creek as it bends to the left. The goal is the Crucible sculpture (#20 on SCBG map). Your disc must pass through the hole in the roof.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    1,
    'Tee from behind the last section of concrete on the walkway from the library between Vickery and Edwards leading to the circle. The hole is to hit the blue emergency lightpost in the courtyard between Edwards and Jordan.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    2,
    'Tee from the section of concrete with a bench closest to Jordan in the courtyard between Jordan and Edwards. The hole is to hit the double doors on the second floor of Daniel leading to the bridge.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    3,
    'Tee from the bridge leading out of the second floor of the East end of Daniel hall. The hole is to hit the lamp immediately at the top of the stairs between Jordan and Kinard.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    4,
    'Tee from behind the section of concrete that touches the small library at the top of the stairs between Jordan and Kinard. The hole is to hit the middle lamppost of the three at the Kinard end of the courtyard between Martin, Kinard, and Mell.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    5,
    'Tee from the small section of bricks in front of the small library at the top of the stairs between Jordan and Kinard. The hole is to hit the trash can closest to the bicycle racks between the middle and Southern sections of Martin.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    6,
    'Tee from the rough concrete section near to the stairwell between the middle and Southern sections of Martin. The hole is to hit the lamppost on the other side of the stairwell down at the top of the amphitheater.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    7,
    'Tee from the sidewalk at the top of the amphitheater. The hole is to hit the metal Carillon bell.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    8,
    'Tee from the sidewalk in the Carillon garden to the blue emergency light at the West end of the top of the amphitheater.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    9,
    'Tee from the sidewalk at the top of the amphitheater. The hole is to cross the threshold of the doorway in the back of the amphitheater stage.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    10,
    'Tee from the triangular section of concrete at the top of the stairs out of the back of the amphitheater. The hole is to hit the third lamppost in the counter-clockwise direction around the library pond.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    11,
    'Tee from the section of concrete with a manhole on it nearest to the previous hole. The hole ist o hit the right most of the lampposts on the opposite side of the pond (the one closest to the stairs leading up to Daniel).'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    12,
    'Tee from the two sections of concrete away from the base of the stairs leading up from the pond to Daniel. The hole is to hit the blue emergency light post on the sidewalk leading from next to Daniel down the Eastern library parking lot.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    13,
    'Tee from the square bricks at the East end of library bridge. The hole is to hit the elevator doors on the level below the library bridge at the West end of the library bridge.'
  );

INSERT INTO
  clemson_disc_golf_holes (course_id, hole_number, description)
VALUES
  (
    4,
    14,
    'Tee from within the top level of the elevator. The hole is to pass the frisbee through the white triangular structure in front of Riggs.'
  );