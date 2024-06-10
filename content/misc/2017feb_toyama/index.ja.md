---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Juliaによる発展方程式の数値計算と可視化"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2017-02-13
lastmod: 2019-08-23T18:29:20+09:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---



<dl>
    <dt>剱持智哉 (齊藤研 D2)</dt>
    <dt>2017年2月13日</dt>
    <dt>研究集会「非線形現象と高精度高品質数値解析」(齊藤研ゼミ合宿)</dt>
    <dt>富山大学人間発達科学部332教室</dt>
</dl>

## 概要

プログラミング言語[Julia](http://julialang.org/)による数値計算手法を紹介する.
特に, 発展方程式の数値計算手法と, そのアニメーションによる可視化について紹介する.

## 目標

* Juliaの使い方に慣れる.
* 1次元の熱方程式の数値計算と, その結果をアニメーションで表示するプログラムを書けるようになる.

* [時間があれば] B-spline曲線の可視化を通じて, B-spline曲線について学ぶ. また, B-spline曲線を用いたelastic flowの数値計算をする.


## 資料集

1.  [インストール編](http://qiita.com/t_kemmochi/private/4a918177ee66b0b410fa)
2.  [基礎編](http://qiita.com/t_kemmochi/private/9e46c5b36f92d1e6f5a8)
3.  [文法編](http://qiita.com/t_kemmochi/private/6b81e772fbe4150dc978)
4.  [外部ファイル編](http://qiita.com/t_kemmochi/private/dab696bf9af32135d84b)
5.  [可視化編](http://qiita.com/t_kemmochi/private/a257adc8a590e11c1301)
6.  [アニメーション編](http://qiita.com/t_kemmochi/private/34455556255c1b7e9937)

## サンプルプログラム集

- [test1.jl](julia/test1.jl)  [外部ファイル編で使用]
- [test2.jl](julia/test2.jl)  [外部ファイル編で使用]
- [test3.jl](julia/test3.jl)  [アニメーション編で使用]
- [elastic.jl](julia/elastic.jl)  [アニメーション編で使用]
- [newton.jl](julia/newton.jl)  [アニメーション編で使用]


## 連絡先等

<dl>
  <dt>E-mail: kemmochi [at] ms.u-tokyo.ac.jp</dt>
  <dt>URL: https://t-kemmochi.github.io/</dt>
  <dt>このページ: {{< ref "2017feb_toyama" >}}</dt>
</dl>