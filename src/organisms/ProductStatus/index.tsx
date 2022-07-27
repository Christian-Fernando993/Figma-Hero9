import * as S from './styles';
import CardActivity from '../../molecules/CardActivity';
import ImageBody from '../../assets/image-body.png';
import CardChart from '../../molecules/CardChart';

const ProductStatus = () => {
    return(
        <S.Container>
            <CardActivity/>
            <CardChart/>
            <img src={ImageBody} alt="Uma mulher fazendo uma pesquisa" />
        </S.Container>
    );
}

export default ProductStatus;