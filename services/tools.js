

function filterNull(data){
	var temp={}
	Object.keys(data).forEach((key)=>{
		if (data[key] != -1){
			temp[key] = data[key]
		}
	})
	return temp
}
function list2code(data){
	let temp=[]
	data.forEach((item)=>{
		if (item.isChecked == true){
			temp.push(item.id)
		}
	})
	return temp
}
function list2string(data){
	let temp =[]
	data.forEach((item)=>{
		temp.push(item.label)
	})
	return temp.join('+')
}

module.exports = {
  filterNull,
  list2code,
  list2string
}