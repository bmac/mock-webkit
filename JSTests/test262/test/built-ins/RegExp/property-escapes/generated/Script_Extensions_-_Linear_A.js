// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Linear_A`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010107, 0x010133],
    [0x010600, 0x010736],
    [0x010740, 0x010755],
    [0x010760, 0x010767]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Linear_A}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Linear_A}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Lina}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lina}"
);
testPropertyEscapes(
  /^\p{scx=Linear_A}+$/u,
  matchSymbols,
  "\\p{scx=Linear_A}"
);
testPropertyEscapes(
  /^\p{scx=Lina}+$/u,
  matchSymbols,
  "\\p{scx=Lina}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010106],
    [0x010134, 0x0105FF],
    [0x010737, 0x01073F],
    [0x010756, 0x01075F],
    [0x010768, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Linear_A}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Linear_A}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Lina}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lina}"
);
testPropertyEscapes(
  /^\P{scx=Linear_A}+$/u,
  nonMatchSymbols,
  "\\P{scx=Linear_A}"
);
testPropertyEscapes(
  /^\P{scx=Lina}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lina}"
);
