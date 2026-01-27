import TaskEdit from './TaskEdit';
import TaskList from './TaskList';
import TaskShow from './TaskShow';
import TaskCreate from './TaskCreate';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default {
  config: {
    list: TaskList,
    show: TaskShow,
    create: TaskCreate,
    edit: TaskEdit,
    icon: CheckBoxIcon,
    options: {
      label: 'Projets',
      panelSize: 5
    }
  },
  dataModel: {
    types: ['pair:Task'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Projet |||| Projets',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:hasType': 'Type',
        'pair:documents': 'Cercle',
        'pair:assignedTo': 'Assigné à',
        'pair:hasStatus': 'Statut',
        'pair:dueDate': "Date d'échéance",
        'dc:created': 'Créé le',
        'dc:creator': 'Auteur'
      }
    }
  }
};
