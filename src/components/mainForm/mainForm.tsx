import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles/cycles";
import { DefaultButton } from "../defaultButton/defaltButton";
import { DefaultInput } from "../defaultInput/defaltInput";
import { Footer } from "../footer/footer";

export function MainForm() {
  return (
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
  );
}
