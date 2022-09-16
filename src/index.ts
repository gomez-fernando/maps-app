import { CustomMap } from './CustomMap';
import {User} from './User';
import {Driver} from './Driver';

const customMap = new CustomMap('#map');
const user = new User();

customMap.addUserMarker(user);



