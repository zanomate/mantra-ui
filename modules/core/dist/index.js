Object.defineProperty(exports,"t",{value:!0});exports.parseMultiValueAttribute=function(n){return void 0===n&&(n=""),n?n.split(/\s/).filter((function(n){return!!n})).map((function(n){return n.trim()})):[]},exports.parseStyleAttribute=function(n){return n?n.split(";").filter((function(n){return!!n})).reduce((function(n,r){var t=r.split(":"),u=t[0],o=t[1],e=void 0===o?"":o,i=u.trim(),c=e.trim();return i&&(n[i]=c),n}),{}):{}},exports.stringifyMultiValueAttribute=function(n){return void 0===n&&(n=[]),n?n.map((function(n){return n.trim()})).filter((function(n){return!!n})).join(" "):""},exports.stringifyStyleAttribute=function(n){return void 0===n&&(n={}),n?Object.keys(n).filter((function(r){return!!r&&void 0!==n[r]&&null!==n[r]&&""!==n[r]})).map((function(r){var t=r.trim(),u=n[r];return t+=":"+String(u).trim()})).join(";"):""};