import { Container } from "./components/container/container.tsx";
import { Logo } from "./components/logo/logo";
import { Menu } from "./components/menu/menu.tsx";
import { CountDown } from "./components/countDown/countDown.tsx";
import { DefaultInput } from "./components/defaultInput/defaltInput.tsx";

import "./styles/theme.css";
import "./styles/global.css";
import { Cycles } from "./components/cycles/cycles";

export function App() {
  return (
    // jsx aceita apenas um elemento pai. No exemplo abaixo não poderiamos ter o h1 e o p sem que estivesse dentro de uma div ou de uma tag vazia <></>
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput labelText="Task" id="meuInput" type="text" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button type="submit">Add Task</button>
          </div>
        </form>
      </Container>
    </>
  );
}
