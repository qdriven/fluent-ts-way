---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS full-screen video header'
metaTitle: 'Full-screen background video with Tailwind CSS [2022]'
metaDesc: 'Learn in this tutorial how to create a full-screen video background as a header element using only Tailwind CSS. See the Codepen demo.'
image: /images/19-12-2020.jpg
date: 2020-12-19T03:00:00.000Z
tags:
  - css
  - tailwind
---

Call me old-school, but I love to see video headers. I hardly use them on my personal website, but I love to implement a video header for clients with stunning videos.

I want to teach you how to implement a full-screen background video in this tutorial. We will only use the classes of [Tailwind CSS](https://daily-dev-tips.com/posts/my-first-experiences-with-tailwind-css/).

The result is this stunning full-screen video header using only Tailwind CSS:

![video-header.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1607940108457/esNeCkquB.gif)

## Tailwind CSS full-screen video background

To create this background, we are leveraging yesterday's [Tailwind parallax header](https://daily-dev-tips.com/posts/tailwind-css-parallax-effect/). It has a very similar setup, only now we don't make it parallax scroll.

The basic `HTML` structure will look like this:

```html
<header>
  <div>Welcome to my site!</div>
  <video autoplay loop muted>
    <source src="video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</header>
```

You can see we used an HTML header tag. There, we have a div that will hold a block that will sit on top of the video.
Then we have a video tag, which can hold a video or multiple sources.

I will now write down the end `HTML` structure and then go through the importance of each class.

```html
<header
  class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
>
  <div
    class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
    Welcome to my site!
  </div>
  <video
    autoplay
    loop
    muted
    class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>
```

The classes used for the video background:

- `relative`: Makes the header element relative. We will make the video absolute to position it.
- `flex`: Adds a display flex so we can align the text block inside
- `items-center`: Aligns the text-block vertically
- `justify-center`: Aligns the text-block horizontally
- `h-screen`: The h-screen adds a 100vh height, so the video is scaled to 100% of the viewport height.
- `mb-12`: We add quite a big margin-bottom with this (3rem)
- `overflow-hidden`: The video will be slightly bigger than our header, so we don't want to show the overflow.

Then for our overlay text block, we use the following classes:

- `relative`: We need to make this relative to place it on top of the video
- `z-30`: This needs to be higher than the z-index on the video
- `p-5`: Adds equal padding on each side (1.25rem)
- `text-2xl`: Makes the text nice and big (1.5rem)
- `text-white`: Make the text white
- `bg-purple-300`: A nice cool purple color
- `bg-opacity-50`: This ensures the background has an opacity of 50%.
- `rounded-xl`: Adds the nice rounder borders

And last but not least, we can add the classes for our video element:

- `absolute`: The video is an absolute positioned element
- `z-10`: We give the video a lower z-index than our text-block to keep it in the background
- `w-auto`: The width can be auto so that it will adjust
- `min-w-full`: We need to make the min-width 100%
- `min-h-full`: The same goes for the min-height
- `max-w-none`: Unset the default max-width

With this, we have all our classes in place. This will give us a nice full-screen video header using only Tailwind CSS classes.

### See the code example in this Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="dypNrog" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS video header">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/dypNrog">
  Tailwind CSS video header</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
