import init from '../domain/DashboardApp';

export class Dashboard {
    static templateUrl = '/partials/logmanager.html';
    constructor() {
        init();
    }
}
