import * as S from './styles';
import Logo from '../../molecules/Logo/index';
import Menu from '../../organisms/Menu'
import Button from '../../atoms/Button';

const Header = () => {
    return(
        <S.Box>
            <Logo/>
            <Menu/>
            <Button/>
        </S.Box>
    )
}

export default Header;