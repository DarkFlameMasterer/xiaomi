class Slider{
    constructor(){
        this.big_box = $('.slider_pro');
        this.big_img = $('.big_box img');
        this.li = $('.point_list li ');
        this.lt_btn = $('.slider_lt');
        this.rt_btn = $('.slider_rt');
        this.num = this.big_img.length;
        this.index = 0;
        this.timer = null;
        this.side_top = $('.side_top');
        this.addEvent();
        this.slider();
        this.time();
        // 二级菜单

    }
    addEvent(){
        let _this = this;
        $(window).on('scroll',function(){
            let scroll_top = Math.floor(document.documentElement.scrollTop) || document.body.scrollTop;
            if(scroll_top >= 500){
                _this.side_top.css('display','block');
            }else{
                _this.side_top.css('display','none');
            }
        })
        this.side_top.on('click',function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        })
        this.rt_btn.on('click',function(){
            this.index ++ ;
            if(this.index >= this.num){
                this.index = 0;
            }
            this.slider();
        }.bind(this));
        this.lt_btn.on('click',()=>{
            this.index -- ;
            if(this.index < 0 ){
                this.index = this.num - 1;
            }
            this.slider();
        })
        this.li.each(function(i,value){
            $(value).on('click',function(){
                _this.index = i ;
                _this.slider();
            })
        })
       

    }
    time(){
        let _this = this;
        this.timer = setInterval(() => {
            this.index ++ ;
            if(this.index >= this.num){
                this.index = 0;
            }
            this.slider();
        }, 3000);
        this.big_box.on({
            'mouseenter':()=>{
                clearInterval(this.timer);
            },
            'mouseleave' : ()=>{
                clearInterval(this.timer);
                this.time();
            }
        })
    }
    slider(){
        this.big_img.each(function(i,value){
            $(value).animate({opacity:0},100);
        })
        this.big_img.eq(this.index).animate({opacity:1},100);
        
        this.li.each(function(i,value){
            $(value).css('background','#ccc');
        })
        this.li.eq(this.index).css('background','#333');
    }
}
new Slider();

class Chose{
    constructor(){
        this.ver01 = $('.ver01');
        this.ver02 = $('.ver02');
        this.addEvent();
        this.init();
        this.init01();
    }
    addEvent(){
        let _this = this;
        let vers01= this.ver01.children();
            vers01.each(function(i,value){
                $(value).on({
                    'click':function(){
                        _this.init01();
                        $(this).css({
                            'color': '#ff6700',
                            'border' : '1px solid #ff6700'
                        })
                    }
                })
            })
            let vers02= this.ver02.children();
            vers02.each(function(i,value){
                $(value).on({
                    'click':function(){
                        _this.init();
                        $(this).css({
                            'color': '#ff6700',
                            'border' : '1px solid #ff6700'
                        })
                    }
                })
            })
    }
    init(){
        let vers02= this.ver02.children();
        vers02.each(function(i,value){
            $(value).css({
                'color': '#333333',
                    'border' : '1px solid #ccc'
            })
        })
    }
    init01(){
        let vers01= this.ver01.children();
        vers01.each(function(i,value){
            $(value).css({
                'color': '#333333',
                    'border' : '1px solid #ccc'
            })
        })
    }
}
new Chose();

class Check{
    constructor(){
        this.check = $('.check_box');
        this.flag = 0;
        this.addEvent();
    }
    addEvent(){
        let _this = this;
        this.check.each(function(i,value){
            $(value).on('click',function(){
                _this.flag ++ ;
                if(_this.flag % 2 === 1 ){
                    $(this).find('em').each(function(i,value){
                        $(value).css('background','#ff6700');
                        
                        $(value).find('span').css({
                            'display':'block',
                            'color' : 'white'
                        })
                    })
                    $(this).css({
                        'border' : '1px solid #ff6700' 
                    })
                }else{
                    $(this).css({
                        'border' : '1px solid rgb(204,204,204)' 
                    })
                    $(this).find('em').each(function(i,value){
                        $(value).css('background','');
                        $(value).find('span').css({
                            'display':'none'
                        })
                    })
                }

            })
        })
    }
}
new Check();

class Product{
    constructor(){
        this.cart = $('.side_cart');
        this.buy = $('.p_buy');
        this.addEvent();
        this.init();
    }
    addEvent(){
        let _this = this;
        this.cart.on('click',function(){
            location.href = 'cart.min.html';
        })
        this.buy.on('click',function(evt){
            let id = $(this).attr('data-good-id');
            let src = $('.big_box img:first').attr('src');
            let price = parseInt($('.s_price').text());
            let name = $('.name').text();

            let cookie_str = $.cookie('carts')? $.cookie('carts'):'';
            let cookie_obj = _this.convertStrToObj(cookie_str);
            if(id in cookie_obj){
                cookie_obj[id].num ++;
            }else{
                cookie_obj[id] = {
                    src,
                    price,
                    name,
                    num : 1
                }
            }
            $.cookie('carts',JSON.stringify(cookie_obj),{expires: 5 ,path :'/'});
            let num = parseInt(_this.cart.children('.num').text());
            _this.cart.children('.num').text(`${num + 1}`);
        })
    }
    init(){
        let cookie_str = $.cookie('carts')? $.cookie('carts') : '';
        let cookie_obj  = this.convertStrToObj(cookie_str);
        let sum = 0;
        for(let key in cookie_obj){
            sum += cookie_obj[key].num;
        }
        this.cart.children('.num').text(`${sum}`);
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Product();