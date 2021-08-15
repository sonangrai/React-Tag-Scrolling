# React Tag Scroller

![alt text](https://github.com/sonangrai/React-Tag-Scrolling/master/screenshot.png?raw=true)

React Tag Scroller is a simple horizontal tag scroller. It can be used to create a horizontal scroller where the datas can be scrolled with scroll or with button click.

## Usage

```
import TagSlider from "react-tag-slider"

<TagSlider data={data} NextBtn="+" PreviousBtn="-" myStyle="mySlide" />

//With a custom component as the nav button
<TagSlider data={data} NextBtn={<MyNextBtn />} PreviousBtn={<MyPrevBtn />} myStyle="mySlide" />

```

**data** : The data you want to be rendered.
**NextBtn** : The text inside of the next btn. You can also pass your own component.
**PreviousBtn** : The text inside of the previous btn. You can also pass your own component.

## Props Format

The passed props must contain the two property. One is the _url_ for the link and next one is the _title_.

```
[
    {
        id: 1,
        url: "",
        title: "",
    },
    .
    .
    .
    .
    {
        id: n,
        url:"",
        title"",
    }
]
```
