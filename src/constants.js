export const donationCompatibility = [{type: "A+",to: "A+, AB+",from :"A+, A-, O+, O-"},{type: "O+",to: "O+, A+, B+, AB+",from :"O+, O-"},{type: "B+",to: "B+, AB+",from :"B+, B-, O+,O-"},{type: "AB+",to: "AB+",from :"Everyone"},{type: "A-",to: "A+, A-, AB+, AB-",from :"A-, O-"},{type: "O-",to: "Everyone",from :"O-"},{type: "B-",to: "B+, B-, AB+,AB-",from :"B-, O-"},{type: "AB-",to: "AB-, AB+",from :"AB-, A-, B-, O-"},];
export const FAQanswers = {
    "white-blood": ["Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.", "You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.", "Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.", "Red cells can be stored for 42 days." , "15 minutes to donate", "Every 12 weeks"],
    plasma: ["The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions.", "You need to be 18-70 (men) or 20-70 (women) years old, weigh 50kg or more and must have given successful whole blood donation in last two years.", "Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and nerve conditions, haemophilia, immunisations.", "Plasma can last up to one year when frozen.", "15 minutes to donate.", "Every 2-3 weeks." ],
    platelet:["The tiny 'plates' in blood that wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like malaria and cancer patients.", "You need to be 18-70 years old (men), weigh 50kg or more and have given a successful plasma donation in the past 12 months", "Cancer, blood diseases, haemophilia, anaemia, heart disease, stomach disease, kidney disease, childbirth, operations, blood loss, trauma, burns.", "Just five days..", "45 minutes to donate.", "Every 2 weeks"],
}

