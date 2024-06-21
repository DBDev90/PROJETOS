import { useNavigate } from "react-router-dom"
import { Container, Icon } from "./styles"
import { Button } from "../../components/button"

export const NotFound = () => {
    const navigate = useNavigate()

    const handleOnClick = () => navigate('/')

    return (
        <Container>
            <Icon />

            <Button onClick={handleOnClick} size="md" width="160px">
                Voltar à página inicial
            </Button>
        </Container>
    )
}