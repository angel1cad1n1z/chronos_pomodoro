// permite usar uma variável para pegar o valor das classes que estão dentro de heading.module.css
import styles from './heading.module.css';

export function Heading() {
    return <h1 className= {styles.heading}> Olá Mundo!</h1>
}