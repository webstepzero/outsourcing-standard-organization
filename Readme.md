# 설명

template파일입니다.

## live-sass complier

```
"liveSassCompile.settings.formats":[
    // This is Default.
    // {
    //     "format": "expanded",
    //     "extensionName": ".css",
    //     "savePath": "~/../css/"
    // },
    // You can add more
    // {
    //     "format": "compressed",
    //     "extensionName": ".min.css",
    //     "savePath": "~/../css/"
    // },
    // More Complex
    {
        "format": "compressed",
        "extensionName": ".css",
        "savePath": "~/../css/"
    }
],
"liveSassCompile.settings.generateMap":false, // .map 제거
```

## 폰트

https://fonts.google.com/

## 파일 디렉토리

```

index.html // 메인페이지
pages - detail.html // 상세페이지
      - notice.html // 공지사항
      - compnany_intro.html // (회사소개페이지)

fonts ┬ Noto Sans Kr (한글) - 4개씩 400 500 700 900
      └ Open Sans (영문) - 4개씩

assets ┬ constant (json)
				 image

css(sass)
    style.scss
            ├ abstract
            │   ├ _variable.scss
            │   ├ _function.scss
            │   └ _mixins.scss
            ├ base
            │ 	├ _reset.scss
            │ 	└ _typography.scss # 타이포그래피 font-face 모여있는ㄴ거
            │
            │
            │     # 리셋/정규화
            │		 (버튼, 인풋, 테이블)
            │
            ├ layout
            │		├ _grid.scss (반응형)
            │		├ _layout.scss (반응형)
            │		├	_footer.scss
            │		├	_header.scss
            │		├	_product.scss
            │		└	_main.scss
            │
            ├ custom
            │   ├ _theme.scss
            │    _common.scss (애매함) style, common, custom
            │
            └ components (reset이지만 component관련은 여기서 해결)
                    ├ _button.scss
                    ├	_icons.scss
                    └ _input.scss


            ** contstant 파일의 정의
            : 자바스크립트 정적 Object


            javascript (babel)
                ├ commmon
                │   ├ ui_common.js
                │   ├ ui_layout.js
                │   └ ui_interaction.js
                │
                ├ plugin
                │   ├ slick.js
                │   ├ swiper.js
                │   ├ count.js
                │   ├ jquery-3.13.5.js
                │   // gsap꺼
                │   ├ scrollTrigger.js
                │   ├ moment.js
                │   └ gsap.js
                │
                ├ main
                │   ├ main.js
                │   ├ flow.js
                │   └ extraordinary.js
                │
                └ pages
                    ├ detail.js
                ├ notice.js
                └ compnany_intro.js
```
