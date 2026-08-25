import styles from "./defaultImput.module.css";

type DefaultInputProps = {
  id: string;
  // a interrogação no final indica que a propriedade existe mas é opcional
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  labelText,
  type,
  // o rest permite que podemos acrescentar outras propriedades do input, além dessas descritas acima
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* poderiamos usar um if de uma linha -> condição ? verdadeiro : falso 
      mas como a condição não tem valor falso podemos utilizar o operador lógico &&:
      condição && <elemento /> / nesse caso, se tiver labelText mostra o valor dele na tela */}

      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        className={styles.defaultInput}
        type={type}
        id={id}
        placeholder="Name your task"
        {...rest}
      />
    </>
  );
}
