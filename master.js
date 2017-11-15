$(document).ready(function(){
  const expiration =  '11/30/17';
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
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><img src="' + thisCar.vehicleImage + '" alt="Chrysler vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="yearMake">' + thisCar.year + ' ' + thisCar.make + '</h3><h2 class="modelTrim">' + thisCar.model + '</h2><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + thisCar.leasePrice + '</h1><h3 class="monthsSections">PER MO • ' + thisCar.months + ' MOS</h3></div><h4 class="moneyDue">$' + thisCar.totalAtInception + ' down payment</h4><a href="' + thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a></div><div class="fineprint"><p class="disclaimer">'+ thisCar.doors + ', '+ thisCar.engine + ', '+ thisCar.transmission + ', a/c, p/s/ABS/winds/lks/htd mirrs, MP3, '+ thisCar.equipment + ', MSRP: $'+ thisCar.msrp + '. VIN '+ thisCar.vin + '. Stk '+ thisCar.stock + '. Lease: $'+ thisCar.moneyDown + ' down pymt. + $'+ thisCar.leasePrice + thisCar.fineprint + ' 1st mo. pymt. + $0 bank fee + $0 sec dep.  = $'+ thisCar.totalAtInception + ' due at inception. Ttl. pymts: $'+ thisCar.totalPayment + '/$'+ thisCar.residual + ' purch opt. at lease end. Mi. allow: '+ thisCar.milesPerYear + 'K mi./yr. '+ thisCar.thereAfter + '¢ mi. thereafter. Lease price includes: '+ thisCar.additionalInfo + ', if qual.Prices incl. all costs to be paid by consumer except for licensing, registration and taxes. *Based on closed end lease w/primary lender approval. Lessee resp. for excess wear, tear &amp; mileage. Customers must meet all rebate qualifications. ^*†NON-Chrysler/Jeep/Dodge/Ram vehicles restrictions apply - see dealer for complete details, if qual. ^^(military) must be active or retired member of any US Military branch. Not resp. for typos.^*valid to customers leasing a Chrysler/Jeep/Dodge/Ram vehicle who lease a new eligible Chrysler/Jeep/Dodge/Ram model, see dealer for complete program eligibility, if qual. *^*must finance thru Chrysler Capital to qualified buyers. Photos may not accurately represent vehicles. Vehicle prices/leases &amp; incentives expire '+ expiration + ' and subj. to change by manufacturer. Chrysler, Jeep, Dodge, Ram are registered trademarks of Chrysler Group, LLC. Advertised vehicle offer available on similar vehicles if sold.</p></div></div>';
  }


  vehicleArray[0] = new Vehicle(
  2017,
  'CHRYSLER',
  'Pacifica 4DR Touring-L',
  'Velvet Red',
  '4DR',
  '3.6L V6 24V VVT',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'black stow n place roof rack, uconnect 8.4, customer preferred package 2DL, customer preferred package 27L',
  'HR832247',
  'CHH2518',
  '11',
  '37,280',
  249,
  '17,521.60',
  0,
  'included',
  '2,746',
  '8,964',
  36,
  10,
  '.25',
  '2,995',
  'NELHA N.E. BC 2017 IDL Bonus Cash $3,500, 32LH1 N.E. BC Lease Cash $2,500, NECHA N.E. 2017 Bonus Cash, 44CJ3C Pacifica Lease Cash Coupon $500',
  'http://pictures.dealer.com/r/ramseycdjcllc/0362/20bad13e7fc5c5eb5855e9a54b5402f3x.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Chrysler/2017-Chrysler-Pacifica-ef3caab60a0e0a6b40690100d7f12418.htm',
  '',
  '');

  vehicleArray[1] = new Vehicle(
  2018,
  'JEEP',
  'Compass 4WD Latitude',
  'Jazz Blue',
  '4DR',
  '2.4L I4 M-Air',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'customer preferred package 2DJ, customer preferred package 27J',
  'JT168209',
  'CHJ0501',
  '15',
  '26,415',
  139,
  '19,360.80',
  0,
  'included',
  '2,856',
  '3,336',
  24,
  10,
  '.25',
  '2,995',
  'NELJA N.E. BC 2018 IDL Bonus Cash $2,250, NECJA N.E. 2018 Bonus Cash $500',
  'http://pictures.dealer.com/r/ramseycdjcllc/0205/43cbdadf227d7e409d063b5ab91e7e98x.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Jeep/2018-Jeep-Compass-9fb888e00a0e0ae70e749f9f65e7bf7e.htm',
  '',
  '');

  vehicleArray[2] = new Vehicle(
  2018,
  'JEEP',
  'Cherokee 4WD Latitude',
  'billet silver',
  '4DR',
  '2.4L I4 M-Air',
  '9-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'cold weather group, customer preferred package 2TD, customer preferred package 21D',
  'JD530229',
  'CHJ0342',
  '11',
  '29,875',
  '169',
  '16,730',
  0,
  'included',
  '2,825.01',
  '4,589.73',
  27,
  10,
  '.25',
  '2,995',
  '32LJ1 N.E. BC Lease Cash $2,500, 38LJB Cherokee Lease Bonus Cash $1,000',
  'http://pictures.dealer.com/r/ramseycdjcllc/1259/ae3f88f22903414c1fac508b7be8e09ex.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Jeep/2018-Jeep-Cherokee-33b1eafb0a0e0ae77246c09a5eed6def.htm',
  '',
  '.99');

  vehicleArray[3] = new Vehicle(
  2018,
  'JEEP',
  'Grand Cherokee 4WD Laredo',
  'Velvet Red',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'customer preferred package 2BE, customer preferred package 2TE',
  'JC111592',
  'CHJ0060',
  '15',
  '35,990',
  '239',
  '22,313.80',
  0,
  'included',
  '2,755.93',
  '9,323.73',
  39,
  10,
  '.25',
  '2,995',
  'NELJA N.E. BS 2018 IDL Bonus Cash $3,000, 32LJ1 N.E. BC Lease Cash $1,250',
  'http://pictures.dealer.com/r/ramseycdjcllc/0698/22a0f1af3d7b7d1e8ac16cb5ab00fc8dx.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Jeep/2018-Jeep-Grand+Cherokee-a8a1912f0a0e0ae965f9dd84144ce5fd.htm',
  '',
  '.07');

  vehicleArray[4] = new Vehicle(
  2018,
  'RAM',
  '1500 ST Quad Cab 4X4',
  'Velvet Red',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'uconnect 5.0, popular equipment group, customer preferred package 2TJ, express package 22J',
  'HS794688',
  'CHH2338',
  '15',
  '38,405',
  '169',
  '22,658.95',
  0,
  'included',
  '2,826',
  '4,563',
  27,
  10,
  '.25',
  '2,995',
  'NELHA N.E. BS 2017 IDL Bonus Cash $2,500, 32LH1 N.E. BC LEASH CASH $5,750, NECHA N.E. 2017 BONUS CASH $1,500',
  'http://pictures.dealer.com/r/ramseycdjcllc/1987/e9051c052078bc7771c61221b86ca18ex.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-78c6dc2d0a0e0a6b3b5b9d25b7b99ecb.htm',
  '',
  '');

  vehicleArray[5] = new Vehicle(
  2018,
  'DODGE',
  'Durango SXT AWD',
  'White Knuckle',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'popular equipment group, 3rd row seating group, customer preferred package 2TJ, express package 2TB',
  'JC154307',
  'CHJ0369',
  '15',
  '38,830',
  '269',
  '20,191.60',
  0,
  'included',
  '2,726',
  '9,684',
  26,
  10,
  '.25',
  '2,995',
  'NELJA N.E. BS 2018 IDL Bonus Cash $4,500, 32LJ1 N.E. BC Lease Cash $1,000, NECJA N.E. 2018 BONUS CASH $500',
  'http://pictures.dealer.com/r/ramseycdjcllc/1523/7ef8881ae067ba7c4284e2ae74614181x.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Dodge/2018-Dodge-Durango-57b51f840a0e0adf589d058cca2f7c32.htm',
  '',
  '');

  vehicleArray[6] = new Vehicle(
  2018,
  'DODGE',
  'Challenger GT',
  'Pitch Black',
  '4DR',
  '3.6L V6 VVT',
  'TorqueFlite8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'power sunroof, uconnect 4C nav with 8.4" display, customer preferred package 2DB, express package 21B',
  'JH138882',
  'CHJ0304',
  '9',
  '36,580',
  '229',
  '20,850.60',
  0,
  'included',
  '2,766',
  '8,244',
  36,
  10,
  '.25',
  '2,995',
  'NELJA N.E. BS 2018 IDL Bonus Cash $3,000, 32LJ1 N.E. BC Lease Cash $1,500',
  'http://pictures.dealer.com/r/ramseycdjcllc/1624/956c2d0ec6bebed7d7948b4e728700dax.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Dodge/2018-Dodge-Challenger-33b1d3c30a0e0ae77246c09a05986e06.htm',
  '',
  '');

  vehicleArray[7] = new Vehicle(
  2018,
  'DODGE',
  'Charger GT AWD',
  'Destroyer Grey',
  '4DR',
  '3.6L V6 VVT',
  'TorqueFlite8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'blacktop appearance group, houndstooth sport seats, customer preferred package 2DH, express package 28H',
  'JH145788',
  'CHJ0451',
  '15',
  '34,280',
  '229',
  '17,825.60',
  0,
  'included',
  '2,766',
  '8,244',
  36,
  10,
  '.25',
  '2,995',
  'NELJA N.E. BS 2018 IDL Bonus Cash $2,750, 32LJ1 N.E. BC Lease Cash $2,250',
  'http://pictures.dealer.com/r/ramseycdjcllc/0241/4351aaccd876432dcf2e71caaf1447d6x.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Dodge/2018-Dodge-Charger-7bb25d000a0e0adf589d058c54bb3c6a.htm',
  '',
  '');


  vehicleArray[8] = new Vehicle(
  2018,
  'RAM',
  'SLT CREW CAB 4X4',
  'Bright Silver',
  '4DR',
  '3.6L V6 VVT',
  '8-speed Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/mirrors,',
  'spray in bedliner, customer preferred package 2TS, express package 22S',
  'HS859112',
  'CHH2756',
  '10',
  '46,080',
  '229',
  '26,726.40',
  0,
  'included',
  '2,766',
  '6,183',
  27,
  10,
  '.25',
  '2,995',
  'NELHA N.E. BS 2017 IDL Bonus Cash $4,000, 32LH1 N.E. BC Lease Cash $6,000, NECHA N.E. 2017 Bonus Cash $1,000',
  'http://pictures.dealer.com/r/ramseycdjcllc/1909/2e8fc93cc73a520b460e6b63757bf5a4x.jpg',
  'https://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-c26108ae0a0e0ae7682674b88b459cd5.htm',
  '',
  '');

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }


});
