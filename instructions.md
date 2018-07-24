## Registering provider

You must register the provider in `start/app.js`

```js
const providers = [
    'adonis-segment/Segment'
]
```

## Configuration

Add your `SEGMENT_WRITEKEY` inside of your `.env` file.

## Usage 

Once done you can access `Segment` provider and fire off analytics events as follows.

```js
const Segment = use('Avonian/Segment')

Segment.track({
  userId: '019mr8mf4r',
  event: 'Item Purchased',
  properties: {
    revenue: 39.95,
    shippingMethod: '2-day'
  }
});
```