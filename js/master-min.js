$(document).ready(function() {
    const e = "8/31/17";
    const s = [];
    function a(e, s, a, r, t, i, o, n, l, c, h, d, m, p, C, u, w, b, y, g, f, H, E, k, v, P, A, L, N, R) {
        this.year = e;
        this.make = s;
        this.model = a;
        this.color = r;
        this.doors = t;
        this.engine = i;
        this.transmission = o;
        this.brakes = n;
        this.steering = l;
        this.power = c;
        this.equipment = h;
        this.vin = d;
        this.stock = m;
        this.miles = p;
        this.msrp = C;
        this.leasePrice = u;
        this.residual = w;
        this.security = b;
        this.bankFee = y;
        this.moneyDown = g;
        this.totalPayment = f;
        this.months = H;
        this.milesPerYear = E;
        this.thereAfter = k;
        this.totalAtInception = v;
        this.additionalInfo = P;
        this.vehicleImage = A;
        this.vehicleUrl = L;
        this.buyItNow = N;
        this.fineprint = R;
    }
    function r(s) {
        document.body.innerHTML += '<div class="specialContainer"><div class="specialContent leftContent"><h3 class="yearMake">' + s.year + " " + s.make + '</h3><h2 class="modelTrim">' + s.model + '</h2><img src="' + s.vehicleImage + '" alt="Chrysler vehicle image" class="vehicleImage"></div><div class="specialContent rightContent"><h3 class="leaseHead">Lease this vehicle for:</h3><div class="leaseQuoteSection"><h1 class="lease">$' + s.leasePrice + '</h1><h3 class="monthsSections">&nbsp;&nbsp;&nbsp;/MO<br>&nbsp;&nbsp;&nbsp;' + s.months + ' MOS</h3></div><h4 class="moneyDue">$' + s.totalAtInception + " DUE AT SIGNING</h4>" + s.buyItNow + '<a href="' + s.vehicleUrl + '" class="linkButton" target="_blank">VIEW VEHICLE</a><p class="disclaimer">' + s.doors + ", " + s.engine + ", " + s.transmission + ", a/c, p/s/ABS/winds/lks/htd mirrs, MP3, " + s.equipment + ", MSRP: $" + s.msrp + ". VIN " + s.vin + ". Stk " + s.stock + ". Lease: $" + s.moneyDown + " down pymt. + $" + s.leasePrice + s.fineprint + " 1st mo. pymt. + $0 bank fee + $0 sec dep. + $299 doc fee = $" + s.totalAtInception + " due at inception. Ttl. pymts: $" + s.totalPayment + "/$" + s.residual + " purch opt. at lease end. Mi. allow: " + s.milesPerYear + "K mi./yr. " + s.thereAfter + "¢ mi. thereafter. Lease price includes: " + s.additionalInfo + ", if qual.Prices incl. all costs to be paid by consumer except for licensing, registration and taxes. *Based on closed end lease w/primary lender approval. Lessee resp. for excess wear, tear &amp; mileage. Customers must meet all rebate qualifications. ^*†NON-Chrysler/Jeep/Dodge/Ram vehicles restrictions apply - see dealer for complete details, if qual. ^^(military) must be active or retired member of any US Military branch. Not resp. for typos.^*valid to customers leasing a Chrysler/Jeep/Dodge/Ram vehicle who lease a new eligible Chrysler/Jeep/Dodge/Ram model, see dealer for complete program eligibility, if qual. *^*must finance thru Chrysler Capital to qualified buyers. Photos may not accurately represent vehicles. Vehicle prices/leases &amp; incentives expire " + e + " and subj. to change by manufacturer. Chrysler, Jeep, Dodge, Ram are registered trademarks of Chrysler Group, LLC.</p></div></div>";
    }
    s[0] = new a(2017, "RAM", "1500 ST QUAD CAB 4x4", "Flame Red Clear Coat", "4DR", "3.6L V6 24V VVT", "8-speed Automatic", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "Uconnect 5.0, Customer Preferred Package 2TJ, Express Package 22J", "HS794689", "CHH2315", "20", "38,405", 99, "21,506.80", 0, "included", "2,895.24", "2,995", 24, 10, ".25", "2,995", "$4,250 N.E. Lease Cash 32LH1, $500 N.E. Chrysler Capital 2017 Bonus NECH5, $1500 N.E. 2017 Bonus Cash NECHA, $1,000 2017 Conquest Lease to Retail/Lease 38CHA1", "vehicleImages/CHH2315.jpg", "http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-78c6dfc90a0e0a6b3b5b9d254a3cd370.htm", "", ".76");
    s[1] = new a(2017, "JEEP", "GRAND CHEROKEE LAREDO 4x4", "Velvet Red Pearl", "4DR", "3.6L V6 24V VVT", "8-speed Automatic", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "Customer Preferred Package 2TE, Custoemr Preferred Package 23E", "HC912796", "CHH2321", "12", "35,790", 149, "21,189.80", 0, "included", "2,846", "2,995", 24, 10, ".25", "2,995", "$2,750 N.E. Lease Cash 32LH1, $500 2017 Military Consumer Cash 39CHB, $250 N.E. 2017 Bonus Cash NECHA, $1000 2017 Conquest Lease to Retail/Lease 38CHA1", "vehicleImages/CHH2321.jpg", "http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-78c6dfc90a0e0a6b3b5b9d254a3cd370.htm", "", "");
    s[2] = new a(2017, "JEEP", "CHEROKEE LATITUDE 4x4", "Bright White", "4DR", "2.4l I4 PZEV M-Air Engine", "9-speed Automatic", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "Customer Preferred Package 2TJ, Custoemr Preferred Package 21J", "HW579690", "CHH1105", "17", "30,385", 149, "16,711.75", 0, "included", "2,845", "2,995", 24, 10, ".25", "2,995", "$2,250 N.E. BC Lease Cash 32LH1, $1000 Chrokee Lease Bonus Cash 38LHB, $500 2017 Military Consumer Cash 39CHB, $1000 N.E. Jeep Celebration Bonus Cash NECHY", "vehicleImages/CHH1105.jpg", "http://www.ramseychryslerjeepdodge.com/new/Jeep/2017-Jeep-Grand+Cherokee-78c6dfc90a0e0a6b3b5b9d254a3cd370.htm", "", ".62");
    s[3] = new a(2017, "RAM", "1500 SLT CREW CAB 4x4", "Red Pearl", "4DR", "5.7l HEMI MDSS VVT", "8-speed Automatic", "abs breaks,", "power steering,", "power windows/locks/mirrors,", "Heated Seats and Wheel group, Katzkin leatehr seats by Mopar, front and rear rubber floor mats, Tri-fold Tonneau cover, Anti spin differential Rear Axle, Rear window defroster, Power sunroof, wheel to wheel side steps, Uconnect 8.4 NAV, 9 alpine speakers with subwoofer, spray in bedliner, Customer Preferred Package 2TS, Customer Preferred Package 26S", "HS554021", "CHH0432", "16", "54,070", 269, "29,738.50", 0, "included", "2,726", "2,995", 24, 10, ".25", "2,995", "$5250 N.E. BC Lease Cash 32LH1, $500 N.E. Chrysler Capital 2017 Bonus NECH5, $500 2017 Military Consumer Cash 39CHB, $750 N.E. 2017 Bonus Cash NECHA, $750 NEBC Select Inventory Bonus Cash NECH2C, $1000 2017 Conquest Lease to Retail/Lease 38CHA1", "vehicleImages/CHH0432.jpg", "http://www.ramseychryslerjeepdodge.com/new/Ram/2017-Ram-1500-8b6b960c0a0e0ae854d002e50be52bbc.htm", "", "");
    for (var t = 0; t < s.length; t++) {
        r(s[t]);
    }
});