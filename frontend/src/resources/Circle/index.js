// import CircleEdit from './CircleEdit';
import CircleList from './CircleList';
import CircleShow from './CircleShow';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import CircleCreate from "./CircleCreate";

export default {
  config: {
    list: CircleList,
    show: CircleShow,
    // create: CircleCreate,
    // edit: CircleEdit,
    icon: RadioButtonUncheckedIcon,
    options: {
      label: 'Cercles',
      panelSize: 5
    }
  },
  dataModel: {
    types: ['og:Circle'],
    list: {
      blankNodes: []
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Cercle |||| Cercles',
      fields: {
        'pair:label': 'Nom',
        'og:purpose': 'Raison d\'être',
        'og:accountabilities': 'Redevabilités',
        'og:domain': 'Domaine',
        'og:leadBy': 'Référents',
        'pair:affiliatedBy': 'Membre',
        'pair:involves': 'Contributeurs',
        'pair:partOf': 'Fait partie de',
        'pair:hasPart': 'Sous-cercles',
        'pair:documentedBy': 'Documents',
        'pair:concernedBy': 'Agenda',
        'pair:homePage': 'Canaux de communication'
      }
    }
  }
};
