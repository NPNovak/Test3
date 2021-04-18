import { makeObservable, observable, action} from "mobx";

export function messageStoreFunc() {
    return makeObservable({
        message: '',
        setMessage(value) {
            this.message = value;
        },
        handleMessageChange(event) {
            this.setMessage(event.target.value);
        }
    },{
        message: observable,
        setMessage: action,
        handleMessageChange: action,
    })
}
