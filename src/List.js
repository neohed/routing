import React from 'react';
import {Link} from "react-router-dom";

const data = [
    {
        name: 1,
        optional: 'Additional info'
    }, {
        name: 2,
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
                            to={`/edit/${name}${optional === undefined ? '' : '/' + optional}`}
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
