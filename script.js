// $("path, circle").hover(function(e) {
//   $('#info-box').css('display','block');
//   $('#info-box').html($(this).data('info'));
// });

$(document).ready(function(){
    $("#in-state").hide()
    $(".letter-card").hide()
})



$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() { 
    var link = $(this).attr('href');   
    window.open(link,'_blank');
    return false;
  });
}


var values = {
    "US-AL": 0.836,
		"US-AK": 2.134,
		"US-AZ": 0.598,
		"US-AR": 4.158,
		"US-CA": 1.876,
		"US-CO": 1.546,
		"US-CT": 2.338,
		"US-DE": 1.389,
		"US-DC": 1.205,
		"US-FL": 1.123,
		"US-GA": 4.579,
		"US-HI": 0.794,
		"US-ID": 2.484,
		"US-IL": 4.813,
		"US-IN": 4.106,
		"US-IA": 3.311,
		"US-KS": 4.900,
		"US-KY": 1.673,
		"US-LA": 2.509,
		"US-ME": 0.000,
		"US-MD": 1.006,
		"US-MA": 4.368,
		"US-MI": 1.658,
		"US-MN": 0.482,
		"US-MS": 2.830,
		"US-MO": 3.226,
		"US-MT": 1.635,
		"US-NE": 3.804,
		"US-NV": 1.382,
		"US-NH": 2.674,
		"US-NJ": 3.233,
		"US-NM": 1.497,
		"US-NY": 0.000,
		"US-NC": 0.612,
		"US-ND": 6.701,
		"US-OH": 5.515,
		"US-OK": 6.250,
		"US-OR": 1.911,
		"US-PA": 5.462,
		"US-RI": 0.952,
		"US-SC": 2.345,
		"US-SD": 3.793,
		"US-TN": 2.560,
		"US-TX": 1.296,
		"US-UT": 0.466,
		"US-VT": 1.550,
		"US-VA": 2.729,
		"US-WA": 1.870,
		"US-WV": 3.766,
		"US-WI": 2.647,
		"US-WY": 3.704,
}

for (let state in values) {
  var theID = state.substring(3)
  console.log(theID)
  var opacityLevel = values[state] / 7
  console.log(opacityLevel)
  $(`#${theID}`).css('opacity', `${opacityLevel}`)
}

$(`#ME`).css('opacity', `1`)
$(`#ME`).css('fill', `#BCD979`)
$(`#CO`).css('opacity', `1`)
$(`#CO`).css('fill', `#BCD979`)
$(`#WA`).css('opacity', `1`)
$(`#WA`).css('fill', `#BCD979`)
$(`#NV`).css('opacity', `1`)
$(`#NV`).css('fill', `#BCD979`)
$(`#NY`).css('opacity', `1`)
$(`#NY`).css('fill', `#BCD979`)

function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['District of Columbia', 'DC'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}

