function t(t){var o=Math.floor(t/1e3/60).toString().padStart(2,"0"),r=(t/1e3%60).toFixed(0).toString().padStart(2,"0");return"".concat(o,":").concat(r)}export{t as formatDuration};
