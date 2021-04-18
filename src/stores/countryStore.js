import { makeObservable, observable, action} from "mobx";

export function countryStoreFunc() {
    return makeObservable({
        country: 'Russia',
        setCountry(value) {
            this.country = value;
        },
        handleCountryChange(event) {
            this.setCountry(event.target.value);
        }
    },{
        country: observable,
        setCountry: action,
        handleCountryChange: action
    })
}
