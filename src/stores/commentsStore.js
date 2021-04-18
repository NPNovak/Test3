import { makeObservable, observable, action } from "mobx";

export function commentsStore() {
    return makeObservable({
        comments: [
            {id: 1, email: "test1@gmail.com", message: "Тест 1", country: "Россия"},
            {id: 2, email: "test2@gmail.com", message: "Тест 2", country: "Босния"},
            {id: 3, email: "test3@gmail.com", message: "Тест 3", country: "Герцоговина"},
        ],
        setComments(email,message,country) {
            this.comments.push({
                    id: this.comments.length + 1,
                    email: email,
                    message: message,
                    country: country
            })
        }
    },{
        comments: observable,
        setComments: action,
    })
}
