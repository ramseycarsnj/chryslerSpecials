$(document).ready(function(){

  const expiration =  '10/31/17';
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
  'JEEP',
  'GRAND CHEROKEE LAREDO 4X4',
  'True Blue Pearl Coat',
  '4DR',
  '3.6L V6 24V VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Customer preferred package 2Te, Customer preferred package 23E',
  'HC912794',
  'CHH2306',
  '2,866',
  '35,790',
  129,
  '21,474',
  0,
  'included',
  '2,8',
  '3,096',
  24,
  10,
  '.25',
  '2,995',
  'NELHA Northeast BC 2017 IDL Bonus Cash $2,500, 32LH1 Northeast BC Lease Cash $3,250, 39CHB 2017 Military Consumer Cash $500, NECHA Northeast 2017 Bonus Cash $250, 38CHA1 2017 Conquest Lease to Retail/Lease $1,000, 41CHZ Jeep Celebration Bonus Cash $500',
  'vehicleImages/CHH2306.png',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-642c32cd0a0e0adf4dcd53fb1456ab8e.htm',
  '',
  '');

  vehicleArray[1] = new Vehicle(
  2017,
  'RAM',
  '1500 SLT CREW CAB 4X4',
  'Red Pearl',
  '4DR',
  '3.6L V6 24V VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Spray-In Bedliner, Customer preferred pacakge 2TS, Customer preferred package 22S',
  'HS89117',
  'CHH2715',
  '12',
  '46,080',
  169,
  '24,422',
  0,
  'included',
  '2,826',
  '4,056',
  24,
  10,
  '.25',
  '2,995',
  'NELHA Northeast BC 2017 IDL Bonus Cash $3,750, 32LH1 Northeast BC Lease Cash $6,000, 39CHB 2017 Military Consumer Cash $500, NECHA Northeast 2017 Bonus Cash $1,000, 38CHA1 2017 Conquest Lease to Retail/Lease $1,000',
  'vehicleImages/CHH2715.png',
  'http://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-8494ce270a0e0ae867dfbbaf96f1cbd3.htm',
  '',
  '');
  vehicleArray[2] = new Vehicle(
  2017,
  'RAM',
  '1500 ST QUAD CAB 4X4',
  'Flame Red Clear',
  '4DR',
  '3,6L V6 24 Valve VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Uconnect 5.0, Popular Equipment Group, Customer preferred package 2TJ',
  'HS794687',
  'CHH2314',
  '18',
  '38,405',
  99,
  '20,738.70',
  0,
  'included',
  '2,896',
  '2,376',
  24,
  10,
  '.25',
  '2,995',
  'NELHA Northeast BC 2017 IDL Bonus Cash $3,000, 32LH1 Northeast BC Lease Cash $5,250, 39CHB 2017 Military Consumer Cash $500, NECHA Northeast 2017 Bonus Cash $1,500, 38CHA1 2017 Conquest Lease to Retail/lease $1,000',
  'vehicleImages/CHH2314.png',
  'http://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-6945f2790a0e0ae7513b8f851cac2836.htm',
  '',
  '.62');

  vehicleArray[3] = new Vehicle(
  2017,
  'DODGE',
  'CHARGER SXT AWD',
  'White Knuckle',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Navigation an Travel group, Driver convenience group, Rallye Group, Customer Preferred Package 2DH,Customer Preferred Package 28H',
  'HH05553',
  'CHH2304',
  '17',
  '36,375',
  169,
  '19,642.50',
  0,
  'included',
  '2,826',
  '4,056',
  24,
  10,
  '.25',
  '2,995',
  'NELHA Northeast BC 2017 IDL Bonus Cash $2,500, 32LH1 Northeast BC Lease Cash $3,250, 39CHB 2017 Military Consumer Cash $500, NECHA Northeast 2017 Bonus Cash $1,000, 38CHA1 2017 Conquest Lease to Retail/lease $1,000',
  'vehicleImages/CHH2304.png',
  'http://www.ramseychryslerjeepdodge.com/new/Dodge/2017-Dodge-Charger-78c6dca60a0e0a6b3b5b9d254ce083a8.htm',
  '',
  '');

  vehicleArray[4] = new Vehicle(
  2017,
  'DODGE',
  'DURANGO SXT AWD',
  'Granite Metallic',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Popular Equipment group, Uconnect 8.4, Customer preferred package 2TB, Customer Preferred package 23B',
  'HC921465',
  'CHH2482',
  '16',
  '38,630',
  199,
  '21,246.50',
  0,
  'included',
  '2,796',
  '4,776',
  24,
  10,
  '.25',
  '2,995',
  'NELHA Northeast BC 2017 IDL Bonus Cash $3,000, 32LH1 Northeast BC Lease Cash $3,000, 39CHB 2017 Military Consumer Cash $500, NECHA Northeast 2017 Bonus Cash $750, 38CHA1 2017 Conquest Lease to Retail/lease $1,000',
  'vehicleImages/CHH2482.png',
  'http://www.ramseychryslerjeepdodge.com/new/Dodge/2017-Dodge-Durango-e4f0abe40a0e0a1777641ac0eb70e6e3.htm',
  '',
  '');

  vehicleArray[5] = new Vehicle(
  2017,
  'JEEP',
  'COMPASS LATITUDE 4X4',
  'Olive Green',
  '4DR',
  '2.4L I4',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'All Season Tires, Customer Preferred Package 2DJ, Customer Preferred Package27J',
  'JT113862',
  'CHJ0139',
  '16',
  '26,890',
  79,
  '18,016.30',
  0,
  'included',
  '2,916',
  '2,995',
  24,
  10,
  '.25',
  '2,995',
  '39CJB 2018 MY Military Bonus Consumer Cash $500, NECJA N.E. 2018 Bonus Cash $500, 38CJA1 2018 Conquest Lease to Retail/Lease $1000',
  'vehicleImages/CHJ0139.png',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2018-Jeep-Compass-d1d451e90a0e0aea4a9cbb019a6d0304.htm',
  '',
  '');



// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
