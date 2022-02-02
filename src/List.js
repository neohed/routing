import React from 'react';
import {Link} from "react-router-dom";

const data = [
    {
        name: 'First',
        optional: 'Additional info'
    }, {
        name: 'Second',
    },
]

const List = () => {
    return (
        <div>
            <ul>
                {
                    data.map(({name, optional}) => <li
                        key={name}
                    >
                        <Link
                            to={`/edit/${name}`}
                        >
                            {
                                name
                            }
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default List;
