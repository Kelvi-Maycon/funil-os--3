import { o as startOfDay, s as normalizeDates, u as constructFrom } from "./format-CrKBELYm.js";
function constructNow(date) {
	return constructFrom(date, Date.now());
}
function isSameDay(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isToday(date, options) {
	return isSameDay(constructFrom(options?.in || date, date), constructNow(options?.in || date));
}
export { constructNow as n, isToday as t };

//# sourceMappingURL=isToday-BY6J9m12.js.map