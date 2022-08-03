// import DocumentEdit from './DocumentEdit';
import DocumentList from './DocumentList';
import DocumentShow from './DocumentShow';
// import DocumentCreate from "./DocumentCreate";
// import DescriptionIcon from '@material-ui/icons/Description';
import AnnouncementIcon from '@material-ui/icons/Announcement';

export default {
  config: {
    list: DocumentList,
    show: DocumentShow,
    // create: DocumentCreate,
    // edit: DocumentEdit,
    icon: AnnouncementIcon,
    options: {
      label: 'Actualités',
      panelSize: 5
    }
  },
  dataModel: {
    types: ['pair:Document'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Actualité |||| Actualités',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:hasType': 'Type',
        'pair:documents': 'Cercle',
        'dc:created': 'Posté le',
        'dc:creator': 'Auteur'
      }
    }
  }
};
