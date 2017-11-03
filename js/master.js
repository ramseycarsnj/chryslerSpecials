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
    document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">'+ thisCar.year + ' '+ thisCar.make + '</h3><h2 class="modelTrim">'+ thisCar.model + '</h2><img src="'+ thisCar.vehicleImage + '" alt="Chrysler vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$'+ thisCar.leasePrice + '</h1><h3 class="monthsSections">&nbsp;&nbsp;&nbsp;/MO<br>&nbsp;&nbsp;&nbsp;'+ thisCar.months + ' MOS</h3></div><h4 class="moneyDue">$'+ thisCar.totalAtInception + ' DUE AT SIGNING</h4>'+ thisCar.buyItNow + '<a href="'+ thisCar.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">'+ thisCar.doors + ', '+ thisCar.engine + ', '+ thisCar.transmission + ', a/c, p/s/ABS/winds/lks/htd mirrs, MP3, '+ thisCar.equipment + ', MSRP: $'+ thisCar.msrp + '. VIN '+ thisCar.vin + '. Stk '+ thisCar.stock + '. Lease: $'+ thisCar.moneyDown + ' down pymt. + $'+ thisCar.leasePrice + thisCar.fineprint + ' 1st mo. pymt. + $0 bank fee + $0 sec dep. + $299 doc fee = $'+ thisCar.totalAtInception + ' due at inception. Ttl. pymts: $'+ thisCar.totalPayment + '/$'+ thisCar.residual + ' purch opt. at lease end. Mi. allow: '+ thisCar.milesPerYear + 'K mi./yr. '+ thisCar.thereAfter + '¢ mi. thereafter. Lease price includes: '+ thisCar.additionalInfo + ', if qual.Prices incl. all costs to be paid by consumer except for licensing, registration and taxes. *Based on closed end lease w/primary lender approval. Lessee resp. for excess wear, tear &amp; mileage. Customers must meet all rebate qualifications. ^*†NON-Chrysler/Jeep/Dodge/Ram vehicles restrictions apply - see dealer for complete details, if qual. ^^(military) must be active or retired member of any US Military branch. Not resp. for typos.^*valid to customers leasing a Chrysler/Jeep/Dodge/Ram vehicle who lease a new eligible Chrysler/Jeep/Dodge/Ram model, see dealer for complete program eligibility, if qual. *^*must finance thru Chrysler Capital to qualified buyers. Photos may not accurately represent vehicles. Vehicle prices/leases &amp; incentives expire '+ expiration + ' and subj. to change by manufacturer. Chrysler, Jeep, Dodge, Ram are registered trademarks of Chrysler Group, LLC. Advertised vehicle offer available on similar vehicles if sold. </p></div></div>';
  }

  vehicleArray[0] = new Vehicle(
  2017,
  'CHRYSLER',
  'Pacifica RUCH 4DR Touring-L',
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
  'vehicleImages/CHH2518.png',
  'https://www.ramseychryslerjeepdodge.com/new/Chrysler/2017-Chrysler-Pacifica-ef3caab60a0e0a6b40690100d7f12418.htm',
  '',
  '');

  // vehicleArray[0] = new Vehicle(
  // 2017,
  // 'CHRYSLER',
  // 'Pacifica RUCH 4DR Touring-L',
  // 'Velvet Red',
  // '4DR',
  // '3.6L V6 24V VVT',
  // '9-speed Automatic',
  // 'abs breaks,',
  // 'power steering,',
  // 'power windows/locks/mirrors,',
  // 'black stow n place roof rack, uconnect 8.4, customer preferred package 2DL, customer preferred package 27L',
  // 'HR832247',
  // 'CHH2518',
  // '11',
  // '37,280',
  // 249,
  // '17,521.60',
  // 0,
  // 'included',
  // '2,746',
  // '8,964',
  // 36,
  // 10,
  // '.25',
  // '2,995',
  // 'NELHA N.E. BC 2017 IDL Bonus Cash $3,500, 32LH1 N.E. BC Lease Cash $2,500, NECHA N.E. 2017 Bonus Cash, 44CJ3C Pacifica Lease Cash Coupon $500',
  // 'vehicleImages/CHH2518.png',
  // 'http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-642c32cd0a0e0adf4dcd53fb1456ab8e.htm',
  // '',
  // '');



// NELHA Northeast BC 2017 IDL Bonus Cash $2500
// 32LH1 Northeast BC Lease Cash $3250
// 39CHB 2017 Military Consumer Cash $500
// NECHA Northeast 2017 Bonus Cash $250
// 38CHA 2017 Conquest Lease to Retail/Lease $1000
// 41CHZ Jeep Celebration Bonus Cash $500


// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
