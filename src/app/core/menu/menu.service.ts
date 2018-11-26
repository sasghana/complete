import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: 'title',
    name: 'MAIN'
  },
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    // icon: 'explore'
  },
  {
    state: 'myfeed',
    name: 'My Feed',
    type: 'link',
    icon: ''
  },
  {
    state: 'posts',
    name: 'Posts',
    type: 'link',
    icon: ''
  },
  {
    state: 'groups',
    name: 'Groups',
    type: 'link',
    icon: ''
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'COMMUNITY'
  },
  {
    state: 'social',
    name: 'All Staff',
    type: 'link',
    icon: ''
  },
  {
    state: 'social',
    name: 'Forums',
    type: 'link',
    icon: ''
  },
  {
    state: 'groups',
    name: 'All Groups',
    type: 'link',
    icon: ''
  },
  {
    state: 'policies',
    name: 'Policies',
    type: 'link',
    icon: ''
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'APPLICATIONS'
  },
  {
    state: 'issuetracker',
    name: 'Issue Tracker',
    type: 'link',
    icon: '',
  },
  {
    state: 'leaveform',
    name: 'Leave Form',
    type: 'link',
    icon: ''
  },
  {
    state: 'claimsform',
    name: 'Claim Form',
    type: 'link',
    icon: ''
  },
  {
    state: 'calendar',
    name: 'Calendar',
    type: 'link',
    // icon: 'date_range'
  },
  {
    state: 'taskboard',
    name: 'Taskboard',
    type: 'link',
    icon: '',
  },
  {
    state: 'gallery',
    name: 'Gallery',
    type: 'link',
    icon: ''
  },
  {
    state: 'forms',
    name: 'File Manager',
    type: 'sub',
    icon: '',
    badge: [{type: 'blue-grey', value: '0'}],
    children: [
      {state: 'upload', name: 'Upload File'},
      {state: 'upload', name: 'View Files'}
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Activities'
  },
  {
    type: 'divider'
  },
  {
    state: 'documentation',
    name: 'Knowledge Base',
    type: 'link',
    icon: ''
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
