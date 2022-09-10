'use strict';

(() => {
  const base = {
    lv: ["Lv.", "Lv."],
    exp: ["Exp.", "Exp."],
    ATK: ["\u653B\u51FB", "ATK"],
    DEF: ["\u9632\u5FA1", "DEF"],
    MTK: ["\u9B54\u653B", "MATK"],
    MDF: ["\u9B54\u9632", "MDEF"],
    SPD: ["\u901F\u5EA6", "SPD"],
    STR: ["\u529B\u91CF", "Str."],
    CON: ["\u4F53\u8D28", "Con."],
    DEX: ["\u654F\u6377", "Dex."],
    WIL: ["\u610F\u5FD7", "Wil."],
    INT: ["\u667A\u529B", "Int."],
    PSY: ["\u7075\u611F", "Psy."],
    ALR: ["\u9B45\u529B", "Lur."],
    LUK: ["\u5E78\u8FD0", "Luc."],
    hot: ["\u8010\u70ED", "Hot"],
    cold: ["\u8010\u51B7", "Cold"]
  };
  const wearcategory = {
    none: ["\u65E0", "none"],
    hat: ["\u5E3D\u5B50", "hat"],
    coat: ["\u5916\u5957", "coat"],
    top: ["\u4E0A\u8863", "top"],
    bottom: ["\u88E4\u88D9", "bottom"],
    underwear: ["\u5185\u8863", "under upper"],
    underpants: ["\u5185\u88E4", "under bottoms"],
    scarf: ["\u56F4\u5DFE", "scarf"],
    suits: ["\u5957\u88C5", "suits"],
    glove: ["\u624B\u5957", "glove"],
    earing: ["\u8033\u9970", "earing"],
    backpack: ["\u80CC\u5305", "backpack"],
    facial: ["\u9762\u9970", "facial accessory"],
    socks: ["\u889C\u5B50", "socks"],
    shoes: ["\u978B\u5B50", "shoes"],
    necklace: ["\u9879\u94FE", "necklace"],
    accessory: ["\u88C5\u9970", "body accessory"],
    gears: ["\u88C5\u5907", "gears"]
  };
  const color = {};
  const dayrecord = {
    \u9AD8\u6F6E: ["\u9AD8\u6F6E", "orgasm"],
    \u5C04\u7CBE: ["\u5C04\u7CBE", "ejaculation"],
    \u55B7\u4E73: ["\u55B7\u4E73", "lactation"],
    A\u9AD8\u6F6E: ["A\u9AD8\u6F6E", "orgasm A"],
    M\u9AD8\u6F6E: ["M\u9AD8\u6F6E", "orgasm M"],
    B\u9AD8\u6F6E: ["B\u9AD8\u6F6E", "orgasm B"],
    C\u9AD8\u6F6E: ["C\u9AD8\u6F6E", "orgasm C"],
    V\u9AD8\u6F6E: ["V\u9AD8\u6F6E", "orgasm V"],
    U\u9AD8\u6F6E: ["U\u9AD8\u6F6E", "orgasm U"],
    \u6D74\u7CBE: ["\u6D74\u7CBE", "creamy pie"],
    \u996E\u7CBE: ["\u996E\u7CBE", "swallowed"],
    \u809B\u5185\u5C04: ["\u809B\u5185\u5C04", "cum in anal"],
    \u5185\u5C04: ["\u5185\u5C04", "cum inside"],
    \u4EA7\u5375: ["\u4EA7\u5375", "spawn"]
  };
  const degree = {
    \u7EAF\u6D01: ["\u7EAF\u6D01", "Innocence"],
    \u9732\u51FA: ["\u9732\u51FA", "Exhibition"],
    \u6EE5\u4EA4: ["\u6EE5\u4EA4", "Promiscuity"],
    \u53D7\u8650: ["\u53D7\u8650", "Masochist"],
    \u53D7\u7F1A: ["\u53D7\u7F1A", "Depender"],
    \u65BD\u8650: ["\u65BD\u8650", "Sadist"],
    \u987A\u4ECE: ["\u987A\u4ECE", "Submissive"],
    \u517D\u4EA4: ["\u517D\u4EA4", "Beastality"],
    \u836F\u9690: ["\u836F\u9690", "DrugAddiction"],
    \u6027\u763E: ["\u6027\u763E", "SexAddiction"],
    \u652F\u914D: ["\u652F\u914D", "Domination"],
    \u675F\u7F1A: ["\u675F\u7F1A", "Holder"],
    \u8FFD\u8E2A: ["\u8FFD\u8E2A", "Haunt"]
  };
  const element = {
    lumen: ["\u5149", "Lumen"],
    ark: ["\u6697", "Ark"],
    ions: ["\u6C34", "Ions"],
    flame: ["\u706B", "Flame"],
    electron: ["\u7535", "Electron"],
    vitae: ["\u751F\u547D", "Vitae"],
    terra: ["\u571F", "Terra"]
  };
  const exp = {
    \u6253\u5DE5: ["\u6253\u5DE5", "work"],
    \u4E0B\u53A8: ["\u4E0B\u53A8", "cook"],
    \u6E05\u626B: ["\u6E05\u626B", "clean"],
    \u5531\u6B4C: ["\u5531\u6B4C", "sing"],
    \u6F14\u620F: ["\u6F14\u620F", "act movies"],
    \u821E\u53F0: ["\u821E\u53F0", "live stage"],
    \u76F4\u64AD: ["\u76F4\u64AD", "live stream"],
    \u4EA4\u6D89: ["\u4EA4\u6D89", "social"],
    \u9500\u552E: ["\u9500\u552E", "sales"],
    \u63A2\u7D22: ["\u63A2\u7D22", "explore"],
    \u72E9\u730E: ["\u72E9\u730E", "hunt"],
    \u9493\u9C7C: ["\u9493\u9C7C", "fishing"],
    \u6218\u6597: ["\u6218\u6597", "combat"],
    \u6218\u8D25: ["\u6218\u8D25", "defeat"],
    \u8BF1\u60D1: ["\u8BF1\u60D1", "seduce"],
    \u88AB\u8BF1\u60D1: ["\u88AB\u8BF1\u60D1", "seduced"],
    \u5C04\u7CBE: ["\u5C04\u7CBE", "cum"],
    \u9AD8\u6F6E: ["\u9AD8\u6F6E", "orgasm"],
    M\u9AD8\u6F6E: ["M\u9AD8\u6F6E", "orgasm M"],
    B\u9AD8\u6F6E: ["B\u9AD8\u6F6E", "orgasm B"],
    C\u9AD8\u6F6E: ["C\u9AD8\u6F6E", "orgasm C"],
    U\u9AD8\u6F6E: ["U\u9AD8\u6F6E", "orgasm U"],
    V\u9AD8\u6F6E: ["V\u9AD8\u6F6E", "orgasm V"],
    A\u9AD8\u6F6E: ["A\u9AD8\u6F6E", "orgasm A"],
    \u591A\u91CD\u9AD8\u6F6E: ["\u591A\u91CD\u9AD8\u6F6E", "multip orgasm"],
    \u81EA\u6170: ["\u81EA\u6170", "masturbation"],
    \u53E3\u4EA4: ["\u53E3\u4EA4", "oral sex"],
    \u6027\u4EA4: ["\u6027\u4EA4", "vagina sex"],
    \u809B\u4EA4: ["\u809B\u4EA4", "anal sex"],
    \u63D2\u5165: ["\u63D2\u5165", "penetrate"],
    \u55B7\u4E73: ["\u55B7\u4E73", "lactation"],
    \u88AB\u7325\u7410: ["\u88AB\u7325\u7410", "molested"],
    \u88AB\u7720\u5978: ["\u88AB\u7720\u5978", "raped when sleep"],
    \u88AB\u8FF7\u5978: ["\u88AB\u8FF7\u5978", "raped by drug"],
    \u88AB\u5F3A\u5978: ["\u88AB\u5F3A\u5978", "be raped"],
    \u88AB\u8F6E\u5978: ["\u88AB\u8F6E\u5978", "gang raped"],
    \u88AB\u517D\u5978: ["\u88AB\u517D\u5978", "raped by beast"],
    \u88AB\u89E6\u624B\u5978: ["\u88AB\u89E6\u624B\u5978", "raped by tentacles"],
    \u517D\u4EA4: ["\u517D\u4EA4", "beastality"],
    \u89E6\u624B: ["\u89E6\u624B", "tantacles"],
    \u53F2\u83B1\u59C6: ["\u53F2\u83B1\u59C6", "slime"],
    \u6000\u5B55: ["\u6000\u5B55", "pregnant"],
    A\u6000\u5B55: ["A\u6000\u5B55", "anal pregnant"],
    \u5206\u5A29: ["\u5206\u5A29", "give birth"],
    \u5C3F\u9053\u5F00\u53D1: ["\u5C3F\u9053\u5F00\u53D1", "urethral develop"],
    \u9634\u9053\u6269\u5F20: ["\u9634\u9053\u6269\u5F20", "vagina stretch"],
    \u809B\u95E8\u6269\u5F20: ["\u809B\u95E8\u6269\u5F20", "anal stretch"],
    \u4EA7\u5375: ["\u4EA7\u5375", "spawn egg"],
    \u5BC4\u751F: ["\u5BC4\u751F", "parasitic"],
    \u76D1\u7981: ["\u76D1\u7981", "imprisoned"],
    SM: ["SM", "SM trained"]
  };
  const marks = {
    \u75DB\u82E6: ["\u75DB\u82E6", "Pain"],
    \u5FEB\u4E50: ["\u5FEB\u4E50", "Ecstasy"],
    \u6050\u60E7: ["\u6050\u60E7", "Fear"],
    \u803B\u8FB1: ["\u803B\u8FB1", "Stigma"]
  };
  const skill = {
    \u683C\u6597: ["\u683C\u6597", "Combat"],
    \u5065\u8EAB: ["\u5065\u8EAB", "Fitness"],
    \u8DD1\u6B65: ["\u8DD1\u6B65", "Running"],
    \u51A5\u60F3: ["\u51A5\u60F3", "Meditation"],
    \u79D1\u5B66: ["\u79D1\u5B66", "Science"],
    \u521B\u4F5C: ["\u521B\u4F5C", "Creativity"],
    \u8868\u6F14: ["\u8868\u6F14", "Peformance"],
    \u5F02\u80FD: ["\u5F02\u80FD", "Psychic Power"],
    \u5965\u672F: ["\u5965\u672F", "Arcane Magic"],
    \u79D8\u672F: ["\u79D8\u672F", "Classic Magic"],
    \u5B66\u8BC6: ["\u5B66\u8BC6", "Knowlogic"],
    \u6027\u6280\u5DE7: ["\u6027\u6280\u5DE7", "Sex Techniques"],
    \u6027\u62B5\u6297: ["\u6027\u62B5\u6297", "Sex resistance"],
    \u53E3\u6280: ["\u53E3\u6280", "Mouth Skill"],
    \u624B\u6280: ["\u624B\u6280", "Hand Skill"],
    \u811A\u6280: ["\u811A\u6280", "Foot Skill"],
    \u8170\u6280: ["\u8170\u6280", "Penis Skill"],
    \u5F00\u9501: ["\u5F00\u9501", "unlock"],
    \u9ED1\u5BA2: ["\u9ED1\u5BA2", "hacker"],
    \u6F5C\u884C: ["\u6F5C\u884C", "stalk"],
    \u641C\u7D22: ["\u641C\u7D22", "explore"]
  };
  const weartag = {};
  const hairstyle = {};
  const races = {
    alsha: ["\u9633\u7075", "Alsha"],
    catvinx: ["\u72D0\u732B", "Catvinx"],
    dracons: ["\u6676\u9F99", "Dracons"],
    havan: ["\u6D77\u65CF", "Havans"],
    human: ["\u65B0\u4EBA\u7C7B", "Human"],
    lepios: ["\u9F20\u5154", "Lepios"],
    linlog: ["\u7075\u9E7F", "Linlog"],
    noctar: ["\u591C\u7075", "Noctar"],
    pequitis: ["\u89D2\u9A6C", "Pequitis"],
    sckyrios: ["\u72FC\u4EBA", "Sckyrios"],
    ulvs: ["\u7075\u86C7", "Ulvs"],
    voeli: ["\u7FBD\u65CF", "Voeli"]
  };
  const major = [
    ["\u65E0", "none"],
    ["\u6587\u827A\u521B\u4F5C", "Creativity"],
    ["\u7269\u7406\u79D1\u5B66", "Science"],
    ["\u81EA\u7136\u79D1\u5B66", "Natural"],
    ["\u751F\u7406\u79D1\u5B66", "Medical"],
    ["\u97F3\u4E50\u8868\u6F14", "Performance"],
    ["\u8FD0\u52A8\u683C\u6597", "Physical"]
  ];
  const gender = {
    f: ["\u5973", "female"],
    i: ["\u53CC", "inter"],
    m: ["\u7537", "male"],
    n: ["\u65E0", "none"]
  };
  $.getJSON("json/language/hairs.json", (data) => {
    if (data) {
      console.log("loading the language file from hairs.json");
      for (let i in data) {
        hairstyle[i] = data[i];
      }
    }
  });
  $.getJSON("json/language/colors.json", (data) => {
    if (data) {
      console.log("loading the language file from colors.json");
      for (let i in data) {
        color[i] = data[i];
      }
    }
  });
  $.getJSON("json/language/tags.json", (data) => {
    if (data) {
      console.log("loading the language file from tags.json");
      for (let i in data) {
        weartag[i] = data[i];
      }
    }
  });
  Object.defineProperty(window, "L", {
    value: {
      base: Object.freeze(base),
      wearcategory,
      color,
      dayrecord,
      degree: Object.freeze(degree),
      element: Object.freeze(element),
      exp,
      marks,
      skill,
      weartag,
      hairstyle,
      races: Object.freeze(races),
      major: Object.freeze(major),
      gender: Object.freeze(gender)
    }
  });
})();