const state_data = {
	'Alabama': {
		num_schools: 718,
		bad_mascots: 6,
		schools: [
			{
        state: "Alabama",
        city: "Talladega",
        schoolname: "Alabama School for the Blind"
      },
      {
        state: "Alabama",
        city: "Talladega",
        schoolname: "Alabama School for the Deaf",
        // notes: "The \"Silent Warriors\" use an Indian head logo.
      },
      {
        state: "Alabama",
        city: "Centreville",
        schoolname: "Bibb County High School"
      },
      {
        state: "Alabama",
        city: "Cherokee",
        schoolname: "Cherokee High School (Alabama)"
      },
      {
        state: "Alabama",
        city: "Leighton",
        schoolname: "Colbert County High School"
      },
      {
        state: "Alabama",
        city: "Decatur",
        schoolname: "Decatur High School"
      },
      {
        state: "Alabama",
        city: "Athens",
        schoolname: "East Limestone High School"
      },
      {
        state: "Alabama",
        city: "Courtland",
        schoolname: "Hubbard High School"
      },
      {
        state: "Alabama",
        city: "Eufaula",
        schoolname: "Lakeside High School"
      },
      {
        state: "Alabama",
        city: "Loachapoka",
        schoolname: "Loachapoka High School"
      },
      {
        state: "Alabama",
        city: "New Hope",
        schoolname: "New Hope High School"
      },
      {
        state: "Alabama",
        city: "Stevenson",
        schoolname: "North Jackson High School"
      },
      {
        state: "Alabama",
        city: "Ohatchee",
        schoolname: "Ohatchee High School",
        petition: "http://chng.it/Q6LW8psh4T"
      },
      {
        state: "Alabama",
        city: "Oneonta",
        schoolname: "Oneonta High School",
        petition: "http://chng.it/LWLGYVDrvD"
      },
      {
        state: "Alabama",
        city: "Montgomery",
        schoolname: "Park Crossing High School"
      },
      {
        state: "Alabama",
        city: "Pinson",
        schoolname: "Pinson Valley High School"
      },
      {
        state: "Alabama",
        city: "Gilbertown",
        schoolname: "Southern Choctaw High School"
      },
      {
        state: "Alabama",
        city: "Alabaster",
        schoolname: "Thompson High School"
      },
      {
        state: "Alabama",
        city: "Eutaw",
        schoolname: "Warrior Academy High School"
      },
      {
        state: "Alabama",
        city: "Wetumpka",
        schoolname: "Wetumpka High School"
      },
      {
        state: "Alabama ",
        city: "Chickasaw",
        schoolname: "Chickasaw High School"
      },
		]
	},
	'Alaska': {
		num_schools: 328,
		bad_mascots: 7,
		schools: [
			  {
          state: "Alaska",
          city: "Aniak",
          schoolname: "Aniak Jr/Sr High School"
        },
        {
          state: "Alaska",
          city: "Klawock",
          schoolname: "Klawock High School"
        },
        {
          state: "Alaska",
          city: "Sitka",
          schoolname: "Mt. Edgecumbe High School"
        },
        {
          state: "Alaska ",
          city: "Alakanuk",
          schoolname: "Alakanuk High School",
          // notes: "– % Alaskan Native"
        },
        {
          state: "Alaska",
          city: "Metlakatla",
          schoolname: "Metlakatla High School",
          // notes: "– Alaska Native population."
        },
        {
          state: "Alaska",
          city: "Hoonah",
          schoolname: "Hoonah High School",
          // notes: "– Native Americans are a majority of the population"
        },
		]
	},
	'Arizona': {
		num_schools: 1003,
		bad_mascots: 6,
		schools: [
			  {
          state: "Arizona",
          city: "Nogales",
          schoolname: "Nogales High School"
        },
        {
          state: "Arizona",
          city: "San Carlos",
          schoolname: "San Carlos High School"
        },
        {
          state: "Arizona",
          city: "St. Johns",
          schoolname: "St. Johns High School"
        },
        {
          state: "Arizona",
          city: "Mayer",
          schoolname: "The Orme School"
        },
        {
          state: "Arizona",
          city: "Fort Thomas",
          schoolname: "Fort Thomas High School",
          notes: "– % Native American"
        },
        {
          state: "Arizona",
          city: "Teec Nos Pos",
          schoolname: "Red Mesa High School",
          notes: "(Majority of students Native American)"
        },
		]
	},
	'Arkansas': {
		num_schools: 457,
		bad_mascots: 19,
		schools: [
			  {
          state: "Arkansas",
          city: "Blytheville",
          schoolname: "Blytheville High School"
        },
        {
          state: "Arkansas",
          city: "Norman",
          schoolname: "Caddo Hills High School"
        },
        {
          state: "Arkansas",
          city: "Charlotte",
          schoolname: "Cord-Charlotte High School"
        },
        {
          state: "Arkansas",
          city: "Branch",
          schoolname: "County Line High School"
        },
        {
          state: "Arkansas",
          city: "Delaplaine",
          schoolname: "Delaplaine High School"
        },
        {
          state: "Arkansas",
          city: "East Poinsett County",
          schoolname: "East Poinsett County High School"
        },
        {
          state: "Arkansas",
          city: "Briggsville",
          schoolname: "Fourche Valley High School"
        },
        {
          state: "Arkansas",
          city: "Lamar",
          schoolname: "Lamar High School"
        },
        {
          state: "Arkansas",
          city: "Marked Tree",
          schoolname: "Marked Tree High School"
        },
        {
          state: "Arkansas",
          city: "Osceola",
          schoolname: "Osceola High School"
        },
        {
          state: "Arkansas",
          city: "Donaldson",
          schoolname: "Ouachita High School"
        },
        {
          state: "Arkansas",
          city: "Piggott",
          schoolname: "Piggott High School"
        },
        {
          state: "Arkansas",
          city: "Pocahontas",
          schoolname: "Pocahontas High School"
        },
        {
          state: "Arkansas",
          city: "Pottsville",
          schoolname: "Pottsville High School"
        },
        {
          state: "Arkansas",
          city: "Poyen",
          schoolname: "Poyen High School"
        },
        {
          state: "Arkansas",
          city: "Western Grove",
          schoolname: "Western Grove High School"
        },
        {
          state: "Arkansas",
          city: "Jonesboro",
          schoolname: "Westside High School"
        },
        {
          state: "Arkansas",
          city: "Wickes",
          schoolname: "Wickes High School"
        },
        {
          state: "Arkansas",
          city: "Williford",
          schoolname: "Williford High School"
        },
		]
	},
	'California': {
		num_schools: 3892,
		bad_mascots: 73,
		schools: [
			{
        state: "California",
        city: "Anaheim Hills",
        schoolname: "Canyon High School"
      },
      {
        state: "California",
        city: "Fresno",
        schoolname: "Ahwahnee Middle School",
        notes: "Logo is a spear with feathers"
      },
      {
        state: "California",
        city: "Rancho Cucamonga",
        schoolname: "Alta Loma High School"
      },
      {
        state: "California",
        city: "Alta Loma",
        schoolname: "Alta Loma Junior High School",
        notes: "Logo includes feathers"
      },
      {
        state: "California",
        city: "Arcadia",
        schoolname: "Arcadia High School",
        petition: "https://www.change.org/p/david-vannasdall-remove-the-apache-emblem-from-arcadia-high-school?utm_content=cl_sharecopy_23015974_en-US%3A4&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi"
      },
      {
        state: "California",
        city: "Baker",
        schoolname: "Baker High School"
      },
      {
        state: "California",
        city: "Baldwin Park",
        schoolname: "Baldwin Park High School"
      },
      {
        state: "California",
        city: "Barstow",
        schoolname: "Barstow High School"
      },
      {
        state: "California",
        city: "Burbank",
        schoolname: "Burroughs High School"
      },
      {
        state: "California",
        city: "San Andreas",
        schoolname: "Calaveras High School",
        // notes: "When a state law required dropping the Redskins"
      },
      {
        state: "California",
        city: "Carpinteria",
        schoolname: "Carpinteria High School"
      },
      {
        state: "California",
        city: "Compton",
        schoolname: "Centennial High School"
      },
      {
        state: "California",
        city: "Chowchilla",
        schoolname: "Chowchilla Union High School"
      },
      {
        state: "California",
        city: "Clairemont",
        schoolname: "Clairemont High School"
      },
      {
        state: "California",
        city: "Clovis",
        schoolname: "Clark Intermediate School"
      },
      {
        state: "California",
        city: "El Cajon",
        schoolname: "El Cajon Valley High School"
      },
      {
        state: "California",
        city: "Anaheim",
        schoolname: "Esperanza High School"
      },
      {
        state: "California",
        city: "Gonzales",
        schoolname: "Fairview Middle School"
      },
      {
        state: "California",
        city: "Fallbrook",
        schoolname: "Fallbrook High School"
      },
      {
        state: "California",
        city: "Farmersville",
        schoolname: "Farmersville High School"
      },
      {
        state: "California",
        city: "Fullerton",
        schoolname: "Fullerton Union High School",
        petition: "http://chng.it/sQwm5bs68j"
      },
      {
        state: "California",
        city: "Galt",
        schoolname: "Galt High School"
      },
      {
        state: "California",
        city: "Greenville",
        schoolname: "Greenville Junior-Senior High School"
      },
      {
        state: "California",
        city: "Downey",
        schoolname: "Griffiths Middle School"
      },
      {
        state: "California",
        city: "Gustine",
        schoolname: "Gustine Middle School"
      },
      {
        state: "California",
        city: "Hamilton City",
        schoolname: "Hamilton Union High School"
      },
      {
        state: "California",
        city: "Happy Camp",
        schoolname: "Happy Camp High School"
      },
      {
        state: "California",
        city: "Hickman",
        schoolname: "Hickman Middle School"
      },
      {
        state: "California",
        city: "Napa",
        schoolname: "Justin-Siena High School"
      },
      {
        state: "California",
        city: "La Puente",
        schoolname: "La Puente High School"
      },
      {
        state: "California",
        city: "Westminster",
        schoolname: "La Quinta High School"
      },
      {
        state: "California",
        city: "Laytonville",
        schoolname: "Laytonville High School"
      },
      {
        state: "California",
        city: "Lompoc",
        schoolname: "Lompoc High School"
      },
      {
        state: "California",
        city: "Maricopa",
        schoolname: "Maricopa High School"
      },
      {
        state: "California",
        city: "Alhambra",
        schoolname: "Mark Keppel High School"
      },
      {
        state: "California",
        city: "Marysville",
        schoolname: "Marysville High School"
      },
      {
        state: "California",
        city: "Oakland",
        schoolname: "McClymonds High School",
        petition: "http://chng.it/8s8rhvGgBC"
      },
      {
        state: "California",
        city: "Mendota",
        schoolname: "Mendota Junior High School"
      },
      {
        state: "California",
        city: "Fremont",
        schoolname: "Mission San Jose High School"
      },
      {
        state: "California",
        city: "Alturas",
        schoolname: "Modoc High School"
      },
      {
        state: "California",
        city: "Alturas",
        schoolname: "Modoc Middle School"
      },
      {
        state: "California",
        city: "San Diego",
        schoolname: "Montgomery High School"
      },
      {
        state: "California",
        city: "San Jacinto",
        schoolname: "Noli Indian High School"
      },
      {
        state: "California",
        city: "Riverside",
        schoolname: "Norte Vista High School"
      },
      {
        state: "California",
        city: "Newman",
        schoolname: "Orestimba High School"
      },
      {
        state: "California",
        city: "Palm Desert",
        schoolname: "Palm Desert High School"
      },
      {
        state: "California",
        city: "Palm Springs",
        schoolname: "Palm Springs High School"
      },
      {
        state: "California",
        city: "Salinas",
        schoolname: "Palma High School"
      },
      {
        state: "California",
        city: "Fallbrook",
        schoolname: "Potter Junior High School"
      },
      {
        state: "California",
        city: "Ripon",
        schoolname: "Ripon High School"
      },
      {
        state: "California",
        city: "Winterhaven",
        schoolname: "San Pasqual Valley High School"
      },
      {
        state: "California",
        city: "Sanger",
        schoolname: "Sanger High School"
      },
      {
        state: "California",
        city: "Santa Fe Springs",
        schoolname: "Santa Fe High School"
      },
      {
        state: "California",
        city: "Tollhouse",
        schoolname: "Sierra High School"
      },
      {
        state: "California",
        city: "Soledad",
        schoolname: "Soledad High School"
      },
      {
        state: "California",
        city: "Bellflower",
        schoolname: "St. John Bosco High School"
      },
      {
        state: "California",
        city: "Tehachapi",
        schoolname: "Tehachapi High School"
      },
      {
        state: "California",
        city: "Merced",
        schoolname: "Tenaya Middle School"
      },
      {
        state: "California",
        city: "Tomales",
        schoolname: "Tomales High School"
      },
      {
        state: "California",
        city: "Tulare",
        schoolname: "Tulare Union High School"
      },
      {
        state: "California",
        city: "Sanger",
        schoolname: "Washington Academic Middle School"
      },
      {
        state: "California",
        city: "Cottonwood",
        schoolname: "West Cottonwood Junior High School"
      },
      {
        state: "California",
        city: "Torrance",
        schoolname: "West Torrance High School",
        petition: "http://chng.it/tBT4vCz7Cv"
      },
      {
        state: "California",
        city: "Westlake Village",
        schoolname: "Westlake High School"
      },
      {
        state: "California",
        city: "Calexico",
        schoolname: "William Moreno Junior High School"
      },
      {
        state: "California",
        city: "El Centro",
        schoolname: "Wilson Junior High School"
      },
      {
        state: "California",
        city: "Irvine",
        schoolname: "Woodbridge High School"
      },
      {
        state: "California",
        city: "Concord",
        schoolname: "Ygnacio Valley High School"
      },
      {
        state: "California",
        city: "Olivehurst",
        schoolname: "Yuba Gardens Intermediate"
      },
      {
        state: "California ",
        city: "Crockett",
        schoolname: "Swett High School",
        notes: "– Citing the Golden State Warriors as an example",
        // undefined: "unlike the NBA team the high school has not eliminated Native American references."
      },
      {
        state: "California ",
        city: "San Jose",
        schoolname: "Yerba Buena High School",
        notes: "– mascot: Aztec Warrior"
      },
      {
        state: "California ",
        city: "Porterville",
        schoolname: "Monache High School",
        // notes: "– There is a large mural of a Native American on the side of the school's gym",
        // undefined: "the \"Marauder\".
      },
       {
        state: "California",
        city: "Newhall",
        schoolname: "Hart High School",
        petition: "http://chng.it/Ln5wr8qg8L",
        // notes: "Email the our high school's principal jdautremont@hartdistrict.org & district governing board members at mkuhlman@hartdistrict.org (superintendent), ddunn@hartdistrict.org, lstorli@hartdistrict.org, rjensen@hartdistrict.org, jmessina@hartdistrict.org, cmoore@hartdistrict.org, jwebb@hartdistrict.org to let them know how you feel!"
      },
		]
	},
	'Colorado': {
		num_schools: 647,
		bad_mascots: 10,
		schools: [
			{
        state: "Colorado",
        city: "Anton",
        schoolname: "Arickaree High School"
      },
      {
        state: "Colorado",
        city: "Eaton",
        schoolname: "Eaton High School"
      },
      {
        state: "Colorado",
        city: "Kiowa",
        schoolname: "Kiowa High School"
      },
      {
        state: "Colorado",
        city: "Lamar",
        schoolname: "Lamar High School"
      },
      {
        state: "Colorado",
        city: "Montrose",
        schoolname: "Montrose High School"
      },
      {
        state: "Colorado",
        city: "Saguache",
        schoolname: "Mountain Valley High School"
      },
      {
        state: "Colorado",
        city: "Sanford",
        schoolname: "Sanford High School"
      },
      {
        state: "Colorado",
        city: "Strasburg",
        schoolname: "Strasburg High School",
        // notes: "School has established an agreement with the Northern Arapahoe Tribe."
      },
      {
        state: "Colorado",
        city: "Weldona",
        schoolname: "Weldon Valley High School"
      },
      {
        state: "Colorado",
        city: "Yuma",
        schoolname: "Yuma High School"
      },
      {
        state: "Colorado ",
        city: "Colorado Springs",
        schoolname: "Cheyenne Mountain High School",
        petition: "https://www.change.org/p/cheyenne-mountain-high-school-remove-the-indian-as-the-cheyenne-mountain-high-school-mascot?utm_content=cl_sharecopy_23497362_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi",
        // notes: "– In response to a statewide program",
        // undefined: "or wearing warpaint and headdresses at games."
      },
		]
	},
	'Connecticut': {
		num_schools: 556,
		bad_mascots: 13,
		schools: [
			  {
          state: "Connecticut",
          city: "West Hartford",
          schoolname: "Conard High School"
        },
        {
          state: "Connecticut",
          city: "Derby",
          schoolname: "Derby High School"
        },
        {
          state: "Connecticut",
          city: "Meriden",
          schoolname: "H.C. Wilcox Technical High School"
        },
        {
          state: "Connecticut",
          city: "West Hartford",
          schoolname: "Hall High School"
        },
        {
          state: "Connecticut",
          city: "Killingly",
          schoolname: "Killingly High School",
          // notes: "Renewed discussion in  of whether the mascot is offensive was prompted by a student initiative. After input from the Nipmuc Tribal Council that no Native mascots are flattering",
          // undefined: "including Killingly."
        },
        {
          state: "Connecticut",
          city: "Oakdale",
          schoolname: "Montville High School"
        },
        {
          state: "Connecticut",
          city: "Newington",
          schoolname: "Newington High School"
        },
        {
          state: "Connecticut",
          city: "Woodbury",
          schoolname: "Nonnewaug High School"
        },
        {
          state: "Connecticut",
          city: "North Haven",
          schoolname: "North Haven High School",
          petition: "http://chng.it/GVmLvCHHHg"
        },
        {
          state: "Connecticut",
          city: "Deep River",
          schoolname: "Valley Regional High School",
          // notes: " students and alumni have signed a petition to change the logo"
        },
        {
          state: "Connecticut",
          city: "Watertown",
          schoolname: "Watertown High School",
          petition: "https://www.thepetitionsite.com/155/637/101/change-the-watertown-high-school-mascot/"
        },
        {
          state: "Connecticut",
          city: "Meriden",
          schoolname: "Wilcox RVT"
        },
        {
          state: "Connecticut",
          city: "Windsor",
          schoolname: "Windsor High School"
        },
		]
	},
	'Delaware': {
		num_schools: 83,
		bad_mascots: 1,
		schools: [
      {
        state: "Delaware",
        city: "Dagsboro",
        schoolname: "Indian River High School"
      },
		]
	},
	'District of Columbia': {
		num_schools: 72,
		bad_mascots: 1,
		schools: [
			{
        state: "D.C.",
        city: "Washington",
        schoolname: "Anacostia High School"
      },
		]
	},
	'Florida': {
		num_schools: 2227,
		bad_mascots: 25,
		schools: [
			{
        state: "Florida",
        city: "Baldwin",
        schoolname: "Baldwin Middle-Senior High School"
      },
      {
        state: "Florida",
        city: "Fort Lauderdale",
        schoolname: "Cardinal Gibbons High School"
      },
      {
        state: "Florida",
        city: "Chiefland",
        schoolname: "Chiefland High School"
      },
      {
        state: "Florida",
        city: "Fort Walton Beach",
        schoolname: "Choctawhatchee High School"
      },
      {
        state: "Florida",
        city: "Gibsonton",
        schoolname: "East Bay High School",
        // notes: "While six lower schools in the Hillsborough County"
      },
      {
        state: "Florida",
        city: "Brevard County",
        schoolname: "Edgewood Junior/Senior High School"
      },
      {
        state: "Florida",
        city: "Fort White",
        schoolname: "Fort White High School"
      },
      {
        state: "Florida",
        city: "Tampa",
        schoolname: "George D. Chamberlain High School",
        // notes: "While six lower schools in the Hillsborough County"
      },
      {
        state: "Florida",
        city: "Grand Ridge",
        schoolname: "Grand Ridge High School"
      },
      {
        state: "Florida",
        city: "Immokalee",
        schoolname: "Immokalee High School"
      },
      {
        state: "Florida",
        city: "Titusville",
        schoolname: "James Madison Middle School"
      },
      {
        state: "Florida",
        city: "Jupiter",
        schoolname: "Jupiter Community High School"
      },
      {
        state: "Florida",
        city: "Keystone Heights",
        schoolname: "Keystone Heights Junior/Senior High School"
      },
      {
        state: "Florida",
        city: "Lakeland",
        schoolname: "Lake Gibson High School"
      },
      {
        state: "Florida",
        city: "Miami",
        schoolname: "Miami Carol City Senior High School"
      },
      {
        state: "Florida",
        city: "Century",
        schoolname: "Northview High School"
      },
      {
        state: "Florida",
        city: "Largo",
        schoolname: "Osceola Fundamental High School"
      },
      {
        state: "Florida",
        city: "Lantana",
        schoolname: "Santaluces Community High School"
      },
      {
        state: "Florida",
        city: "Bradenton",
        schoolname: "Southeast High School"
      },
      {
        state: "Florida",
        city: "Jacksonville",
        schoolname: "Terry Parker High School"
      },
      {
        state: "Florida",
        city: "Venice",
        schoolname: "Venice High School"
      },
      {
        state: "Florida",
        city: "Vero Beach",
        schoolname: "Vero Beach High School",
        petition: "http://chng.it/5Gcnkb6Pz7"
      },
      {
        state: "Florida",
        city: "DeFuniak Springs",
        schoolname: "Walton High School"
      },
      {
        state: "Florida",
        city: "Winter Garden",
        schoolname: "West Orange High School"
      },
      {
        state: "Florida",
        city: "Orlando",
        schoolname: "William R. Boone High School",
        petition: "https://www.change.org/p/ocps-change-the-mascot-of-william-r-boone-high-school?utm_content=cl_sharecopy_23251360_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi"
      },
      {
        state: "Florida",
        city: "Jacksonville",
        schoolname: "Arlington Country Day School",
        // petition: "– private college",
        // notes: "prep K–"
      },
		]
	},
	'Georgia': {
		num_schools: 808,
		bad_mascots: 37,
		schools: [
			  {
          state: "Georgia",
          city: "Rome",
          schoolname: "Armuchee High School"
        },
        {
          state: "Georgia",
          city: "Pembroke",
          schoolname: "Bryan County High School"
        },
        {
          state: "Georgia",
          city: "Folkston",
          schoolname: "Charlton County High School"
        },
        {
          state: "Georgia",
          city: "Summerville",
          schoolname: "Chattooga High School"
        },
        {
          state: "Georgia",
          city: "Canton",
          schoolname: "Cherokee High School"
        },
        {
          state: "Georgia",
          city: "Fairburn",
          schoolname: "Creekside High School"
        },
        {
          state: "Georgia",
          city: "Atlanta",
          schoolname: "Cross Keys High School"
        },
        {
          state: "Georgia",
          city: "Eastman",
          schoolname: "Dodge County Middle School"
        },
        {
          state: "Georgia",
          city: "Sharpsburg",
          schoolname: "East Coweta High School",
          petition: "https://www.change.org/p/superintendent-evan-horton-ban-wearing-headdresses-at-east-coweta-hs-educate-students-on-native-american-culture?utm_content=cl_sharecopy_23825066_en-US%3A4&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial"
        },
        {
          state: "Georgia",
          city: "Calhoun",
          schoolname: "Gordon Central High School"
        },
        {
          state: "Georgia",
          city: "Franklin",
          schoolname: "Heard County High School"
        },
        {
          state: "Georgia",
          city: "Ocilla",
          schoolname: "Irwin County High School"
        },
        {
          state: "Georgia",
          city: "Ocilla",
          schoolname: "Irwin County High School"
        },
        {
          state: "Georgia",
          city: "Columbus",
          schoolname: "Kendrick High School"
        },
        {
          state: "Georgia",
          city: "Rossville",
          schoolname: "Lakeview Middle School"
        },
        {
          state: "Georgia",
          city: "Fort Oglethorpe",
          schoolname: "Lakeview–Fort Oglethorpe High School"
        },
        {
          state: "Georgia",
          city: "Dahlonega",
          schoolname: "Lumpkin County High School"
        },
        {
          state: "Georgia",
          city: "Powder Springs",
          schoolname: "McEachern High School"
        },
        {
          state: "Georgia",
          city: "Peachtree City",
          schoolname: "McIntosh High School"
        },
        {
          state: "Georgia",
          city: "Chatsworth",
          schoolname: "Murray County High School"
        },
        {
          state: "Georgia",
          city: "Kennesaw",
          schoolname: "North Cobb High School",
          petition: "https://www.change.org/p/cobb-county-school-board-change-north-cobb-s-mascot?recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial"
        },
        {
          state: "Georgia",
          city: "Watkinsville",
          schoolname: "Oconee County High School",
          petition: "https://www.thepetitionsite.com/700/547/300/rebrand-the-warrior-mascot/"
        },
        {
          state: "Georgia",
          city: "Conyers",
          schoolname: "Salem High School"
        },
        {
          state: "Georgia",
          city: "Donalsonville",
          schoolname: "Seminole County High School"
        },
        {
          state: "Georgia",
          city: "Hickory Flat",
          schoolname: "Sequoyah High School"
        },
        {
          state: "Georgia",
          city: "Social Circle",
          schoolname: "Social Circle High School",
          petition: "http://chng.it/PjB4D2jvqM",
          // notes: "Having received comments both pro and con on changing the mascot"
        },
        {
          state: "Georgia",
          city: "Toccoa",
          schoolname: "Stephens County High School"
        },
        {
          state: "Georgia",
          city: "Hiawassee",
          schoolname: "Towns County High School"
        },
        {
          state: "Georgia",
          city: "Vidalia",
          schoolname: "Vidalia Comprehensive High School"
        },
        {
          state: "Georgia",
          city: "Macon",
          schoolname: "Westside High School"
        },
        {
          state: "Georgia",
          city: "Cleveland",
          schoolname: "White County High School"
        },
        {
          state: "Georgia",
          city: "Milledgeville",
          schoolname: "Baldwin High School",
          // notes: "– A Mascot Advisory Committee was formed by the Baldwin County Board of Education. After a year of discussion the Board of Education has decided to retain the \"Braves\" mascot name but remove some of the stereotypical imagery.
        },
        {
          state: "Georgia",
          city: "Eastman",
          schoolname: "Dodge County High School",
          // notes: "– Girl's teams are \"Squaws\"
        },
        {
          state: "Georgia",
          city: "Albany",
          schoolname: "Albany High School",
          // notes: "– Girls team are \"Squaws\"
        },
        {
          state: "Georgia",
          city: "Tallulah Falls",
          schoolname: "Tallulah Falls School",
          // notes: "– Private boarding school"
        },
      
		]
	},
	'Hawaii': {
		num_schools: 126,
		bad_mascots: 1,
		schools: [
			{
        state: "Hawaii",
        city: "Kahuku",
        schoolname: "Kahuku High & Intermediate School"
      },
		]
	},
	'Idaho': {
		num_schools: 322,
		bad_mascots: 8,
		schools: [
			  {
          state: "Idaho",
          city: "Buhl",
          schoolname: "Buhl High School"
        },
        {
          state: "Idaho",
          city: "Meridian",
          schoolname: "Meridian High School",
          notes: "The team will keep the Warriors nickname"
        },
        {
          state: "Idaho",
          city: "Preston",
          schoolname: "Preston High School"
        },
        {
          state: "Idaho",
          city: "Lewiston",
          schoolname: "Sacajawea Junior High School"
        },
        {
          state: "Idaho",
          city: "Salmon",
          schoolname: "Salmon High School"
        },
        {
          state: "Idaho",
          city: "Salmon River",
          schoolname: "Salmon River High School"
        },
        {
          state: "Idaho",
          city: "Fort Hall",
          schoolname: "Shoshone Bannock Jr./Sr. High School"
        },
        {
          state: "Idaho",
          city: "Shoshone",
          schoolname: "Shoshone High School"
        },
		]
	},
	'Illinois': {
		num_schools: 1018,
		bad_mascots: 49,
		schools: [
			  {
          state: "Illinois",
          city: "Altamont",
          schoolname: "Altamont High School"
        },
        {
          state: "Illinois",
          city: "Annawan",
          schoolname: "Annawan High School"
        },
        {
          state: "Illinois",
          city: "Brimfield",
          schoolname: "Brimfield High School"
        },
        {
          state: "Illinois",
          city: "Cahokia",
          schoolname: "Cahokia High School"
        },
        {
          state: "Illinois",
          city: "Chicago",
          schoolname: "Calumet High School"
        },
        {
          state: "Illinois",
          city: "Carlyle",
          schoolname: "Carlyle High School"
        },
        {
          state: "Illinois",
          city: "Casey",
          schoolname: "Casey-Westfield High School"
        },
        {
          state: "Illinois",
          city: "Granite City",
          schoolname: "Collidge Middle School"
        },
        {
          state: "Illinois",
          city: "Crete",
          schoolname: "Crete-Monee High School"
        },
        {
          state: "Illinois",
          city: "Dakota",
          schoolname: "Dakota High School"
        },
        {
          state: "Illinois",
          city: "Mackinaw",
          schoolname: "Deer Creek Mackinaw High School"
        },
        {
          state: "Illinois",
          city: "DuQuoin",
          schoolname: "DuQuoin High School"
        },
        {
          state: "Illinois",
          city: "Granite City",
          schoolname: "Granite City High School"
        },
        {
          state: "Illinois",
          city: "Rockton",
          schoolname: "Hononegah Community High School",
          petition: "http://chng.it/CB4SwzRPLj",
          // notes: "native cheerleader's performance as \"Princess Hononegah\" has led to competing online petitions by students regarding the elimination or retention of the school mascot; and a state legislator's proposal to amend the Illinois Interscholastic Athletic Organization Act to require the consent of a local tribe for any Native American mascot.
        },
        {
          state: "Illinois",
          city: "Johnston City",
          schoolname: "Johnston City High School"
        },
        {
          state: "Illinois",
          city: "Lawrenceville",
          schoolname: "Lawrenceville High School"
        },
        {
          state: "Illinois",
          city: "Lemont",
          schoolname: "Lemont High School"
        },
        {
          state: "Illinois",
          city: "Lewistown",
          schoolname: "Lewistown High School"
        },
        {
          state: "Illinois",
          city: "Chicago",
          schoolname: "Luther High School South"
        },
        {
          state: "Illinois",
          city: "Des Plaines",
          schoolname: "Maine West High School",
          // notes: "Mascot is being questioned after negative social media response to a YouTube video. The performance of a student in a Native American costume",
          // undefined: "and a committee will be formed to discuss the imagery that will be used in the future."
        },
        {
          state: "Illinois",
          city: "Marengo",
          schoolname: "Marengo Community High School"
        },
        {
          state: "Illinois",
          city: "Mascoutah",
          schoolname: "Mascoutah Community High School",
          petition: "http://chng.it/27PMqCqk85"
        },
        {
          state: "Illinois",
          city: "Meredosia",
          schoolname: "Meredosia-Chambersburg High School"
        },
        {
          state: "Illinois",
          city: "Minooka",
          schoolname: "Minooka High School",
          petition: "http://chng.it/N8gwz7syzZ"
        },
        {
          state: "Illinois",
          city: "Momence",
          schoolname: "Momence High School"
        },
        {
          state: "Illinois",
          city: "Momence",
          schoolname: "Momence High School"
        },
        {
          state: "Illinois",
          city: "Morris",
          schoolname: "Morris Community High School",
          petition: "http://chng.it/bmFcnSGCNk"
        },
        {
          state: "Illinois",
          city: "Mt. Zion",
          schoolname: "Mount Zion High School"
        },
        {
          state: "Illinois",
          city: "Neoga",
          schoolname: "Neoga High School"
        },
        {
          state: "Illinois",
          city: "Nokomis",
          schoolname: "Nokomis High School"
        },
        {
          state: "Illinois",
          city: "Pawnee",
          schoolname: "Pawnee High School"
        },
        {
          state: "Illinois",
          city: "Pawnee",
          schoolname: "Pawnee High School"
        },
        {
          state: "Illinois",
          city: "Payson",
          schoolname: "Payson-Seymour High School"
        },
        {
          state: "Illinois",
          city: "Pecatonica",
          schoolname: "Pecatonica High School"
        },
        {
          state: "Illinois",
          city: "Pontiac",
          schoolname: "Pontiac Township High School"
        },
        {
          state: "Illinois",
          city: "Sandwich",
          schoolname: "Sandwich Community High School"
        },
        {
          state: "Illinois",
          city: "Morris",
          schoolname: "Shabbona Middle School"
        },
        {
          state: "Illinois",
          city: "Wolf Lake",
          schoolname: "Shawnee High School"
        },
        {
          state: "Illinois",
          city: "Sterling",
          schoolname: "Sterling High School",
          // notes: "The \"Golden Warriors\" logo is an S in a circle with two feathers.
        },
        {
          state: "Illinois",
          city: "Stockton",
          schoolname: "Stockton High School"
        },
        {
          state: "Illinois",
          city: "Sullivan",
          schoolname: "Sullivan High School"
        },
        {
          state: "Illinois",
          city: "South Holland",
          schoolname: "Thornwood High School"
        },
        {
          state: "Illinois",
          city: "Warren",
          schoolname: "Warren High School",
          petition: "http://chng.it/6wHwWbhYYx"
        },
        {
          state: "Illinois",
          city: "Aurora",
          schoolname: "Waubonsie Valley High School"
        },
        {
          state: "Illinois",
          city: "Wayne City",
          schoolname: "Wayne City High School"
        },
        {
          state: "Illinois",
          city: "Aurora",
          schoolname: "West Aurora High School"
        },
        {
          state: "Illinois",
          city: "Chicago",
          schoolname: "Westinghouse High School"
        },
        {
          state: "Illinois",
          city: "West Chicago",
          schoolname: "Wheaton Academy"
        },
        {
          state: "Illinois",
          city: "Winnebago",
          schoolname: "Winnebago High School"
        },
        {
          state: "Illinois ",
          city: "Lake Forest",
          schoolname: "Lake Forest High School",
          petition: "http://chng.it/gQyrQk87pd",
          // notes: "– Some logos use Native American images or spear"
        },
		]
	},
	'Indiana': {
		num_schools: 682,
		bad_mascots: 28,
		schools: [
			{
        state: "Indiana",
        city: "Anderson",
        schoolname: "Anderson High School"
      },
      {
        state: "Indiana",
        city: "Sellersburg",
        schoolname: "Borden Jr/Sr High School"
      },
      {
        state: "Indiana",
        city: "Indianapolis",
        schoolname: "Brebeuf Jesuit Preparatory School"
      },
      {
        state: "Indiana",
        city: "Brownstown",
        schoolname: "Brownstown Central High School"
      },
      {
        state: "Indiana",
        city: "Muncie",
        schoolname: "Cowan High School"
      },
      {
        state: "Indiana",
        city: "Danville",
        schoolname: "Danville Community High School"
      },
      {
        state: "Indiana",
        city: "Indianapolis",
        schoolname: "Emmerich Manual High School"
      },
      {
        state: "Indiana",
        city: "Fort Wayne",
        schoolname: "Fort Wayne Blackhawk Christian High School"
      },
      {
        state: "Indiana",
        city: "Evansville",
        schoolname: "Harrison High School"
      },
      {
        state: "Indiana",
        city: "Trafalgar",
        schoolname: "Indian Creek Senior High School"
      },
      {
        state: "Indiana",
        city: "Knox",
        schoolname: "Knox Community High School"
      },
      {
        state: "Indiana",
        city: "St. John",
        schoolname: "Lake Central High School"
      },
      {
        state: "Indiana",
        city: "Bunker Hill",
        schoolname: "Maconaquah High School"
      },
      {
        state: "Indiana",
        city: "Milan",
        schoolname: "Milan High School"
      },
      {
        state: "Indiana",
        city: "Gas City",
        schoolname: "Mississinewa High School"
      },
      {
        state: "Indiana",
        city: "Portage",
        schoolname: "Portage High School"
      },
      {
        state: "Indiana",
        city: "Terre Haute",
        schoolname: "South Vigo Senior High"
      },
      {
        state: "Indiana",
        city: "South Bend",
        schoolname: "St. Joseph High School"
      },
      {
        state: "Indiana",
        city: "Lynnville",
        schoolname: "Tecumseh Junior – Senior High School"
      },
      {
        state: "Indiana",
        city: "Monticello",
        schoolname: "Twin Lakes High School"
      },
      {
        state: "Indiana",
        city: "Union City",
        schoolname: "Union City High School"
      },
      {
        state: "Indiana",
        city: "Wabash",
        schoolname: "Wabash High School"
      },
      {
        state: "Indiana",
        city: "Indianapolis",
        schoolname: "Warren Central High School"
      },
      {
        state: "Indiana",
        city: "Syracuse",
        schoolname: "Wawasee High School"
      },
      {
        state: "Indiana",
        city: "Fort Wayne",
        schoolname: "Blackhawk Christian School",
        // notes: "– a K– school operated by a fundamentalist Christian ministry"
      },
      {
        state: "Indiana",
        city: "Decatur",
        schoolname: "Bellmont High School",
        // notes: "– Girls teams are the \"Squaws\".
      },
      {
        state: "Indiana",
        city: "Whiteland",
        schoolname: "Whiteland Community High School",
        // notes: "– The discussion of a possible change among school officials prompted a \"Save the Warrior\" page on Facebook. The name will be retained
      },
      
		]
	},
	'Iowa': {
		num_schools: 453,
		bad_mascots: 15,
		schools: [
			  {
          state: "Iowa",
          city: "Camanche",
          schoolname: "Camanche High School"
        },
        {
          state: "Iowa",
          city: "Centerville",
          schoolname: "Centerville High School"
        },
        {
          state: "Iowa",
          city: "Clarksville",
          schoolname: "Clarksville High School"
        },
        {
          state: "Iowa",
          city: "Forest City",
          schoolname: "Forest City High School"
        },
        {
          state: "Iowa",
          city: "Indianola",
          schoolname: "Indianola High School"
        },
        {
          state: "Iowa",
          city: "Keokuk",
          schoolname: "Keokuk High School"
        },
        {
          state: "Iowa",
          city: "Montezuma",
          schoolname: "Montezuma High School"
        },
        {
          state: "Iowa",
          city: "New Hampton",
          schoolname: "New Hampton High School",
          petition: "https://www.change.org/p/kim-reynolds-new-hampton-ia-needs-to-change-their-mascot?utm_content=cl_sharecopy_26490140_en-US%3A3&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=petition_dashboard"
        },
        {
          state: "Iowa",
          city: "Oskaloosa",
          schoolname: "Oskaloosa High School"
        },
        {
          state: "Iowa",
          city: "Pocahontas",
          schoolname: "Pocahontas Area Middle School/High School"
        },
        {
          state: "Iowa",
          city: "Sac City",
          schoolname: "Sac City High School"
        },
        {
          state: "Iowa",
          city: "Sigourney",
          schoolname: "Sigourney Junior/Senior High School"
        },
        {
          state: "Iowa",
          city: "Spirit Lake",
          schoolname: "Spirit Lake High School"
        },
        {
          state: "Iowa",
          city: "Wapello",
          schoolname: "Wapello Jr/Sr High School"
        },
        {
          state: "Iowa",
          city: "Waukon",
          schoolname: "Waukon High School"
        },
        {
          state: "Iowa",
          city: "Osceola",
          schoolname: "Clarke High School",
          // notes: "– A proposed poster depicting the girls' basketball team in headdresses and warpaint received national attention for cultural insensitivity when it was posted on social media."
        },
      
		]
	},
	'Kansas': {
		num_schools: 449,
		bad_mascots: 22,
		schools: [
			  {
          state: "Kansas",
          city: "Andale",
          schoolname: "Andale High School"
        },
        {
          state: "Kansas",
          city: "Atchison",
          schoolname: "Atchison High School",
          // notes: "Changing the mascot was discussed at a public forum in October"
        },
        {
          state: "Kansas",
          city: "Bonner Springs",
          schoolname: "Bonner Springs High School",
          petition: "http://chng.it/QTZTYtmskw"
        },
        {
          state: "Kansas",
          city: "Council Grove",
          schoolname: "Council Grove High School"
        },
        {
          state: "Kansas",
          city: "Hays",
          schoolname: "Hays High School"
        },
        {
          state: "Kansas",
          city: "Hoxie",
          schoolname: "Hoxie High School"
        },
        {
          state: "Kansas",
          city: "Larned",
          schoolname: "Larned High School"
        },
        {
          state: "Kansas",
          city: "Liberal",
          schoolname: "Liberal High School"
        },
        {
          state: "Kansas",
          city: "Little River",
          schoolname: "Little River High School"
        },
        {
          state: "Kansas",
          city: "Medicine Lodge",
          schoolname: "Medicine Lodge High School"
        },
        {
          state: "Kansas",
          city: "Osage City",
          schoolname: "Osage City High School"
        },
        {
          state: "Kansas",
          city: "Oswego",
          schoolname: "Oswego High School"
        },
        {
          state: "Kansas",
          city: "Satanta",
          schoolname: "Satanta High School"
        },
        {
          state: "Kansas",
          city: "Overland Park",
          schoolname: "Shawnee Mission North High School",
          petition: "http://chng.it/cPfTbwDRjJ"
        },
        {
          state: "Kansas",
          city: "Smith Center",
          schoolname: "Smith Center High School"
        },
        {
          state: "Kansas",
          city: "Kiowa",
          schoolname: "South Barber High School"
        },
        {
          state: "Kansas",
          city: "St. Francis",
          schoolname: "St. Francis High School"
        },
        {
          state: "Kansas",
          city: "St. Paul",
          schoolname: "St. Paul High School"
        },
        {
          state: "Kansas",
          city: "Wamego",
          schoolname: "Wamego High School"
        },
        {
          state: "Kansas",
          city: "Leoti",
          schoolname: "Wichita County High School"
        },
        {
          state: "Kansas",
          city: "Wichita",
          schoolname: "Wichita North High School"
        },
        {
          state: "Kansas",
          city: "Manhattan",
          schoolname: "Manhattan High School",
          petition: "https://www.change.org/p/manhattan-high-school-change-manhattan-high-schools-mascot?recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_message",
          // notes: "– The mascot was discussed at a school board forum where student and community members spoke on both sides of the issue. The Unitarian Universalist Fellowship of Manhattan passed a resolution in favor of changing the mascot. The school board has set a September"
        },
		]
	},
	'Kentucky': {
		num_schools: 538,
		bad_mascots: 9,
		schools: [
			{
        state: "Kentucky",
        city: "Columbia",
        schoolname: "Adair County High School"
      },
      {
        state: "Kentucky",
        city: "Pike County",
        schoolname: "East Ridge High School"
      },
      {
        state: "Kentucky",
        city: "Eminence",
        schoolname: "Eminence High School"
      },
      {
        state: "Kentucky",
        city: "Dry Ridge",
        schoolname: "Grant County High School"
      },
      {
        state: "Kentucky",
        city: "Covington",
        schoolname: "Holy Cross High School"
      },
      {
        state: "Kentucky",
        city: "Richmond",
        schoolname: "Madison Central High School"
      },
      {
        state: "Kentucky",
        city: "Mt. Sterling",
        schoolname: "Montgomery County High School",
        petition: "http://chng.it/CFy9PMZ45x"
      },
      {
        state: "Kentucky",
        city: "Somerset",
        schoolname: "Southwestern High School"
      },
      {
        state: "Kentucky",
        city: "Bowling Green",
        schoolname: "Warren East High School"
      },
      {
        state: "Kentucky ",
        city: "Morganfield",
        schoolname: "Union County High School",
        // notes: "– Girls teams are the \"Bravettes\".
      },
		]
	},
	'Louisiana': {
		num_schools: 558,
		bad_mascots: 14,
		schools: [
			 {
          state: "Louisiana",
          city: "Anacoco",
          schoolname: "Anacoco High School"
        },
        {
          state: "Louisiana",
          city: "Elton",
          schoolname: "Elton High School"
        },
        {
          state: "Louisiana",
          city: "Shreveport",
          schoolname: "Fair Park High School"
        },
        {
          state: "Louisiana",
          city: "Gray",
          schoolname: "H. L. Bourgeois High School"
        },
        {
          state: "Louisiana",
          city: "Baton Rouge",
          schoolname: "Istrouma High School"
        },
        {
          state: "Louisiana",
          city: "Metairie",
          schoolname: "J.D. Meisler Middle School"
        },
        {
          state: "Louisiana",
          city: "Natchitoches",
          schoolname: "Natchitoches Central High School"
        },
        {
          state: "Louisiana",
          city: "Negreet",
          schoolname: "Negreet High School"
        },
        {
          state: "Louisiana",
          city: "Ringgold",
          schoolname: "Ringgold High School"
        },
        {
          state: "Louisiana",
          city: "Tioga",
          schoolname: "Tioga High School"
        },
        {
          state: "Louisiana",
          city: "Lake Charles",
          schoolname: "Washington-Marion High School"
        },
        {
          state: "Louisiana",
          city: "West Monroe",
          schoolname: "West Ouachita High School"
        },
        {
          state: "Louisiana",
          city: "Minden",
          schoolname: "Glenbrook School",
          // petition: "– A private K",
          // notes: " school",
          // undefined: "with no Native American students."
        },
        {
          state: "Louisiana",
          city: "St. Joseph",
          schoolname: "Tensas Academy",
          // petition: "– a private pre",
          // notes: "K through  school"
        },
		]
	},
	'Maine': {
		num_schools: 206,
		bad_mascots: 0,
		schools: [
			{
				school_name: "",
			 	school_city: "",
				notes: "",
				petition: ""
			}
		]
	},
	'Maryland': {
		num_schools: 497,
		bad_mascots: 5,
		schools: [
			  {
          state: "Maryland",
          city: "Morganza",
          schoolname: "Chopticon High School"
        },
        {
          state: "Maryland",
          city: "Reisterstown",
          schoolname: "Franklin High School"
        },
        {
          state: "Maryland",
          city: "Glen Burnie",
          schoolname: "Granite Baptist High School"
        },
        {
          state: "Maryland",
          city: "North East",
          schoolname: "North East High School"
        },
        {
          state: "Maryland",
          city: "Salisbury",
          schoolname: "Wicomico High School"
        },
		]
	},
	'Massachusetts': {
		num_schools: 641,
		bad_mascots: 28,
		schools: [
			  {
          state: "Massachusetts",
          city: "Agawam",
          schoolname: "Agawam High School",
          petition: "http://chng.it/Vh7nsj4yWG",
          // notes: "With controversy going back decades"
        },
        {
          state: "Massachusetts",
          city: "Amesbury",
          schoolname: "Amesbury High School",
          petition: "http://chng.it/TjzN6PL2xR"
        },
        {
          state: "Massachusetts",
          city: "Marlborough",
          schoolname: "Assabet Valley Regional Technical High School"
        },
        {
          state: "Massachusetts",
          city: "Webster",
          schoolname: "Bartlett Junior Senior High School",
          // notes: "School paper is the \"Totem Pole\"
        },
        {
          state: "Massachusetts",
          city: "Billerica",
          schoolname: "Billerica Memorial High School"
        },
        {
          state: "Massachusetts",
          city: "Canton",
          schoolname: "Blue Hills Regional Technical School"
        },
        {
          state: "Massachusetts",
          city: "Dighton",
          schoolname: "Bristol County Agricultural High School"
        },
        {
          state: "Massachusetts",
          city: "Cambridge",
          schoolname: "Cambridge Rindge and Latin School"
        },
        {
          state: "Massachusetts",
          city: "South Dartmouth",
          schoolname: "Dartmouth High School"
        },
        {
          state: "Massachusetts",
          city: "Foxborough",
          schoolname: "Foxborough High School"
        },
        {
          state: "Massachusetts",
          city: "Grafton",
          schoolname: "Grafton High School"
        },
        {
          state: "Massachusetts",
          city: "Springfield",
          schoolname: "High School of Commerce"
        },
        {
          state: "Massachusetts",
          city: "Wrentham",
          schoolname: "King Philip Regional High School"
        },
        {
          state: "Massachusetts",
          city: "Lowell",
          schoolname: "Lowell High School"
        },
        {
          state: "Massachusetts",
          city: "Boxford",
          schoolname: "Masconomet Regional High School"
        },
        {
          state: "Massachusetts",
          city: "Medfield",
          schoolname: "Medfield High School",
          petition: "http://chng.it/dqDJPHXM2G"
        },
        {
          state: "Massachusetts",
          city: "Middleborough",
          schoolname: "Middleborough High School"
        },
        {
          state: "Massachusetts",
          city: "Millis",
          schoolname: "Millis High School"
        },
        {
          state: "Massachusetts",
          city: "Buckland",
          schoolname: "Mohawk Trail Regional High School",
          // notes: "Mohawk Trail Regional School leaders are discussing changing the high school’s Native American mascot"
        },
        {
          state: "Massachusetts",
          city: "Templeton",
          schoolname: "Narragansett Regional High School"
        },
        {
          state: "Massachusetts",
          city: "Upton",
          schoolname: "Nipmuc Regional High School"
        },
        {
          state: "Massachusetts",
          city: "Quincy",
          schoolname: "North Quincy High School"
        },
        {
          state: "Massachusetts",
          city: "Saugus",
          schoolname: "Saugus High School",
          petition: "http://chng.it/JsKGjvZF7y"
        },
        {
          state: "Massachusetts",
          city: "Fiskdale",
          schoolname: "Tantasqua Regional High School"
        },
        {
          state: "Massachusetts",
          city: "Tewksbury",
          schoolname: "Tewksbury Memorial High School",
          petition: "http://chng.it/8yVmPLPqv7"
        },
        {
          state: "Massachusetts",
          city: "Dalton",
          schoolname: "Wahconah Regional High School"
        },
        {
          state: "Massachusetts",
          city: "Wakefield",
          schoolname: "Wakefield Memorial High School",
          petition: "https://www.change.org/p/wakefield-school-committee-change-the-wakefield-warriors-mascot-in-the-wakefield-ma-public-school-system?utm_content=cl_sharecopy_23513015_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial"
        },
        {
          state: "Massachusetts",
          city: "Ware",
          schoolname: "Ware High School"
        },
        {
          state: "Massachusetts",
          city: "West Newbury",
          schoolname: "Pentucket Regional High School",
          // notes: "– Despite criticism",
          // undefined: "and the name referring to an honorific that is inappropriate for a sports team. The Pentucket School Committee is set to decide the fate of the Sachem mascot tentatively at their second meeting in September."
        },
        {
          state: "Massachusetts",
          city: "Seekonk",
          schoolname: "Seekonk High School",
          // notes: "– Logo includes a feathered spear"
        },
        {
          state: "Massachusetts",
          city: "Braintree",
          schoolname: "Braintree High School",
          // notes: "– Nickname derived from the Wampanoag people"
        },
        {
          state: "Massachusetts",
          city: "Northborough",
          schoolname: "Algonquin Regional High School",
          // notes: " – Often referred to as the T Hawks"
        },
        {
          state: "Massachusetts",
          city: "Wayland",
          schoolname: "Wayland High School",
          // notes: "– Uses a feathered spear as its logo"
        },
        {
          state: "Massachusetts ",
          city: "Melrose",
          schoolname: "Melrose High School",
          // notes: "– While retaining the name",
          // undefined: "was removed in ."
        },
		]
	},
	'Michigan': {
		num_schools: 1870,
		bad_mascots: 31,
		schools: [
			  {
          state: "Michigan",
          city: "Athens",
          schoolname: "Athens Jr/Sr High School"
        },
        {
          state: "Michigan",
          city: "Oakland County",
          schoolname: "Brother Rice High School Bloomfield Township"
        },
        {
          state: "Michigan",
          city: "Camden",
          schoolname: "Camden-Frontier High School"
        },
        {
          state: "Michigan",
          city: "Canton",
          schoolname: "Canton High School",
          petition: "http://chng.it/VCxFbSVshp"
        },
        {
          state: "Michigan",
          city: "Plymouth",
          schoolname: "Canton High School"
        },
        {
          state: "Michigan",
          city: "Capac",
          schoolname: "Capac Jr/Sr High School"
        },
        {
          state: "Michigan",
          city: "Cheboygan",
          schoolname: "Cheboygan Area High School"
        },
        {
          state: "Michigan",
          city: "Chesaning",
          schoolname: "Chesaning High School"
        },
        {
          state: "Michigan",
          city: "Comstock",
          schoolname: "Comstock High School"
        },
        {
          state: "Michigan",
          city: "Dowagiac",
          schoolname: "Dowagiac High School"
        },
        {
          state: "Michigan",
          city: "Dearborn",
          schoolname: "Edsel Ford High School",
          // notes: "Dearborn is the location of the Ford Motor Company headquarters."
        },
        {
          state: "Michigan",
          city: "Gladstone",
          schoolname: "Gladstone Area High School"
        },
        {
          state: "Michigan",
          city: "Grass Lake",
          schoolname: "Grass Lake High School"
        },
        {
          state: "Michigan",
          city: "Hartford",
          schoolname: "Hartford High School"
        },
        {
          state: "Michigan",
          city: "New Boston",
          schoolname: "Huron High School",
          notes: "With the widespread attention to systemic racism"
        },
        {
          state: "Michigan",
          city: "Manistee",
          schoolname: "Manistee Middle / High School"
        },
        {
          state: "Michigan",
          city: "Marquette",
          schoolname: "Marquette Senior High School",
          // notes: "During a discussion of changing the name Bill Saunders",
          // undefined: "we see within the school was is a certain amount of bullying and harassment of Native American students that’s taking place.” "
        },
        {
          state: "Michigan",
          city: "Newberry",
          schoolname: "Newberry High School"
        },
        {
          state: "Michigan",
          city: "Okemos",
          schoolname: "Okemos High School"
        },
        {
          state: "Michigan",
          city: "Rogers City",
          schoolname: "Rogers City High School"
        },
        {
          state: "Michigan",
          city: "Sandusky",
          schoolname: "Sandusky High School",
          // notes: "In response to questions following the change by the Washington Football Team"
        },
        {
          state: "Michigan",
          city: "Saranac",
          schoolname: "Saranac High School"
        },
        {
          state: "Michigan",
          city: "Lansing",
          schoolname: "Sexton High School"
        },
        {
          state: "Michigan",
          city: "Tawas City",
          schoolname: "Tawas Area High School"
        },
        {
          state: "Michigan",
          city: "Tecumseh",
          schoolname: "Tecumseh High School",
          petition: "http://chng.it/fsKQ9KSGbx"
        },
        {
          state: "Michigan",
          city: "Tekonsha",
          schoolname: "Tekonsha High School"
        },
        {
          state: "Michigan",
          city: "Utica",
          schoolname: "Utica High School"
        },
        {
          state: "Michigan",
          city: "Commerce Township",
          schoolname: "Walled Lake Western High School"
        },
        {
          state: "Michigan",
          city: "White Cloud",
          schoolname: "White Cloud High School"
        },
        {
          state: "Michigan",
          city: "White Pigeon",
          schoolname: "White Pigeon Jr/Sr High School"
        },
        {
          state: "Michigan",
          city: "Escanaba",
          schoolname: "Escanaba Area Public Schools",
          petition: "http://chng.it/9BfnQJ8Z8Y",
          // notes: "– The public schools are all the Eskymos"
        },
		]
	},
	'Minnesota': {
		num_schools: 1244,
		bad_mascots: 6,
		schools: [
			  {
          state: "Minnesota",
          city: "Benson",
          schoolname: "Benson High School"
        },
        {
          state: "Minnesota",
          city: "Mahnomen County",
          schoolname: "Mahnomen High School"
        },
        {
          state: "Minnesota",
          city: "Menahga",
          schoolname: "Menahga High School"
        },
        {
          state: "Minnesota",
          city: "Pipestone",
          schoolname: "Pipestone Area High School"
        },
        {
          state: "Minnesota",
          city: "Sleepy Eye",
          schoolname: "Sleepy Eye High School"
        },
        {
          state: "Minnesota",
          city: "Warroad",
          schoolname: "Warroad High School"
        },
        {
          state: "Minnesota",
          city: "Esko",
          schoolname: "Esko High School",
          // notes: "– \"Eskomos\"
        },
		]
	},
	'Mississippi': {
		num_schools: 530,
		bad_mascots: 15,
		schools: [
			  {
          state: "Mississippi",
          city: "Biloxi",
          schoolname: "Biloxi High School"
        },
        {
          state: "Mississippi",
          city: "Byhalia",
          schoolname: "Byhalia High School"
        },
        {
          state: "Mississippi",
          city: "Philadelphia",
          schoolname: "Choctaw Central High School"
        },
        {
          state: "Mississippi",
          city: "Clinton",
          schoolname: "Clinton High School"
        },
        {
          state: "Mississippi",
          city: "Hazlehurst",
          schoolname: "Hazlehurst High School"
        },
        {
          state: "Mississippi",
          city: "Fulton",
          schoolname: "Itawamba Agricultural High School"
        },
        {
          state: "Mississippi",
          city: "Senatobia",
          schoolname: "Magnolia Heights High School"
        },
        {
          state: "Mississippi",
          city: "Okolona",
          schoolname: "Okolona High School"
        },
        {
          state: "Mississippi",
          city: "Pelahatchie",
          schoolname: "Pelahatchie High School"
        },
        {
          state: "Mississippi",
          city: "Senatobia",
          schoolname: "Senatobia Municipal School District"
        },
        {
          state: "Mississippi",
          city: "Ellisville",
          schoolname: "South Jones High School"
        },
        {
          state: "Mississippi",
          city: "Iuka",
          schoolname: "Tishomingo County High School"
        },
        {
          state: "Mississippi",
          city: "Tylertown",
          schoolname: "Tylertown High School"
        },
        {
          state: "Mississippi",
          city: "Webb",
          schoolname: "West Tallahatchie High School"
        },
        {
          state: "Mississippi",
          city: "Yazoo City",
          schoolname: "Yazoo City High School"
        },
		]
	},
	'Missouri': {
		num_schools: 961,
		bad_mascots: 31,
		schools: [
			{
        state: "Missouri",
        city: "Adrian",
        schoolname: "Adrian High School"
      },
      {
        state: "Missouri",
        city: "Bismarck",
        schoolname: "Bismarck High School"
      },
      {
        state: "Missouri",
        city: "St. Joseph",
        schoolname: "Central High School"
      },
      {
        state: "Missouri",
        city: "Chilhowee",
        schoolname: "Chilhowee High School"
      },
      {
        state: "Missouri",
        city: "Kahoka",
        schoolname: "Clark County High School"
      },
      {
        state: "Missouri",
        city: "Myrtle",
        schoolname: "Couch High School"
      },
      {
        state: "Missouri",
        city: "Elsberry",
        schoolname: "Elsberry High School"
      },
      {
        state: "Missouri",
        city: "Independence",
        schoolname: "Fort Osage High School"
      },
      {
        state: "Missouri",
        city: "Hallsville",
        schoolname: "Hallsville High School"
      },
      {
        state: "Missouri",
        city: "Hayti",
        schoolname: "Hayti High School"
      },
      {
        state: "Missouri",
        city: "Wentzville",
        schoolname: "Holt High School",
        petition: "http://chng.it/dTGqRvv57B"
      },
      {
        state: "Missouri",
        city: "Jackson",
        schoolname: "Jackson High School",
        petition: "https://www.thepetitionsite.com",
        // notes: "Superintendent Dr. John Link: jlink@jr2mail.org"
      },
      {
        state: "Missouri",
        city: "Kennett",
        schoolname: "Kennett High School"
      },
      {
        state: "Missouri",
        city: "Springfield",
        schoolname: "Kickapoo High School"
      },
      {
        state: "Missouri",
        city: "Theodosia",
        schoolname: "Lutie High School"
      },
      {
        state: "Missouri",
        city: "Kingdom City",
        schoolname: "North Callaway High School"
      },
      {
        state: "Missouri",
        city: "Kaiser",
        schoolname: "Osage High School"
      },
      {
        state: "Missouri",
        city: "Osceola",
        schoolname: "Osceola High School"
      },
      {
        state: "Missouri",
        city: "Pacific",
        schoolname: "Pacific High School"
      },
      {
        state: "Missouri",
        city: "Puxico",
        schoolname: "Puxico High School"
      },
      {
        state: "Missouri",
        city: "Russellville",
        schoolname: "Russellville High School"
      },
      {
        state: "Missouri",
        city: "Alma",
        schoolname: "Santa Fe High School"
      },
      {
        state: "Missouri",
        city: "Savannah",
        schoolname: "Savannah High School",
        petition: "http://chng.it/xYscFj82SP"
      },
      {
        state: "Missouri",
        city: "Sikeston",
        schoolname: "Scott County Central High School"
      },
      {
        state: "Missouri",
        city: "Seneca",
        schoolname: "Seneca High School"
      },
      {
        state: "Missouri",
        city: "Smithville",
        schoolname: "Smithville High School"
      },
      {
        state: "Missouri",
        city: "St. Charles",
        schoolname: "St. Charles West High School"
      },
      {
        state: "Missouri",
        city: "Perryville",
        schoolname: "St. Vincent High School"
      },
      {
        state: "Missouri",
        city: "Strafford",
        schoolname: "Strafford High School"
      },
      {
        state: "Missouri",
        city: "Tarkio",
        schoolname: "Tarkio High School"
      },
      {
        state: "Missouri",
        city: "Vandalia",
        schoolname: "Van-Far High School"
      },
		]
	},
	'Montana': {
		num_schools: 367,
		bad_mascots: 6,
		schools: [
			{
        state: "Montana",
        city: "Kalispell",
        schoolname: "Flathead High School"
      },
      {
        state: "Montana",
        city: "Lodge Grass",
        schoolname: "Lodge Grass High School"
      },
      {
        state: "Montana",
        city: "Poplar",
        schoolname: "Poplar High School"
      },
      {
        state: "Montana",
        city: "Ronan",
        schoolname: "Ronan High School"
      },
      {
        state: "Montana",
        city: "Ashland",
        schoolname: "St. Labre Indian Catholic High School"
      },
      {
        state: "Montana",
        city: "Browning",
        schoolname: "Browning High School",
        // notes: "– Blackfeet Indian Reservation"
      },
		]
	},
	'Nebraska': {
		num_schools: 368,
		bad_mascots: 14,
		schools: [
			  {
          state: "Nebraska",
          city: "Bellevue",
          schoolname: "Bellevue East High School"
        },
        {
          state: "Nebraska",
          city: "Bellevue",
          schoolname: "Bellevue West High School",
          notes: "Offutt Air Force Base is located in Bellevue"
        },
        {
          state: "Nebraska",
          city: "Broken Bow",
          schoolname: "Broken Bow High School"
        },
        {
          state: "Nebraska",
          city: "Tecumseh",
          schoolname: "Johnson County Central High School"
        },
        {
          state: "Nebraska",
          city: "Springview",
          schoolname: "Keya Paha County High School"
        },
        {
          state: "Nebraska",
          city: "Minatare",
          schoolname: "Minatare High School"
        },
        {
          state: "Nebraska",
          city: "Ogallala",
          schoolname: "Ogallala High School"
        },
        {
          state: "Nebraska",
          city: "Macy",
          schoolname: "Omaha Nation Public Schools"
        },
        {
          state: "Nebraska",
          city: "Pawnee City",
          schoolname: "Pawnee City High School"
        },
        {
          state: "Nebraska",
          city: "Ponca",
          schoolname: "Ponca High School"
        },
        {
          state: "Nebraska",
          city: "Weeping Water",
          schoolname: "Weeping Water High School"
        },
        {
          state: "Nebraska",
          city: "Omaha",
          schoolname: "Westside High School"
        },
        {
          state: "Nebraska",
          city: "Winnebago",
          schoolname: "Winnebago High School"
        },
        {
          state: "Nebraska",
          city: "Yutan",
          schoolname: "Yutan High School"
        },
        {
          state: "Nebraska",
          city: "Battle Creek",
          schoolname: "Battle Creek Jr/Sr High School",
          // notes: "– Girls teams are the \"Bravettes\".
        },
		]
	},
	'Nevada': {
		num_schools: 217,
		bad_mascots: 3,
		schools: [
			  {
          state: "Nevada",
          city: "Elko",
          schoolname: "Elko High School"
        },
        {
          state: "Nevada",
          city: "Owyhee",
          schoolname: "Owyhee High School"
        },
        {
          state: "Nevada",
          city: "Las Vegas",
          schoolname: "Western High School",
          petition: "http://chng.it/qmZNyVSHFK"
        },
		]
	},
	'New Hampshire': {
		num_schools: 187,
		bad_mascots: 5,
		schools: [
			  {
          state: "New Hampshire",
          city: "Belmont",
          schoolname: "Belmont High School"
        },
        {
          state: "New Hampshire",
          city: "Laconia",
          schoolname: "Laconia High School"
        },
        {
          state: "New Hampshire",
          city: "Kingston",
          schoolname: "Sanborn Regional High School",
          petition: "http://chng.it/HhhnMQL9W2",
          // notes: "Students are showing support for an online petition to change the name"
        },
        {
          state: "New Hampshire",
          city: "Rochester",
          schoolname: "Spaulding High School",
          petition: "http://chng.it/vmDHZ9q8yZ"
        },
        {
          state: "New Hampshire",
          city: "Wilton",
          schoolname: "Wilton-Lyndeborough Cooperative Middle/Senior High School"
        },
		]
	},
	'New Jersey': {
		num_schools: 866,
		bad_mascots: 28,
		schools: [
			{
        state: "New Jersey",
        city: "Galloway Township",
        schoolname: "Absegami High School"
      },
      {
        state: "New Jersey",
        city: "Buena",
        schoolname: "Buena Regional High School"
      },
      {
        state: "New Jersey",
        city: "Burlington County",
        schoolname: "Cherokee High School"
      },
      {
        state: "New Jersey",
        city: "Cliffside Park",
        schoolname: "Cliffside Park High School"
      },
      {
        state: "New Jersey",
        city: "Englewood",
        schoolname: "Dwight Morrow High School"
      },
      {
        state: "New Jersey",
        city: "Newark",
        schoolname: "East Side High School",
        petition: "https://www.change.org/p/students-and-staff-of-east-side-petition-to-change-the-east-side-red-raider-mascot-and-logo?utm_content=cl_sharecopy_24868336_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=petition_dashboard"
      },
      {
        state: "New Jersey",
        city: "Hopatcong",
        schoolname: "Hopatcong High School"
      },
      {
        state: "New Jersey",
        city: "Oakland",
        schoolname: "Indian Hills High School"
      },
      {
        state: "New Jersey",
        city: "West Caldwell",
        schoolname: "James Caldwell High School",
        petition: "http://chng.it/FLmbZF9QTc"
      },
      {
        state: "New Jersey",
        city: "Keyport",
        schoolname: "Keyport High School"
      },
      {
        state: "New Jersey",
        city: "Medford",
        schoolname: "Lenape High School",
        petition: "http://chng.it/Pvv47CfXGr"
      },
      {
        state: "New Jersey",
        city: "Englishtown",
        schoolname: "Manalapan High School"
      },
      {
        state: "New Jersey",
        city: "Manasquan",
        schoolname: "Manasquan High School"
      },
      {
        state: "New Jersey",
        city: "Newton",
        schoolname: "Newton High School"
      },
      {
        state: "New Jersey",
        city: "Ocean City",
        schoolname: "Ocean City High School"
      },
      {
        state: "New Jersey",
        city: "Passaic",
        schoolname: "Passaic High School"
      },
      {
        state: "New Jersey",
        city: "Pennsauken Township",
        schoolname: "Pennsauken High School"
      },
      {
        state: "New Jersey",
        city: "Piscataway",
        schoolname: "Piscataway High School"
      },
      {
        state: "New Jersey",
        city: "Rahway",
        schoolname: "Rahway High School"
      },
      {
        state: "New Jersey",
        city: "Burlington County",
        schoolname: "Shawnee High School"
      },
      {
        state: "New Jersey",
        city: "Beachwood",
        schoolname: "Toms River Intermediate School South"
      },
      {
        state: "New Jersey",
        city: "Toms River",
        schoolname: "Toms River South High School",
        petition: "http://chng.it/sZd2Mhqshr",
        // notes: "While Native American's criticize student's dressing in faux \"Indian\" costumes at sporting events
      },
      {
        state: "New Jersey",
        city: "Warren Township",
        schoolname: "Watchung Hills Regional High School",
        petition: "http://chng.it/SYn92spYVY"
      },
      {
        state: "New Jersey",
        city: "Wayne",
        schoolname: "Wayne Valley High School"
      },
      {
        state: "New Jersey",
        city: "Weehawken",
        schoolname: "Weehawken High School"
      },
      {
        state: "New Jersey",
        city: "Newark",
        schoolname: "Weequahic High School"
      },
      {
        state: "New Jersey",
        city: "Wildwood",
        schoolname: "Wildwood High School"
      },
      {
        state: "New Jersey",
        city: "Williamstown",
        schoolname: "Williamstown High School"
      },
		]
	},
	'New Mexico': {
		num_schools: 334,
		bad_mascots: 5,
		schools: [
			  {
          state: "New Mexico",
          city: "Bayard",
          schoolname: "Cobre High School"
        },
        {
          state: "New Mexico",
          city: "Santa Fe",
          schoolname: "Santa Fe Indian School"
        },
        {
          state: "New Mexico",
          city: "Shiprock",
          schoolname: "Shiprock High School",
          // notes: "– (Public High School mostly Navajo)"
        },
        {
          state: "New Mexico ",
          city: "Cuba",
          schoolname: "Tse Yi Gai High School",
          // notes: "– town is % Native American"
        },
        {
          state: "New Mexico",
          city: "Mescalero",
          schoolname: "Mescalero Apache High/Mid School",
          // notes: "– Town population is % Native American."
        },
		]
	},
	'New York': {
		num_schools: 2053,
		bad_mascots: 0,
		schools: [
        {
          state: "",
          city: "",
          schoolname: ""
        },
		]
	},
	'North Carolina': {
		num_schools: 981,
		bad_mascots: 6,
		schools: [
			  {
          state: "North Carolina",
          city: "Cherokee",
          schoolname: "Cherokee High School"
        },
        {
          state: "North Carolina",
          city: "Manteo",
          schoolname: "Manteo High School"
        },
        {
          state: "North Carolina",
          city: "Belmont",
          schoolname: "South Point High School",
          petition: "http://chng.it/ws8JsjXy9Q"
        },
        {
          state: "North Carolina",
          city: "Walnut Cove",
          schoolname: "South Stokes High School"
        },
        {
          state: "North Carolina",
          city: "Hickory",
          schoolname: "St. Stephens High School"
        },
        {
          state: "North Carolina",
          city: "Statesville",
          schoolname: "West Iredell High School"
        },
		]
	},
	'North Dakota': {
		num_schools: 194,
		bad_mascots: 13,
		schools: [
        {
          state: "North Dakota",
          city: "Spirit Lake Indian Reservation",
          schoolname: "Warwick High School"
        },
			{
        state: "North Dakota",
        city: "Belcourt",
        schoolname: "Turtle Mountain Community Schools"
      },
      {
        state: "North Dakota",
        city: "Fort Yates",
        schoolname: "Standing Rock High School"
      },
      {
        state: "North Dakota",
        city: "Mandaree",
        schoolname: "Mandaree High School"
      },
      {
        state: "North Dakota",
        city: "Bottineau",
        schoolname: "Bottineau High School"
      },
      {
        state: "North Dakota",
        city: "Bowbells",
        schoolname: "Bowbells High School"
      },
      {
        state: "North Dakota",
        city: "Fort Totten",
        schoolname: "Four Winds High School (Spirit Lake Reservation)"
      },
      {
        state: "North Dakota",
        city: "Mandan",
        schoolname: "Mandan High School"
      },
      {
        state: "North Dakota",
        city: "Parshall",
        schoolname: "Parshall High School"
      },
      {
        state: "North Dakota",
        city: "Selfridge",
        schoolname: "Selfridge High School"
      },
      {
        state: "North Dakota",
        city: "Westhope",
        schoolname: "Westhope High School"
      },
      {
        state: "North Dakota",
        city: "Fort Berthold Indian Reservation",
        schoolname: "White Shield High School"
      },
      {
        state: "North Dakota",
        city: "Standing Rock Reservation",
        schoolname: "Solen High School"
      },
		]
	},
	'Ohio': {
		num_schools: 1360,
		bad_mascots: 75,
		schools: [
			{
        state: "Ohio",
        city: "Sherwood",
        schoolname: "Fairview High School"
      },
      {
        state: "Ohio",
        city: "Frankfort",
        schoolname: "Adena High School"
      },
      {
        state: "Ohio",
        city: "Arcadia",
        schoolname: "Arcadia High School"
      },
      {
        state: "Ohio",
        city: "Ashland",
        schoolname: "Ashland High School"
      },
      {
        state: "Ohio",
        city: "Kinsman",
        schoolname: "Badger High School"
      },
      {
        state: "Ohio",
        city: "Bellaire",
        schoolname: "Bellaire High School"
      },
      {
        state: "Ohio",
        city: "Bellefontaine",
        schoolname: "Bellefontaine High School",
        petition: "http://chng.it/PGnCnv4PsJ"
      },
      {
        state: "Ohio",
        city: "Bellevue",
        schoolname: "Bellevue High School"
      },
      {
        state: "Ohio",
        city: "Brookfield",
        schoolname: "Brookfield High School"
      },
      {
        state: "Ohio",
        city: "Lore City",
        schoolname: "Buckeye Trail High School"
      },
      {
        state: "Ohio",
        city: "Bucyrus",
        schoolname: "Bucyrus High School"
      },
      {
        state: "Ohio",
        city: "Caldwell",
        schoolname: "Caldwell High School"
      },
      {
        state: "Ohio",
        city: "Tiffin",
        schoolname: "Calvert High School"
      },
      {
        state: "Ohio",
        city: "Canal Winchester",
        schoolname: "Canal Winchester High School",
        petition: "https://www.change.org/p/superintendent-jim-sotlar-retire-the-canal-winchester-indian-as-a-mascot?utm_content=cl_sharecopy_22981207_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial"
      },
      {
        state: "Ohio",
        city: "Carlisle",
        schoolname: "Carlisle High School"
      },
      {
        state: "Ohio",
        city: "Carrollton",
        schoolname: "Carrollton High School"
      },
      {
        state: "Ohio",
        city: "Cedarville",
        schoolname: "Cedarville High School"
      },
      {
        state: "Ohio",
        city: "Copley",
        schoolname: "Copley High School",
        petition: "https://www.change.org/p/copley-fairlawn-board-of-education-racial-justice-in-copley-fairlawn-schools?utm_content=cl_sharecopy_23784427_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=share_petition"
      },
      {
        state: "Ohio",
        city: "Coshocton",
        schoolname: "Coshocton High School"
      },
      {
        state: "Ohio",
        city: "Cuyahoga Heights",
        schoolname: "Cuyahoga Heights High School"
      },
      {
        state: "Ohio",
        city: "Sardinia",
        schoolname: "Eastern High School"
      },
      {
        state: "Ohio",
        city: "Ashtabula",
        schoolname: "Edgewood Senior High School"
      },
      {
        state: "Ohio",
        city: "Fairfield",
        schoolname: "Fairfield High School"
      },
      {
        state: "Ohio",
        city: "Fort Loramie",
        schoolname: "Fort Loramie High School",
        // notes: "At a school board meeting in July  only one resident spoke in favor of changing the name"
      },
      {
        state: "Ohio",
        city: "Fort Recovery",
        schoolname: "Fort Recovery High School"
      },
      {
        state: "Ohio",
        city: "Fostoria",
        schoolname: "Fostoria High School"
      },
      {
        state: "Ohio",
        city: "Girard",
        schoolname: "Girard High School"
      },
      {
        state: "Ohio",
        city: "Goshen",
        schoolname: "Goshen High School"
      },
      {
        state: "Ohio",
        city: "Hillsboro",
        schoolname: "Hillsboro High School"
      },
      {
        state: "Ohio",
        city: "Bascom",
        schoolname: "Hopewell-Loudon High School"
      },
      {
        state: "Ohio",
        city: "Wintersville",
        schoolname: "Indian Creek High School",
        petition: "http://chng.it/4SLcmWhzv4"
      },
      {
        state: "Ohio",
        city: "Cincinnati",
        schoolname: "Indian Hill High School"
      },
      {
        state: "Ohio",
        city: "Gnadenhutten",
        schoolname: "Indian Valley High School"
      },
      {
        state: "Ohio",
        city: "Kansas",
        schoolname: "Lakota High School"
      },
      {
        state: "Ohio",
        city: "Lebanon",
        schoolname: "Lebanon High School"
      },
      {
        state: "Ohio",
        city: "Circleville",
        schoolname: "Logan Elm High School"
      },
      {
        state: "Ohio",
        city: "Logan",
        schoolname: "Logan High School"
      },
      {
        state: "Ohio",
        city: "Middletown",
        schoolname: "Madison High School"
      },
      {
        state: "Ohio",
        city: "Mariemont",
        schoolname: "Mariemont High School"
      },
      {
        state: "Ohio",
        city: "Cincinnati",
        schoolname: "McAuley High School"
      },
      {
        state: "Ohio",
        city: "Mechanicsburg",
        schoolname: "Mechanicsburg High School"
      },
      {
        state: "Ohio",
        city: "Sycamore",
        schoolname: "Mohawk High School"
      },
      {
        state: "Ohio",
        city: "Woodsfield",
        schoolname: "Monroe Central High School"
      },
      {
        state: "Ohio",
        city: "Mount Gilead",
        schoolname: "Mount Gilead High School"
      },
      {
        state: "Ohio",
        city: "Pleasant Hill",
        schoolname: "Newton Local High School",
        notes: "Superintendent states: “In this country"
      },
      {
        state: "Ohio",
        city: "Canal Fulton",
        schoolname: "Northwest High School"
      },
      {
        state: "Ohio",
        city: "Springfield",
        schoolname: "Northwestern High School"
      },
      {
        state: "Ohio",
        city: "Norwood",
        schoolname: "Norwood High School"
      },
      {
        state: "Ohio",
        city: "Lewis Center",
        schoolname: "Olentangy High School"
      },
      {
        state: "Ohio",
        city: "Mansfield",
        schoolname: "Ontario High School"
      },
      {
        state: "Ohio",
        city: "Parma",
        schoolname: "Parma Senior High School"
      },
      {
        state: "Ohio",
        city: "Peebles",
        schoolname: "Peebles High School"
      },
      {
        state: "Ohio",
        city: "Piqua",
        schoolname: "Piqua High School",
        petition: "http://chng.it/GV7MX8jFbC"
      },
      {
        state: "Ohio",
        city: "Port Clinton",
        schoolname: "Port Clinton High School",
        petition: "http://chng.it/NTtM7jxy8G"
      },
      {
        state: "Ohio",
        city: "Camden",
        schoolname: "Preble Shawnee High School"
      },
      {
        state: "Ohio",
        city: "Rittman",
        schoolname: "Rittman High School"
      },
      {
        state: "Ohio",
        city: "Ironton",
        schoolname: "Rock Hill Senior High School"
      },
      {
        state: "Ohio",
        city: "Lima",
        schoolname: "Shawnee High School"
      },
      {
        state: "Ohio",
        city: "Springfield",
        schoolname: "Shawnee High School",
        // notes: "Superintendent states “We adjusted our logo based on the feedback we received",
        // undefined: "”."
      },
      {
        state: "Ohio",
        city: "Salineville",
        schoolname: "Southern Local Jr./Sr. High School"
      },
      {
        state: "Ohio",
        city: "St. Henry",
        schoolname: "St. Henry High School"
      },
      {
        state: "Ohio",
        city: "Fostoria",
        schoolname: "St. Wendelin High School"
      },
      {
        state: "Ohio",
        city: "Riverside",
        schoolname: "Stebbins High School"
      },
      {
        state: "Ohio",
        city: "New Carlisle",
        schoolname: "Tecumseh High School"
      },
      {
        state: "Ohio",
        city: "Utica",
        schoolname: "Utica High School"
      },
      {
        state: "Ohio",
        city: "Lucasville",
        schoolname: "Valley High School"
      },
      {
        state: "Ohio",
        city: "Toledo",
        schoolname: "Waite High School"
      },
      {
        state: "Ohio",
        city: "Cuyahoga Falls",
        schoolname: "Walsh Jesuit High School"
      },
      {
        state: "Ohio",
        city: "Wapakoneta",
        schoolname: "Wapakoneta High School"
      },
      {
        state: "Ohio",
        city: "Pataskala",
        schoolname: "Watkins Memorial High School"
      },
      {
        state: "Ohio",
        city: "Wauseon",
        schoolname: "Wauseon High School"
      },
      {
        state: "Ohio",
        city: "Huber Heights",
        schoolname: "Wayne High School"
      },
      {
        state: "Ohio",
        city: "Beloit",
        schoolname: "West Branch High School"
      },
      {
        state: "Ohio",
        city: "Latham",
        schoolname: "Western High School"
      },
      {
        state: "Ohio",
        city: "Columbus",
        schoolname: "Whetstone High School"
      },
      {
        state: "Ohio",
        city: "Cincinnati",
        schoolname: "White Oak Middle School",
        // notes: "School is considering changing its logo"
      },
		]
	},
	'Oklahoma': {
		num_schools: 624,
		bad_mascots: 39,
		schools: [
			{
        state: "Oklahoma",
        city: "Arapaho",
        schoolname: "Arapaho High School"
      },
      {
        state: "Oklahoma",
        city: "Asher",
        schoolname: "Asher High School"
      },
      {
        state: "Oklahoma",
        city: "Bluejacket",
        schoolname: "Bluejacket High School"
      },
      {
        state: "Oklahoma",
        city: "Broken Bow",
        schoolname: "Broken Bow High School"
      },
      {
        state: "Oklahoma",
        city: "Calumet",
        schoolname: "Calumet High School"
      },
      {
        state: "Oklahoma",
        city: "Catoosa",
        schoolname: "Catoosa High School"
      },
      {
        state: "Oklahoma",
        city: "Tulsa",
        schoolname: "Central High School"
      },
      {
        state: "Oklahoma",
        city: "Cherokee",
        schoolname: "Cherokee High School"
      },
      {
        state: "Oklahoma",
        city: "Comanche",
        schoolname: "Comanche High School"
      },
      {
        state: "Oklahoma",
        city: "Weleetka",
        schoolname: "Graham-Dustin High School"
      },
      {
        state: "Oklahoma",
        city: "Idabel",
        schoolname: "Idabel High School"
      },
      {
        state: "Oklahoma",
        city: "Kingston",
        schoolname: "Kingston High School",
        // notes: "The town population is about % Native American"
      },
      {
        state: "Oklahoma",
        city: "Leflore",
        schoolname: "Leflore High School"
      },
      {
        state: "Oklahoma",
        city: "Norman",
        schoolname: "Little Axe High School"
      },
      {
        state: "Oklahoma",
        city: "Marietta",
        schoolname: "Marietta High School"
      },
      {
        state: "Oklahoma",
        city: "McLoud",
        schoolname: "McLoud High School"
      },
      {
        state: "Oklahoma",
        city: "Altus",
        schoolname: "Navajo High School"
      },
      {
        state: "Oklahoma",
        city: "Sulphur",
        schoolname: "Oklahoma School for the Deaf"
      },
      {
        state: "Oklahoma",
        city: "Ardmore",
        schoolname: "Plainview High School"
      },
      {
        state: "Oklahoma",
        city: "Pocola",
        schoolname: "Pocola High School"
      },
      {
        state: "Oklahoma",
        city: "Quinton",
        schoolname: "Quinton High School"
      },
      {
        state: "Oklahoma",
        city: "Anadarko",
        schoolname: "Riverside Indian School"
      },
      {
        state: "Oklahoma",
        city: "Rush Springs",
        schoolname: "Rush Springs High School"
      },
      {
        state: "Oklahoma",
        city: "Sapulpa",
        schoolname: "Sapulpa High School"
      },
      {
        state: "Oklahoma",
        city: "Seminole",
        schoolname: "Seminole High School"
      },
      {
        state: "Oklahoma",
        city: "Tahlequah",
        schoolname: "Sequoyah High School"
      },
      {
        state: "Oklahoma",
        city: "Shattuck",
        schoolname: "Shattuck High School"
      },
      {
        state: "Oklahoma",
        city: "Smithville",
        schoolname: "Smithville High School"
      },
      {
        state: "Oklahoma",
        city: "Stilwell",
        schoolname: "Stilwell High School"
      },
      {
        state: "Oklahoma",
        city: "Tecumseh",
        schoolname: "Tecumseh High School"
      },
      {
        state: "Oklahoma",
        city: "Tishomingo",
        schoolname: "Tishomingo High School"
      },
      {
        state: "Oklahoma",
        city: "Vici",
        schoolname: "Vici High School"
      },
      {
        state: "Oklahoma",
        city: "Wapanucka",
        schoolname: "Wapanucka High School"
      },
      {
        state: "Oklahoma",
        city: "Waukomis",
        schoolname: "Waukomis High School"
      },
      {
        state: "Oklahoma",
        city: "Wetumka",
        schoolname: "Wetumka High School"
      },
      {
        state: "Oklahoma",
        city: "Wynnewood",
        schoolname: "Wynnewood High School"
      },
      {
        state: "Oklahoma",
        city: "Tulsa",
        schoolname: "Berryhill High School",
        // notes: "– Home of the Chiefs and Maidens"
      },
      {
        state: "Oklahoma",
        city: "Anadarko",
        schoolname: "Anadarko High School",
        // notes: "– The city population is % Native American"
      },
      {
        state: "Oklahoma",
        city: "El Reno",
        schoolname: "El Reno High School",
        // notes: "– There was discussion about the name when a Native American student was not allowed to wear a beaded mortarboard at graduation. The result was the signing of a Spirit Charter with the Cheyenne & Arapaho Tribes to retain the name while agreeing to avoid any derogatory or disrespectful Native American references."
      },
		]
	},
	'Oregon': {
		num_schools: 471,
		bad_mascots: 9,
		schools: [
			{
        state: "Oregon",
        city: "Aloha",
        schoolname: "Aloha High School"
      },
      {
        state: "Oregon",
        city: "Amity",
        schoolname: "Amity High School"
      },
      {
        state: "Oregon",
        city: "Banks",
        schoolname: "Banks High School"
      },
      {
        state: "Oregon",
        city: "Salem",
        schoolname: "Chemawa Indian High School"
      },
      {
        state: "Oregon",
        city: "Marcola",
        schoolname: "Mohawk High School"
      },
      {
        state: "Oregon",
        city: "Reedsport",
        schoolname: "Reedsport Community Charter School"
      },
      {
        state: "Oregon",
        city: "Rogue River",
        schoolname: "Rogue River High School"
      },
      {
        state: "Oregon",
        city: "Roseburg",
        schoolname: "Roseburg High School",
        petition: "http://chng.it/9476jjDr2F"
      },
      {
        state: "Oregon",
        city: "Scappoose",
        schoolname: "Scappoose High School",
        petition: "https://www.change.org/p/scappoose-school-board-change-the-scappoose-high-school-mascot?utm_content=cl_sharecopy_22825006_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial"
      },
		]
	},
	'Pennsylvania': {
		num_schools: 952,
		bad_mascots: 52,
		schools: [
			{
        state: "Pennsylvania",
        city: "Wasilla ",
        schoolname: "Wasilla High School ",
        petition: "http://chng.it/jmg4Lj7q66",
        // notes: "Allegheny County"
      },
      {
        state: "Pennsylvania",
        city: "Eagleville",
        schoolname: "Arcola Intermediate School"
      },
      {
        state: "Pennsylvania",
        city: "Collegeville",
        schoolname: "Arrowhead Elementary School"
      },
      {
        state: "Pennsylvania",
        city: "Bellefonte",
        schoolname: "Bellefonte Area High School",
        // notes: "An online petition started by alumni to change the name has received  signatures. The school had previously replaced its Native American logo with a block \"B\".
      },
      {
        state: "Pennsylvania",
        city: "Bristol",
        schoolname: "Bristol High School"
      },
      {
        state: "Pennsylvania",
        city: "Emporium",
        schoolname: "Cameron County High School"
      },
      {
        state: "Pennsylvania",
        city: "Coatesville",
        schoolname: "Coatesville Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Davidsville",
        schoolname: "Conemaugh Township High School"
      },
      {
        state: "Pennsylvania",
        city: "Conneaut Lake",
        schoolname: "Conneaut Lake High School"
      },
      {
        state: "Pennsylvania",
        city: "Conneautville",
        schoolname: "Conneaut Valley High School"
      },
      {
        state: "Pennsylvania",
        city: "Newtown",
        schoolname: "Council Rock North High School"
      },
      {
        state: "Pennsylvania",
        city: "Westfield",
        schoolname: "Cowanesque Valley High School"
      },
      {
        state: "Pennsylvania",
        city: "Milford",
        schoolname: "Delaware Valley High School"
      },
      {
        state: "Pennsylvania",
        city: "Mt. Joy",
        schoolname: "Donegal High School"
      },
      {
        state: "Pennsylvania",
        city: "Wilkes-Barre",
        schoolname: "Elmer L. Meyers Junior/Senior High School"
      },
      {
        state: "Pennsylvania",
        city: "Adams County",
        schoolname: "Gettysburg Area High School"
      },
      {
        state: "Pennsylvania",
        city: "West Chester",
        schoolname: "Henderson High School"
      },
      {
        state: "Pennsylvania",
        city: "Indiana",
        schoolname: "Indiana Area Senior High School",
        petition: "http://chng.it/JLYxPcd7qc"
      },
      {
        state: "Pennsylvania",
        city: "Erie",
        schoolname: "Iroquois High School"
      },
      {
        state: "Pennsylvania",
        city: "Mifflintown",
        schoolname: "Juniata High School"
      },
      {
        state: "Pennsylvania",
        city: "Lackawanna County",
        schoolname: "Lakeland School District"
      },
      {
        state: "Pennsylvania",
        city: "Lehighton",
        schoolname: "Lehighton Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Fairview Village",
        schoolname: "Methacton High School"
      },
      {
        state: "Pennsylvania",
        city: "Fairview Village",
        schoolname: "Methacton School District",
        petition: "http://chng.it/MJMsNmqX9c"
      },
      {
        state: "Pennsylvania",
        city: "Millersburg",
        schoolname: "Millersburg Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Muncy",
        schoolname: "Muncy Junior-Senior High School"
      },
      {
        state: "Pennsylvania",
        city: "Langhorne",
        schoolname: "Neshaminy High School",
        petition: "https://www.change.org/p/neshaminy-high-school-get-neshaminy-high-school-to-change-their-racist-mascot?utm_content=cl_sharecopy_23261309_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=share_petition"
      },
      {
        state: "Pennsylvania",
        city: "Atglen",
        schoolname: "Octorara Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Pittsburgh",
        schoolname: "Penn Hills High School"
      },
      {
        state: "Pennsylvania",
        city: "Kinzers",
        schoolname: "Pequea Valley High School"
      },
      {
        state: "Pennsylvania",
        city: "McMurray",
        schoolname: "Peters Township High School"
      },
      {
        state: "Pennsylvania",
        city: "Philadelphia",
        schoolname: "Roxborough High School"
      },
      {
        state: "Pennsylvania",
        city: "Sayre",
        schoolname: "Sayre High School"
      },
      {
        state: "Pennsylvania",
        city: "Coal Township",
        schoolname: "Shamokin Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Sunbury",
        schoolname: "Shikellamy High School"
      },
      {
        state: "Pennsylvania",
        city: "Souderton",
        schoolname: "Souderton Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Warfordsburg",
        schoolname: "Southern Fulton High School"
      },
      {
        state: "Pennsylvania",
        city: "Harrisburg",
        schoolname: "Susquehanna Township High School",
        petition: "http://chng.it/j6KJrMrBYn"
      },
      {
        state: "Pennsylvania",
        city: "Elverson",
        schoolname: "Twin Valley High School",
        petition: "http://chng.it/jbXYfb2QBt"
      },
      {
        state: "Pennsylvania",
        city: "Uniontown",
        schoolname: "Uniontown Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Pennsburg",
        schoolname: "Upper Perkiomen High School",
        petition: "http://chng.it/WxZMjcRWPh"
      },
      {
        state: "Pennsylvania",
        city: "Lititz",
        schoolname: "Warwick High School"
      },
      {
        state: "Pennsylvania",
        city: "Waynesboro",
        schoolname: "Waynesboro High School"
      },
      {
        state: "Pennsylvania",
        city: "Imperial",
        schoolname: "West Allegheny High School"
      },
      {
        state: "Pennsylvania",
        city: "Tionesta",
        schoolname: "West Forest Junior Senior High School"
      },
      {
        state: "Pennsylvania",
        city: "West Middlesex",
        schoolname: "West Middlesex Jr/Sr High School"
      },
      {
        state: "Pennsylvania",
        city: "Easton",
        schoolname: "Wilson Area High School"
      },
      {
        state: "Pennsylvania",
        city: "Exeter",
        schoolname: "Wyoming Area Secondary Center"
      },
      {
        state: "Pennsylvania",
        city: "Elizabeth",
        schoolname: "Elizabeth Forward High School",
        // notes: "– Entire school district"
      },
      {
        state: "Pennsylvania",
        city: "Gettysburg",
        schoolname: "Gettysburg Area Middle School",
        // notes: "– High School is the Warriors"
      },
      {
        state: "Pennsylvania",
        city: "Folsom",
        schoolname: "Ridley High School",
        petition: "http://chng.it/MJMsNmqX9c",
        // notes: "– The \"Green Raiders\" use a Rocking R as their primary logo and a Native American Head as an alternate logo.
      },
		]
	},
	'Rhode Island': {
		num_schools: 105,
		bad_mascots: 1,
		schools: [
			  {
          state: "Rhode Island",
          city: "North Scituate",
          schoolname: "Ponaganset High School"
        },
		]
	},
	'South Carolina': {
		num_schools: 469,
		bad_mascots: 11,
		schools: [
			  {
          state: "South Carolina",
          city: "Cheraw",
          schoolname: "Cheraw High School"
        },
        {
          state: "South Carolina",
          city: "Gaffney",
          schoolname: "Gaffney High School"
        },
        {
          state: "South Carolina",
          city: "Gaffney",
          schoolname: "Gaffney Middle School"
        },
        {
          state: "South Carolina",
          city: "Gilbert",
          schoolname: "Gilbert High School"
        },
        {
          state: "South Carolina",
          city: "McCormick",
          schoolname: "McCormick High School"
        },
        {
          state: "South Carolina",
          city: "Little River",
          schoolname: "North Myrtle Beach High School"
        },
        {
          state: "South Carolina",
          city: "Orangeburg",
          schoolname: "Orangeburg Preparatory Schools"
        },
        {
          state: "South Carolina",
          city: "Socastee",
          schoolname: "Socastee High School"
        },
        {
          state: "South Carolina",
          city: "Pawleys Island",
          schoolname: "Waccamaw High School"
        },
        {
          state: "South Carolina",
          city: "Mount Pleasant",
          schoolname: "Wando High School",
          // notes: "A petition to change the mascot has been started by students."
        },
        {
          state: "South Carolina ",
          city: "Rock Hill",
          schoolname: "Westminster Catawba Christian School",
          // notes: "– Private Christian preK– school."
        },
		]
	},
	'South Dakota': {
		num_schools: 290,
		bad_mascots: 11,
		schools: [
			  {
          state: "South Dakota",
          city: "North Eagle Butte",
          schoolname: "Cheyenne-Eagle Butte School"
        },
        {
          state: "South Dakota",
          city: "Stephan",
          schoolname: "Crow Creek High School"
        },
        {
          state: "South Dakota",
          city: "Flandreau",
          schoolname: "Flandreau Indian High School"
        },
        {
          state: "South Dakota",
          city: "Iroquois",
          schoolname: "Iroquois Middle/High School"
        },
        {
          state: "South Dakota",
          city: "Sisseton",
          schoolname: "Sisseton High School"
        },
        {
          state: "South Dakota",
          city: "Sioux Falls",
          schoolname: "Washington High School"
        },
        {
          state: "South Dakota ",
          city: "Britton",
          schoolname: "Britton-Hecla High School"
        },
        {
          state: "South Dakota",
          city: "Watertown",
          schoolname: "Watertown High School",
          // notes: "– For homecoming",
          // undefined: "dress in faux Indian costumes."
        },
        {
          state: "South Dakota",
          city: "Wanblee",
          schoolname: "Crazy Horse High School",
          // notes: "– Native school"
        },
        {
          state: "South Dakota",
          city: "Wagner",
          schoolname: "Wagner High School",
          // notes: "– Nickname is Red Raiders but mascot is Red Tiger?"
        },
        {
          state: "South Dakota ",
          city: "Marty",
          schoolname: "Marty Indian High School",
          // notes: "– Operated by the Yankton Sioux Tribe"
        },
		]
	},
	'Tennessee': {
		num_schools: 703,
		bad_mascots: 18,
		schools: [
			{
        state: "Tennessee",
        city: "Cunningham",
        schoolname: "Montgomery Central High School"
      },
      {
        state: "Tennessee",
        city: "Rogersville",
        schoolname: "Cherokee High School"
      },
      {
        state: "Tennessee",
        city: "Memphis",
        schoolname: "Craigmont High School"
      },
      {
        state: "Tennessee",
        city: "Kingsport",
        schoolname: "Dobyns-Bennett High School",
        petition: "http://chng.it/zTqF4s42hd"
      },
      {
        state: "Tennessee",
        city: "Newbern",
        schoolname: "Dyer County High School"
      },
      {
        state: "Tennessee",
        city: "Cross Plains",
        schoolname: "East Robertson High School"
      },
      {
        state: "Tennessee",
        city: "Greenback",
        schoolname: "Greenback High School"
      },
      {
        state: "Tennessee",
        city: "Sneedville",
        schoolname: "Hancock County High School"
      },
      {
        state: "Tennessee",
        city: "Kingston Springs",
        schoolname: "Harpeth High School"
      },
      {
        state: "Tennessee",
        city: "Nashville",
        schoolname: "Hunters Lane High School"
      },
      {
        state: "Tennessee",
        city: "Loudon",
        schoolname: "Loudon High School"
      },
      {
        state: "Tennessee",
        city: "Athens",
        schoolname: "McMinn County High School"
      },
      {
        state: "Tennessee",
        city: "Jackson",
        schoolname: "North Side High School"
      },
      {
        state: "Tennessee",
        city: "Oneida",
        schoolname: "Oneida High School"
      },
      {
        state: "Tennessee",
        city: "Speedwell",
        schoolname: "Powell Valley High School"
      },
      {
        state: "Tennessee",
        city: "Dunlap",
        schoolname: "Sequatchie County High School"
      },
      {
        state: "Tennessee",
        city: "Knoxville",
        schoolname: "South-Doyle High School"
      },
		]
	},
	'Texas': {
		num_schools: 3240,
		bad_mascots: 42,
		schools: [
			  {
          state: "Texas",
          city: "Alvarado",
          schoolname: "Alvarado High School"
        },
        {
          state: "Texas",
          city: "Avinger",
          schoolname: "Avinger High School"
        },
        {
          state: "Texas",
          city: "Campbell",
          schoolname: "Campbell High School"
        },
        {
          state: "Texas",
          city: "Price",
          schoolname: "Carlisle High School"
        },
        {
          state: "Texas",
          city: "Cleveland",
          schoolname: "Cleveland High School"
        },
        {
          state: "Texas",
          city: "Comanche",
          schoolname: "Comanche High School"
        },
        {
          state: "Texas",
          city: "Nevada",
          schoolname: "Community High School"
        },
        {
          state: "Texas",
          city: "Crosbyton",
          schoolname: "Crosbyton High School"
        },
        {
          state: "Texas",
          city: "Donna",
          schoolname: "Donna High School"
        },
        {
          state: "Texas",
          city: "Douglass",
          schoolname: "Douglass High School"
        },
        {
          state: "Texas",
          city: "El Paso",
          schoolname: "El Dorado High School"
        },
        {
          state: "Texas",
          city: "Fort Davis",
          schoolname: "Fort Davis High School"
        },
        {
          state: "Texas",
          city: "Frankston",
          schoolname: "Frankston High School"
        },
        {
          state: "Texas",
          city: "Friona",
          schoolname: "Friona High School"
        },
        {
          state: "Texas",
          city: "Ganado",
          schoolname: "Ganado High School"
        },
        {
          state: "Texas",
          city: "Gonzales",
          schoolname: "Gonzales High School"
        },
        {
          state: "Texas",
          city: "Grand Saline",
          schoolname: "Grand Saline High School"
        },
        {
          state: "Texas",
          city: "Groveton",
          schoolname: "Groveton High School"
        },
        {
          state: "Texas",
          city: "Haskell",
          schoolname: "Haskell High School"
        },
        {
          state: "Texas",
          city: "Huckabay",
          schoolname: "Huckabay High School"
        },
        {
          state: "Texas",
          city: "Iraan",
          schoolname: "Iraan High School"
        },
        {
          state: "Texas",
          city: "Jacksonville",
          schoolname: "Jacksonville High School"
        },
        {
          state: "Texas",
          city: "Tuscola",
          schoolname: "Jim Ned High School"
        },
        {
          state: "Texas",
          city: "Karnack",
          schoolname: "Karnack High School"
        },
        {
          state: "Texas",
          city: "Keller",
          schoolname: "Keller High School",
          petition: "http://chng.it/wqybt4kY5z",
          // notes: "The Society of Native Nations wants the school board to drop the name."
        },
        {
          state: "Texas",
          city: "Lipan",
          schoolname: "Lipan High School"
        },
        {
          state: "Texas",
          city: "Morton",
          schoolname: "Morton High School"
        },
        {
          state: "Texas",
          city: "Nocona",
          schoolname: "Nocona High School"
        },
        {
          state: "Texas",
          city: "Vernon",
          schoolname: "Northside High School"
        },
        {
          state: "Texas",
          city: "Paint Rock",
          schoolname: "Paint Rock High School"
        },
        {
          state: "Texas",
          city: "Port Neches",
          schoolname: "Port Neches-Groves High School",
          petition: "http://chng.it/qcbZmzq4wM"
        },
        {
          state: "Texas",
          city: "Prairie Lea",
          schoolname: "Prairie Lea High School"
        },
        {
          state: "Texas",
          city: "Quanah",
          schoolname: "Quanah High School"
        },
        {
          state: "Texas",
          city: "Riesel",
          schoolname: "Riesel High School"
        },
        {
          state: "Texas",
          city: "Hallettsville",
          schoolname: "Sacred Heart Catholic School"
        },
        {
          state: "Texas",
          city: "Sanger",
          schoolname: "Sanger High School"
        },
        {
          state: "Texas",
          city: "Santa Fe",
          schoolname: "Santa Fe High School"
        },
        {
          state: "Texas",
          city: "Grand Prairie",
          schoolname: "South Grand Prairie High School",
          petition: "https://www.change.org/p/grand-prairie-isd-change-the-native-american-mascot-at-south-grand-prairie-high-school?utm_content=cl_sharecopy_23167682_en-US%3A3&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi"
        },
        {
          state: "Texas",
          city: "Corpus Christi",
          schoolname: "Tuloso-Midway High School"
        },
        {
          state: "Texas",
          city: "Waxahachie",
          schoolname: "Waxahachie High School",
          petition: "http://chng.it/s4gBzXYyKZ"
        },
        {
          state: "Texas",
          city: "Winnsboro",
          schoolname: "Winnsboro High School"
        },
        {
          state: "Texas",
          city: "El Paso",
          schoolname: "Ysleta High School"
        },
        {
          state: "Texas",
          city: "San Antonio",
          schoolname: "Antonian College Preparatory High School",
          // notes: "educational Catholic high school"
        },
        {
          state: "Texas",
          city: "Jourdanton",
          schoolname: "Jourdanton High School",
          // notes: "– Boys' teams are \"Indians\"
        },
        {
          state: "Texas",
          city: "Seminole",
          schoolname: "Seminole High School",
          petition: "http://chng.it/zSHLV6wPMm",
          // notes: "– Indians and Maidens"
        },
        {
          state: "Texas",
          city: "Giddings",
          schoolname: "Giddings State School",
          // notes: "– Juvenile Corrections School"
        },
        {
          state: "Texas",
          city: "San Antonio",
          schoolname: "Harlandale High School",
          petition: "http://chng.it/tvHT5RgyP6",
          // notes: "comm01@harlandale.net",
          // undefined: "\\
        },
        {
          state: "Texas",
          city: "San Angelo",
          schoolname: "Lake View High School",
          // notes: "– The girls' teams are the Maidens."
        },
		]
	},
	'Utah': {
		num_schools: 429,
		bad_mascots: 2,
		schools: [
			  {
          state: "Utah",
          city: "Coalville",
          schoolname: "North Summit High School"
        },
        {
          state: "Utah",
          city: "Provo",
          schoolname: "Timpview High School"
        },
		]
	},
	'Vermont': {
		num_schools: 129,
		bad_mascots: 2,
		schools: [
			  {
          state: "Vermont",
          city: "Danville",
          schoolname: "Danville High School"
        },
        {
          state: "Vermont",
          city: "Chester",
          schoolname: "Green Mountain Union High School"
        },
		]
	},
	'Virginia': {
		num_schools: 623,
		bad_mascots: 17,
		schools: [
			  {
          state: "Virginia",
          city: "Fort Defiance",
          schoolname: "Fort Defiance High School"
        },
        {
          state: "Virginia",
          city: "Woodbridge",
          schoolname: "Gar-Field Senior High School"
        },
        {
          state: "Virginia",
          city: "Chesapeake",
          schoolname: "Indian River High School"
        },
        {
          state: "Virginia",
          city: "Hampton",
          schoolname: "Kecoughtan High School"
        },
        {
          state: "Virginia",
          city: "Wise",
          schoolname: "Kelly High School"
        },
        {
          state: "Virginia",
          city: "Virginia Beach",
          schoolname: "Kempsville High School"
        },
        {
          state: "Virginia",
          city: "Ridgeway",
          schoolname: "Magna Vista High School"
        },
        {
          state: "Virginia",
          city: "Richmond",
          schoolname: "Monacan High School"
        },
        {
          state: "Virginia",
          city: "Heathsville",
          schoolname: "Northumberland High School"
        },
        {
          state: "Virginia",
          city: "Pocahontas",
          schoolname: "Pocahontas High School"
        },
        {
          state: "Virginia",
          city: "Powhatan",
          schoolname: "Powhatan High School",
          petition: "http://chng.it/kYKtYqx6dM"
        },
        {
          state: "Virginia",
          city: "Rural Retreat",
          schoolname: "Rural Retreat High School"
        },
        {
          state: "Virginia",
          city: "Courtland",
          schoolname: "Southampton High School"
        },
        {
          state: "Virginia",
          city: "Falmouth",
          schoolname: "Stafford Senior High School"
        },
        {
          state: "Virginia",
          city: "Wakefield",
          schoolname: "Tidewater Academy"
        },
        {
          state: "Virginia",
          city: "Stephens City",
          schoolname: "Sherando High School",
          petition: "http://chng.it/YtvrMr6gym",
          notes: "– A local Abenaki man has contacted the school administration voicing his objections to the name."
        },
        {
          state: "Virginia",
          city: "Martinsville",
          schoolname: "Carlisle School",
          notes: "– private school"
        },
		]
	},
	'Washington': {
		num_schools: 1016,
		bad_mascots: 19,
		schools: [
			  {
          state: "Washington",
          city: "Bellingham",
          schoolname: "Bellingham High School"
        },
        {
          state: "Washington",
          city: "Spanaway",
          schoolname: "Bethel High School"
        },
        {
          state: "Washington",
          city: "Seattle",
          schoolname: "Bishop Blanchet High School"
        },
        {
          state: "Washington",
          city: "Cheney",
          schoolname: "Cheney High School"
        },
        {
          state: "Washington",
          city: "Lakewood",
          schoolname: "Clover Park High School"
        },
        {
          state: "Washington",
          city: "Colville",
          schoolname: "Colville High School"
        },
        {
          state: "Washington",
          city: "Kalama",
          schoolname: "Kalama Middle/High School"
        },
        {
          state: "Washington",
          city: "Kennewick",
          schoolname: "Kamiakin High School"
        },
        {
          state: "Washington",
          city: "La Conner",
          schoolname: "La Conner High School"
        },
        {
          state: "Washington",
          city: "Moses Lake",
          schoolname: "Moses Lake High School"
        },
        {
          state: "Washington",
          city: "Tacoma",
          schoolname: "Mount Tahoma High School"
        },
        {
          state: "Washington",
          city: "Spokane",
          schoolname: "North Central High School"
        },
        {
          state: "Washington",
          city: "Reardan",
          schoolname: "Reardan High School"
        },
        {
          state: "Washington",
          city: "Renton",
          schoolname: "Renton High School"
        },
        {
          state: "Washington",
          city: "South Bend",
          schoolname: "South Bend High School"
        },
        {
          state: "Washington",
          city: "Auburn",
          schoolname: "Thomas Jefferson High School"
        },
        {
          state: "Washington",
          city: "Toledo",
          schoolname: "Toledo High School"
        },
        {
          state: "Washington",
          city: "Touchet",
          schoolname: "Touchet High School"
        },
        {
          state: "Washington",
          city: "Tumwater",
          schoolname: "Tumwater High School"
        },
        {
          state: "Washington",
          city: "Marysville",
          schoolname: "Marysville Pilchuck High School",
          // notes: "– The logo is \"MP\" with the nickname
        },
        {
          state: "Washington",
          city: "Wellpinit",
          schoolname: "Wellpinit High School",
          // notes: "(Majority of students Native American)"
        },
		]
	},
	'West Virginia': {
		num_schools: 239,
		bad_mascots: 9,
		schools: [
			  {
          state: "West Virginia",
          city: "Berkeley Springs",
          schoolname: "Berkeley Springs High School"
        },
        {
          state: "West Virginia",
          city: "Bridgeport",
          schoolname: "Bridgeport High School"
        },
        {
          state: "West Virginia",
          city: "Bridgeport",
          schoolname: "Bridgeport Middle School"
        },
        {
          state: "West Virginia",
          city: "Hurricane",
          schoolname: "Hurricane High School",
          petition: "https://www.change.org/p/putnam-county-superintendent-change-hurricane-s-mascot?utm_content=cl_sharecopy_23330054_en-US%3A7&recruiter=1038995845&recruited_by_id=6f7e52e0-422e-11ea-b3fb-4982b31cbeeb&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi"
        },
        {
          state: "West Virginia",
          city: "Morgantown",
          schoolname: "Morgantown High School",
          petition: "http://chng.it/kKsk6XNfmb"
        },
        {
          state: "West Virginia",
          city: "Parkersburg",
          schoolname: "Parkersburg High School",
          petition: "http://chng.it/Ln5wr8qg8L"
        },
        {
          state: "West Virginia",
          city: "Dunmore",
          schoolname: "Pocahontas County High School"
        },
        {
          state: "West Virginia",
          city: "Belle",
          schoolname: "Riverside High School"
        },
        {
          state: "West Virginia",
          city: "Sissonville",
          schoolname: "Sissonville High School"
        },
		]
	},
	'Wisconsin': {
		num_schools: 831,
		bad_mascots: 22,
		schools: [
			{
        state: "Wisconsin",
        city: "Baldwin",
        schoolname: "Baldwin-Woodville Area High School"
      },
      {
        state: "Wisconsin",
        city: "Belmont",
        schoolname: "Belmont High School"
      },
      {
        state: "Wisconsin",
        city: "Walworth",
        schoolname: "Big Foot High School"
      },
      {
        state: "Wisconsin",
        city: "Cornell",
        schoolname: "Cornell High School"
      },
      {
        state: "Wisconsin",
        city: "Fort Atkinson",
        schoolname: "Fort Atkinson High School"
      },
      {
        state: "Wisconsin",
        city: "Greenwood",
        schoolname: "Greenwood High School"
      },
      {
        state: "Wisconsin",
        city: "Kewaskum",
        schoolname: "Kewaskum High School"
      },
      {
        state: "Wisconsin",
        city: "Lancaster",
        schoolname: "Lancaster High School"
      },
      {
        state: "Wisconsin",
        city: "Mishicot",
        schoolname: "Mishicot High School"
      },
      {
        state: "Wisconsin",
        city: "Mosinee",
        schoolname: "Mosinee High School"
      },
      {
        state: "Wisconsin",
        city: "Mukwonago",
        schoolname: "Mukwonago High School"
      },
      {
        state: "Wisconsin",
        city: "Muskego",
        schoolname: "Muskego High School"
      },
      {
        state: "Wisconsin",
        city: "Osceola",
        schoolname: "Osceola High School"
      },
      {
        state: "Wisconsin",
        city: "Portage",
        schoolname: "Portage High School",
        petition: "http://chng.it/Wr8FwGChM4"
      },
      {
        state: "Wisconsin",
        city: "Potosi",
        schoolname: "Potosi High School"
      },
      {
        state: "Wisconsin",
        city: "Prairie du Chien",
        schoolname: "Prairie du Chien High School"
      },
      {
        state: "Wisconsin",
        city: "Rice Lake",
        schoolname: "Rice Lake High School"
      },
      {
        state: "Wisconsin",
        city: "Muscoda",
        schoolname: "Riverdale High School"
      },
      {
        state: "Wisconsin",
        city: "Seneca",
        schoolname: "Seneca High School"
      },
      {
        state: "Wisconsin",
        city: "Shiocton",
        schoolname: "Shiocton High School"
      },
      {
        state: "Wisconsin",
        city: "Waunakee",
        schoolname: "Waunakee High School"
      },
      {
        state: "Wisconsin",
        city: "Wisconsin Dells",
        schoolname: "Wisconsin Dells High School"
      },
      {
        state: "Wisconsin",
        city: "Berlin",
        schoolname: "Berlin High School"
      },
		]
	},
	'Wyoming': {
		num_schools: 135,
		bad_mascots: 5,
		schools: [
			{
        state: "Wyoming",
        city: "Cheyenne",
        schoolname: "Carey Junior High School"
      },
      {
        state: "Wyoming",
        city: "Cheyenne",
        schoolname: "Central High School"
      },
      {
        state: "Wyoming",
        city: "Cheyenne",
        schoolname: "McCormick Junior High School"
      },
      {
        state: "Wyoming",
        city: "Afton",
        schoolname: "Star Valley High School"
      },
      {
        state: "Wyoming",
        city: "Ethete",
        schoolname: "Wyoming Indian High School"
      },
		]
	},
}

