class Cart{
    constructor(){
        this.cart = $('.carts');
        this.init();
    }
    init(){
        let cookie_str = $.cookie('carts')? $.cookie('carts') : '';
        let cookie_obj = this.convertStrToObj(cookie_str);
        for(let key in cookie_obj){
            let good = cookie_obj[key];
            this.cart.children('ul').append( `
            <li class=".cart_tit" data-good-id="${key}">
                <span class="check"><em>√</em></span>
                <div class="small_img"><img src="${good.src}" alt=""></div>
                <span class="name">${good.name}</span>
                <span class="price">${good.price}元</span>
                <span class="num">					
                    <a href="javascript:;" class="minus">-</a>
                    <input type="text" name="" id="" value="${good.num}" />
                    <a href="javascript:;" class="plus">+</a>
                </span>
                <span class="p_n">${good.price * good.num}元</span>
                <span class="del">x</span>
            </li>
        `)
        }
        let _this = this;
        // -
        let $minus = $('.minus');
        $minus.each(function(i,value){
            $(value).on('click',function(){
                let id = $(this).parent().parent().attr('data-good-id');
                let cookie_str = $.cookie('carts')? $.cookie('carts') : '';
                let cookie_obj = _this.convertStrToObj(cookie_str);
                if(cookie_obj[id].num > 1){
                    cookie_obj[id].num --;
                }
                $.cookie('carts',JSON.stringify(cookie_obj),{expires:5,path:'/'});
                $(this).next().val(cookie_obj[id].num);
                $(this).parent().next().text(cookie_obj[id].num * cookie_obj[id].price + '元');
            })
        })
        
        // +
        let $plus = $('.plus');
        $plus.each(function(i,value){
            $(value).on('click',function(){
                let id = $(this).parent().parent().attr('data-good-id');
                let cookie_str = $.cookie('carts')? $.cookie('carts') : '';
                let cookie_obj = _this.convertStrToObj(cookie_str);
                cookie_obj[id].num ++;
                $.cookie('carts',JSON.stringify(cookie_obj),{expires:5,path:'/'});
                $(this).prev().val(cookie_obj[id].num);
                $(this).parent().next().text(cookie_obj[id].num * cookie_obj[id].price + '元');
            })
        })
        
        // 数量框
        let $inp = $('.num inp');
        $inp.each(function(i,value){
            $(value).on('blur',function(){
                let id =$(this).parent().parent().attr('data-good-id');
                let cookie_str = $.cookie('carts')? $.cookie('carts') : '';
                let cookie_obj = _this.convertStrToObj(cookie_str);
                if(!isNaN($(this).val()) && $(this).val() > 0){
                    cookie_obj[id].num = parseInt($(this).val());
                }else{
                    cookie_obj[id].num = 1;
                }
                $.cookie('carts',JSON.stringify(cookie_obj),{expires:5,path:'/'});
                $(this).val(cookie_obj[id].num);
                $(this).parent().next().text(cookie_obj[id].num * cookie_obj[id].price + '元');
            })
        })
        
        // 删除
        let $del = $('.del');
        $del.each(function(i,value){
            $(value).on('click',function(){
                let id = $(this).parent().attr('data-good-id');
                let cookie_str = $.cookie('carts')? $.cookie('carts') : '';
                let cookie_obj = _this.convertStrToObj(cookie_str);
                delete cookie_obj[id];
                $.cookie('carts',JSON.stringify(cookie_obj),{expires:5,path:'/'});
                $(this).parent().remove();
            })
        })
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Cart();