import './App.css';
import Documents from "./Documents/Documents";
import Commentary from "./Commentary/Commentary";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { observer } from 'mobx-react';

import AddCommentary from "./Commentary/AddCommentary";
import {commentsStore} from "./stores/commentsStore";

const styles = {
    wrapper: {
        width: '800px',
        margin: '0 auto',
    },
    ul: {
      display: 'flex',
      justifyContent: 'center'
    },
    link: {
        listStyle: 'none',
        marginRight: '10px',
        backgroundColor: '#3f51b5',
        borderRadius: '15px',
        padding: "10px",
        boxShadow: "0 0 5px rgba(0,0,0,0.5)"
    },
    a: {
        textDecoration: 'none',
        color: 'white'
    }
}

const comments = commentsStore();

const App = observer(() => {
    return (
        <div style={styles.wrapper}>
            <Router>
                <div>
                    <nav>
                        <ul style={styles.ul}>
                            <li style={styles.link}>
                                <Link style={styles.a}  to="/documents">Документы</Link>
                            </li>
                            <li style={styles.link}>
                                <Link style={styles.a}  to="/commentary">Комментарии</Link>
                            </li>
                            <li style={styles.link}>
                                <Link style={styles.a}  to="/add-commentary">Добавить комментарий</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/documents" style={styles.wrapper}>
                            <Documents />
                        </Route>
                        <Route path="/commentary" style={styles.wrapper}>
                            <Commentary commentsStore={comments} />
                        </Route>
                        <Route path="/add-commentary" style={styles.wrapper}>
                            <AddCommentary commentsStore={comments} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
});

export default App;
