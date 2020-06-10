import axios from 'axios';

export const getMapImage = (lat, lng) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const position = `${lat},${lng}`;
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${API_KEY}&center=${position}&zoom=17&format=png&maptype=roadmap&style=element:labels%7Cvisibility:off&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0xf1ba69%7Csaturation:-3%7Cvisibility:on%7Cweight:0.01&style=feature:landscape.man_made%7Celement:geometry.stroke%7Cvisibility:off&style=feature:landscape.man_made%7Celement:labels%7Cvisibility:off&style=feature:landscape.man_made%7Celement:labels.icon%7Cvisibility:off&style=feature:landscape.man_made%7Celement:labels.text%7Cvisibility:off&style=feature:landscape.man_made%7Celement:labels.text.fill%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xd5638e%7Csaturation:-6%7Clightness:-8&style=feature:poi%7Celement:labels%7Cvisibility:off&style=feature:poi%7Celement:labels.icon%7Cvisibility:off&style=feature:poi%7Celement:labels.text%7Cvisibility:simplified&style=feature:road%7Celement:geometry.fill%7Ccolor:0xf99d6d%7Csaturation:100%7Clightness:14%7Cgamma:0.92%7Cweight:9.17&style=feature:road%7Celement:geometry.stroke%7Cvisibility:off%7Cweight:6.64&style=feature:road%7Celement:labels%7Cvisibility:simplified&size=480x360&markers=icon:https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fmaemae-app.appspot.com%2Fo%2Fimages%252Fmaps%252Fplace-marker.png%3Falt%3Dmedia%26token%3Dff5cc2e7-7391-4dbd-8697-5ad69e5a83b6|${position}`;

  return axios.get(url, { responseType: 'arraybuffer' })
    .then(response => {
      const base = new Buffer(response.data, 'binary').toString('base64');
      return base;
    })
    .catch(error => {
      return { message: 'error parsing img', error }
    })
}