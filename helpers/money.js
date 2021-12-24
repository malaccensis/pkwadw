const money = (number = 0, locale = null, options = null) => {
	if (locale && options) {
		return new Intl.NumberFormat(locale, options).format(number);
	} else {
		return new Intl.NumberFormat().format(number);
	}
};

export default money;