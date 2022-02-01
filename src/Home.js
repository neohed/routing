import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link
                        to='/list'
                    >
                        List View
                    </Link>
                </li>
                <li>
                    <Link
                        to='/single/101'
                    >
                        Single
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
