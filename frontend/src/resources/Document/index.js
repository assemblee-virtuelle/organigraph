import DocumentEdit from './DocumentEdit';
import DocumentList from './DocumentList';
import DocumentShow from './DocumentShow';
import DocumentCreate from "./DocumentCreate";
import DescriptionIcon from '@material-ui/icons/Description';

export default {
  config: {
    list: DocumentList,
    show: DocumentShow,
    create: DocumentCreate,
    edit: DocumentEdit,
    icon: DescriptionIcon,
    options: {
      label: 'Documents',
      panelSize: 6
    }
  },
  dataModel: {
    types: ['pair:Document'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'documents',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Document |||| Documents',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:hasType': 'Type',
        'pair:documents': 'Cercle',
        'dc:created': 'Créé le',
        'dc:creator': 'Créé par'
      }
    }
  }
};
