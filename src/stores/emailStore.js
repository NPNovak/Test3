import { makeObservable, observable, action} from "mobx";

export function emailStoreFunc(errorsStore) {
    return makeObservable({
        email: '',
        setEmail(value) {
            this.email = value;
        },
        handleEmailChange(event) {
            if(event.target.value.match(/.+@.+\.[A-Za-z]+$/)){
                errorsStore.setError('');
            }else{
                errorsStore.setError('Неправильно заполнен E-mail');
            }
            this.setEmail(event.target.value);
            console.log(errorsStore.error);
        }
    },{
        email: observable,
        setEmail: action,
        handleEmailChange: action,
    })
}
