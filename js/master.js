$(document).ready(function(){

  const expiration =  '7/31/17';
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
     buyItNow
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
  }

  function listing(thisCar){
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">'+ thisCar.year + ' '+ thisCar.make + '</h3><h2 class="modelTrim">'+ thisCar.model + '</h2><img src="'+ thisCar.vehicleImage + '" alt="Chrysler vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$'+ thisCar.leasePrice + '</h1><div id="spacer">&nbsp;&nbsp;</div><h3 class="monthsSections">/MO<br>'+ thisCar.months + ' MOS</h3></div><h4 class="moneyDue">$'+ thisCar.totalAtInception + ' DUE AT SIGNING</h4>'+ thisCar.buyItNow + '<a href="'+ thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">'+ thisCar.doors + ', '+ thisCar.engine + ', '+ thisCar.transmission + ', a/c, p/s/ABS/winds/lks/htd mirrs, MP3, '+ thisCar.equipment + ', MSRP: $'+ thisCar.msrp + '. VIN '+ thisCar.vin + '. Stk '+ thisCar.stock + '. Lease: $'+ thisCar.moneyDown + ' down pymt. + $'+ thisCar.leasePrice + ' 1st mo. pymt. + $0 bank fee + $0 sec dep. + $299 doc fee = $'+ thisCar.totalAtInception + ' due at inception. Ttl. pymts: $'+ thisCar.totalPayment + '/$'+ thisCar.residual + ' purch opt. at lease end. Mi. allow: '+ thisCar.milesPerYear + 'K mi./yr. '+ thisCar.thereAfter + '¢ mi. thereafter. Lease price includes: '+ thisCar.additionalInfo + ', if qual.Prices incl. all costs to be paid by consumer except for licensing, registration and taxes. *Based on closed end lease w/primary lender approval. Lessee resp. for excess wear, tear &amp; mileage. Customers must meet all rebate qualifications. ^*†NON-Chrysler/Jeep/Dodge/Ram vehicles restrictions apply - see dealer for complete details, if qual. ^^(military) must be active or retired member of any US Military branch. Not resp. for typos.^*valid to customers leasing a Chrysler/Jeep/Dodge/Ram vehicle who lease a new eligible Chrysler/Jeep/Dodge/Ram model, see dealer for complete program eligibility, if qual. *^*must finance thru Chrysler Capital to qualified buyers. Photos may not accurately represent vehicles. Vehicle prices/leases &amp; incentives expire '+ expiration + ' and subj. to change by manufacturer. Chrysler, Jeep, Dodge, Ram are registered trademarks of Chrysler Group, LLC.</p></div></div>';
  }

  vehicleArray[0] = new Vehicle(
  2017,
  'JEEP',
  'GRAND CHEROKEE TOURING LAREDO 4X4',
  'Velvet Red',
  '4DR',
  '3.6L V6 24V VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Quick Order Package 23E, Bright Side Roof Rails, Power 8-Way Driver/Manual Passenger Seat',
  'HC834519',
  'CHH1711',
  '14',
  '35,790',
  169,
  '22,539.80',
  0,
  'included',
  '2,826',
  '4,056',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $250 N.E. 2017 Bonus Cash NECHA, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH1711.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-c83957260a0e0ae70fea12d24635e146.htm',
  '');

  vehicleArray[1] = new Vehicle(
  2017,
  'RAM',
  '1500 SLT CREW CAB 4X4',
  'Flame Red',
  '4DR',
  '5,7L V8 HEMI MDS VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Wheels: 20" x 8" Aluminum Chrome Clad, Air Conditioning ATC w/Dual Zone Control, Auto Dim Exterior Mirrors, Big Horn Badge, Big Horn Regional Package, Bright/Bright Billets Grille, Class IV Receiver Hitch, Katzkin Leather Seats by Mopar, Trailer Brake control, Spray-in Liner, heated seats and wheel group, rear window defroster',
  'HS504214',
  'CHH0173',
  '15',
  '50,155',
  '249<font>.05<div id="spacer">&nbsp;&nbsp;</div></font>',
  '27,935.25',
  0,
  'included',
  '2,745.95',
  '5,976',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $250 N.E. 2017 Bonus Cash NECHA, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1, $ 500N.E. Chrysler Capital 2017 Bonus NECH5, $500 N.E. Ten Days to Deal Bonus Cash NECH1P',
  'vehicleImages/CHH0173.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-b3408d3f0a0e0adf41c9e44ac9416827.htm',
  '');

  vehicleArray[2] = new Vehicle(
  2017,
  'DODGE',
  'DURANGO SXT AWD',
  'Vice White',
  '4DR',
  '3.6L V6 24V VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  '3rd row seating, Uconnect 8.4, 2TB/23B customer preferred package',
  'HC758034',
  'CHH2281',
  '17',
  '37,975',
  199,
  '22,375.50',
  0,
  'included',
  '2,796',
  '4,776',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $250 N.E. 2017 Bonus Cash NECHA, $500 N.E. Ten Days to Deal Bonus Cash NECH1P, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH2281.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Dodge/2017-Dodge-Durango-54ca21730a0e0adf4dcd53fbd832a269.htm',
  '');

  vehicleArray[3] = new Vehicle(
  2017,
  'JEEP',
  'COMPASS LATITIUDE 4X4',
  'Jazz Blue',
  '4DR',
  '2.4L I4 MultiAir',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Premium Cloth/Vinyl Seats, cold weather group, safety and security group, navigation group, populat equipment group, dual-pane panoramic sunroof, compact spare tire, 18x7.0 polished black pkts al wheels, 2DJ/2XJ customer preferred package',
  'HT666177',
  'CHH2561',
  '0',
  '32,805',
  169,
  '21,345.20',
  0,
  'included',
  '2,826',
  '4,0256',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $500 N.E. Ten Days to Deal Bonus Cash NECH1P, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1',
  'vehicleImages/CHH2561.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-New+Compass-186fae470a0e0a6b3f0ee7395d81e5bb.htm',
  '');
  vehicleArray[4] = new Vehicle(
  2017,
  'JEEP',
  'RENEGADE LATITIUDE 4X4',
  'Hyper Green',
  '4DR',
  '2.4L I4 MultiAir',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'deluxe cloth high-back black bucket seats, cold weather group, passive entry remote start package, gloss black steering wheel bezel, goodyear brand tires, protective clear plastic film, protective clear film for rims, 2DL/27L customer preferred package',
  'HPF14480',
  'CHH1677',
  '12',
  '27,665',
  99,
  '14,459.15',
  0,
  'included',
  '2,896',
  '2,376',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $1,000 N.E 2017 Bonus Cash NECHA',
  'vehicleImages/CHH1677.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Renegade-ec78ad4f0a0e0ae9679d935fda240af5.htm',
  '');

  vehicleArray[5] = new Vehicle(
  2017,
  'DODGE',
  'CHARGER SXT AWD',
  'White Knuckle',
  '4DR',
  '3.6L V6 24-Value VVT',
  'TorqueFlite 8-spd Auto',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'cloth sport seat, driver convenience group, nav and travel group, rallye group',
  'HH50553',
  'CHH2304',
  '17',
  '36,375',
  199,
  '18,537.50',
  0,
  'included',
  '2,796',
  '7,164',
  36,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $1,000 N.E 2017 Bonus Cash NECHA, $1000 2017 Conquest Lease to retail/lease 38CHA1',
  'vehicleImages/CHH2304.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Dodge/2017-Dodge-Charger-78c6dca60a0e0a6b3b5b9d254ce083a8.htm',
  '');

  vehicleArray[6] = new Vehicle(
  2017,
  'CHRYSLER',
  '300 LIMITED AWD',
  'Bright White',
  '4DR',
  '3.6L V6 24-Value VVT',
  '8-Speed automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'leather trimmed bucket seats, value package, 2DF/22F customer preferred package',
  'HH585808',
  'CHH1847',
  '17',
  '38,930',
  219,
  '18,647.10',
  0,
  'included',
  '2,776',
  '4,776',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $1,000 N.E 2017 Bonus Cash NECHA, $1000 2017 Conquest Lease to retail/lease 38CHA1',
  'vehicleImages/CHH1847.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Chrysler/2017-Chrysler-300-107af81c0a0e0ae76cb81e672039c735.htm',
  '');


  vehicleArray[7] = new Vehicle(
  2017,
  'CHRYSLER',
  'PACIFICA TOURING',
  'Jazz Blue',
  '4DR',
  '3.6L V6 24-Value VVT',
  '8-Speed automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'cloth low-back bucket seats, 8-passenger, keysense, Uconnect 8.4, 2DK/25K customer preferred package',
  'HR635797',
  'CHH0814',
  '188',
  '32,755',
  255,
  '18,342.80',
  0,
  'included',
  '2,770',
  '5,400',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $1000 2017 Conquest Lease to retail/lease 38CHA1',
  'vehicleImages/CHH0814.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Chrysler/2017-Chrysler-Pacifica-7d249e4f0a0e0ae75af8e084d97146ab.htm',
  '');

  vehicleArray[8] = new Vehicle(
  2017,
  'RAM',
  '1500 ST QUAD CAB 4X4',
  'Blue Streak',
  '4DR',
  '3.6L V6 24-Value VVT',
  '8-Speed automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'cloth 40/20/40 bench seat, popular equipment group, Uconnect 5.0, flex fuel vehicle, 2TJ/22J customer preferred package',
  'HS794675',
  'CHH2294',
  '32',
  '38,405',
  99,
  '21,856.80',
  0,
  'included',
  '2,896',
  '2,376',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $500 N.E. Chrysler Capital 2017 Bonus NECH5, $500 2017 Military Consumer Cash 39CHB, $1500 N.E. 2017 Bonus cash NECHA, $1000 2017 Conquest Lease to retail/lease 38CHA1',
  'vehicleImages/CHH2294.jpg',
  'http://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-54ca21510a0e0adf4dcd53fb7d6095a9.htm',
  '');

  vehicleArray[9] = new Vehicle(
  2017,
  'JEEP',
  'CHEROKEE LATITUDE',
  'Bright White',
  '4DR',
  '2.4L I4 PZEV',
  '9-Speed automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'leather trimmed bucket seats, true north edition, california emissions, 2TJ/21J customer preferred package, true north package savings of $300',
  'HW579690',
  'CHH1105',
  '17',
  '30,385',
  199,
  '16,711.75',
  0,
  'included',
  '2,796',
  '4,776',
  24,
  10,
  '.25',
  '2,995',
  '$2,750 N.E. Lease Cash 32LH1, $1000 Cherokee Lease Bonus Cash 38LHB, $500 2017 Military Consumer Cash 39CHB',
  'vehicleImages/CHH1105.jpg',
  'http://www.ramseychryslerjeepdodge.com/new-inventory/index.htm',
  '');
  vehicleArray[10] = new Vehicle(
  2017,
  'JEEP',
  'WRANGLER UNLIMITED SPORT 4X4',
  'Rhino CC',
  '4DR',
  '3.6L V6 24-Value VVT',
  '5-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'Cloth seats w/ adj head restraints, connectivity group, freedom top black 3-piece hard top, SIRIUSXM sat radio w/1-yr RADIO, 2TS/24S customer preferred package',
  'HL664699',
  'CHH2475',
  '0',
  '35,500',
  289,
  '24,845',
  0,
  'included',
  '2,706',
  '12,138',
  42,
  10,
  '.25',
  '2,995',
  '$500 2017 Military Consumer Cash 39CHB',
  'vehicleImages/CHH2475.jpg',
  'http://www.ramseychryslerjeepdodge.com/new-inventory/index.htm',
  '');


// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
