// import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: PersonList,
    show: PersonShow,
    // edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Trombinoscope',
      panelSize: 5
    }
  },
  dataModel: {
    types: ['pair:Person'],
    list: {
      blankNodes: []
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
      fields: {
        'pair:firstName': 'Prénom',
        'pair:lastName': 'Nom de famille',
        'pair:homePage': 'Site(s) web',
        'pair:comment': 'En deux mots',
        'pair:description': 'Description',
        'og:leads': 'Référent',
        'pair:depictedBy': 'Photo',
        'pair:involvedIn': 'Contributeur',
        'pair:affiliatedBy': 'Membre de',
        'pair:offers': 'A pour compétences',
        'pair:hasTopic': 'A pour intérêt',
        'pair:hasLocation': 'Adresse',
        'pair:hasInterest': "Domaines d'intérêts"
      }
    }
  }
};
