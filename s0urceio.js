var we = ["root","bit","host","remove","url","intel","user","upload","stat","send","system","anon","temp","loop","pass","http","global","call","status","port","socket","domain","ping","dir","right","buffer","data","delete","reset","file","num","add","com","info","left","point","get","count","xml","ghost","type","handle","log","init","event","join","list","add","val","signal","net","set","write","cookies","part","load","bytes","emit","size","client","key","poly"]
var wm = []
var wh = []
var keytool = document.getElementById("tool-type-word")

keytool.addEventListener("keydown",function(e){
	if (e.code == "KeyC") {
		e.preventDefault()
		var keyimage = document.getElementsByClassName("tool-type-img")[0]
		var keydiff = keyimage.src.slice(33,34)
		var keynum = keyimage.src.slice(35)
		if (keydiff == "e") {
			keytool.value = we[keynum]
			console.log("easy - " + we[keynum])
		}
		if (keydiff == "m") {
			keytool.value = wm[keynum]
			console.log("medium - " + wm[keynum])
		}
		if (keydiff == "h") {
			keytool.value = wh[keynum]
			console.log("hard - " + wh[keynum])
		}
	}
})
