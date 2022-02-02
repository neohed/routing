import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <main>
                Home Page
            </main>
            <nav>
                <Link
                    to='/list'
                >
                    List View
                </Link>
            </nav>
        </div>
    );
};

export default Home;
