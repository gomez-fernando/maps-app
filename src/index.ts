import { CustomMap } from './CustomMap';
import {User} from './User';
import {Driver} from './Driver';

const customMap = new CustomMap('#map');
const user = new User();
const driver = new Driver();

customMap.addMarker(user);
customMap.addMarker(driver);



