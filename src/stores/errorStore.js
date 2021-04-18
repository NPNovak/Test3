import { makeObservable, observable, action} from "mobx";

export function errorStoreFunc() {
    return makeObservable({
        error: true,
        setError(value) {
            this.error = value;
        }
    },{
        error: observable,
        setError: action,
    })
}
