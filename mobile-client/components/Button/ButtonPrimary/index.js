import { Button, Text } from "./style";

export default function ButtonPrimary({ children, onPress }) {
    return (
        <Button onPress={onPress}>
            <Text>{children}</Text>
        </Button>
    );
}


