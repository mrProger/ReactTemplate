import { Button } from "./components/Button";
import { ButtonController } from "./controller/Button";

const ControllerButton = ButtonController(5)

export const Home = () => {
    return (
        <>
            <Button ControllerButton={ControllerButton} data={0} />
        </>
    );
}
