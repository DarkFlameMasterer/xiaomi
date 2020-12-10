// 导入模块
let {src,dest,watch} = require('gulp');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let babel = require('gulp-babel');
let sass = require('gulp-sass');
// 创建任务
// 复制index
function fnCopyIndex(){
    return src('./src/index.html')
        .pipe(dest('./dist'));
}
function fnCSS(){
    return src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist/css'));
}
function fnJS(){
    return src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist/js'));
}
function fnImg(){
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}
function fnPage(){
    return src('./src/pages/*.html')
        .pipe(htmlmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist/pages'));
}
// watch
function fnWatch(){
    watch('./src/sass/*.scss',fnCSS);
    watch('./src/index.html',fnCopyIndex);
    watch('./src/js/*.js',fnJS);
    watch('./src/img/*',fnImg);
    watch('./src/pages/*.html',fnPage)
}

exports.fn = fnCopyIndex;
exports.css = fnCSS;
exports.js = fnJS;
exports.img = fnImg;
exports.page = fnPage;
exports.default = fnWatch;
