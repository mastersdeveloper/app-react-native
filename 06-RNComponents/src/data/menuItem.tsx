import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
    { name: 'Animation 101', icon: 'cube-outline', component: 'Animation101Screen' },
    { name: 'Animation 102', icon: 'albums-outline', component: 'Animation102Screen' },
    { name: 'Switch', icon: 'toggle-outline', component: 'SwitchScreen' },
    { name: 'Alert', icon: 'alert-circle-outline', component: 'AlertScreen' },
    { name: 'TextInputs', icon: 'document-text-outline', component: 'TextInputScreen' },
    { name: 'Pull to refresh', icon: 'refresh-outline', component: 'PullToRefreshScreen' },
    { name: 'Section List', icon: 'list-outline', component: 'CustomSectionListScreen' }
];