function(doc) {
	if (doc.uap && doc.idsite && doc.date ) {
		var ar = doc.date.split("-");
		if ( ar.length == 3 ){
			emit([ doc.idsite, Number(ar[0]), Number(ar[1]), Number(ar[2]), doc.uap], 1);
		}
	}
};