import { observable, action } from 'mobx';

class MobxStore {
    @observable data = [];

    @action setData(newData) {
        this.data = newData;
    }
}

const store = new MobxStore();
export default store;