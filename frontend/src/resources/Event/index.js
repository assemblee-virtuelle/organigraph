// import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';
// import EventCreate from "./EventCreate";
import EventIcon from '@material-ui/icons/Event';

export default {
  config: {
    list: EventList,
    show: EventShow,
    // create: EventCreate,
    // edit: EventEdit,
    icon: EventIcon,
    options: {
      label: 'Calendrier',
      panelSize: 5
    }
  },
  dataModel: {
    types: ['pair:Event'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Evénement |||| Evénements',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:concerns': 'Cercle',
        'pair:aboutPage': 'Site web',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'pair:involves': 'Implique',
        'pair:hasTopic': 'A pour thème'
      }
    }
  }
};
