import { CustomMap } from './CustomMap';
import {User} from './User';
import {Driver} from './Driver';
import { Destination } from './Destination';

const customMap = new CustomMap('#map');
const user = new User();
const driver = new Driver();
const destination = new Destination();

customMap.addMarker(user);
customMap.addMarker(driver);
customMap.addMarker(destination);



