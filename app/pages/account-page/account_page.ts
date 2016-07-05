import {Page, IONIC_DIRECTIVES} from 'ionic-angular';
import {Accordion, AccordionGroup} from '../../components/accordion';

@Page({
  templateUrl: 'build/pages/account-page/account-page.html',
  directives: [IONIC_DIRECTIVES, Accordion, AccordionGroup]
})

export class AccountPage {
  constructor() {

  }

  isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'General',
            content: {Name: 'Name: Maria Portela', Email: 'E-mail: maria.portela@dragshop.pt', Phone: 'Phone number: 917 843 097', Role: 'Role: Administrator' }
        },
        {
            heading: 'Security',
            content: 'I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Location',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        },
        {
            heading: 'Language',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        },
        {
            heading: 'Notifications',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        },
        {
            heading: 'Messages',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        }

    ];


}
