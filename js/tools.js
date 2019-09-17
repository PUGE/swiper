
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
}

function animate(obj, styleList, fn) {
	// console.log(styleList)
	setTimeout(() => {
		for(var styleItem in styleList) {
			var value = styleList[styleItem]
			if(styleItem == 'zIndex'){
				obj.style[styleItem] = styleList[styleItem];
			} else if(styleItem=='opacity'){
				obj.style[styleItem]=value/100;
				obj.style.filter='alpha(opacity='+value+')';
			} else if (styleItem == 'left') {
				obj.style[styleItem] = styleList[styleItem];
			} else if (styleItem == 'right') {
				obj.style[styleItem] = styleList[styleItem];
			} else if (styleItem == 'width') {
				obj.style[styleItem] = styleList[styleItem];
			} else if (styleItem != 'class') {
				// console.log(value)
				obj.style[styleItem] = value + 'px';
			}
		}
		obj.setAttribute("class", styleList.class)
		if (fn) {
			fn();
		}
	}, 10)
}