$("path, circle").click(function() {
  $(".schools").empty()
  var state_name = this.id
  var my_state = abbrState(`${state_name}`, 'name')
  
  if (state_name != "CO" && state_name != "ME" && state_name != "WA" && state_name != "NV" && state_name != "NY") {
      var state_schools = state_data[my_state]["schools"]
      var bad_ones = Math.ceil(state_data[my_state]["num_schools"] / state_data[my_state]["bad_mascots"])
      $("#ratio").text(`1 in ${bad_ones}`)
      $("#in-where").text(my_state)
      console.log(bad_ones)
      $("#in-state").show()

      for (const school in state_schools) {
        var school_info = state_schools[school]
        if ('petition' in school_info) {
          var card = `<div class="col-md-4 mb-5" ><div class="card h-100"><div class="card-body"><h4 class="card-title">${school_info["schoolname"]}</h4><h6 class="card-subtitle mb-2 text-muted">${school_info["city"]}, ${school_info["state"]}</div><div class="card-footer"><a href="${school_info["petition"]}" target="_" class="btn btn-primary btn-petition">Sign Petition</a></div></div></div>`
          $(".schools").append(card)
        } else {
          var card = `<div class="col-md-4 mb-5" ><div class="card h-100"><div class="card-body"><h4 class="card-title">${school_info["schoolname"]}</h4><h6 class="card-subtitle mb-2 text-muted">${school_info["city"]}, ${school_info["state"]}</h6></div></div></div>`
          $(".schools").append(card)
        }

      }
  } else {
    $("#in-state").hide()
    alert("This state has already outlawed Native mascots. Yay!")
  }
  // console.log(my_state)

  })
