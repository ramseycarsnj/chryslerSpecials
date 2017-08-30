$(document).ready(function(){

  const expiration =  '8/31/17';
  const vehicleArray = [];

  function Vehicle(
     year,
     make,
     model,
     color,
     doors,
     engine,
     transmission,
     brakes,
     steering,
     power,
     equipment,
     vin,
     stock,
     miles,
     msrp,
     leasePrice,
     residual,
     security,
     bankFee,
     moneyDown,
     totalPayment,
     months,
     milesPerYear,
     thereAfter,
     totalAtInception,
     additionalInfo,
     vehicleImage,
     vehicleUrl,
     buyItNow,
     fineprint
    ){
      this.year = year;
      this.make = make;
      this.model = model;
      this.color = color;
      this.doors = doors;
      this.engine = engine;
      this.transmission = transmission;
      this.brakes = brakes;
      this.steering = steering;
      this.power = power;
      this.equipment = equipment;
      this.vin = vin;
      this.stock = stock;
      this.miles = miles;
      this.msrp = msrp;
      this.leasePrice = leasePrice;
      this.residual = residual;
      this.security = security;
      this.bankFee = bankFee;
      this.moneyDown = moneyDown;
      this.totalPayment = totalPayment;
      this.months = months;
      this.milesPerYear = milesPerYear;
      this.thereAfter = thereAfter;
      this.totalAtInception = totalAtInception;
      this.additionalInfo = additionalInfo;
      this.vehicleImage = vehicleImage;
      this.vehicleUrl = vehicleUrl;
      this.buyItNow = buyItNow;
      this.fineprint = fineprint;
  }

  function listing(thisCar){
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">'+ thisCar.year + ' '+ thisCar.make + '</h3><h2 class="modelTrim">'+ thisCar.model + '</h2><img src="'+ thisCar.vehicleImage + '" alt="Chrysler vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$'+ thisCar.leasePrice + '</h1><h3 class="monthsSections">&nbsp;&nbsp;&nbsp;/MO<br>&nbsp;&nbsp;&nbsp;'+ thisCar.months + ' MOS</h3></div><h4 class="moneyDue">$'+ thisCar.totalAtInception + ' DUE AT SIGNING</h4>'+ thisCar.buyItNow + '<a href="'+ thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">'+ thisCar.doors + ', '+ thisCar.engine + ', '+ thisCar.transmission + ', a/c, p/s/ABS/winds/lks/htd mirrs, MP3, '+ thisCar.equipment + ', MSRP: $'+ thisCar.msrp + '. VIN '+ thisCar.vin + '. Stk '+ thisCar.stock + '. Lease: $'+ thisCar.moneyDown + ' down pymt. + $'+ thisCar.leasePrice + thisCar.fineprint + ' 1st mo. pymt. + $0 bank fee + $0 sec dep. + $299 doc fee = $'+ thisCar.totalAtInception + ' due at inception. Ttl. pymts: $'+ thisCar.totalPayment + '/$'+ thisCar.residual + ' purch opt. at lease end. Mi. allow: '+ thisCar.milesPerYear + 'K mi./yr. '+ thisCar.thereAfter + '¢ mi. thereafter. Lease price includes: '+ thisCar.additionalInfo + ', if qual.Prices incl. all costs to be paid by consumer except for licensing, registration and taxes. *Based on closed end lease w/primary lender approval. Lessee resp. for excess wear, tear &amp; mileage. Customers must meet all rebate qualifications. ^*†NON-Chrysler/Jeep/Dodge/Ram vehicles restrictions apply - see dealer for complete details, if qual. ^^(military) must be active or retired member of any US Military branch. Not resp. for typos.^*valid to customers leasing a Chrysler/Jeep/Dodge/Ram vehicle who lease a new eligible Chrysler/Jeep/Dodge/Ram model, see dealer for complete program eligibility, if qual. *^*must finance thru Chrysler Capital to qualified buyers. Photos may not accurately represent vehicles. Vehicle prices/leases &amp; incentives expire '+ expiration + ' and subj. to change by manufacturer. Chrysler, Jeep, Dodge, Ram are registered trademarks of Chrysler Group, LLC.</p></div></div>';
  }

  vehicleArray[0] = new Vehicle(
  2017,
  'RAM',
  '1500 ST QUAD CAB 4x4',
  'Flame Red Clear Coat',
  '4DR',
  '3.6L V6 24V VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Uconnect 5.0, Customer Preferred Package 2TJ, Express Package 22J',
  'HS794689',
  'CHH2315',
  '20',
  '38,405',
  99,
  '21,506.80',
  0,
  'included',
  '2,895.24',
  '2,376',
  24,
  10,
  '.25',
  '2,995',
  '$4,250 N.E. Lease Cash 32LH1, $500 N.E. Chrysler Capital 2017 Bonus NECH5, $1500 N.E. 2017 Bonus Cash NECHA, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH2315.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-78c6dfc90a0e0a6b3b5b9d254a3cd370.htm',
  '',
  '.76');

  vehicleArray[1] = new Vehicle(
  2017,
  'JEEP',
  'GRAND CHEROKEE LAREDO 4x4',
  'Velvet Red Pearl',
  '4DR',
  '3.6L V6 24V VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Customer Preferred Package 2TE, Customer Preferred Package 23E',
  'HC912796',
  'CHH2321',
  '12',
  '35,790',
  149,
  '21,189.80',
  0,
  'included',
  '2,846',
  '3,576',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $250 N.E. 2017 Bonus Cash NECHA, $1000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH2321.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-78c6dfc90a0e0a6b3b5b9d254a3cd370.htm',
  '',
  '');
  vehicleArray[2] = new Vehicle(
  2017,
  'JEEP',
  'CHEROKEE LATITUDE 4x4',
  'Bright White',
  '4DR',
  '2.4l I4 PZEV M-Air Engine',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Customer Preferred Package 2TJ, Customer Preferred Package 21J',
  'HW579690',
  'CHH1105',
  '17',
  '30,385',
  149,
  '16,711.75',
  0,
  'included',
  '2,845',
  '3,576',
  24,
  10,
  '.25',
  '2,995',
  '$2,250 N.E. BC Lease Cash 32LH1, $1000 Chrokee Lease Bonus Cash 38LHB, $500 2017 Military Consumer Cash 39CHB, $1000 N.E. Jeep Celebration Bonus Cash NECHY',
  'vehicleImages/CHH1105.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-78c6dfc90a0e0a6b3b5b9d254a3cd370.htm',
  '',
  '.62');

  vehicleArray[3] = new Vehicle(
  2017,
  'RAM',
  '1500 SLT CREW CAB 4x4',
  'Red Pearl',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'spray in bedliner, Customer Preferred Package 2TS, Customer Preferred Package 26S',
  'HS554021',
  'CHH0432',
  '16',
  '46,080',
  269,
  '29,738.50',
  0,
  'included',
  '2,726',
  '6,456',
  24,
  10,
  '.25',
  '2,995',
  '$5250 N.E. BC Lease Cash 32LH1, $500 N.E. Chrysler Capital 2017 Bonus NECH5, $500 2017 Military Consumer Cash 39CHB, $750 N.E. 2017 Bonus Cash NECHA, $750 NEBC Select Inventory Bonus Cash NECH2C, $1000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH0432.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-8b6b960c0a0e0ae854d002e50be52bbc.htm',
  '',
  '');


  vehicleArray[4] = new Vehicle(
  2017,
  'JEEP',
  'RENEGADE',
  'Jetset Blue Pearl',
  '4DR',
  '2.4L I-4',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Kumho Brand Tires, Protective Clear Plastic Film, Protective clear film for rims, Customer Preferred Package 2DJ, Customer Preferred Package 27J',
  'HPF18179',
  'CHH1775',
  '15',
  '26,970',
  129,
  '13,754.70',
  0,
  'included',
  '2,866',
  '3,096',
  24,
  10,
  '.25',
  '2,995',
  '$3,750 N.E. BC Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $1,000 N.E. 2017 Bonus Cash NECHA, $500 2017 Returning Lessee 38CHB3',
  'vehicleImages/CHH1775.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Renegade-fbd894540a0e0ae829342a8d8151e548.htm',
  '',
  '');

  vehicleArray[5] = new Vehicle(
  2017,
  'JEEP',
  'COMPASS LATITUDE 4WD',
  'REDLINE',
  '4DR',
  '2.4L I4',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Customer Preferred Package 2DJ, Customer Preferred Package 2XJ',
  'HT660597',
  'CHH2579',
  '15',
  '26,890',
  69,
  '17,747.40',
  0,
  'included',
  '2,926',
  '1,656',
  24,
  10,
  '.25',
  '2,995',
  '$750 N.E. BC Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, 500 N.E. Jeep Celebration Bonus Cash NECH1Y, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH2579.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-New+Compass-08fc95ba0a0e0a6b3f0ee7397a3d8399.htm',
  '',
  '');



// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
