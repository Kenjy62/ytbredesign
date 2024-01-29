import { MenuProvider } from "./menu";

export default function ProviderTree({ children }) {
  return <MenuProvider>{children}</MenuProvider>;
}