$(".submit").click(function() {
  event.preventDefault()
  if ($("#name").val() == "" || $("#city").val() == "" || $("#state").val() == "") {
        alert("please input your name and area of residence before clicking submit!")
    } else {
      var name = $("#name").val()
      var city = $("#city").val()
      var state = abbrState(`${$("#state").val()}`, 'name')
      var state_schools = state_data[state]["schools"]
      var num_schools = state_data[state]["num_schools"]
      var bad_mascots = state_data[state]["bad_mascots"]
      var bad_ones = Math.ceil(num_schools / bad_mascots)
      var letter = `Dear Legislator, \n
I am ${name}, and I am writing to you today to condemn the racist Native mascots that reside in your state. Other states such as Maine and Colorado have recognized that these mascots are a detriment to the public education system. While there is an argument that these mascots are in the best pursuit of providing Indigenous representation, there is also a negative subconscious impact on Native and non-Native people’s perception of Indigenous people and culture. Historically, Natives have not been treated as human beings. This has been seen through the atrocities such as residential schools, the Long Walk, the Trail of Tears, and mass genocide through colonization, and now Native mascots. Native people are not caricatures. Native people are not a monolith, they are diverse in customs and values. These mascots that highlight only certain aspects of Native cultures are not an accurate depiction of the rich and diverse Native walks of life. It has been proven that Native children that are overly exposed to racist stereotypes are more likely to have lower self-esteem, distance themselves from their culture, have a lower belief in personal achievement, and worsen mood. In light of the horrors of residential schools taking the nation’s stage, I feel this is the best time to take action and make public education safer and more beneficial for Indigenous students.\n
To do so, I am asking you to use your position as a State Legislator to work to eliminate the use of Native Mascots in ${state}. By bringing forth a bill alongside the aforementioned states, tax-payer’s funds will no longer be used to propagate harmful and dehumanizing depictions of Indigenous people—a vital step in reckoning with our nation’s past. As it stands, ${state} has ${bad_mascots} native mascots, meaning that out of our ~${num_schools} public secondary schools, around 1 in ${bad_ones} continue to make a mockery out of Indigenous people. Please join the movement of declaring that our Native children are People, not Mascots by bringing forth this monumental legislation in our state.\n
https://legislature.maine.gov/legis/bills/bills_129th/billtexts/HP069901.asp
https://leg.colorado.gov/bills/sb21-116
\n
Sincerely,
\n${name}
`
      $(".letter-card").show()
      $("#letter").text(`${letter}`)
    }
})

function copyTexts(prompt) {
//  /* Get the text field */
////  console.log(copyText)
  var str = document.getElementById(prompt).textContent;
//  console.log(copyText)
//
//  /* Select the text field */
//  copyText.select;
//  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
//
//  /* Copy the text inside the text field */
//  document.execCommand("copy");
//
//  /* Alert the copied text */
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    //  alert("successfully copied!");

}
