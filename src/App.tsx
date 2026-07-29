import {Heading} from "./components/heading.tsx";

import './styles/theme.css';
import './styles/global.css';

export  function  App() {

    return (
        // jsx aceita apenas um elemento pai. No exemplo abaixo não poderiamos ter o h1 e o p sem que estivesse dentro de uma div ou de uma tag vazia <></>
        <div>
           <Heading/>
            <p>qualquer coisa</p>
        </div>
    )
}