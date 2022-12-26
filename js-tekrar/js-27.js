//her defe elementin birin cixib o birilerini vursun birine;

var a = [2,3,1,5];
var hasilarr = [];

for(var i = 0; i < a.length; i++) {
var hasil = 1;
	for(var j = 0; j < a.length; j++) {
		if(i != j) {
			hasil*=a[j];
		}

	}
	hasilarr.push(hasil)
}

		console.log(hasilarr);
