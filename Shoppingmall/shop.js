
var basicList=[{"id":"ITEM000001","price":40},{"id":"ITEM000002","price":10},{"id":"ITEM000003","price":50},{"id":"ITEM000004","price":20},{"id":"ITEM000005","price":60}];

var secondHalfList=[{"id":"ITEM000001","secondHalf":1},{"id":"ITEM000003","secondHalf":1}];
var discountList=[{"id":"ITEM000001","percentage":75},{"id":"ITEM000005","percentage":90}];


function checkOut()
{

    var cartList = [];
    var inputList = document.getElementsByName("ITEM");//根据名字获取<input>标签对象集合
    var selList = document.getElementsByName("buyNum");//根据名字获取<select>标签集合
    for(var i = 0; i < 5; i++){
        if(inputList[i].checked){//被选中的
            var num = selList[i].value;
            var id = inputList[i].value;
            cartList.push({
                num:num,
                id:id
            });
        }
    }

    for(var i in cartList){
        var price=getPriceById(cartList[i].id);
       // var percentage=getPercentageById(cartList[i].id);
       // var secondHalf=getSecondHalfById(cartList[i].id);
       // document.writeln("percentage:"+percentage+"  secondHalf: "+secondHalf+"<br/>");
        cartList[i].price=price;
        //cartList[i].percentage=percentage;
        //cartList[i].secondHalf=secondHalf;
        cartList[i].itemSum=cartList[i].price*cartList[i].num;
        cartList[i].disprice=price;
    }
    discount(cartList);
    secondHalfPromotion(cartList);
    disPlay(cartList);

}

function disPlay(cartList){
    var origCost = 0;
    var disCost = 0;
    document.writeln("CartList: |  ID  |  num |  price |disP| subTotoal "+"<br/>");
    for(var i in cartList) {
        origCost=origCost+cartList[i].price*cartList[i].num;
        document.writeln("CartList:item"+cartList[i].id + "  " + cartList[i].num+ "  "+cartList[i].price +" "+cartList[i].disprice+" "+ cartList[i].itemSum+"   <br/>");
        disCost =disCost +cartList[i].itemSum;
    }
    document.writeln("Total cost | befor promotion| U saved"+"<br/>")
    var gap= origCost- disCost;
    document.writeln(disCost+" "+origCost+" "+gap+"<br/>");

}
function secondHalfPromotion(cartList) {
    for (var i in cartList) {
        var secondHalf=getSecondHalfById(cartList[i].id);
        if (secondHalf== 1) {
            //  document.writeln(cartList[i].ID + "   " + cartList[i].number + " " + cartList[i].disprice + "<br/>");
            var num = cartList[i].num / 2;
            // document.writeln("***"+Math.ceil(num) + "   " + (cartList[i].disprice / 2) + "<br/>");
            cartList[i].itemSum = Math.ceil(num) * cartList[i].disprice + Math.floor(num) * (cartList[i].disprice / 2);
            // document.writeln(cartList[i].ID + "   " + cartList[i].disCost+ "<br/>");
        }
    }
}
function discount(cartList)
{
    for (var i in cartList) {
        var percentage=getPercentageById(cartList[i].id);
        cartList[i].disprice = cartList[i].price * percentage / 100;
        cartList[i].itemSum= cartList[i].disprice*cartList[i].num;
    }
}

function getPriceById(id){
    for(var i in basicList){
        if(id==basicList[i].id){
            return basicList[i].price;
        }
    }
    return 0;
}

function getPercentageById(id){
    for(var i in discountList){
        if(id==discountList[i].id){
            return discountList[i].percentage ;
        }
    }
    return 100;
}

function getSecondHalfById(id){
    for(var i in secondHalfList){
        if(id==secondHalfList[i].id){
            return secondHalfList[i].secondHalf;
        }
    }
    return 0;
}