export const userList = [
	{
	  "_id": "60b464c80ffe1d7dda78e398",
	  "name": "Clarissa Michael",
	  "gender": "female",
	  "email": "clarissamichael@olympix.com",
	  "contact": "+91 (896) 438-3985",
	  "address": "531 Kansas Place",
	  "city": "Jeff",
	  "state": "New York",
	  "pinCode": 1695,
	  "bloodGroup": "O-",
	  "dob": "1997-12-02",
	  "latitude": -18.448619,
	  "longitude": 118.897483,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-09-07",
		  "address": "Specialty Medical Clinic, Nelson"
		},
		{
		  "header": "Plasma",
		  "date": "2021-04-22",
		  "address": "Willow Gardens Medical Clinic, Wacissa"
		},
		{
		  "header": "Platelets",
		  "date": "2019-12-12",
		  "address": "Tranquil Valley General Hospital,Gibsonia"
		}
	  ]
	},
	{
	  "_id": "60b464c83d6b0f55370454a2",
	  "name": "Alberta Irwin",
	  "gender": "female",
	  "email": "albertairwin@olympix.com",
	  "contact": "+91 (808) 508-2524",
	  "address": "274 Roosevelt Place",
	  "city": "Rowe",
	  "state": "Maine",
	  "pinCode": 5289,
	  "bloodGroup": "O+",
	  "dob": "1999-12-13",
	  "latitude": 15.130214,
	  "longitude": -103.513984,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-04-07",
		  "address": "Ruby Valley Medical Center, Wollochet"
		},
		{
		  "header": "Plasma",
		  "date": "2020-05-29",
		  "address": "Bellflower Clinic, Carrizo"
		},
		{
		  "header": "Platelets",
		  "date": "2019-08-29",
		  "address": "Tranquil Valley General Hospital,Boonville"
		}
	  ]
	},
	{
	  "_id": "60b464c8ed84c298bc583a64",
	  "name": "Robin Torres",
	  "gender": "female",
	  "email": "robintorres@olympix.com",
	  "contact": "+91 (851) 436-2696",
	  "address": "418 Turnbull Avenue",
	  "city": "Diaperville",
	  "state": "Virginia",
	  "pinCode": 7255,
	  "bloodGroup": "AB-",
	  "dob": "1999-08-13",
	  "latitude": -79.626694,
	  "longitude": -25.739871,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-01-14",
		  "address": "Golden Valley General Hospital, Floris"
		},
		{
		  "header": "Plasma",
		  "date": "2019-06-16",
		  "address": "White Willow Clinic, Lemoyne"
		},
		{
		  "header": "Platelets",
		  "date": "2020-02-01",
		  "address": "United Community Hospital,Ada"
		}
	  ]
	},
	{
	  "_id": "60b464c8d25e77c310fd5974",
	  "name": "Freida Hurst",
	  "gender": "female",
	  "email": "freidahurst@olympix.com",
	  "contact": "+91 (961) 532-2870",
	  "address": "515 Mill Road",
	  "city": "Cresaptown",
	  "state": "Kansas",
	  "pinCode": 2048,
	  "bloodGroup": "AB-",
	  "dob": "1998-11-20",
	  "latitude": -50.331414,
	  "longitude": -168.20309,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-10-19",
		  "address": "Ruby Valley Medical Center, Austinburg"
		},
		{
		  "header": "Plasma",
		  "date": "2020-11-26",
		  "address": "Grand Oak Hospital Center, Lutsen"
		},
		{
		  "header": "Platelets",
		  "date": "2019-08-30",
		  "address": "Laguna Community Hospital,Southmont"
		}
	  ]
	},
	{
	  "_id": "60b464c8d27de74c964f5099",
	  "name": "Sandoval Hull",
	  "gender": "male",
	  "email": "sandovalhull@olympix.com",
	  "contact": "+91 (919) 563-3492",
	  "address": "779 Bliss Terrace",
	  "city": "Caroleen",
	  "state": "Massachusetts",
	  "pinCode": 3989,
	  "bloodGroup": "O+",
	  "dob": "1997-07-28",
	  "latitude": -66.284815,
	  "longitude": -10.027864,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-03-01",
		  "address": "Specialty Medical Clinic, Hasty"
		},
		{
		  "header": "Plasma",
		  "date": "2020-08-26",
		  "address": "White Willow Clinic, Nord"
		},
		{
		  "header": "Platelets",
		  "date": "2019-03-05",
		  "address": "Serenity Medical Clinic,Breinigsville"
		}
	  ]
	},
	{
	  "_id": "60b464c84fc3930f314fc82e",
	  "name": "Ellis Martin",
	  "gender": "male",
	  "email": "ellismartin@olympix.com",
	  "contact": "+91 (973) 553-2071",
	  "address": "357 Norfolk Street",
	  "city": "Alfarata",
	  "state": "Missouri",
	  "pinCode": 5450,
	  "bloodGroup": "AB-",
	  "dob": "1999-09-26",
	  "latitude": 14.939898,
	  "longitude": 170.963643,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-03-13",
		  "address": "Golden Valley General Hospital, Brantleyville"
		},
		{
		  "header": "Plasma",
		  "date": "2019-02-07",
		  "address": "Willow Gardens Medical Clinic, Grayhawk"
		},
		{
		  "header": "Platelets",
		  "date": "2019-11-13",
		  "address": "United Community Hospital,Loomis"
		}
	  ]
	},
	{
	  "_id": "60b464c8302c3e44b4371e37",
	  "name": "Erma Snider",
	  "gender": "female",
	  "email": "ermasnider@olympix.com",
	  "contact": "+91 (976) 499-3659",
	  "address": "571 Portland Avenue",
	  "city": "Bordelonville",
	  "state": "District Of Columbia",
	  "pinCode": 4702,
	  "bloodGroup": "A+",
	  "dob": "1996-01-10",
	  "latitude": -66.078644,
	  "longitude": 91.086481,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-03-19",
		  "address": "Golden Valley General Hospital, Dowling"
		},
		{
		  "header": "Plasma",
		  "date": "2019-12-07",
		  "address": "Citrus General Hospital, Greenwich"
		},
		{
		  "header": "Platelets",
		  "date": "2019-11-28",
		  "address": "White Feather Hospital,Tonopah"
		}
	  ]
	},
	{
	  "_id": "60b464c859855a086b796352",
	  "name": "Weiss Valencia",
	  "gender": "male",
	  "email": "weissvalencia@olympix.com",
	  "contact": "+91 (944) 565-2266",
	  "address": "892 Interborough Parkway",
	  "city": "Nanafalia",
	  "state": "Idaho",
	  "pinCode": 2829,
	  "bloodGroup": "B+",
	  "dob": "1995-02-16",
	  "latitude": -3.839909,
	  "longitude": 66.345269,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-09-11",
		  "address": "Ruby Valley Medical Center, Bowmansville"
		},
		{
		  "header": "Plasma",
		  "date": "2020-08-12",
		  "address": "Citrus General Hospital, Shelby"
		},
		{
		  "header": "Platelets",
		  "date": "2019-07-26",
		  "address": "White Feather Hospital,Zortman"
		}
	  ]
	},
	{
	  "_id": "60b464c8fe8432751881cd96",
	  "name": "Gretchen Mullen",
	  "gender": "female",
	  "email": "gretchenmullen@olympix.com",
	  "contact": "+91 (982) 439-2334",
	  "address": "144 Devon Avenue",
	  "city": "Coldiron",
	  "state": "Federated States Of Micronesia",
	  "pinCode": 1975,
	  "bloodGroup": "B+",
	  "dob": "1997-08-17",
	  "latitude": -17.04437,
	  "longitude": -23.43905,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-04-03",
		  "address": "Golden Valley General Hospital, Marbury"
		},
		{
		  "header": "Plasma",
		  "date": "2020-08-18",
		  "address": "Willow Gardens Medical Clinic, Marshall"
		},
		{
		  "header": "Platelets",
		  "date": "2019-11-12",
		  "address": "Laguna Community Hospital,Newcastle"
		}
	  ]
	},
	{
	  "_id": "60b464c8f91ec2ac6afe2234",
	  "name": "Stephenson Cochran",
	  "gender": "male",
	  "email": "stephensoncochran@olympix.com",
	  "contact": "+91 (960) 578-3752",
	  "address": "757 Canton Court",
	  "city": "Bluetown",
	  "state": "Colorado",
	  "pinCode": 7413,
	  "bloodGroup": "O+",
	  "dob": "1999-05-22",
	  "latitude": -6.140523,
	  "longitude": 163.986156,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-02-26",
		  "address": "Specialty Medical Clinic, Garfield"
		},
		{
		  "header": "Plasma",
		  "date": "2019-07-08",
		  "address": "Citrus General Hospital, Groveville"
		},
		{
		  "header": "Platelets",
		  "date": "2020-06-22",
		  "address": "Laguna Community Hospital,Cucumber"
		}
	  ]
	},
	{
	  "_id": "60b464c812f1a37131d17c16",
	  "name": "Angel Farmer",
	  "gender": "female",
	  "email": "angelfarmer@olympix.com",
	  "contact": "+91 (977) 558-2195",
	  "address": "343 Prospect Street",
	  "city": "Rew",
	  "state": "North Dakota",
	  "pinCode": 9834,
	  "bloodGroup": "AB-",
	  "dob": "1997-09-20",
	  "latitude": -69.278942,
	  "longitude": -168.41854,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-11-17",
		  "address": "Golden Valley General Hospital, Barclay"
		},
		{
		  "header": "Plasma",
		  "date": "2020-03-02",
		  "address": "Bellflower Clinic, Elliott"
		},
		{
		  "header": "Platelets",
		  "date": "2020-11-03",
		  "address": "Laguna Community Hospital,Oberlin"
		}
	  ]
	},
	{
	  "_id": "60b464c8b57fcaffd5eae960",
	  "name": "Candy Villarreal",
	  "gender": "female",
	  "email": "candyvillarreal@olympix.com",
	  "contact": "+91 (874) 591-2401",
	  "address": "632 Lois Avenue",
	  "city": "Neahkahnie",
	  "state": "West Virginia",
	  "pinCode": 2238,
	  "bloodGroup": "B-",
	  "dob": "1999-09-29",
	  "latitude": 37.077741,
	  "longitude": 51.124701,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-07-15",
		  "address": "Ruby Valley Medical Center, Emison"
		},
		{
		  "header": "Plasma",
		  "date": "2021-05-04",
		  "address": "Marine Clinic, Concho"
		},
		{
		  "header": "Platelets",
		  "date": "2019-08-22",
		  "address": "Serenity Medical Clinic,Healy"
		}
	  ]
	},
	{
	  "_id": "60b464c8088701a391e88ff0",
	  "name": "Rita Glenn",
	  "gender": "female",
	  "email": "ritaglenn@olympix.com",
	  "contact": "+91 (819) 453-2391",
	  "address": "861 Hubbard Place",
	  "city": "Sussex",
	  "state": "Arizona",
	  "pinCode": 1184,
	  "bloodGroup": "B+",
	  "dob": "1997-10-05",
	  "latitude": 71.625479,
	  "longitude": 131.166703,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-11-18",
		  "address": "Diamond Grove Medical Center, Shawmut"
		},
		{
		  "header": "Plasma",
		  "date": "2020-04-10",
		  "address": "Grand Oak Hospital Center, Bentley"
		},
		{
		  "header": "Platelets",
		  "date": "2019-08-01",
		  "address": "White Feather Hospital,Takilma"
		}
	  ]
	},
	{
	  "_id": "60b464c874834d084ad8feb6",
	  "name": "Olson Ball",
	  "gender": "male",
	  "email": "olsonball@olympix.com",
	  "contact": "+91 (924) 553-2146",
	  "address": "842 Coventry Road",
	  "city": "Websterville",
	  "state": "Illinois",
	  "pinCode": 4266,
	  "bloodGroup": "O-",
	  "dob": "1998-05-07",
	  "latitude": -2.220242,
	  "longitude": 51.55508,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2020-03-02",
		  "address": "Angelwood Clinic, Fingerville"
		},
		{
		  "header": "Plasma",
		  "date": "2020-02-12",
		  "address": "White Willow Clinic, Nadine"
		},
		{
		  "header": "Platelets",
		  "date": "2021-04-03",
		  "address": "White Feather Hospital,Alden"
		}
	  ]
	},
	{
	  "_id": "60b464c807df3fe1dffe9ea9",
	  "name": "Ada Frederick",
	  "gender": "female",
	  "email": "adafrederick@olympix.com",
	  "contact": "+91 (873) 458-3158",
	  "address": "400 Hegeman Avenue",
	  "city": "Bridgetown",
	  "state": "North Carolina",
	  "pinCode": 1702,
	  "bloodGroup": "O-",
	  "dob": "1996-06-17",
	  "latitude": -13.312968,
	  "longitude": 75.520731,
	  "donationList": [
		{
		  "header": "White Blood",
		  "date": "2019-12-12",
		  "address": "Diamond Grove Medical Center, Kraemer"
		},
		{
		  "header": "Plasma",
		  "date": "2020-10-25",
		  "address": "Citrus General Hospital, Boomer"
		},
		{
		  "header": "Platelets",
		  "date": "2019-08-15",
		  "address": "United Community Hospital,Osage"
		}
	  ]
	}
]
export const bankList = [
	{
	  "_id": "60b4745cdc6662cc7fc626d0",
	  "name": "ZAJ BANK",
	  "email": "patenieves@zaj.com",
	  "phone": "+91 (862) 404-2817",
	  "address": "964 Grand Avenue, Floriston, Georgia, 7475",
	  "lastUpdated": "2021-05-26",
	  "category": "Private",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745cc64069489bbe7cfb",
	  "name": "ACUSAGE BANK",
	  "email": "patenieves@acusage.com",
	  "phone": "+91 (928) 429-2400",
	  "address": "149 Kane Place, Benson, North Dakota, 8241",
	  "lastUpdated": "2021-04-27",
	  "category": "Government",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c2c719be8d5750472",
	  "name": "MANTRO BANK",
	  "email": "patenieves@mantro.com",
	  "phone": "+91 (844) 562-3219",
	  "address": "177 Duryea Place, Dola, New Hampshire, 1940",
	  "lastUpdated": "2021-02-19",
	  "category": "Private",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c34cd1584073d1639",
	  "name": "SLOFAST BANK",
	  "email": "patenieves@slofast.com",
	  "phone": "+91 (862) 560-2854",
	  "address": "605 Broome Street, Saticoy, Kansas, 4221",
	  "lastUpdated": "2021-05-02",
	  "category": "Government",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c8db3dcef20b91e87",
	  "name": "ACCEL BANK",
	  "email": "patenieves@accel.com",
	  "phone": "+91 (976) 528-2748",
	  "address": "497 Trucklemans Lane, Bennett, Nebraska, 5739",
	  "lastUpdated": "2021-02-09",
	  "category": "Private",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745ce71a040a5236f9f9",
	  "name": "ZANITY BANK",
	  "email": "patenieves@zanity.com",
	  "phone": "+91 (857) 411-3602",
	  "address": "994 Miami Court, Hayes, California, 8882",
	  "lastUpdated": "2021-05-05",
	  "category": "Government",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c7a50260dd5f5c05f",
	  "name": "OHMNET BANK",
	  "email": "patenieves@ohmnet.com",
	  "phone": "+91 (963) 496-2319",
	  "address": "736 Boerum Place, Salvo, Washington, 8399",
	  "lastUpdated": "2021-03-05",
	  "category": "Government",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c570a90d7e24a73c1",
	  "name": "THREDZ BANK",
	  "email": "patenieves@thredz.com",
	  "phone": "+91 (970) 576-2015",
	  "address": "988 Colin Place, Aberdeen, Vermont, 5039",
	  "lastUpdated": "2021-01-09",
	  "category": "Private",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745cfc7cae37bbb03ab8",
	  "name": "NITRACYR BANK",
	  "email": "patenieves@nitracyr.com",
	  "phone": "+91 (908) 512-3446",
	  "address": "745 Dank Court, Emerald, Virgin Islands, 569",
	  "lastUpdated": "2021-02-04",
	  "category": "Private",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c4084dd33dd493e6f",
	  "name": "NORALI BANK",
	  "email": "patenieves@norali.com",
	  "phone": "+91 (905) 543-2834",
	  "address": "824 Macdougal Street, Marne, Ohio, 7989",
	  "lastUpdated": "2021-05-11",
	  "category": "Government",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	},
	{
	  "_id": "60b4745c2be2f4833481fac9",
	  "name": "ECOSYS BANK",
	  "email": "patenieves@ecosys.com",
	  "phone": "+91 (942) 472-3917",
	  "address": "179 Campus Place, Celeryville, Pennsylvania, 3500",
	  "lastUpdated": "2021-05-09",
	  "category": "Government",
	  "availability": "A+, B+, AB+, A-,B-AB-,O+,O-"
	}
  ];