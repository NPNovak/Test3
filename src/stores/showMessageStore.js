import { makeObservable, observable, action} from "mobx";

export function showMessageStoreFunc() {
    return makeObservable({
        showMessage: '',
        setShowMessage(value) {
            this.showMessage = value;
        },
    },{
        showMessage: observable,
        setShowMessage: action,
    })
}
