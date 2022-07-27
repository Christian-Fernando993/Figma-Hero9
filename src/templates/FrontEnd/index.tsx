import Header from '../../organisms/Header';
import * as S from './styles'

type FronteEndProps = {
    children: React.ReactNode;
}

const FrontEnd = ({ children } : FronteEndProps) => {
    return(
        <S.Container>
            <Header/>            
            <main>
                {children}
            </main>
        </S.Container>
    )
}

export default FrontEnd;