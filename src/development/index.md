## Introduction

This page is going to help you get started with core concepts added to Gildsmith.

### Data in Gildsmith

This is arguably the most important concept to understand, so take your time to
make sure you get it clearly.

Some ecommerce systems allows you to optionally enable multichannel selling. 
In Gildsmith, it's default and cannot be disabled. The reason for it is simple:
if you don't want to use multiple channels, just stick to the default one.

Every piece of data in Gildsmith, especially regarding products, is connected 
to a channel, a language and a currency. This matrix allows extra customization!

It's easiest to discuss it in regards to products, so let's consider an apple.

- In every store (or selling channel, in nerdy terms), its stock amount can vary.
- In every language, it might have a different name.
- In every currency, it might have a different price.

Now, imagine that the buyer is in a specific store, speaks Spanish and has euros
in their pocket. You want to serve him the very best information about your product.

By connecting information to these tree values, you can do exactly that - give
your user the best experience.

#### Generic Data

By default, the products you add are connected to _null_ values, meaning they default
to channel of ID 1 and its default language and currency. But at any time you can
modify its information, such as modify price value for euros, or modify name for
French language. Or even disable the product on German selling channel.

These specific granular information are going to be served to specific groups of customers,
should you configure it all properly.

#### Order of Data Retrival

The information that user is served is tailored to meet their requirements. If they're
looking at channel of ID 3, use English and dollars, Gildsmith is going to try to
return info for this specific combination. You can think of this example it as [Channel 3, EN, USD].

But what if the specific information for this combination does not exist? 

Gildsmith is going to attempt to look for alternative data that still work for this
query, without breaking the universe. The process looks something like this:

- User asks for data for [Channel 3, EN, USD].
- Data not found. Try to default currencies and languages:
  - Try [Channel 3, default language, USD]
  - Try [Channel 3, EN, default currency]
  - Try [Channel 3, default language, default currency]
  - Try [default channel, default language, default currency]