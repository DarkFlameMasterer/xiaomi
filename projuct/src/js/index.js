$('.header').load('./pages/public.min.html .public_header');
$('.footer').load('./pages/public.min.html .public_footer');
// 轮播
class Slider{
    constructor(){
        this.big_box = $('.slider');
        this.big_img = $('.big_img img');
        this.li = $('.point_list li ');
        this.lt_btn = $('.slider_lt');
        this.rt_btn = $('.slider_rt');
        this.meau_list = $('.meau_list');
        this.page = $('.slider_menu .page');
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
        this.meau_list.each(function(i,value){
            $(value).on({
                'mouseenter':function(){
                    _this.page.eq(i).css('visibility','visible');
                    _this.page.eq(i).on({
                        'mouseenter':function(){
                            _this.page.eq(i).css('visibility','visible');
                        },  
                        'mouseleave' :function(){
                            _this.page.eq(i).css('visibility','hidden');
                        }
                    })
                },
                'mouseleave' :function(){
                    _this.page.eq(i).css('visibility','hidden');
                }
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
            $(value).css('background','grey');
        })
        this.li.eq(this.index).css('background','white');
    }
}

// 选项卡切换

class Card{
    constructor(){
        this.tv_btn = $(' .smart .tit_r>span');
        this.card = $('.smart .phone_sl');
        this.cur_index = 0;
        this.addEvent();
        this.change();
    }
    addEvent(){
        let _this = this;
        this.tv_btn.each(function(i,value){
            $(value).on({
                'mouseenter':function(){
                    _this.cur_index = i;
                    _this.change();
                }
            })
        })
    }
    change(){
        this.tv_btn.each(function(i,value){
            $(value).css({
                'color' : '#333',
                'borderBottom' : '0'
            });
        })
        this.tv_btn.eq(this.cur_index).css({
            'color' : '#ff6700',
            'borderBottom' : '1px solid #ff6700'
        })
        
        this.card.each(function(i,value){
            $(value).css('display','none');
        })
        this.card.eq(this.cur_index).css('display','flex');
    }
}
class Cards{
    constructor(){
        this.tv_btn = $(' .tv .tit_r>span');
        this.card = $('.tv .phone_sl');
        this.cur_index = 0;
        this.addEvent();
        this.change();
    }
    addEvent(){
        let _this = this;
        this.tv_btn.each(function(i,value){
            $(value).on({
                'mouseenter':function(){
                    _this.cur_index = i;
                    _this.change();
                }
            })
        })
    }
    change(){
        this.tv_btn.each(function(i,value){
            $(value).css({
                'color' : '#333',
                'borderBottom' : '0'
            });
        })
        this.tv_btn.eq(this.cur_index).css({
            'color' : '#ff6700',
            'borderBottom' : '1px solid #ff6700'
        })
        
        this.card.each(function(i,value){
            $(value).css('display','none');
        })
        this.card.eq(this.cur_index).css('display','flex');
    }
}
class Card_matcher{
    constructor(){
        this.tv_btn = $('.matcher .tit_r>span');
        this.card = $('.matcher .phone_sl');
        this.cur_index = 0;
        this.addEvent();
        this.change();
    }
    addEvent(){
        let _this = this;
        this.tv_btn.each(function(i,value){
            $(value).on({
                'mouseenter':function(){
                    _this.cur_index = i;
                    _this.change();
                }
            })
        })
    }
    change(){
        this.tv_btn.each(function(i,value){
            $(value).css({
                'color' : '#333',
                'borderBottom' : '0'
            });
        })
        this.tv_btn.eq(this.cur_index).css({
            'color' : '#ff6700',
            'borderBottom' : '1px solid #ff6700'
        })
        
        this.card.each(function(i,value){
            $(value).css('display','none');
        })
        this.card.eq(this.cur_index).css('display','flex');
    }
}
class Card_match{
    constructor(){
        this.tv_btn = $('.match .tit_r>span');
        this.card = $('.match .phone_sl');
        this.cur_index = 0;
        this.addEvent();
        this.change();
    }
    addEvent(){
        let _this = this;
        this.tv_btn.each(function(i,value){
            $(value).on({
                'mouseenter':function(){
                    _this.cur_index = i;
                    _this.change();
                }
            })
        })
    }
    change(){
        this.tv_btn.each(function(i,value){
            $(value).css({
                'color' : '#333',
                'borderBottom' : '0'
            });
        })
        this.tv_btn.eq(this.cur_index).css({
            'color' : '#ff6700',
            'borderBottom' : '1px solid #ff6700'
        })
        
        this.card.each(function(i,value){
            $(value).css('display','none');
        })
        this.card.eq(this.cur_index).css('display','flex');
    }
}
class Card_trip{
    constructor(){
        this.tv_btn = $('.trip .tit_r>span');
        this.card = $('.trip .phone_sl');
        this.cur_index = 0;
        this.addEvent();
        this.change();
    }
    addEvent(){
        let _this = this;
        this.tv_btn.each(function(i,value){
            $(value).on({
                'mouseenter':function(){
                    _this.cur_index = i;
                    _this.change();
                }
            })
        })
    }
    change(){
        this.tv_btn.each(function(i,value){
            $(value).css({
                'color' : '#333',
                'borderBottom' : '0'
            });
        })
        this.tv_btn.eq(this.cur_index).css({
            'color' : '#ff6700',
            'borderBottom' : '1px solid #ff6700'
        })
        
        this.card.each(function(i,value){
            $(value).css('display','none');
        })
        this.card.eq(this.cur_index).css('display','flex');
    }
}

// 水平轮播
class Slider_s{
    constructor(){
        this.big_box = $('.light_sl');
        this.l_btn = $('.tit_l_btn');
        this.r_btn = $('.tit_r_btn');
        this.light_box = $('.light_box')
        this.s_width = this.light_box.eq(0).eq(0).width();
        this.num = this.light_box.length;
        console.log(this.num)
        // console.log(this.s_width);
        console.log(this.l_btn);
        this.timer = null;
        this.index = 0;
        this.slider();
        this.addEvent();
        // this.time();
    }
    addEvent(){
        let _this = this;
        this.r_btn.on('click',()=>{
            this.index ++ ;
            if(this.index >= this.num - 4){
                this.index = 0;
            }
            console.log(this.index);
            this.slider();
        });

        this.l_btn.on('click',()=>{
            this.index -- ;
            if(this.index < 0 ){
                this.index = this.num - 4;
            }
            this.slider();
        })
    }
    slider(){
        this.big_box.animate(
            {'left':`${parseInt(234 - this.index  * (this.s_width  + 14))}px`}
        );
    }
}

new Slider();
new Card();
new Cards();
new Card_matcher();
new Card_trip();
new Card_match();
new Slider_s();


