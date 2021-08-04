import { PairResourceCreate } from '../../pair';
import CircleEdit from './CircleEdit';
import CircleList from './CircleList';
import CircleShow from './CircleShow';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CircleCreate from "./CircleCreate";

export default {
  config: {
    list: CircleList,
    show: CircleShow,
    create: CircleCreate,
    edit: CircleEdit,
    icon: RadioButtonUncheckedIcon,
    options: {
      label: 'Cercles'
    }
  },
  dataModel: {
    types: ['og:Circle'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'groups',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Cercle |||| Cercles',
      fields: {
        'pair:label': 'Nom',
        'og:purpose': 'Raison d\'être',
        'og:accountabilities': 'Redevabilités',
        'og:domain': 'Domaine',
        'og:leadBy': 'A pour référent',
        'pair:supportedBy': 'Soutenu par',
        'pair:partOf': 'Fait partie de'
      }
    }
  }
};
