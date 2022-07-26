---
layout: ../../layouts/Post.astro
title: 'Styling the featured work section - part 7'
metaTitle: 'Styling the featured work section - part 7'
metaDesc: 'Adding styling for the featured work section'
ogImage: /images/14-10-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/1d19cb0b-2b02-4a5c-b87d-5af8cecf5c00
date: 2022-10-14T03:00:00.000Z
tags:
  - nextjs
---

Now that we have the [recent post section](https://daily-dev-tips.com/posts/styling-the-recent-posts-part-6/) let's look at the last bit of the homepage. This will be the featured work section.

![Design featured work section](https://cdn.hashnode.com/res/hashnode/image/upload/v1664859434320/KjUmNZBQC.png)

The design shows us the following element. We can see some outlined items here:

- The section header we created yesterday
- Work sections

## Styling the featured work section

Let's start by creating a new component called `featuredWork.js`, and inside we can bootstrap a very generic component.

```js
import SectionHeader from './sectionHeader';

export default function FeaturedWork() {
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title='Featured work' href='#' />
      </div>
    </section>
  );
}
```

You can see we can reuse the header we made yesterday. Now that's convenience.

Let's import this file to our homepage.

```js
import Head from 'next/head';
import IntroHeader from '../components/introHeader';
import RecentPosts from '../components/recentPosts';
import FeaturedWork from '../components/featuredWork';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <IntroHeader />
      <RecentPosts />
      <FeaturedWork />
    </div>
  );
}
```

From here, let's focus on adding the article components.
We'll create the `work.js` file and place the main markup inside.

```js
export default function Work() {
  return (
    <article>
      <img src='https://via.placeholder.com/240' />
      <div>
        <h3>Work title</h3>
        <span>
          <date>2022</date> Tagname
        </span>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </article>
  );
}
```

Let's start by adding two of these to our `featuredWork` component so we can see what's going on.

```js
import SectionHeader from './sectionHeader';
import Work from './work';

export default function FeaturedWork() {
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title='Featured work' href='#' />
        <div className='flex flex-col gap-2'>
          <Work />
          <Work />
        </div>
      </div>
    </section>
  );
}
```

I already added a wrapping div with some classes to space them out a bit better.
Resulting in the following:

![Featured work unstyled](https://cdn.hashnode.com/res/hashnode/image/upload/v1664860847039/Xu4i3kXkh.png)

Let's start by adding some styling to this.
First up is the wrapping element.

```html
<article className="flex items-center border-b-2 py-6"></article>
```

As for the image, we can always set its width to be 1/3rd of the wrapper.

```html
<img src="https://via.placeholder.com/240" className="w-1/3 mr-6 rounded-lg" />
```

Now on to the text elements starting with the title, which is the same as the one we used for the posts.

> Note: You can also convert this into a custom heading component.

```html
<h3 className="text-2xl mb-2 font-medium"></h3>
```

As for the date and text, we use the wrapping div to style the tag and the date tag to create the little pill-like year.

```html
<span className="text-gray-600 mb-4 block">
  <date className="bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl">
    2022
  </date>
  Dashboard
</span>
```

And that's it!
Let's take a look at the result for today.

![Styled featured work section](https://cdn.hashnode.com/res/hashnode/image/upload/v1664861256727/kcgeKxtDV.png)

You can also find the completed code on [GitHub](https://github.com/rebelchris/next-portfolio/tree/part-7).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
