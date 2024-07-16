"use strict";exports.formatDuration=function(t){var r=Math.floor(t/1e3/60).toString().padStart(2,"0"),o=(t/1e3%60).toFixed(0).toString().padStart(2,"0");return"".concat(r,":").concat(o)};
