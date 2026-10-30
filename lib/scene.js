export const SEASONS = ["spring", "summer", "fall", "winter"];
export const TIMES = ["dawn", "day", "dusk", "night"];

// Northern-hemisphere seasons by month.
export function seasonFor(date = new Date()) {
  const m = date.getMonth();
  if (m === 11 || m <= 1) return "winter";
  if (m <= 4) return "spring";
  if (m <= 7) return "summer";
  return "fall";
}

export function timeFor(date = new Date()) {
  const h = date.getHours();
  if (h >= 5 && h < 8) return "dawn";
  if (h >= 8 && h < 17) return "day";
  if (h >= 17 && h < 19) return "dusk";
  return "night";
}

// Runs before paint so the first frame already has the right sky.
export const sceneScript = `(function(){try{var d=new Date(),m=d.getMonth(),h=d.getHours();
var s=(m===11||m<=1)?'winter':(m<=4)?'spring':(m<=7)?'summer':'fall';
var t=(h>=5&&h<8)?'dawn':(h>=8&&h<17)?'day':(h>=17&&h<19)?'dusk':'night';
var e=document.documentElement;e.dataset.season=s;e.dataset.time=t;}catch(_){}})();`;

export const SEASON_LABEL = { spring: "Spring", summer: "Summer", fall: "Fall", winter: "Winter" };
export const TIME_LABEL = { dawn: "Dawn", day: "Day", dusk: "Dusk", night: "Night" };
export const SEASON_ICON = { spring: "🌸", summer: "☀️", fall: "🍂", winter: "❄️" };
export const TIME_ICON = { dawn: "🌅", day: "🌤️", dusk: "🌇", night: "🌙" };
