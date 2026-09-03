import { Container } from "../../components/container/container.tsx";
import { CountDown } from "../../components/countDown/countDown.tsx";
import { MainForm } from "../../components/mainForm/mainForm.tsx";
import { MainTamplate } from "../../Templates/mainTemplate/mainTemplate.tsx";

export function Home() {
  return (
    <MainTamplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTamplate>
  );
}
