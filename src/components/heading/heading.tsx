// permite usar uma variável para pegar o valor das classes que estão dentro de heading.module.css
import styles from './heading.module.css';
import * as React from "react";

// Aqui você está dizendo:
// "Meu componente Heading recebe uma propriedade chamada children,
// e o conteúdo dela pode ser qualquer coisa que o React consiga renderizar."

// React.ReactNode é justamente o tipo apropriado para children na maioria dos componentes React.
interface HeadingProps {
    children: React.ReactNode;
}

// props: objeto com as propriedades recebidas pelo componente
// children: (filhos)conteúdo que será renderizado dentro do heading
export function Heading({children}: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>;
}