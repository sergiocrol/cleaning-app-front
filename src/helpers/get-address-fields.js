import { getMapImage } from './get-map-image';

export const getFields = async (address, lat, lng, addressSelected) => {
  let fields = {
    street_number: '',
    route: '',
    locality: '',
    postal_code: ''
  }
  for (let i = 0; i < address.length; i++) {
    const addressType = address[i].types[0];
    const val = address[i]['short_name'];
    fields[addressType] = val;
  }
  // if (!fields.route) fields.route = addressStreet;
  fields = { ...fields, lat, lng, addressSelected };
  const image = await getMapImage(lat, lng);
  return { ...fields, image };
  // .then(image => setFields({ ...fields, image }));
}

export const getAddress = fields => {
  console.log(fields.addressSelected);
  return new Promise((resolve, reject) => {
    if (fields.addressSelected) {
      resolve(fields);
    } else {
      const address = `${fields.addressStreet}, ${fields.city}`;
      console.log(fields);
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
          const address = results[0].address_components;
          console.log('address is ok');
          console.log(address);
          if (address[0].types.includes('locality')) {
            const address = fields.city;
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
              if (status === 'OK') {
                const address = results[0].address_components;
                console.log('city is ok');
                console.log(address);
                if (address) {
                  const location = results[0].geometry.location;
                  const lat = location.lat();
                  const lng = location.lng();
                  getMapImage(lat, lng)
                    .then(image => {
                      const address = { ...fields, lat, lng, image };
                      resolve(address);
                    })
                }
              } else {
                const address = { ...fields, lat: '', lng: '' };
                resolve(address);
              }
            });
          } else {
            const location = results[0].geometry.location;
            const lat = location.lat();
            const lng = location.lng();
            getFields(address, lat, lng, true)
              .then(res => resolve(res))
          }
        } else {
          const address = { ...fields, lat: '', lng: '' };
          resolve(address);
        }
      });
    }
  });
}