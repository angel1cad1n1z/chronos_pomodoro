import { Container } from "../../components/container/container.tsx";
import { Logo } from "../../components/logo/logo.tsx";
import { Menu } from "../../components/menu/menu.tsx";

type MainTamplateProps = {
  children: React.ReactNode;
};

export function MainTamplate({ children: Children }: MainTamplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {Children}
    </>
  );
}
