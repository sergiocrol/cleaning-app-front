import React from 'react';

import OverviewUser from '../../../components/overview/overview-user/overview-user.component';
import HomepageHeaderUser from '../../../components/homepage-header/homepage-header-user/homepage-header-user.component';

const HomepageUser = () => {
  // TODO - Implement geolocation
  /*const [city, setCity] = useState('Barcelona');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    });
  }, []);*/

  return (
    <div>
      <HomepageHeaderUser />
      <OverviewUser />
    </div>
  );
}

export default HomepageUser;