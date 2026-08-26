import { Container } from "./components/container/container.tsx";
import { Logo } from "./components/logo/logo";
import { Menu } from "./components/menu/menu.tsx";
import { CountDown } from "./components/countDown/countDown.tsx";
import { DefaultInput } from "./components/defaultInput/defaltInput.tsx";
import { Cycles } from "./components/cycles/cycles";
import { DefaultButton } from "./components/defaultButton/defaltButton";
import { Footer } from "./components/footer/footer.tsx";

import { PlayCircleIcon } from "lucide-react";

import "./styles/theme.css";
import "./styles/global.css";

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
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="red" />
          </div>

          <div className="formRow">
            <Footer />
          </div>
        </form>
      </Container>
    </>
  );
}
