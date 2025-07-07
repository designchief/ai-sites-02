import $ from 'jquery';
import whatInput from 'what-input';

import date from 'date-and-time';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import './lib/custom';

$(document).foundation();


let now = new Date();
document.getElementById('time').innerHTML = date.format(now, 'h:mm A');
