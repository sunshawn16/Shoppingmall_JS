


describe('should get item secondHalf when have ID',function(){
    it('test getSecondHalfById',function(){
        var id='1';
        var exp=1;
        expect(exp).toEqual(getSecondHalfById(id));
    });
});

describe('should get item price when have ID',function(){
    it('test getPriceById',function(){
        var id='2';
        //basicList=[{"id":2,"price":40}];

        expect(10).toEqual(getPriceById(id));
    });
});

describe('should get item discount price and item subtotoal when have discount',function(){
    it('test discount',function(){
        var cartList=[
            {
                "id": 1,
                "price": 40,
                "percentage": 90,
                "num": 2
            }
        ]
        discount(cartList);

        expect(30).toEqual(cartList[0].disprice);
        expect(60).toEqual(cartList[0].itemSum);
    });
});

describe('should get item subtotoal when have secondHalfPromotion',function(){
    it('test secondHalfPromotion',function(){
        var cartList=[
            {
                "id": 1,
                "disprice": 40,
                "secondHalf":1,
                "num": 2
            }
        ];
        secondHalfPromotion(cartList);

        expect(60).toEqual(cartList[0].itemSum);
    });
});

describe('should initial cart when have cartList',function(){
    it('test initCartList',function(){
        var cartList=[
            {
                "id": 1,
                "num":2
            }
        ];
       // basicList=[{"id":1,"price":90}];
        initCartList(cartList);
        expect(40).toEqual(cartList[0].price);
        expect(40).toEqual(cartList[0].disprice);
        expect(80).toEqual(cartList[0].itemSum);
    });
});


