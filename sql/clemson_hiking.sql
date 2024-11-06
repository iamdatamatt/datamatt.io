CREATE TABLE
  IF NOT EXISTS clemson_hiking (
    name TEXT PRIMARY KEY,
    location TEXT,
    minutes_from_clemson INTEGER,
    latitude REAL,
    longitude REAL,
    trail_length TEXT,
    info TEXT,
    link TEXT
  );

DELETE FROM clemson_hiking;

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Gateway Park',
    'Clemson, SC',
    3,
    34.682593,
    -82.817788,
    NULL,
    'Trail, swings',
    NULL
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Abernathy Waterfront Park',
    'Clemson, SC',
    5,
    34.68997,
    -82.837844,
    '0.5 miles',
    'Waterfront, picnic areas',
    NULL
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Lake Hartwell',
    'Clemson, SC',
    7,
    34.682226,
    -82.860278,
    NULL,
    'Fishing, beach, swimming',
    'https://www.sas.usace.army.mil/About/Divisions-and-Offices/Operations-Division/Hartwell-Dam-and-Lake/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Mountain View Park',
    'Clemson, SC',
    7,
    34.701797,
    -82.839723,
    '1 mile',
    'Walking trail, disc golf, picnic areas',
    NULL
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Twelve Mile Recreation Area',
    'Clemson, SC',
    8,
    34.70541,
    -82.834945,
    NULL,
    'Picnic shelters, beach',
    'https://www.visitclemson.com/attractions/twelve_mile_recreation_area/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'W.C. Nettles Park',
    'Pendleton, SC',
    10,
    34.675948,
    -82.785104,
    NULL,
    'Baseball and soccer fields (lit), tennis courts, picnic shelter',
    NULL
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Waldrop Stone Falls',
    'Clemson, SC',
    10,
    34.739906,
    -82.826599,
    '~45 minutes',
    'Waterfall',
    'https://www.alltrails.com/trail/us/south-carolina/waldrop-stone-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Clemson Experimental Forest',
    'Clemson, SC',
    15,
    34.736572,
    -82.853096,
    NULL,
    'Swimming, trails, etc.',
    'https://www.clemson.edu/public/experimental-forest/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Issaqueena Lake & Dam Trail',
    'Clemson, SC',
    20,
    34.747452,
    -82.855748,
    '7.8 miles',
    'Hiking near lake',
    'https://clemsontrails.blogspot.com/p/botanical-gardens.html'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'South Cove County Park',
    'Seneca, SC',
    23,
    34.717947,
    -82.963436,
    NULL,
    'Swimming, camping, fishing, tenning courts, mini golf, picnic areas',
    'https://experienceoconee.com/Parks/South-Cove-Park'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'High Falls County Park',
    'Seneca, SC',
    25,
    34.802156,
    -82.92998,
    NULL,
    'Fishing, swimming, picnic shelters, tennis & basketball courts, mini golf, horseshoes, campgrounds',
    'https://experienceoconee.com/Parks/High-Falls-Park'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Lake Hartwell State Park',
    'Fair Play, SC',
    30,
    34.494646,
    -83.024663,
    NULL,
    'Fishing, basketball, camping',
    'https://southcarolinaparks.com/lake-hartwell'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Lake Keowee',
    'Keowee, SC',
    30,
    34.854321,
    -82.882959,
    NULL,
    'Fishing, swimming',
    'https://en.wikipedia.org/wiki/Lake_Keowee'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Mile Creek Park',
    'Six Mile, SC',
    30,
    34.853069,
    -82.88288,
    NULL,
    'Hiking, swimming, picnic areas, basketball and volleyball courts',
    NULL
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Chau Ram County Park',
    'Westminster, SC',
    32,
    34.692578,
    -83.143402,
    NULL,
    'Waterfalls, picnic shelters, camp sites, rapids, fishing',
    'https://experienceoconee.com/Parks/High-Falls-Park'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Keowee-Toxaway State Park',
    'Sunset, SC',
    35,
    34.938434,
    -82.888312,
    '0.5 miles',
    'Fishing, hiking',
    'https://southcarolinaparks.com/keowee-toxaway'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Oconee Station State Historic Site',
    'Walhalla, SC',
    35,
    34.855125,
    -83.07177,
    '1.5 miles',
    'Nature trail, fishing pond, stone blockhouse',
    'https://southcarolinaparks.com/oconee-station'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Station Cove Falls',
    'Near Walhalla, SC',
    35,
    34.854775,
    -83.075894,
    '~1 hour',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/station-cove-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Stumphouse Tunnel & Issqueena Falls',
    'Walhalla, SC',
    35,
    34.8139952,
    -83.125458,
    '0.5 miles',
    'Falls, old train tunnel',
    'https://visitoconeesc.com/stumphouse-park/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Chauga Narrows',
    'Near Walhalla, SC',
    40,
    34.8271,
    -83.1727,
    '~45 minutes',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/chauga-narrows'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Fall Creek Falls',
    'Near Westminster, SC',
    40,
    34.810208,
    -83.128081,
    '4 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/fall-creek-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Swamp Rabbit Trail',
    'Greenville, SC',
    40,
    34.85281,
    -82.392005,
    '21 miles',
    'Biking, swimming',
    'https://greenvillerec.com/swamprabbit/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Devils Fork State Park',
    'Salem, SC',
    43,
    34.963204,
    -82.951724,
    NULL,
    'Waterfalls, fishing, campgrounds',
    'https://southcarolinaparks.com/devils-fork'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Oconee State Park',
    'Mountain Rest, SC',
    43,
    34.873947,
    -83.106234,
    NULL,
    'Canoe rentals, swimming, fishing, trails',
    'https://southcarolinaparks.com/oconee'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Table Rock State Park',
    'Pickens, SC',
    43,
    35.044386,
    -82.70425,
    '1.8/6.6 miles',
    'Trails, cabin, mountains',
    'https://southcarolinaparks.com/table-rock'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Hidden Falls',
    'Near Walhalla, SC',
    45,
    34.8630713,
    -83.0981433,
    '~2 hours',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/hidden-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Lake Jocassee',
    'Keowee, SC',
    45,
    34.952976,
    -82.9491,
    NULL,
    'Fishing, swimming',
    'https://lakejocassee.com/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Bee Cove Falls',
    'Near Walhalla, SC',
    50,
    34.9744,
    -83.0519,
    '4 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/bee-cove-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Blue Hole Falls',
    'Near Walhalla, SC',
    50,
    34.7616,
    -83.1897,
    '~1 hour',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/blue-hole-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Bull Sluice Falls',
    'Near Westminster, SC',
    50,
    34.8147,
    -83.3051,
    NULL,
    'Waterfall',
    'https://www.sctrails.net/trails/trail/bull-sluice'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Cheohee/Miuka Falls',
    'Near Walhalla, SC',
    50,
    34.9411,
    -83.08975,
    '2.4 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/miuka-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Licklog & Pigpen Falls',
    'Near Walhalla, SC',
    50,
    34.920432,
    -83.12107,
    NULL,
    'Waterfall',
    'https://www.sctrails.net/trails/trail/licklog-pigpen-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Twin Falls/Eastatoe Falls',
    'Near Pickens, SC',
    50,
    35.020232,
    -82.825099,
    '0.5 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/twin-falls-reedy-cove-falls-rock-falls-or-eastatoe-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Whitewater Falls',
    'Near Bad Creek, SC',
    50,
    35.037827,
    -83.018512,
    NULL,
    'Short hike, waterfall',
    'https://www.romanticasheville.com/whitewater_falls.htm'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Lower Whitewater Falls',
    'Near Walhalla, SC',
    51,
    35.015975,
    -82.991974,
    '3.8 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/lower-whitewater-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Riley Moore Falls',
    'Near Westminster, SC',
    52,
    34.751799,
    -83.181525,
    '2 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/riley-moore-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Paris Mountain State Park',
    'Greenville, SC',
    53,
    34.942367,
    -82.383302,
    NULL,
    'Mountain hiking',
    'https://southcarolinaparks.com/paris-mountain'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Brasstown Falls',
    'Near Westminster, SC',
    55,
    34.7182,
    -83.3038,
    '~45 minutes',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/brasstown-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Opossum Creek Falls',
    'Near Westminster, SC',
    56,
    34.785699,
    -83.304731,
    '~4 hours',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/opossum-creek-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Secret Falls',
    'Near Walhalla, SC',
    56,
    34.930935,
    -83.086413,
    '3.6 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/secret-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Big Bend Falls',
    'Near Walhalla, SC',
    60,
    34.9533,
    -83.1193,
    '6.8 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/big-bend-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Caesars Head State Park',
    'Cleveland, SC',
    60,
    35.110895,
    -82.61919,
    NULL,
    'Hiking',
    'https://southcarolinaparks.com/caesars-head'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'King Creek Falls',
    'Near Walhalla, SC',
    60,
    34.976492,
    -83.119034,
    '1.2 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/king-creek-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Long Creek Falls',
    'Near Westminster, SC',
    60,
    34.789649,
    -83.312908,
    '~2 hours',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/long-creek-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Spoonauger/Rock Cliff Falls',
    'Near Walhalla, SC',
    60,
    34.986759,
    -83.108047,
    '~45 minutes',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/spoonauger-falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Rainbow Falls',
    'Cleveland, SC',
    63,
    35.132881,
    -82.588263,
    '4 miles',
    'Huge waterfall',
    'https://www.alltrails.com/trail/us/south-carolina/rainbow-falls-trail'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Panther Creek',
    'Near Turnerville, GA',
    68,
    34.699269,
    -83.421551,
    '7 miles',
    'Hiking, swimming',
    'https://www.atlantatrails.com/hiking-trails/panther-creek-falls/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'DuPont State Recreational Forest',
    'Cedar Mountain, NC',
    70,
    35.201504,
    -82.61938,
    NULL,
    '20+ hiking trails to choose from, waterfalls, mountain biking',
    'https://www.dupontforest.com/explore/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Tallulah Gorge State Park',
    'Near Lakemont, GA',
    72,
    34.735081,
    -83.3717,
    NULL,
    'Campsites, picnic shelter, hiking',
    'https://gastateparks.org/TallulahGorge'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Angel Falls',
    'Near Lakemont, GA',
    80,
    34.788176,
    -83.478773,
    '1.5 miles',
    'Waterfall',
    'http://www.carolinawaterfalls.com/angel_falls'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Pretty Place',
    'Greenville, SC',
    80,
    35.134682,
    -82.57537,
    NULL,
    'Hike with scenic overlook',
    'https://www.campgreenville.org/pretty-place'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Minnehaha Falls',
    'Near Lakemont, GA',
    90,
    34.750396,
    -83.479168,
    '0.2 miles',
    'Waterfall',
    'https://www.atlantatrails.com/hiking-trails/minnehaha-falls-georgia-trail/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Chimney Rock',
    'Chimney Rock, NC',
    100,
    35.464336,
    -82.24517,
    NULL,
    'Hike with scenic overlook',
    'https://www.chimneyrockpark.com/'
  );

INSERT INTO
  clemson_hiking (
    name,
    location,
    minutes_from_clemson,
    latitude,
    longitude,
    trail_length,
    info,
    link
  )
VALUES
  (
    'Laurel Folk Falls',
    'Near Pickens, SC',
    110,
    35.032077,
    -82.894034,
    '17 miles',
    'Waterfall',
    'https://www.sctrails.net/trails/trail/laurel-fork-falls'
  );